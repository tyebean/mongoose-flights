import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema ({
  // * seat: must be A1 thru f99 (do it later)
  seat: {type: String},
  price: {type: Number, min: 0},
})

const flightSchema = new Schema ({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    required: true,
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    required: true,
  },
  flightNo: {type: Number, required: true, min: 10, max: 9999},
  departs: {type: Date, required: true, default: Date.now() + 365*24*60*60000},
  tickets: {type: ticketSchema}
})

const Flight = mongoose.model('Flight', flightSchema)
const Ticket = mongoose.model('Ticket', ticketSchema)

export {
  Flight,
  Ticket,
} 