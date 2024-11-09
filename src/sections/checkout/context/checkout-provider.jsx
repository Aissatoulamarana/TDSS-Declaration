'use client';

import { useMemo, Suspense, useEffect, useCallback, createContext } from 'react';

import { paths } from 'src/routes/paths';
import { useRouter, useSearchParams } from 'src/routes/hooks';

import { getStorage, useLocalStorage } from 'src/hooks/use-local-storage';

import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

export const CheckoutContext = createContext(undefined);
export const CheckoutConsumer = CheckoutContext.Consumer;

const STORAGE_KEY = 'app-checkout';

const initialState = {
  items: [],
  subtotal: 0,
  total: 0,
  discount: 0,
  shipping: 0,
  billing: null,
  totalItems: 0,
};

// ----------------------------------------------------------------------

export function CheckoutProvider({ children }) {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Container>{children}</Container>
    </Suspense>
  );
}

// ----------------------------------------------------------------------

function Container({ children }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeStep = Number(searchParams.get('step'));

  const { state, setState, setField, canReset, resetState } = useLocalStorage(
    STORAGE_KEY,
    initialState
  );

  const updateTotalField = useCallback(() => {
    const totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = state.items.reduce((total, item) => total + item.quantity * item.price, 0);

    setField('subtotal', subtotal);
    setField('totalItems', totalItems);
    setField('total', subtotal - state.discount + state.shipping);
  }, [setField, state.items, state.discount, state.shipping]);

  useEffect(() => {
    const restoredValue = getStorage(STORAGE_KEY);
    if (restoredValue) {
      updateTotalField();
    }
  }, [updateTotalField]);

  const initialStep = useCallback(() => {
    if (!activeStep) {
      router.push(createUrl('go', 0));
    }
  }, [activeStep, router]);

  const onBackStep = useCallback(() => {
    router.push(createUrl('back', activeStep));
  }, [activeStep, router]);

  const onNextStep = useCallback(() => {
    router.push(createUrl('next', activeStep));
  }, [activeStep, router]);

  const onGotoStep = useCallback(
    (step) => {
      router.push(createUrl('go', step));
    },
    [router]
  );

  const onAddToCart = useCallback(
    (newItem) => {
      const updatedItems = state.items.map((item) =>
        item.id === newItem.id
          ? {
              ...item,
              colors: Array.from(new Set([...item.colors, ...newItem.colors])),
              quantity: item.quantity + 1,
            }
          : item
      );

      if (!updatedItems.some((item) => item.id === newItem.id)) {
        updatedItems.push(newItem);
      }

      setField('items', updatedItems);
    },
    [setField, state.items]
  );

  const onDeleteCart = useCallback(
    (itemId) => {
      setField(
        'items',
        state.items.filter((item) => item.id !== itemId)
      );
    },
    [setField, state.items]
  );

  const onIncreaseQuantity = useCallback(
    (itemId) => {
      setField(
        'items',
        state.items.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    },
    [setField, state.items]
  );

  const onDecreaseQuantity = useCallback(
    (itemId) => {
      setField(
        'items',
        state.items.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    },
    [setField, state.items]
  );

  const onCreateBilling = useCallback(
    (address) => {
      setField('billing', address);
      onNextStep();
    },
    [onNextStep, setField]
  );

  const onApplyDiscount = useCallback(
    (discount) => {
      setField('discount', discount);
    },
    [setField]
  );

  const onApplyShipping = useCallback(
    (shipping) => {
      setField('shipping', shipping);
    },
    [setField]
  );

  const onReset = useCallback(() => {
    resetState();
    router.push(paths.product.root);
  }, [resetState, router]);

  const memoizedValue = useMemo(
    () => ({
      ...state,
      canReset,
      onReset,
      onUpdate: setState,
      onUpdateField: setField,
      onAddToCart,
      onDeleteCart,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onCreateBilling,
      onApplyDiscount,
      onApplyShipping,
      activeStep,
      initialStep,
      onBackStep,
      onNextStep,
      onGotoStep,
    }),
    [
      state,
      onReset,
      canReset,
      setState,
      setField,
      activeStep,
      initialStep,
      onBackStep,
      onNextStep,
      onGotoStep,
      onAddToCart,
      onDeleteCart,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onCreateBilling,
      onApplyDiscount,
      onApplyShipping,
    ]
  );

  return <CheckoutContext.Provider value={memoizedValue}>{children}</CheckoutContext.Provider>;
}

// ----------------------------------------------------------------------

function createUrl(type, activeStep) {
  const step = { back: activeStep - 1, next: activeStep + 1, go: activeStep }[type];
  return `${paths.product.checkout}?step=${step}`;
}
