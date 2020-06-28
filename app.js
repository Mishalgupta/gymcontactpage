// Express is a web application framework for JS
const express = require("express");
const path = require("path");
const app = express();
const fs = require('fs');
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))// For serving static files
app.use(express.urlencoded());//ye form ka data express tak lane mai help karta hai

//PUG SPECIFIC STUFF
app.set('view engine', 'pug')// Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))// Set the views directory

//END POINTS
app.get('/', (req, res) => {
    const con = 'this is the best content.'
    const params = { 'title': 'pubg is the bad game', "content": con }
    res.status(200).render('index.pug', params);
});

app.post('/', (req, res) => {
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputtowrite = `The name of the client us ${name},${age},${gender},residing at${address}, more about him/her${more}`
    fs.writeFileSync('output.txt', outputtowrite);

    const params = { 'title': 'your form is submit sucessfully' }
    res.status(200).render('index.pug', params);

});

//START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});