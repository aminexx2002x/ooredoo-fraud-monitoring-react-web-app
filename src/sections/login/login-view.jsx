
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import Iconify from 'src/components/iconify';

const LoginView = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async () => {
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        username,
        password,
      });

      console.log('Response Data:', response.data);
      console.log('Response Status:', response.status);

      if (response.status === 200) {
        window.location.href = '/';
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Invalid username or password.');
    } finally {
      setLoading(false);
    }
  };

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField
          name="username"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
            },
          }}
        />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
            },
          }}
        />
      </Stack>

      <LoadingButton
        fullWidth
        size="medium"
        type="submit"
        variant="contained"
        sx={{
          mt: 3,
          color: '#FFFFFF',
          bgcolor: '#ED1C24',
          '&:hover': {
            bgcolor: '#C80300',
          },
        }}
        loading={loading}
        onClick={handleClick}
      >
        Se connecter
      </LoadingButton>
      {error && <ErrorComponent message={error} />}
    </>
  );

  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ marginTop: '-30px', marginBottom: '10px' }}>
        <img src="\assets\head logo for login.png" alt="Ooredoo Logo" />
      </div>
      <Card sx={{ p: 5, maxWidth: 420, marginTop: '20px' }}>
        <Typography variant="h6" color="black" sx={{ textAlign: 'center', mb: 3 }}>
          Entrer vos informations de connexion
        </Typography>
        <Divider sx={{ my: 3 }} />
        {renderForm}
        <Divider sx={{ my: 3 }} />
        <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary' }}>
          Copyright © 2024 Ooredoo dz
        </Typography>
      </Card>
    </Box>
  );
};

const ErrorComponent = ({ message }) => (
  <Typography color="error" sx={{ mt: 2 }}>
    {message}
  </Typography>
);

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default LoginView;
