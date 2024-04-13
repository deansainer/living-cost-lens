const express = require('express');
const cors = require('cors');
const CostOfLivingRouter = require('./routes/CostOfLivingRouter')
const app = express();


app.use(cors());

app.use(express.json())

app.get('', (req, res) => {
    res.send('Server is running')
})

app.use('/api',CostOfLivingRouter)

app.listen(3001,() => console.log('server is running on 3001 port'))