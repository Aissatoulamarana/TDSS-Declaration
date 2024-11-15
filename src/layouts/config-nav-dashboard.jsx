import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.assetsDir}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Overview
   */
  {
    subheader: "Vue d'ensemble",
    items: [
      { title: 'Dashboard', path: paths.dashboard.root, icon: ICONS.dashboard },
      {
        title: 'Statistiques',
        path: paths.dashboard.two,
        icon: ICONS.analytics,
        children: [
          { title: 'Declaration', path: paths.dashboard.group.root },
          { title: 'Facture', path: paths.dashboard.group.five },
          { title: 'Paiement', path: paths.dashboard.group.six },
        ],
      },
      {
        title: 'Factures',
        path: paths.dashboard.two,
        icon: ICONS.ecommerce,
        children: [{ title: 'Listes des factures', path: paths.dashboard.group.root }],
      },
      {
        title: 'Paiements',
        path: paths.dashboard.two,
        icon: ICONS.ecommerce,
        children: [{ title: 'Listes Des Paiements', path: paths.dashboard.group.root }],
      },
      {
        title: 'Déclarations',
        path: paths.dashboard.two,
        icon: ICONS.ecommerce,
        children: [
          { title: 'Nouvelle Declaration', path: paths.dashboard.group.root },
          { title: 'Listes ', path: paths.dashboard.group.five },
        ],
      },
      { title: 'Penalité', path: paths.dashboard.three, icon: ICONS.analytics },
    ],
  },
  /**
   * Management
   */
  {
    subheader: 'Administration',
    items: [
      {
        title: 'Utilisateurs',
        path: paths.dashboard.group.root,
        icon: ICONS.user,
        children: [
          { title: 'Listes ', path: paths.dashboard.group.root },
          { title: 'Nouveau', path: paths.dashboard.group.five },
        ],
      },
      {
        title: 'Fonction',
        path: paths.dashboard.group.root,
        icon: ICONS.user,
        children: [
          { title: 'Listes ', path: paths.dashboard.group.root },
          { title: 'Nouvelle', path: paths.dashboard.group.five },
        ],
      },
      {
        title: 'Entreprises',
        path: paths.dashboard.group.root,
        icon: ICONS.user,
        children: [
          { title: 'Listes ', path: paths.dashboard.group.root },
          { title: 'Nouvelle', path: paths.dashboard.group.five },
        ],
      },
    ],
  },
];
