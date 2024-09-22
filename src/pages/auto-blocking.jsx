import { Helmet } from 'react-helmet-async';

import { AutoBlockingView } from 'src/sections/auto_blocking'

// ----------------------------------------------------------------------

export default function AutoBlockingPage() {
  return (
    <>
      <Helmet>
        <title>Auto Blocking</title>
      </Helmet>
      
      <AutoBlockingView />
    </>
  );
}
