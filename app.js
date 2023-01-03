// Dev imports
const express = require('express');
const morgan = require('morgan')
// Routes Import 
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes')

// Creating App 
const app = express();

// 1.   MIDDLEWARE

//Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(express.json());

// Building own middleware
app.use((req, res, next) => {
    console.log("Hello Middleware new git ");
    next();
})
app.use((req, res, next) => {
    req.reqTime = new Date().toISOString();
    next();
})

// Custom middleware of our routes
app.use('/api/v1/tour', tourRouter);
app.use('/api/v1/user', userRouter)


// Export app used in server.js
module.exports = app;



//Old Method of creating api 

// app.get('/',(req,res) => {
//     res.status(200).json({message: "hi", app: "Nators"});
// })

// app.post('/',(req,res)=>{
//     res.send("new end point")
// })



// app.get('/api/v1/tour',getAllTour)
// app.post('/api/v1/tour',addTour)
// app.get('/api/v1/tour/:id',getTour)
// app.patch('/api/v1/tour/:id',updateTour)
// app.delete('/api/v1/tour/:id',deleteTour)



