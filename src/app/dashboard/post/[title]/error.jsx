'use client';

import Button from '@mui/material/Button';

import { paths } from '../../../../routes/paths';
import { Iconify } from '../../../../components/iconify';
import { RouterLink } from '../../../../routes/components';
import { DashboardContent } from '../../../../layouts/dashboard';
import { EmptyContent } from '../../../../components/empty-content';

// ----------------------------------------------------------------------

export default function Error({ error, reset }) {
  return (
    <DashboardContent maxWidth={false}>
      <EmptyContent
        filled
        title="Post not found!"
        action={
          <Button
            component={RouterLink}
            href={paths.dashboard.post.root}
            startIcon={<Iconify width={16} icon="eva:arrow-ios-back-fill" />}
            sx={{ mt: 3 }}
          >
            Back to list
          </Button>
        }
        sx={{ py: 10, height: 'auto', flexGrow: 'unset' }}
      />
    </DashboardContent>
  );
}
