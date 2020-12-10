const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const user = require('./routes/user');
const app = express();


connectDB();

//Middleware
// const whitelist = ['http://localhost:3000','https://pet-haven-front-end.herokuapp.com']

// const corsOptions = {
//     origin: function (origin, callback) {
//       if (whitelist.indexOf(origin) !== -1) {
//         callback(null, true)
//       } else {
//         callback(new Error('Not allowed by CORS'))
//       }
//     },
//     credentials: true
// };
// app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('client/build'));

app.use('/api/users', user);

if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
      console.log('Works');
      res.sendFile(
          path.resolve(__dirname, './client', 'build', 'index.html')
      );
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

