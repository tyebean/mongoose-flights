import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightsSchema = new Schema ({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {type: Number, min: 10, max: 9999},
  departs: null,
})

// ! add: departs: date (default date = 1 year from date created).

const Flight = mongoose.model('Flight', flightsSchema)

export {
  Flight,
}

