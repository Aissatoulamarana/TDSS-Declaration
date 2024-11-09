'use client';

import Grid from '@mui/material/Unstable_Grid2';

import { _appInvoices } from 'src/_mock';
import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import { BankingOverview } from '../banking-overview';
import { AnalyticsNewInvoice } from '../analytics-new-invoice';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { AnalyticsCurrentDownload } from '../analytics-current-download';

// ----------------------------------------------------------------------

export function AnalyticsFactureView() {
  return (
    <DashboardContent maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={4}>
          <AnalyticsWidgetSummary
            title="Montant Total Facturé"
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

        <Grid xs={12} sm={6} md={4}>
          <AnalyticsWidgetSummary
            title="Factures Payées"
            percent={-0.1}
            total={1352831}
            color="secondary"
            icon={
              <img alt="icon" src={`${CONFIG.assetsDir}/assets/icons/glass/ic-glass-users.svg`} />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 47, 40, 62, 73, 30, 23, 54],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <AnalyticsWidgetSummary
            title="En Attente de paiement"
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
        <Grid xs={12} md={6} lg={12}>
          <BankingOverview />
        </Grid>
        <Grid xs={12} md={6} lg={12}>
          <AnalyticsWebsiteVisits
            title="Statistiques factures "
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

        <Grid xs={12} lg={6}>
          <AnalyticsNewInvoice
            title="Dernières factures"
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
        <Grid xs={12} md={4} lg={6}>
          <AnalyticsCurrentDownload
            title=" Facture Par Categorie"
            chart={{
              series: [
                { label: 'Nouvelles', value: 3500 },
                { label: 'Renouvellement', value: 2500 },
                { label: 'Migration', value: 1500 },
              ],
            }}
          />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
