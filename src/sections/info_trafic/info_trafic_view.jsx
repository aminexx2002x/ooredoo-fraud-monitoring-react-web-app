import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
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

function InfoTraficPage() {
  const columnLabels = [
    'IMSI', 'MSISDN', 'status', 'activation_date', 'deactivation_date', 
    'rate_plan', 'Bill_Cycle', 'Last_status_date', 'Contract_ID', 
    'Customer_ID', 'Client', 'Nom_Prenom', 'cutscode'
  ];
  const columnLabels2 = [
    'Customer_id', 'Contract_id', 'Pays', 'Type', 'Montant', 'Trafic_date'
  ];

  const [subscribers, setSubscribers] = useState([]);
  const [traficData, setTraficData] = useState([]);
  const [searchMsisdn, setSearchMsisdn] = useState('');
  const [searchContractId, setSearchContractId] = useState('');
  const [searchCustomerId, setSearchCustomerId] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/infomsisdnapi/info_msisdn')
      .then(response => {
        const formattedData = response.data.map(infomsisdn => ({
          ...infomsisdn,
          activation_date: formatDate(infomsisdn.activation_date),
          deactivation_date: formatDate(infomsisdn.deactivation_date),
          Last_status_date: formatDate(infomsisdn.Last_status_date)
        }));
        setSubscribers(formattedData);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/infotraficapi/info-trafic')
      .then(response => {
        const formattedData = response.data.map(trafic => ({
          ...trafic,
          Trafic_date: formatDate(trafic.Trafic_date)
        }));
        setTraficData(formattedData);
      })
      .catch(error => {
        console.error('There was an error fetching the trafic data!', error);
      });
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString();
  };

  const handleSearchMsisdn = () => {
    const filteredSubscribers = subscribers.filter(subscriber =>
      subscriber.MSISDN.toLowerCase().includes(searchMsisdn.toLowerCase())
    );
    setSubscribers(filteredSubscribers);
  };

  const handleSearchContractId = () => {
    const filteredSubscribers = subscribers.filter(subscriber =>
      subscriber.Contract_ID.toLowerCase().includes(searchContractId.toLowerCase())
    );
    setSubscribers(filteredSubscribers);
  };

  const handleSearchCustomerId = () => {
    const filteredSubscribers = subscribers.filter(subscriber =>
      subscriber.Customer_ID.toLowerCase().includes(searchCustomerId.toLowerCase())
    );
    setSubscribers(filteredSubscribers);
  };

  return (
    <Container>
      <Box mb={4}>
        <Typography variant="h3" margin={2}>Info Trafic</Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
          <Paper style={{ borderRadius: '12px', border: '1px solid #ED1C24', padding: '20px' }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <FormControl sx={{ minWidth: '120px' }}>
                <InputLabel htmlFor="date-de"> : </InputLabel>
                <TextField id="date-de" type="date" variant="outlined" />
              </FormControl>
              <FormControl sx={{ minWidth: '120px' }}>
                <InputLabel htmlFor="date-a">:</InputLabel>
                <TextField id="date-a" type="date" variant="outlined" />
              </FormControl>
              <FormControl variant="outlined">
                <InputLabel htmlFor="type">Location :</InputLabel>
                <Select native id="type" label="Type" variant="outlined" defaultValue="local" sx={{ minWidth: '100px' }}>
                  <option value="local">Local</option>
                  <option value="roaming">Roaming</option>
                </Select>
              </FormControl>
              <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white', ml: 1 }}>
                Rechercher
              </Button>
            </Stack>
          </Paper>
        </Stack>

        <Typography variant="h6" gutterBottom>
          Recherche Info Clients :
        </Typography>
        <Paper style={{ borderRadius: '12px', border: '1px solid #ED1C24', padding: '10px', width: '350px' }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField 
              label="Rechercher MSISDNs" 
              variant="outlined" 
              value={searchMsisdn} 
              onChange={(e) => setSearchMsisdn(e.target.value)} 
            />
            <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white' }} onClick={handleSearchMsisdn}>
              Rechercher
            </Button>
          </Stack>
        </Paper>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Recherche Trafic :
        </Typography>
        <Paper style={{ borderRadius: '12px', border: '1px solid #ED1C24', padding: '10px', width: '550px' }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField 
              label="Contract ID" 
              variant="outlined" 
              value={searchContractId} 
              onChange={(e) => setSearchContractId(e.target.value)} 
            />
            <TextField 
              label="Customer ID" 
              variant="outlined" 
              value={searchCustomerId} 
              onChange={(e) => setSearchCustomerId(e.target.value)} 
            />
            <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white' }} onClick={handleSearchContractId}>
              Rechercher (Contrat ID)
            </Button>
            <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white' }} onClick={handleSearchCustomerId}>
              Rechercher (Customer ID)
            </Button>
          </Stack>
        </Paper>
      </Box>

      <Box mb={4}>
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
                {subscribers.map((subscriber, index) => (
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
      </Box>

      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Informations Trafic :
        </Typography>
        <Paper style={{ borderRadius: '12px', border: '2px solid #ED1C24', padding: '20px' }}>
          <Table>
            <TableHead sx={{ color: '#ED1C24' }}>
              <TableRow>
                {columnLabels2.map((label, index) => (
                  <TableCell key={index}>{label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {traficData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {columnLabels2.map((label, colIndex) => (
                    <TableCell key={colIndex}>{row[label]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Container>
  );
}

export default InfoTraficPage;