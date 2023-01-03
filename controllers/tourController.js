const fs = require('fs');


const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
)

// middleware funtion
exports.checkID = (req, res, next, val) => {
    console.log("HERE")
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id)
    if (!tour) {
        return res.status(404).json({
            status: 'fail',
            message: "Invalid ID"
        })
    }
    next();
}

exports.checkBody = (req, res, next) => {
    console.log(req.body, "yhi");
    if (!req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('price')) {
        return res.status(404).json({
            status: "failed"
        })
    }
    next();
}


exports.getAllTour = (req, res) => {
    console.log(req.reqTime)
    res.status(200).json({
        status: "Success",
        results: tours.length,
        data: {
            tours
        }
    })
}
exports.getTour = (req, res) => {
    console.log(req.params)
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id)
    res.status(200).json({
        status: "Success",
        data: {
            tour
        }
    })
}

exports.addTour = (req, res) => {
    console.log(req.body)
    const newDI = tours[tours.length - 1].id + 1;
    const newTour = { ...req.body, id: newDI };
    console.log(newTour);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
        res.status(201).json({
            status: "Success",
            data: {
                tour: newTour
            }
        })
    })
}

exports.updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: "<updated tour>"
        }
    })
}

exports.deleteTour = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    })
}
