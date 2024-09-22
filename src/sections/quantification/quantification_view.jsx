import React from 'react';
import { Virtuoso } from 'react-virtuoso';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function QuantificationPage() {
    const columnLabels = ['YY', 'YY', 'YY', 'YY'];

  return (
    <Container>
      <Box mb={2}>
      <Typography variant="h3" margin={2}>Quantification</Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Paper style={{ borderRadius: '12px', border: '1px solid #ED1C24', padding: '20px' }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <FormControl sx={{ minWidth: '120px' }}>
                <InputLabel htmlFor="date-de"> : </InputLabel>
                <TextField
                  id="date-de"
                  type="date"
                  variant="outlined"
                />
              </FormControl>
              <FormControl sx={{ minWidth: '120px' }}>
                <InputLabel htmlFor="date-a">:</InputLabel>
                <TextField
                  id="date-a"
                  type="date"
                  variant="outlined"
                />
              </FormControl>
              <Typography variant="body2" fontWeight="bold">Opérateur:</Typography>
              <Select 
                  native
                  id="type"
                  label="Type"
                  variant="outlined"
                  defaultValue="local"
                  sx={{ minWidth: '100px' }}
                >
                  <option value="local">WTA</option>
                  <option value="roaming">OTA</option>
                  <option value="roaming">ATM</option>
                </Select>
                <Typography variant="body2" fontWeight="bold">SB/PRV:</Typography>
              <Select 
                  native
                  id="type"
                  label="Type"
                  variant="outlined"
                  defaultValue="local"
                  sx={{ minWidth: '100px' }}
                >
                  <option value="local">SB</option>
                  <option value="roaming">PRV</option>
                </Select>
                <Typography variant="body2" fontWeight="bold">Status:</Typography>
              <Select 
                  native
                  id="type"
                  label="Type"
                  variant="outlined"
                  defaultValue="local"
                  sx={{ minWidth: '100px' }}
                >
                  <option value="local">First detection</option>
                  <option value="roaming">Non Débloqué</option>
                  <option value="roaming">Non Bloqué</option>
                </Select>
            </Stack>
          </Paper>
        </Stack>

    <Typography variant="h6" gutterBottom>
    Recherche Info Clients:
    </Typography>

<Paper style={{ borderRadius: '12px', border: '1px solid #ED1C24', padding: '20px', maxWidth: '785px' }}>
  <Stack direction="row" spacing={2} alignItems="center">
    {/* Left part */}
    <Stack direction="column" spacing={1} alignItems="center">
      {/* First input */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body2" color='red' fontWeight="bold">NB SIMBOX WTA: 16</Typography>
      </Stack>
      {/* Second input */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body2" color='black' fontWeight="bold">NB SIMBOX OTA: 4</Typography>
      </Stack>
      {/* Third input */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body2"  color='black' fontWeight="bold">NB SIMBOX ATM: 8/</Typography>
      </Stack>
    </Stack>

    {/* Spacer */}
    <Box sx={{ width: '20px' }} />

    {/* Middle part */}
    <Stack direction="column" spacing={1} alignItems="center">
      {/* First input */}
      <Stack direction="row" spacing={1} color='red' alignItems="center">
        <Typography variant="body2" fontWeight="bold">SUM DURATION TO WTA : 202 min</Typography>
      </Stack>
      {/* Second input */}
      <Stack direction="row" spacing={1} color='black' alignItems="center">
        <Typography variant="body2" fontWeight="bold">SUM DURATION TO OTA : 112 min</Typography>
      </Stack>
      {/* Third input */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body2" color='black' fontWeight="bold">SUM DURATION TO ATM : 150 min</Typography>
      </Stack>
    </Stack>

    {/* Spacer */}
    <Box sx={{ width: '20px' }} />

    {/* Right part */}
    <Stack direction="column" spacing={1} alignItems="center">
      {/* First input */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body2" color='red' fontWeight="bold">NUMBER OF CALLS TO WTA : 153 </Typography>
      </Stack>
      {/* Second input */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body2" fontWeight="bold">NUMBER OF CALLS TO OTA : 55 </Typography>
      </Stack>
      {/* Third input */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body2" fontWeight="bold">NUMBER OF CALLS TO ATM : 52 </Typography>
      </Stack>
    </Stack>
  </Stack>
</Paper>
    </Box>

     <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginLeft: 0, marginTop:2 , marginBottom:2 }}>
        <Stack direction="row" spacing={1} alignItems="center">
            <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white' }}>
            Quantifier
            </Button>
            <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white' }}>
            Clear All
            </Button>
        </Stack>
    </Box>


      <Box mb={2}>
        
        <Typography variant="h6" gutterBottom>
          Details :
        </Typography>
        <Paper style={{ borderRadius: '12px', border: '2px solid #ED1C24', padding: '20px' }}>
          <Table>
            <TableHead sx={{ color: '#ED1C24' }}>
              <TableRow>
                {columnLabels.map((label, index) => (
                  <TableCell key={index}>{label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <Virtuoso
              style={{ height: 360 }}
            />
          </Table>
        </Paper>
      </Box>
    </Container>
  );
}

export default QuantificationPage;