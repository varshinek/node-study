const express = require("express");
const app = express();
const port = 3000;

//GET Menu is equal to get the already present data from DB
app.get("/menu",(req,res) => {
    const newItem = req.query.new;
    res.send(`Menu: Small Lemonade, Medium Lomonade, Large Lemomade, ${newItem}`);
});

//POST order is wqual to inserting new data into DB
app.post("/order",(req, res) => {
    const size = req.query.size;
    res.send(`Thank you, Order Received: ${size} `)
});

//PUT order is equal to updating the already resent data in DB
app.put("/order",(req, res) => {
    const size = req.query.size;
    res.send(`Thank you, Order is updated to Received: ${size} `)
});

//DELETE order is equal to deleting the data in DB
app.delete("/order",(req, res) => {
    res.send("Thank you, Order has been deleted")
});

app.listen(port, () => {
    console.log(`Lemonade stand listening at http://localhost:${port}`)
});
