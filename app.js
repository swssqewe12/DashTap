const express = require('express')
//const cookieParser = require('cookie-parser')
//const bodyParser = require('body-parser')
//const session = require('express-session');
const app = express()

app.use(express.static('static'))
//app.use(cookieParser())
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(session({'secret': 'SECRET_GOES_HERE'}))

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/', function (req, res) {
	res.render('index.html')
})

app.listen(process.env.PORT || 8000, function () {
	console.log('DashTap app is running!')
})
