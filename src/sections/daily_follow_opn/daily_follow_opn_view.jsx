import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function DailyfollowopnPage() {
  const [telecomFraudData, setTelecomFraudData] = useState([]);
  const [search, setSearch] = useState('');

  const fetchData = (searchTerm = '') => {
    const query = searchTerm ? `?search=${searchTerm}` : '';
    axios.get(`http://localhost:3001/dailyfollowupapi/daily_follow_opn${query}`)
      .then(response => {
        setTelecomFraudData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    fetchData(search);
  };

  const handleClearSearch = () => {
    setSearch('');
    fetchData('');
  };

  const columnLabels = [
    'MSISDN', 'LCD', 'TypeDetect', 'CATIG', 'CPT', 'UserFlagger', 'UserDeb'
  ];

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h3">Daily Follow Up OPN</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <TextField
          label="Recherche MSISDN(s)"
          variant="outlined"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mr: 2, '& .MuiOutlinedInput-root': { borderColor: '#ED1C24' } }}
          InputProps={{ sx: { borderColor: '#ED1C24' } }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-start" mb={4}>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#ED1C24', color: 'white', mr: 2 }}
          onClick={handleSearch}
        >
          Rechercher
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#ED1C24', color: 'white' }}
          onClick={handleClearSearch}
        >
          Supprimer Tout
        </Button>
      </Stack>

      <div>
        <Typography variant="h6" gutterBottom>
          Informations flagger :
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white', mb: 2 }}>
          Exporter
        </Button>
        <Paper style={{ borderRadius: '12px', border: '2px solid #ED1C24' }}>
          <Table>
            <TableHead sx={{ color: '#ED1C24' }}>
              <TableRow>
                {columnLabels.map((label, index) => (
                  <TableCell key={index}>{label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {telecomFraudData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.MSISDN}</TableCell>
                  <TableCell>{row.LCD}</TableCell>
                  <TableCell>{row.TypeDetect}</TableCell>
                  <TableCell>{row.CATIG}</TableCell>
                  <TableCell>{row.CPT}</TableCell>
                  <TableCell>{row.UserFlagger}</TableCell>
                  <TableCell>{row.UserDeb}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </Container>
  );
}

export default DailyfollowopnPage;