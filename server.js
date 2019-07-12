const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

// init bodyparser
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.json({ msg: 'yo!' });
});

// Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Connected on port ${PORT}`));
