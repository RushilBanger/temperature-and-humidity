// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// let latestData = { temperature: 0, humidity: 0 };

// app.use(express.static('public'));
// app.use(bodyParser.json());

// app.post('/api/update', (req, res) => {
//   latestData = req.body;
//   console.log('Received Data:', latestData);
//   res.sendStatus(200);
// });

// app.get('/api/latest', (req, res) => {
//   res.json(latestData);
// });

// app.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let latestData = { temperature: 0, humidity: 0 };

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/api/update', (req, res) => {
  latestData = req.body;
  console.log('Received Data:', latestData);
  res.sendStatus(200);
});

app.get('/api/latest', (req, res) => {
  res.json(latestData);
});

// Change here: listen on 0.0.0.0 so it's accessible from other devices
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
  console.log(`Try accessing from other devices using your PC IP address: http://<YOUR_PC_IP>:${PORT}`);
});
