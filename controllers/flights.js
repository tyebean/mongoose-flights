import { Flight } from "../models/flight.js";

function index (req, res) {
  Flight.find({}, function (error, flights) {
    res.render("flights/index", {
      error,
      flights
    })
  })
}

function newFlight (req, res) {
  res.render('flights/new')
}

function create(req, res) {
  console.log("req.body is", req.body);
  for (let key in req.body){
    if (req.body[key] === '') delete req.body[key]
  }
  const flight = new Flight (req.body)
  console.log("flight is", flight);
  flight.save(function(err){
    if (err) return res.redirect('/flights/new') 
    res.redirect('/flights')
  }) 
  }

  function show (req, res){
    console.log("SHOW IS WORKING I AM HERE HELLO HELLO HELLO");
    console.log("showing specific flights");
    console.log("flight id", Flight.findById);
    console.log("req params id", req.params.id);
    Flight.findById(req.params.id, function(error, flight){
      res.render('flights/show',{
        flight,
        error
      })
    })
  }

export {
  index,
  newFlight as new,
  create,
  show,
}
