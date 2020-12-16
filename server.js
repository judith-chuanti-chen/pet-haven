const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const csurf = require('csurf');
const user = require('./routes/user');
const favoritePet = require('./routes/favoritePet');
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
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// app.use(csurf({
//   cookie: {
//     key: '_csrf-pet-haven',
//     path: '/csrf',
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     maxAge: 3600 // 1-hour
//   }
// }));

app.use(express.static('client/build'));

app.use('/api/users', user);
app.use('/api/favoritePets', favoritePet);

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

