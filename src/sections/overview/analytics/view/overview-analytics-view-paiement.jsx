'use client';

import Grid from '@mui/material/Unstable_Grid2';

import { _appInvoices } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import { GoogleMaps } from '../carte-guinea';
import { AnalyticsNewInvoice } from '../analytics-new-invoice';
import { AnalyticsCurrentVisits } from '../analytics-current-visits';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { AnalyticsCurrentDownload } from '../analytics-current-download';

// ----------------------------------------------------------------------

export function AnalyticPaiementView() {
  return (
    <DashboardContent maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={6}>
          <AnalyticsWidgetSummary
            title="Montant Total Payé"
            percent={2.6}
            total={714000}
            icon={
              <img alt="icon" src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-people.svg`} />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [22, 8, 35, 50, 82, 84, 77, 12],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={6}>
          <AnalyticsWidgetSummary
            title="En Attente d'encaissement"
            percent={2.8}
            total={1723315}
            color="warning"
            icon={
              <img alt="icon" src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-buy.svg`} />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [40, 70, 50, 28, 70, 75, 7, 64],
            }}
          />
        </Grid>
        <Grid xs={12} md={8} lg={12}>
          <GoogleMaps />
        </Grid>
        <Grid xs={12} md={4} lg={6}>
          <AnalyticsCurrentVisits
            title="Montant collectés par banque"
            chart={{
              series: [
                { label: 'Banque A', value: 3500 },
                { label: 'Banque B', value: 2500 },
                { label: 'Banque C', value: 1500 },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={4} lg={6}>
          <AnalyticsCurrentDownload
            title="Montant Collectés par type de déclaration"
            chart={{
              series: [
                { label: 'Nouvelles', value: 3500 },
                { label: 'Renouvellement', value: 2500 },
                { label: 'Migration', value: 1500 },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={6} lg={12}>
          <AnalyticsWebsiteVisits
            title="Statistiques Paiements "
            subheader="(+43%) than last year"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              series: [
                { name: 'Total', data: [43, 33, 22, 37, 67, 68, 37, 24, 55] },
                { name: 'Payées', data: [51, 70, 47, 67, 40, 37, 24, 70, 24] },
                { name: 'En attente', data: [51, 70, 47, 67, 40, 37, 24, 70, 24] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} lg={12}>
          <AnalyticsNewInvoice
            title="Derniers Paiements"
            tableData={_appInvoices}
            headLabel={[
              { id: 'id', label: 'Numero de la facture ' },
              { id: 'category', label: 'Numéro de la déclaration' },
              { id: 'category', label: 'Montant' },
              { id: 'category', label: 'Statut' },
              { id: '' },
            ]}
          />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
