const mongoose = require("mongoose");

const requestsClientsSchema = new mongoose.Schema(
  {
    apellidos: {
      type: String,
    },
    correo: {
      type: String,
    },
    cuota_mensual: {
      type: Number,
    },
    fecha_nacimiento: {
      type: String,
    },
    genero: {
      type: String,
    },
    intereses_anual: {
      type: Number,
    },
    intereses_mensual: {
      type: Number,
    },
    nombres: {
      type: String,
    },
    plazo_meses: {
      type: Number,
    },
    seguro_mensual: {
      type: Number,
    },
    simular_con_seguro: {
      type: String,
    },
    tipo_credito: {
      type: String,
    },
    tipo_poliza: {
      type: String,
    },
    total_pagar: {
      type: Number,
    },
    valor_credito: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("RequestsClient", requestsClientsSchema);
