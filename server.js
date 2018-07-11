const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const checkType = require('./checkType');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8080;


app.get('/', function (req, res) {
    res.render('index');
})

app.post('/', function (req, res) {
    let firstName = req.body.firstName.replace(/ /g,'');
    let secondName = req.body.secondName.replace(/ /g,'');

    firstName = firstName.toLowerCase();
    secondName = secondName.toLowerCase();

    var numberToUse = checkType.getCount(firstName,secondName);
    var charWeGet = checkType.getType(numberToUse);
    var resultJSON = checkType.getStatus(charWeGet);

    //console.log(resultJSON);
    res.render('index2',resultJSON);
})

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
