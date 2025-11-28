const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const quizRoutes = require('./routes/quiz');
const userRoutes = require('./routes/user');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/quiz', quizRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`QuickQuiz backend running on port ${PORT}`);
});
