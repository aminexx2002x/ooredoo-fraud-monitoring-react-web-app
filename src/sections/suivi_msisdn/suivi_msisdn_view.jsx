import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TableContainer from '@mui/material/TableContainer';

function SuiviMsisdnPage() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  const fetchData = (searchTerm = '') => {
    const query = searchTerm ? `?search=${searchTerm}` : '';
    axios.get(`http://localhost:3001/suivi_msisdnapi/daily-follow-up-opn/suivi-msisdn${query}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  };

  const fetchUsers = () => {
    axios.get('http://localhost:3001/userapi/user')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  useEffect(() => {
    fetchData();
    fetchUsers();
  }, []);

  const handleSearch = () => {
    fetchData(search);
  };

  const handleClearSearch = () => {
    setSearch('');
    fetchData('');
  };

  const formatDate = dateString => new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const columnLabels = [
    'IMSI', 'MSISDN', 'status', 'activation_date', 'deactivation_date', 'rate_plan',
    'Bill_Cycle', 'Last_status_date', 'Contract_ID', 'Customer_ID', 'Client',
    'Nom_Prenom', 'cutscode', 'CNI', 'City', 'State', 'Birthdate',
    'LCD', 'TypeDetect', 'CATIG', 'CPT', 'UserFlagger', 'UserDeb'
  ];

  return (
    <Container>
      <Box mb={4}>
        <Typography variant="h3" margin={2}>Track Flagged MSISDN</Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
          <Paper style={{ borderRadius: '12px', border: '1px solid #ED1C24', padding: '20px', width: '1200px' }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <FormControl sx={{ minWidth: '120px' }}>
                <InputLabel htmlFor="date-de">De:</InputLabel>
                <TextField
                  id="date-de"
                  type="date"
                  variant="outlined"
                />
              </FormControl>
              <FormControl sx={{ minWidth: '120px' }}>
                <InputLabel htmlFor="date-a">À:</InputLabel>
                <TextField
                  id="date-a"
                  type="date"
                  variant="outlined"
                />
              </FormControl>
              <FormControl variant="outlined">
                <InputLabel htmlFor="type">Flagging / Déblocage :</InputLabel>
                <Select
                  native
                  id="type"
                  label="Flagging / Déblocage"
                  variant="outlined"
                  defaultValue="Flagging"
                  sx={{ minWidth: '300px' }}
                >
                  <option value="Flagging">Flagging</option>
                  <option value="Déblocage">Déblocage</option>
                </Select>
              </FormControl>
              <FormControl variant="outlined">
                <InputLabel htmlFor="fraud-type">Type de Fraude :</InputLabel>
                <Select
                  native
                  id="fraud-type"
                  label="Type de Fraude"
                  variant="outlined"
                  defaultValue="SB"
                  sx={{ minWidth: '300px' }}
                >
                  <option value="SB">SB</option>
                  <option value="SS">SS</option>
                  <option value="HU">HU</option>
                  <option value="WG">WG</option>
                  <option value="FP">FP</option>
                  <option value="PRV">PRV</option>
                  <option value="SPF">SPF</option>
                  <option value="ST">ST</option>
                </Select>
              </FormControl>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center" mt={3}>
              <FormControl variant="outlined">
                <InputLabel htmlFor="source">Source :</InputLabel>
                <Select
                  native
                  id="source"
                  label="Source"
                  variant="outlined"
                  defaultValue="ARAXXE"
                  sx={{ minWidth: '400px' }}
                >
                  <option value="ARAXXE">ARAXXE</option>
                  <option value="BYPASS">BYPASS</option>
                  <option value="MOBIUS">MOBIUS</option>
                  <option value="InvInterne">InvInterne</option>
                  <option value="PARTNER">PARTNER</option>
                  <option value="FMS">FMS</option>
                  <option value="SIGOS">SIGOS</option>
                  <option value="SR CRM">SR CRM</option>
                  <option value="ASD MOBIUS">ASD MOBIUS</option>
                  <option value="RAPPORT">RAPPORT</option>
                  <option value="USSD">USSD</option>
                  <option value="TCG MOBIUS">TCG MOBIUS</option>
                  <option value="PINGOCEAN">PINGOCEAN</option>
                  <option value="LATRO">LATRO</option>
                </Select>
              </FormControl>
              <FormControl variant="outlined">
                <InputLabel htmlFor="user">Utilisateur :</InputLabel>
                <Select
                  native
                  id="user"
                  label="Utilisateur"
                  variant="outlined"
                  defaultValue=""
                  sx={{ minWidth: '500px' }}
                >
                  {users.map(user => (
                    <option key={user.email} value={user.name}>{user.name}</option>
                  ))}
                </Select>
              </FormControl>
            </Stack>
            <Stack direction="row" marginTop={3}>
              <Button 
                variant="contained" 
                sx={{ backgroundColor: '#ED1C24', color: 'white', width: '195px' }} 
                onClick={handleSearch}
              >
                Afficher
              </Button>
              <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white', ml: 1, width: '195px' }} onClick={handleClearSearch}>
                Supprimer Tout
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Box>

      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
  <TextField
    label="Recherche MSISDN(s)"
    variant="outlined"
    fullWidth
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    sx={{
      mr: 2,
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#ED1C24',
        },
        '&:hover fieldset': {
          borderColor: '#ED1C24',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#ED1C24',
        },
      },
    }}
    InputProps={{ sx: { borderColor: '#ED1C24' } }}
  />
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
                  {data.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {columnLabels.map((label, colIndex) => (
                        <TableCell key={colIndex}>
                          {label.includes('date') ? formatDate(row[label]) : row[label]}
                        </TableCell>
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

  export default SuiviMsisdnPage;

