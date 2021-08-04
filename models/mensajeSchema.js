import mongoose from 'mongoose'
const Schema = mongoose.Schema

const mensajeSchema = new Schema({
    author: {
        email: { type: String },
        nombre: { type: String },
        apellido: { type: String },
        edad: { type: Number },
        alias: { type: String },
        avatar: { type: String },
    },
    text: { type: String }
})

const MensajeDAO = mongoose.model('MensajeDAO', mensajeSchema)
export default MensajeDAO