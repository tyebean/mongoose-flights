import { Flight } from "../models/flight";

function create (req, res){
  Flight.create({airline: 'null', airport: 'null', flightNo: 'null', departs: 'null'}, function(err, flightsDoc) {
  console.log(flightsDoc)
})
}

export {
  create,
}
