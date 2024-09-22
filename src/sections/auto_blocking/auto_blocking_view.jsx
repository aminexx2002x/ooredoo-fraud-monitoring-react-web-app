import React from 'react';
import { Virtuoso } from 'react-virtuoso';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function AutoBlockingPage() {
  const columnLabels = ['MSISDN', 'FRAUD TYPE', 'SOURCE', 'DATE SUSPENSION', 'NOM_FICHIER'];

  return (
    <Container>
      <Box mb={4}>
      <Typography variant="h3" margin={2}>Auto Blocking</Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
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
              
              <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white', ml: 1 }}>
                Rechercher
              </Button>
              <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white', ml: 1 }}>
                Exporter
              </Button>
            </Stack>
          </Paper>
        </Stack>

        <Typography variant="h6" gutterBottom>
         Confirmer :
        </Typography>
        <Paper style={{ borderRadius: '12px', border: '1px solid #ED1C24', padding: '10px', width: '350px' }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField label=" MSISDNs" variant="outlined" />
            <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white' }}>
            Confirmer
            </Button>
          </Stack>
        </Paper>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Informations Clients :
        </Typography>
        <Paper style={{ borderRadius: '12px', border: '2px solid #ED1C24', padding: '10px' }}>
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

export default AutoBlockingPage;