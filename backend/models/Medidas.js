const mongoose = require('mongoose');

const medidasSchema = new mongoose.Schema({
  id: Number,
  mediaTemp: Number,
  medianaTemp: Number,
  modaTemp: Number,
  desvioPTemp: Number,
  coefDesvioPTemp: Number,
  assimetriaTemp: Number,
  curtoseTemp: Number,
  prevFutTemp: Number,
  coefRegrTemp: Number,
  intercTemp: Number,
  mediaUmid: Number,
  medianaUmid: Number,
  modaUmid: Number,
  desvioPUmid: Number,
  coefDEsvioPUmid: Number,
  assimetriaUmid: Number,
  curtoseUmid: Number,
  prevFutUmid: Number,
  coefRegrUmid: Number,
  intercUmid: Number,
  temperaturas: [Number],
  umidades: [Number],
  timestamp: Date,
});

module.exports = mongoose.model('Medidas', medidasSchema);
