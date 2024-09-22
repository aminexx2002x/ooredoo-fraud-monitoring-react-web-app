const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const dailyFollowupRoutes = require('./routes/dailyFollowupRoutes');
const userRoutes = require('./routes/userRoutes');
const infomsisdnRoutes = require('./routes/infomsisdnRoutes');
const suiviMsisdnRoutes = require('./routes/suivi_msisdnRoutes'); // Import the new routes
const infoTraficRoutes = require('./routes/infotraficRoutes');


const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/dailyfollowupapi', dailyFollowupRoutes);
app.use('/userapi', userRoutes);
app.use('/infomsisdnapi', infomsisdnRoutes);
app.use('/suivi_msisdnapi', suiviMsisdnRoutes); // Add the new routes
app.use('/infotraficapi', infoTraficRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
