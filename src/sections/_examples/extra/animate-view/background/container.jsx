import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { getVariant } from '../get-variant';
import { _mock } from '../../../../../_mock';


// ----------------------------------------------------------------------

export function ContainerView({ selectVariant, sx, ...other }) {
  const isKenburns = selectVariant.includes('kenburns');

  return (
    <Stack
      sx={{
        flex: '1 1 auto',
        overflow: 'hidden',
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >
      {isKenburns ? (
        <Box
          component={m.img}
          src={_mock.image.cover(7)}
          {...getVariant(selectVariant)}
          sx={{ width: 1, height: 1, objectFit: 'cover' }}
        />
      ) : (
        <Box component={m.div} {...getVariant(selectVariant)} sx={{ height: 1, width: 1 }} />
      )}
    </Stack>
  );
}
