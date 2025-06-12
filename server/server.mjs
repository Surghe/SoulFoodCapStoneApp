import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));


import menuRoutes from "./routes/menuRoutes.js";
app.use('/api/menu', menuRoutes);


import authRoutes from './routes/Auth.js';
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
