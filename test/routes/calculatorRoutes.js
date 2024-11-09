const express = require('express');
const calculatorRouter = express.Router();

// http://localhost:3000/calculator/add

calculatorRouter.get('/add', (req, res) => {
//     console.log(req.query)
// res.send(req.query)
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let sum = number1 + number2
console.log(sum)
res.status(200)
res.json({result:sum})
})


//sub
calculatorRouter.get('/subtract', (req, res) => {
    //     console.log(req.query)
    // res.send(req.query)
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 - number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
    })


    //divide

    calculatorRouter.get('/divide', (req, res) => {
        //     console.log(req.query)
        // res.send(req.query)
        let number1 = parseInt(req.query.num1);
        let number2 = parseInt(req.query.num2);
        let sum = number1 / number2
        console.log(sum)
        res.status(200)
        res.json({result:sum})
        })


        //multiply

        calculatorRouter.get('/multiply', (req, res) => {
            //     console.log(req.query)
            // res.send(req.query)
            let number1 = parseInt(req.query.num1);
            let number2 = parseInt(req.query.num2);
            let sum = number1 * number2
            console.log(sum)
            res.status(200)
            res.json({result:sum})
            })

module.exports = calculatorRouter;