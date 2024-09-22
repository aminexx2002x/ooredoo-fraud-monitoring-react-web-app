import { Helmet } from 'react-helmet-async';

import { DailyFollowopnView } from 'src/sections/daily_follow_opn'

// ----------------------------------------------------------------------

export default function DailyfollowopnPage() {
  return (
    <>
      <Helmet>
        <title>Daily Follow Up OPN</title>
      </Helmet>
      
      <DailyFollowopnView />
    </>
  );
}
