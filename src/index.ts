import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose ,{ ConnectOptions } from 'mongoose';
import cors from 'cors';


dotenv.config();
const app: Express = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

const mongouri = process.env.MONGODB_URI || "";
mongoose.connect(mongouri).then(()=>{
  console.log("db Connected");
}).catch((err)=>{
  console.log(err);
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});