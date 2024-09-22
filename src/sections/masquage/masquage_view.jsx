import React from 'react';

import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel'; 
import FormControl from '@mui/material/FormControl';

function MasquagePage() {


  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h3">Masquage Fraud type</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <TextField
          label="Recherche MSISDN(s)"
          variant="outlined"
          fullWidth
          sx={{ mr: 2, '& .MuiOutlinedInput-root': { borderColor: '#ED1C24' } }} // Add margin to the right
          InputProps={{ sx: { borderColor: '#ED1C24' } }}
        />

        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="searchType" sx={{ color: '#ED1C24' }}>Fraud Type :</InputLabel>
          <Select native id="searchType" variant="outlined" fullWidth sx={{ '& .MuiOutlinedInput-root': { borderColor: '#ED1C24' } }}>
            <option value="option1">SB</option>
            <option value="option2">SS</option>
            <option value="option1">HU</option>
            <option value="option2">WG</option>
            <option value="option1">FP</option>
            <option value="option2">PRV</option>
            <option value="option2">SPF</option>
            <option value="option2">ST</option>
          </Select>
        </FormControl>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-start" mb={5}>
        <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white', mr: 2 }}>
          Mise à jour
        </Button>
        <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white' }}>
          Cancel
        </Button>
      </Stack>
    </Container>
  );
}

export default MasquagePage;
