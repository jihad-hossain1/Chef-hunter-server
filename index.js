const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;
const foodReview = require('./data/reviews.json')
const chefdata = require('./data/chefdata.json')


app.use(cors())

app.get('/', (req, res) => {
    res.send('foodieCrush Hunter server is runnig ')
})
app.get('/foods', (req, res) => {
    res.send(foodReview)
})
app.get('/chefdata', (req, res) => {
    res.send(chefdata)
})

app.get('/chefdata/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    const data = chefdata.find(p => parseInt(p?.id) === id);
    res.send(data)
    // console.log(selectedChef);
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})