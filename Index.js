// Latihan 7.9
var http = require('http') 
var express = require('express') 
var app = express() 
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

var persons = [] 
app.post('/person', (req, res)=>{
    persons.push(req.body)
     res.json(req.body)
 })
	 
app.get('/person', (req, res)=>{
     res.json(persons)  
 })

 http.createServer(app) 
 .listen(8000, ()=>{     
    console.log('Server is running on port 8000')
})


// Latihan 7.8
// var data = []; app.get('/data', (req, res)=>{     
//     res.json(data) 
// })  

// app.post('/data', (req, res)=>{     
//     data.push(Date.now())     
//     res.json(data) 
// }) 

// Latihan 7.7
// app.get('/users/:userId/books/:bookId', (req, res) => {     
//     res.send(req.params) 
// }) 

// Latihan 7.6
// app.get('/home', (req, res)=>{     
//     res.end('Home') 
// })  

// app.get('/about', (req, res)=>{     
//     res.end('About') 
// }) 


// Latihan 7.5
// var http = require('http') 
// var express = require('express') 
// var app = express() 

// app.get('/', (req, res)=>{ 
//     res.end('Konten dari method GET') 
// })  

// app.post('/', (req, res)=>{     
//     res.end('Konten dari method POST') 
// })  

// http.createServer(app) 
// .listen(8000, ()=>{     
//     console.log('Server is running on port 8000') 
// }) 


// Latihan 7.4
// var http = require('http') 
// var express = require('express') 
// var app = express() 

//     app.get('/', (req, res)=>{     
//         res.end('Konten dari method GET') 
//     })  

//     http.createServer(app) .listen(8000, ()=>{     
//         console.log('Server is running on port 8000') 
//     }) 


// Latihan 7.3
// var express = require('express') 
// var app = express() 
 
// app.get('/', (req, res)=>{ 
//     res.end('Konten dari method GET') 
// })  
// app.listen(8000, ()=>{ console.log('Server is running on port 8000') }) 


// Latihan 7.2
// var http = require('http'); 
//  http.createServer( (req, res)=>{     
//      if(req.url == '/home')         
//         res.write('<p>Konten Home</p>')     
//      else if(req.url == '/product')         
//         res.write('<p>Konten Product</p>')     
//      else if(req.url == '/order')         
//         res.write('<p>Konten Order</p>')     
//      else if(req.url == '/')         
//         res.write('<p>Pengembangan Aplikasi Aplikasi Web dengan Nodejs</p>')     
//      else          
//         res.write('<h1>404</h1>')     
//      res.end(); 
//     }).listen(8000, ()=>{     
//          console.log('Server is running on port 8000') 
//     }); 


// Latihan 7.1
// var http = require('http'); 
 
//create a server object: 
//http.createServer( (req, res) => {   
//    res.write('<p>Pengembangan Aplikasi Aplikasi Web dengan Nodejs</p>'); 
//write a response to the client   res.end(); //end the response 
// }).listen(8000, ()=>{ 
//     console.log('Server is running on port 8000') 
// }); 
//the server object listens on port 8000 
