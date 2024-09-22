import { Helmet } from 'react-helmet-async';

import { MasquageView } from 'src/sections/masquage'

// ----------------------------------------------------------------------

export default function MasquagePage() {
  return (
    <>
      <Helmet>
        <title>Masquage</title>
      </Helmet>
      
      <MasquageView/>
    </>
  );
}
