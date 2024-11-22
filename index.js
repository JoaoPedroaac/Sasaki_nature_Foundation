require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Medidas = require('./models/Medidas');
const authRoutes = require('./routes/authRoutes'); 
const app = express();

app.use(cors()); 
app.use(bodyParser.json());


mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

const db = mongoose.connection;
let collection;


db.on('error', (error) => console.error('Erro na conexão com o MongoDB:', error)); // Log de erros na conexão
db.once('open', () => {
  console.log('Conexão com o MongoDB estabelecida com sucesso');
  collection = db.collection('medidas'); // Inicializa a coleção
  console.log("Coleção 'medidas' inicializada");
});


app.use('/api/auth', authRoutes);


app.get('/api/data', async (req, res) => {
  try {
    const type = req.query.type;
    let query = {};

    if (type === 'temperaturas') {
      query = { mediaTemp: { $exists: true } };
    } else if (type === 'umidades') {
      query = { mediaUmid: { $exists: true } };
    }

    const data = await Medidas.find(query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar dados: " + error.message });
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));