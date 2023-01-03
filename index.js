const express = require('express');
const path = require('path');
const { getMaxListeners } = require('process');

const app = express();

const members = [
  { name: 'John Doe', email: 'john@gmail.com', status: 'active' },
  { name: 'Bob William', email: 'bob@gmail.com', status: 'inactive' },
  { name: 'Shannon Jackson', email: 'shannon@gmail.com', status: 'active' },
];

app.get('/api/members', (req, res) => {
  res.json(members);
});

// Set a static folder (serves regular basic html files)
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
