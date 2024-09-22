import React from 'react';

import { Box,Grid} from '@mui/material';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

function FlaggerMsisdnPage() {
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h3">Flagger MSISDN</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4}>
        <TextField
          label="Entrer MSISDN(s) flagger"
          variant="outlined"
          fullWidth
          sx={{ mr: 2, '& .MuiOutlinedInput-root': { borderColor: '#ED1C24' } }} // Add margin to the right
          InputProps={{ sx: { borderColor: '#ED1C24' } }}
        />

        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="searchType" sx={{ color: '#ED1C24' }}>Séléctionner :</InputLabel>
          <Select native id="searchType" variant="outlined" fullWidth sx={{ '& .MuiOutlinedInput-root': { borderColor: '#ED1C24' } }}>
            <option value="option1">Suspension RC</option>
            <option value="option2">All</option>
          </Select>
        </FormControl>
      </Stack>

<Grid container spacing={25} marginTop={-27}>
<Grid item xs={6} style={{display:'flex', justifyContent: 'flex-start' }}>
<Box mb={2}>
  <Typography variant="h6" gutterBottom>
    Source :
  </Typography>
  <Paper style={{ borderRadius: '12px', border: '1px solid #ED1C24', padding: '10px' ,width: '568px' }}>
    <Stack direction="row" spacing={2} alignItems="center">
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">  </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="ARAXXE"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>ARAXXE</Typography>}
          />
          <FormControlLabel
            value="BYPASS"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>BYPASS</Typography>}
          />
          <FormControlLabel
            value="MOBUS"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>MOBUS</Typography>}
          />
          <FormControlLabel
            value="InvInterne"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>InvInterne</Typography>}
          />
          <FormControlLabel
            value="PARTNER"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>PARTNER</Typography>}
          />
          <FormControlLabel
            value="FMS"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>FMS</Typography>}
          />
          <FormControlLabel
            value="SIGOS"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>SIGOS</Typography>}
          />
          <FormControlLabel
            value="SR CRM"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>SR CRM</Typography>}
          />
          <FormControlLabel
            value="ASD MOBIUS"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>ASD MOBIUS</Typography>}
          />
          <FormControlLabel
            value="RAPPORT"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>RAPPORT</Typography>}
          />
          <FormControlLabel
            value="USSD"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>USSD</Typography>}
          />
          <FormControlLabel
            value="TCG MOBIUS"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>TCG MOBIUS</Typography>}
          />
          <FormControlLabel
            value="PINGOCEAN"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>PINGOCEAN</Typography>}
          />
          <FormControlLabel
            value="LATRO"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>LATRO</Typography>}
          />
        </RadioGroup>
      </FormControl>
    </Stack>
  </Paper>
</Box>
</Grid>

<Grid item xs={6} style={{display:'flex',justifyContent: 'flex-start'}}>
  <Box mb={2}>
  <Typography variant="h6" gutterBottom>
    Fraud Type :
  </Typography>
  <Paper style={{ borderRadius: '12px', border: '1px solid #ED1C24', padding: '10px' ,width: '320px' }}>
    <Stack direction="row" spacing={2} alignItems="center">
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">  </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="ARAXXE"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>SB</Typography>}
          />
          <FormControlLabel
            value="BYPASS"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>SS</Typography>}
          />
          <FormControlLabel
            value="MOBUS"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>HU</Typography>}
          />
          <FormControlLabel
            value="InvInterne"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>WG</Typography>}
          />
          <FormControlLabel
            value="PARTNER"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>FP</Typography>}
          />
          <FormControlLabel
            value="FMS"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>PRV</Typography>}
          />
          <FormControlLabel
            value="SIGOS"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>SPF</Typography>}
          />
          <FormControlLabel
            value="SR CRM"
            control={<Radio style={{ color: 'red' }} />}
            label={<Typography variant="body1" style={{ fontWeight: 'bold' }}>ST</Typography>}
          />
        </RadioGroup>
      </FormControl>
    </Stack>
  </Paper>
</Box>
</Grid>
    </Grid>


    <Grid item xs={2} style={{display:'flex',justifyContent: 'flex-start'}}>
    <Box mt={2}>
  <Typography variant="h6" gutterBottom>
    Commentaire :
  </Typography>
  <Paper style={{ borderRadius: '12px', border: '1px solid #ED1C24', padding: '10px' ,width: '940px' }}>
    <Stack direction="row" spacing={2} alignItems="center">
    <TextField
          label="Tapez votre Commentaire ..."
          variant="outlined"
          fullWidth
          sx={{ mr: 2, '& .MuiOutlinedInput-root': { Color: 'red' } }} // Add margin to the right
          InputProps={{ sx: { borderColor: '#ED1C24' } }}
        />

        <FormControl sx={{ minWidth: '300px' }}>
                <InputLabel htmlFor="date-de"> : </InputLabel>
                <TextField
                  id="date-de"
                  type="datetime-local"
                  variant="outlined"
                />
              </FormControl>
          
    </Stack>
    <Stack mt={2} >
    <Button variant="contained" sx={{ backgroundColor: '#ED1C24', color: 'white' }}>
            Flagger
          </Button>
    </Stack>
  </Paper>
</Box>
</Grid>



    </Container>
  );
}

export default FlaggerMsisdnPage ;
