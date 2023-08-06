// Import the Express module
const express = require('express');
const db = require("./config/mongodb")
const app = express();
const bodyparser = require('body-parser')
const cors = require('cors')
const userRoutes = require("./routes/userRoutes")
const dashboardRoutes = require("./routes/dashboardRoutes")




app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



db.connection()

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.use('/auth',userRoutes)
app.use('/dashboard',dashboardRoutes)


// Start the server
const port = 8000; // You can change this to any port you prefer
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
