//use Express libary
const express = require('express');
const path = require ('path');
//create an application running on Express libary
const app = express();
const router = express.Router();
const port = process.env.port || 3000
router.get('/home',(req,res) =>{
            //the same as res.write/res.end in previous labs ( without us Express)
            // no need to write to HTTP response header: Content-type    
            //res.send(' Hello World, This is ATN HOME page');
            res.sendFile(path.join(__dirname+ '/home.html')); 
        });
 router.get('/addproduct',(req,res) =>{
            //the same as res.write/res.end in previous labs ( without us Express)
            // no need to write to HTTP response header: Content-type      
            //res.send(' Hello World, This is PRODUCT page');   
			res.sendFile(path.join(__dirname+ '/addproduct.html'));
        }); 
router.get('/addcustomer',(req,res) =>{
            //the same as res.write/res.end in previous labs ( without us Express)
            // no need to write to HTTP response header: Content-type 
            //res.send(' Hello World, This is CUSTOMER page');
			res.sendFile(path.join(__dirname+ '/addcustomer.html'));
        });   
router.get('/cart',(req,res) =>{
            //the same as res.write/res.end in previous labs ( without us Express)
            // no need to write to HTTP response header: Content-type 
            res.send(' Hello World, This is CART page');
        });    
app.use('/', router);        
app.listen(port);
console.log(`My app is running at port ${port}`);