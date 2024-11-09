'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';

import { DashboardContent } from 'src/layouts/dashboard';

import { PaiementListView } from '../listes-paiements';

// ----------------------------------------------------------------------

export function OverviewPaiementView() {
  const theme = useTheme();
  return (
    <DashboardContent maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} md={7} lg={12}>
          <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
            <PaiementListView />

            {/* <BankingBalanceStatistics
              title="Balance statistics"
              subheader="Statistics on balance over time"
              chart={{
                series: [
                  {
                    name: 'Weekly',
                    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                    data: [
                      { name: 'Income', data: [24, 41, 35, 151, 49] },
                      { name: 'Savings', data: [24, 56, 77, 88, 99] },
                      { name: 'Investment', data: [40, 34, 77, 88, 99] },
                    ],
                  },
                  {
                    name: 'Monthly',
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    data: [
                      { name: 'Income', data: [83, 112, 119, 88, 103, 112, 114, 108, 93] },
                      { name: 'Savings', data: [46, 46, 43, 58, 40, 59, 54, 42, 51] },
                      { name: 'Investment', data: [25, 40, 38, 35, 20, 32, 27, 40, 21] },
                    ],
                  },
                  {
                    name: 'Yearly',
                    categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
                    data: [
                      { name: 'Income', data: [76, 42, 29, 41, 27, 96] },
                      { name: 'Savings', data: [46, 44, 24, 43, 44, 43] },
                      { name: 'Investment', data: [23, 22, 37, 38, 32, 25] },
                    ],
                  },
                ],
              }}
            />

            <BankingExpensesCategories
              title="Expenses categories"
              chart={{
                series: [
                  { label: 'Entertainment', value: 22 },
                  { label: 'Fuel', value: 18 },
                  { label: 'Fast food', value: 16 },
                  { label: 'Cafe', value: 17 },
                  { label: 'Сonnection', value: 14 },
                  { label: 'Healthcare', value: 22 },
                  { label: 'Fitness', value: 10 },
                  { label: 'Supermarket', value: 21 },
                ],
                icons: [
                  <Iconify icon="streamline:dices-entertainment-gaming-dices-solid" />,
                  <Iconify icon="maki:fuel" />,
                  <Iconify icon="ion:fast-food" />,
                  <Iconify icon="maki:cafe" />,
                  <Iconify icon="basil:mobile-phone-outline" />,
                  <Iconify icon="solar:medical-kit-bold" />,
                  <Iconify icon="ic:round-fitness-center" />,
                  <Iconify icon="solar:cart-3-bold" />,
                ],
              }}
            /> 
            <Card sx={{ mb: { xs: 3, md: 5 } }}>
              <Scrollbar sx={{ minHeight: 108 }}>
                <Stack
                  direction="row"
                  divider={
                    <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />
                  }
                  sx={{ py: 2 }}
                >
                  <BankingAnalytic
                    title="Total"
                    icon="solar:bill-list-bold-duotone"
                    color={theme.vars.palette.info.main}
                  />
                  <BankingAnalytic
                    title="Payées"
                    icon="solar:file-check-bold-duotone"
                    color={theme.vars.palette.success.main}
                  />
                  <BankingAnalytic
                    title="En attente"
                    icon="solar:sort-by-time-bold-duotone"
                    color={theme.vars.palette.warning.main}
                  />
                </Stack>
              </Scrollbar>
            </Card>
            <BankingTableToolbar />

            <BankingRecentTransitions
              title="Factures"
              tableData={_bankingRecentTransitions}
              headLabel={[
                { id: 'description', label: 'Numéro de la facture' },
                { id: 'date', label: 'Numero de la Déclaration' },
                { id: 'amount', label: 'Montant' },
                { id: 'status', label: 'Status' },
                { id: '' },
              ]}
            />
            */}
          </Box>
        </Grid>

        {/* <Grid xs={12} md={5} lg={4}>
          <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
            <BankingCurrentBalance list={_bankingCreditCard} />

            <BankingQuickTransfer title="Quick transfer" list={_bankingContacts} />

            <BankingContacts
              title="Contacts"
              subheader="You have 122 contacts"
              list={_bankingContacts.slice(-5)}
            />

            <BankingInviteFriends
              price="$50"
              title={`Invite friends \n and earn`}
              description="Praesent egestas tristique nibh. Duis lobortis massa imperdiet quam."
              imgUrl={`${CONFIG.assetsDir}/assets/illustrations/illustration-receipt.webp`}
            />
          </Box>
        </Grid> */}
      </Grid>
    </DashboardContent>
  );
}
