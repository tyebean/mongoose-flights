import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"
const router = Router()


// GET index
router.get("/", flightsCtrl.index)
// GET new form
router.get("/new", flightsCtrl.new) 
// router.get('/:id', flightsCtrl.show)
router.get('/:id', flightsCtrl.show)

//POST create
router.post("/", flightsCtrl.create) 

export {
  router
}
