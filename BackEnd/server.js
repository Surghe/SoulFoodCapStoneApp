const express = ('express');
const mongoose = ('mongoose');
const cors = ('cors');
('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

const menuRoutes = ('./routes/menuRoutes');
app.use('/api/menu', menuRoutes);


const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
