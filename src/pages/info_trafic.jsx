import { Helmet } from 'react-helmet-async';

import { InfoTraficView } from 'src/sections/info_trafic'

// ----------------------------------------------------------------------

export default function InfoTraficPage() {
  return (
    <>
      <Helmet>
        <title>Info Trafic</title>
      </Helmet>
      
      <InfoTraficView />
    </>
  );
}
