const express = require("express")
const tourController = require('../controllers/tourController')


const router = express.Router();

// Param middleware
router.param('id', tourController.checkID)
// router.use((req,res,next)=>{
//     console.log("Hello Middleware TOUR");
//     next();
// })



//Tours
router.route('/')
    .get(tourController.getAllTour)
    .post(tourController.checkBody, tourController.addTour);


router.route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)


module.exports = router