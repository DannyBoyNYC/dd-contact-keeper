const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.get('/', (req, res) => {
  res.json({ msg: 'yo!' });
});

// Rooutes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Connected on port ${PORT}`));
// mongodb+srv://daniel:dd2345@contactkeeper-qqnxe.mongodb.net/test?retryWrites=true&w=majority
// https://www.udemy.com/modern-react-front-to-back/learn/lecture/14969934#questions
