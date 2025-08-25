// const express = require('express')
// const aiRoutes = require('./routes/ai-routes')

// const app = express()

// app.get('/',(req, res) => {
//     res.send('Hello from backend')
// })

// app.use('/ai', aiRoutes)

// module.exports = app 

const express = require('express');
const aiRoutes = require('./routes/ai-routes');

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello from backend');
});

app.use('/ai', aiRoutes);

module.exports = app;
