import { Helmet } from 'react-helmet-async';

import { FlaggerMsisdnView } from 'src/sections/daily_follow_opn/flagger_msisdn'

// ----------------------------------------------------------------------

export default function FlaggerMsisdnPage() {
  return (
    <>
      <Helmet>
        <title>Flagger MSISDN</title>
      </Helmet>
      
      <FlaggerMsisdnView />
    </>
  );
}
