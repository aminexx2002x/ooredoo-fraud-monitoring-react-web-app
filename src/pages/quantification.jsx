import { Helmet } from 'react-helmet-async';

import { QuantificationView } from 'src/sections/quantification'

// ----------------------------------------------------------------------

export default function QuantificationPage() {
  return (
    <>
      <Helmet>
        <title>Quantification</title>
      </Helmet>
      
      <QuantificationView />
    </>
  );
}
