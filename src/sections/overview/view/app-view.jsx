import * as React from 'react'; // Import React
import Grid from '@mui/material/Grid'; // Correct import for Grid
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppConversionRates from '../app-conversion-rates';

export default function AppView() {
  
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Bonjour Amine ,Voila des Statistiques de Fraud !
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Détéction Total de SB"
            total={710}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/SB_ICON.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Détéction Total de SS"
            total={200}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/SS_ICON.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Détéction Total de PRV"
            total={452}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/PRV_ICON.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Détéction Total de FP"
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/FP_ICON.png" />}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Telecom Fraud Detection"
            subheader="Fraud Types Detection Over Time"
            chart={{
              labels: [
                '01/01/2023', '02/01/2023', '03/01/2023', '04/01/2023', '05/01/2023',
                '06/01/2023', '07/01/2023', '08/01/2023', '09/01/2023', '10/01/2023',
                '11/01/2023'
              ],
              series: [
                {
                  name: 'SB',
                  type: 'area',
                  fill: 'gradient',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30], // Sample data for SB fraud type
                },
                {
                  name: 'SS',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43], // Sample data for SS fraud type
                },
                {
                  name: 'WG',
                  type: 'area',
                  fill: 'gradient',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39], // Sample data for PRV fraud type
                },
                {
                  name: 'FP',
                  type: 'area',
                  fill: 'gradient',
                  data: [10, 10, 36, 30, 30, 20, 14, 80, 47, 11, 22], // Sample data for PRV fraud type
                },
              ],
            }}
          />
        </Grid>

        <Grid item xs={12}md={6} lg={4}>
          <AppCurrentVisits
            title="Détection Par source"
            chart={{
              series: [
                { label: 'ARAXXE', value: 200 },
                { label: 'BYPASS', value: 360 },
                { label: 'MOBIUS', value: 1140 },
                { label: 'InvInterne', value: 82 },
                { label: 'PARTNER', value: 20 },
                { label: 'FMS', value: 43 },
                { label: 'SIGOS', value: 47 },
                { label: 'SR CRM', value: 420 },
                { label: 'ASD MOBIUS', value: 174 },
                { label: 'RAPPORT', value: 36 },
                { label: 'USSD', value: 74 },
                { label: 'TCG MOBIUS', value: 44 },
                { label: 'PINGOCEAN', value: 99 },
                { label: 'LATRO', value: 124 },
              ],
            }}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Fraud Detection Rates by Wilaya (Province)"
            subheader="(+11%) than last year"
            chart={{
              series: [
                { label: 'Algiers', value: 20.5 }, // Fraud detection rate for Algiers
                { label: 'Oran', value: 18.9 }, // Fraud detection rate for Oran
                { label: 'Constantine', value: 22.2 }, // Fraud detection rate for Constantine
                { label: 'Annaba', value: 19.8 }, // Fraud detection rate for Annaba
                { label: 'Setif', value: 21.6 }, // Fraud detection rate for Setif
                // Add more wilayas as needed
              ],
            }}
          />
        </Grid>

        <Grid item xs={12}md={6} lg={4}>
          <AppCurrentVisits
            title="Top 10 Wilayas :"
            chart={{
              series: [
                { label: 'Algiers', value: 200 },
                { label: 'Boumerdes', value: 360 },
                { label: 'Blida', value: 1140 },
                { label: 'Oran', value: 82 },
                { label: 'Constantine', value: 20 },
                { label: 'Annaba', value: 43 },
                { label: 'Batna', value: 47 },
                { label: 'Sétif', value: 420 },
                { label: 'Maascara', value: 174 },
                { label: 'Tizi ouzou', value: 36 },
              ],
            }}
          />
        </Grid>
     </Grid>
    </Container>
  );
}
