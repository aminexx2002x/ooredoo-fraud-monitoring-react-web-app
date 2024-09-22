import { Helmet } from 'react-helmet-async';

import { InfoFraudeurView } from 'src/sections/info_fraudeur'

// ----------------------------------------------------------------------

export default function InfoFraudeurPage() {
  return (
    <>
      <Helmet>
        <title>Info Fraudeur</title>
      </Helmet>
      
      <InfoFraudeurView/>
    </>
  );
}
