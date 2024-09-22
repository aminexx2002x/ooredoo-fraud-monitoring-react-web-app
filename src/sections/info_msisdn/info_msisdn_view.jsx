import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TableContainer from '@mui/material/TableContainer';

function InfoMsisdnPage() {
  const [subscribers, setSubscribers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredSubscribers, setFilteredSubscribers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/infomsisdnapi/info_msisdn')
      .then(response => {
        const formattedData = response.data.map(subscriber=> ({
          ...subscriber,
          activation_date: formatDate(subscriber.activation_date),
          deactivation_date: formatDate(subscriber.deactivation_date),
          Last_status_date: formatDate(subscriber.Last_status_date)
        }));
        setSubscribers(formattedData);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  useEffect(() => {
    // Filter subscribers based on searchValue
    if (searchValue) {
      const filtered = subscribers.filter(subscriber=>
        subscriber.MSISDN.includes(searchValue)
      );
      setFilteredSubscribers(filtered);
    } else {
      setFilteredSubscribers(subscribers);
    }
  }, [searchValue, subscribers]);

  const formatDate = (dateString) => {
    if (!dateString) return ''; // Handle null or undefined dates
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString(); // Format as desired (adjust as needed)
  };

  const columnLabels = [
    'IMSI', 'MSISDN', 'status', 'activation_date', 'deactivation_date', 'rate_plan', 'Bill_Cycle', 'Last_status_date', 'Contract_ID', 'Customer_ID', 'Client', 'Nom_Prenom', 'cutscode'
  ];

  const handleSearch = () => {
    // Filter subscribers based on searchValue when button is clicked
    if (searchValue) {
      const filtered = subscribers.filter(subscriber=>
        subscriber.MSISDN.includes(searchValue)
      );
      setFilteredSubscribers(filtered);
    } else {
      setFilteredSubscribers(subscribers);
    }
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h3">Info MSISDN</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <TextField
          label="Recherche MSISDN(s)"
          variant="outlined"
          fullWidth
          sx={{ mr: 2, '& .MuiOutlinedInput-root': { borderColor: '#ED1C24' } }}
          InputProps={{ sx: { borderColor: '#ED1C24' } }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="searchType" sx={{ color: '#ED1C24' }}>Type de recherche :</InputLabel>
          <Select native id="searchType" variant="outlined" fullWidth sx={{ '& .MuiOutlinedInput-root': { borderColor: '#ED1C24' } }}>
            <option value="option1">Basic</option>
            <option value="option2">All</option>
          </Select>
        </FormControl>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" mb={2}>
        <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white', mr: 2 }} onClick={handleSearch}>
          Rechercher
        </Button>
        <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white' }}>
          Exporter
        </Button>
      </Stack>

      <div>
        <Typography variant="h6" gutterBottom>
          Informations Clients :
        </Typography>
        <Paper style={{ borderRadius: '12px', border: '2px solid #ED1C24', overflowX: 'auto' }}>
            <TableContainer>
              <Table>
              <TableHead sx={{ color: '#ED1C24' }}>
              <TableRow>
              {columnLabels.map((label, index) => (
              <TableCell key={index}>{label}</TableCell>
              ))}
              </TableRow>
              </TableHead>
              <TableBody>
              {filteredSubscribers.map((subscriber, index) => (
              <TableRow key={index}>
              {columnLabels.map((label, columnIndex) => (
              <TableCell key={columnIndex}>{subscriber[label]}</TableCell>
              ))}
              </TableRow>
              ))}
              </TableBody>
              </Table>
            </TableContainer>
         </Paper>
      </div>
   </Container>
 );
          }

export default InfoMsisdnPage;
