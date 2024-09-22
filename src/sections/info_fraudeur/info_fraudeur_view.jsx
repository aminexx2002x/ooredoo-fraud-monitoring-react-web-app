import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
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

function InfoFraudeurPage() {
  const [subscribers, setSubscribers] = useState([]);
  const [cniInput, setCniInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [filteredSubscribers, setFilteredSubscribers] = useState([]);

  const columnLabels = [
    'IMSI', 'MSISDN', 'status', 'activation_date', 'deactivation_date', 'rate_plan', 'Bill_Cycle', 'Last_status_date', 'Contract_ID', 'Customer_ID', 'Client', 'Nom_Prenom', 'cutscode', 'CNI', 'City', 'State', 'Birthdate'
  ];

  useEffect(() => {
    axios.get('http://localhost:3001/infomsisdnapi/info_msisdn')
      .then(response => {
        const formattedData = response.data.map(subscriber=> ({
          ...subscriber,
          activation_date: formatDate(subscriber.activation_date),
          deactivation_date: formatDate(subscriber.deactivation_date),
          Last_status_date: formatDate(subscriber.Last_status_date),
          Birthdate: formatDate(subscriber.Birthdate)
        }));
        setSubscribers(formattedData);
        setFilteredSubscribers(formattedData); // Initialize with all data
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return ''; // Handle null or undefined dates
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString(); // Format as desired (adjust as needed)
  };

  const handleCniInputChange = (event) => {
    setCniInput(event.target.value);
  };

  const handleNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleSearchByCni = () => {
    const filtered = subscribers.filter(subscriber=> subscriber.CNI === cniInput);
    setFilteredSubscribers(filtered);
  };

  const handleSearchByName = () => {
    const filtered = subscribers.filter(subscriber=> 
      subscriber.Nom_Prenom.toLowerCase().includes(nameInput.toLowerCase())
    );
    setFilteredSubscribers(filtered);
  };

  return (
    <Container>
      <Box mb={4}>
        <Typography variant="h3" margin={2}>Info Fraudeur</Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
          <Paper style={{ borderRadius: '12px', border: '1px solid #ED1C24', padding: '20px' }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <FormControl sx={{ minWidth: '120px' }}>
                <InputLabel htmlFor="date-de">De :</InputLabel>
                <TextField
                  id="date-de"
                  type="date"
                  variant="outlined"
                />
              </FormControl>
              <FormControl sx={{ minWidth: '120px' }}>
                <InputLabel htmlFor="date-a">À :</InputLabel>
                <TextField
                  id="date-a"
                  type="date"
                  variant="outlined"
                />
              </FormControl>
              <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white', ml: 1 }}>
                Compare les MSISDN activer avec blacklist fraudeur ( statue’all’ )
              </Button>
            </Stack>
          </Paper>
        </Stack>

        <Typography variant="h6" gutterBottom>
          Recherche Info Clients :
        </Typography>
        <Paper style={{ borderRadius: '12px', border: '1px solid #ED1C24', padding: '20px', maxWidth: '881px' }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack direction="column" spacing={1} alignItems="center">
              <Stack direction="row" spacing={1} alignItems="center">
                <TextField 
                  label="Recherche CNI :" 
                  variant="outlined" 
                  value={cniInput}
                  onChange={handleCniInputChange}
                />
                <Button 
                  variant="contained" 
                  sx={{ backgroundColor: '#ED1C24', color: 'white' }}
                  onClick={handleSearchByCni}
                >
                  Rechercher
                </Button>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <TextField 
                  label="Recherche par Nom / prénom:" 
                  variant="outlined" 
                  value={nameInput}
                  onChange={handleNameInputChange}
                />
                <Button 
                  variant="contained" 
                  sx={{ backgroundColor: '#ED1C24', color: 'white' }}
                  onClick={handleSearchByName}
                >
                  Rechercher
                </Button>
              </Stack>
            </Stack>

            <Box sx={{ width: '20px' }} />

            <Stack direction="column" spacing={1}>
              <Stack direction="row" spacing={1} alignItems="normal">
                <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white', minWidth: '150px' }}>
                  Quantification SB
                </Button>
                <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white', minWidth: '150px' }}>
                  Groupé par CNI Par Wilaya
                </Button>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white', minWidth: '150px' }}>
                  Quantification SB Par Commune
                </Button>
                <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white', minWidth: '150px' }}>
                  Groupé par nom
                </Button>
              </Stack>
            </Stack>
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
      </Box>
    </Container>
  );
}

export default InfoFraudeurPage;
