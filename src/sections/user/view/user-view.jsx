import axios from 'axios';
import React, { useState, useEffect } from 'react';

import {
  Paper, 
  Stack,
  Table,
  Button,
  Dialog,
  Select,
  MenuItem,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Container,
  TextField,
  InputLabel,
  Typography,
  FormControl,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';

import Iconify from 'src/components/iconify';

function UserPage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]); // Add filteredUsers state
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: '',
    typeCompte: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (searchTerm = '') => {
    axios.get(`http://localhost:3001/userapi/user?search=${searchTerm}`)
      .then(response => {
        setUsers(response.data);
        setFilteredUsers(response.data); // Initialize filteredUsers with all users
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  };

  const handleSearch = () => {
    console.log("Search Term:", search);
    console.log("Users List:", users);
  
    // Filter users based on the search term (case-insensitive and partial match)
    const filtered = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
  
    console.log("Filtered Users:", filtered);
  
    // Update the state to hold only the filtered users
    setFilteredUsers(filtered);
  };
  
  

  const handleClearSearch = () => {
    setSearch('');
    fetchData('');
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = () => {
    axios.post('http://localhost:3001/userapi/user', newUser)
      .then(response => {
        fetchData();
        setNewUser({ name: '', typeCompte: '', email: '', password: '' });
        handleClose();
      })
      .catch(error => {
        console.error('There was an error creating the user!', error);
      });
  };

  const handleDelete = (userId) => {
    axios.delete(`http://localhost:3001/userapi/user/${userId}`)
      .then(response => {
        fetchData();
        setSelectedUser(null);
      })
      .catch(error => {
        console.error('There was an error deleting the user!', error);
      });
  };

  const columnLabels = [
    'Name', 'Type de Compte', 'Email', 'Password'
  ];

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h3">Les Utilisateurs de Direction Business Assurance</Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{
              backgroundColor: '#ED1C24',
              color: 'white',
              '&:hover': {
                backgroundColor: '#c60c11',
              },
            }}
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New User
          </Button>
          <Button
            variant="contained"
            onClick={() => handleDelete(selectedUser)}
            disabled={!selectedUser}
            sx={{
              backgroundColor: '#ED1C24',
              color: 'white',
              '&:hover': {
                backgroundColor: '#c60c11',
              },
            }}
            startIcon={<Iconify icon="eva:trash-2-fill" />}
          >
            Delete User
          </Button>
        </Stack>
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          PaperProps={{
            sx: {
              width: 400,
              height: 550,
            },
          }}
        >
          <DialogTitle fontWeight='bold' marginTop={4} marginBottom={-2}>Informations nouveaux Utilisateur :</DialogTitle>
          <DialogContent sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          >
            <Stack spacing={3}>
              <TextField
                label="Nom"
                name="name"
                value={newUser.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    border: '1px solid #ED1C24',
                  },
                }}
              />
              <FormControl variant="outlined" fullWidth sx={{ borderRadius: 2, border: '1px solid #ED1C24' }}>
                <InputLabel>Type de Compte</InputLabel>
                <Select
                  label="Type de Compte"
                  name="typeCompte"
                  value={newUser.typeCompte}
                  onChange={handleChange}
                  sx={{ borderRadius: 2, border: '1px solid #ED1C24' }}
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Email"
                name="email"
                value={newUser.email}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    border: '1px solid #ED1C24',
                  },
                }}
              />
              <TextField
                label="Mot de Passe"
                name="password"
                value={newUser.password}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    border: '1px solid #ED1C24',
                  },
                }}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white' }}>Annuler</Button>
            <Button onClick={handleSubmit} variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white' }}>
              Valider
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <TextField
          label="Recherche Utilisateur"
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
          Informations Utilisateurs :
        </Typography>
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
                {filteredUsers.map((row, index) => (
                  <TableRow
                    key={index}
                    selected={selectedUser === row.id}
                    onClick={() => setSelectedUser(row.id)}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.typeCompte}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.password}</TableCell>
                  </TableRow>
                ))}
              </TableBody>

          </Table>
        </Paper>
      </div>
    </Container>
  );
}

export default UserPage;

               
