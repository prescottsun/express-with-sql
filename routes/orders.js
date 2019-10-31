const express = require('express'),
    router = express.Router(),
    ordersModel = require('../models/ordersModel');
    
router.get('/', async function(req, res, next) {
    const ordersData = await ordersModel.getAll();
    // console.log('orders data', ordersData);
    res.render('template', {
        locals: {
            title: "ExampleDB Orders Page",
            data: ordersData
        },
        partials: {
            partial: "partial-orders"
        }
    });
});

module.exports = router;
