import { Helmet } from 'react-helmet-async';

import { InfoMsisdnView } from 'src/sections/info_msisdn'

// ----------------------------------------------------------------------

export default function InfoMsisdnPage() {
  return (
    <>
      <Helmet>
        <title>Info MSISDN</title>
      </Helmet>
      
      <InfoMsisdnView />
    </>
  );
}
