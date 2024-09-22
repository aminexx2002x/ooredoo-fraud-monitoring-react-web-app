import { Helmet } from 'react-helmet-async';

import { SuiviMsisdnView } from 'src/sections/suivi_msisdn'

// ----------------------------------------------------------------------

export default function SuiviMsisdnPage() {
  return (
    <>
      <Helmet>
        <title>Track Flagged MSISDN</title>
      </Helmet>
      
      <SuiviMsisdnView />
    </>
  );
}
