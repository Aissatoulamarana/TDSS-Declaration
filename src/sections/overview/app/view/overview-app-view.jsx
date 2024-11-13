'use client';

import { Grid2 } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { DashboardContent } from 'src/layouts/dashboard';
import { _appAuthors, _appRelated, _appInvoices, _appInstalled } from 'src/_mock';

import { useMockedUser } from 'src/auth/hooks';

import { AppNewInvoice } from '../app-new-invoice';
import { AppTopAuthors } from '../app-top-authors';
import { AppTopRelated } from '../app-top-related';
import { AppAreaInstalled } from '../app-area-installed';
import { AppWidgetSummary } from '../app-widget-summary';
import { AppCurrentDownload } from '../app-current-download';
import { AppTopInstalledCountries } from '../app-top-installed-countries';

// ----------------------------------------------------------------------

export function OverviewAppView() {
  const { user } = useMockedUser();

  const theme = useTheme();

  return (
    <DashboardContent maxWidth="xl">
      <Grid2 container spacing={3}>
        {/*  <Grid2 xs={12} md={8}>
            <AppWelcome
            title={`Welcome back 👋 \n ${user?.displayName}`}
            description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
            img={<SeoIllustration hideBackground />}
            action={
              <Button variant="contained" color="primary">
                Go now
              </Button>
            }
          />
          
        </Grid2>
         
        <Grid2 xs={12} md={4}>
          <AppFeatured list={_appFeatured} />
        </Grid2>
 */}
        <Grid2 size={{ xs: 6, md: 3 }}>
          <AppWidgetSummary
            title="Nombre Employés déclarés"
            percent={2.6}
            total={18765}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [15, 18, 12, 51, 68, 11, 39, 37],
            }}
          />
        </Grid2>

        <Grid2 size={{ xs: 6, md: 3 }}>
          <AppWidgetSummary
            title="Total Paiement"
            percent={0.2}
            total={4876}
            chart={{
              colors: [theme.vars.palette.info.main],
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [20, 41, 63, 33, 28, 35, 50, 46],
            }}
          />
        </Grid2>
        <Grid2 size={{ xs: 6, md: 3 }}>
          <AppWidgetSummary
            title="Fatures en attente de paiement"
            percent={2.6}
            total={18765}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [15, 18, 12, 51, 68, 11, 39, 37],
            }}
          />
        </Grid2>

        <Grid2 size={{ xs: 6, md: 3 }}>
          <AppWidgetSummary
            title="Total Factures"
            percent={-0.1}
            total={678}
            chart={{
              colors: [theme.vars.palette.error.main],
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [18, 19, 31, 8, 16, 37, 12, 33],
            }}
          />
        </Grid2>

        <Grid2 size={{ xs: 6, md: 6 }}>
          <AppCurrentDownload
            title="Catégorie de déclaration"
            subheader=""
            chart={{
              series: [
                { label: 'Permis A', value: 12244 },
                { label: 'Permis B', value: 53345 },
                { label: 'Permis C', value: 44313 },
              ],
            }}
          />
        </Grid2>

        <Grid2 size={{ xs: 6, md: 6 }}>
          <AppAreaInstalled
            title="Déclarations"
            subheader="(+43%) Depuis l'année dernière"
            chart={{
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              series: [
                {
                  name: '2022',
                  data: [
                    { name: 'Permis A', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                    { name: 'Permis B', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                    { name: 'Permis C', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                  ],
                },
                {
                  name: '2023',
                  data: [
                    { name: 'Permis A', data: [6, 18, 14, 9, 20, 6, 22, 19, 8, 22, 8, 17] },
                    { name: 'Permis B', data: [6, 18, 14, 9, 20, 6, 22, 19, 8, 22, 8, 17] },
                    { name: 'Permis C', data: [6, 18, 14, 9, 20, 6, 22, 19, 8, 22, 8, 17] },
                  ],
                },
                {
                  name: '2024',
                  data: [
                    { name: 'Permis A', data: [6, 20, 15, 18, 7, 24, 6, 10, 12, 17, 18, 10] },
                    { name: 'Permis B', data: [6, 20, 15, 18, 7, 24, 6, 10, 12, 17, 18, 10] },
                    { name: 'Permis C', data: [6, 20, 15, 18, 7, 24, 6, 10, 12, 17, 18, 10] },
                  ],
                },
              ],
            }}
          />
        </Grid2>

        <Grid2 size={{ xs: 6, md: 8 }}>
          <AppNewInvoice
            title="Dernières Déclarations"
            tableData={_appInvoices}
            headLabel={[
              { id: 'id', label: 'Déclaration ' },
              { id: 'category', label: 'Total Employés' },
              { id: 'price', label: 'Montant' },
              { id: 'status', label: 'Status' },
              { id: '' },
            ]}
          />
        </Grid2>

        <Grid2 size={{ xs: 6, md: 4 }}>
          <AppTopRelated title="Entreprises" list={_appRelated} />
        </Grid2>

        <Grid2 size={{ xs: 6, md: 6 }}>
          <AppTopInstalledCountries title="Pays" list={_appInstalled} />
        </Grid2>

        <Grid2 size={{ xs: 6, md: 6 }}>
          <AppTopAuthors title="Top Utilisateurs" list={_appAuthors} />
        </Grid2>

        
      </Grid2>
    </DashboardContent>
  );
}
