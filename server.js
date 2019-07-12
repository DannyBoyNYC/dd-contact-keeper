const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'yo!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Connected on port ${PORT}`));
// mongodb+srv://daniel:dd2345@contactkeeper-qqnxe.mongodb.net/test?retryWrites=true&w=majority
// https://www.udemy.com/modern-react-front-to-back/learn/lecture/14969934#questions
