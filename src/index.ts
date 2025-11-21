import express, { Express } from 'express';
import movieRouter from "./MoviesApp/movieRouter";
import path from 'path'
import cors from "cors"
import userRouter from './UserApp/userRouter';
import genreRouter from './GenresApp/genreRouter';

const app: Express = express();

app.use(express.json())
const PORT = 3000;
const HOST = 'localhost';

app.use(express.json());

app.use(cors());

// app.use(cors({
//   origin: ["http://localhost:3000"],
//   methods: ["GET", "POST", "PUT", "DELETE"],
// }

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'templates'))

app.use('/movies/', movieRouter)
app.use('/users/', userRouter)
app.use('/genres/', genreRouter)

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(PORT, HOST, () => {
  console.log(`http://${HOST}:${PORT}/`);
});