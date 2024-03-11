const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(cors());

mongoose.connect("mongodb://localhost:27017/resturants", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const userSchema = new mongoose.Schema({
  name: String,
  res_id: Number,
  rating: Number,
  del_time: String,
  cusines: String,
  veg: String,
  res_img: String,


});

const User = mongoose.model("User", userSchema, "info");
app.get("/", (req, res) => {
  console.log("- - -Hello from Server");
  res.send("Hello from server!!");
});

app.get("/restaurant", async (req, res) => {
  try {
   
    const restaurant = await User.find();
    res.json(restaurant);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/restaurant/:res_id", async (req, res) => {
  try {
    const { res_id } = req.params;

    // Assuming res_id is a numeric value, you might want to validate it here

    const restaurant = await User.findOne({ res_id: res_id });
    
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }

    res.json(restaurant);
  } catch (error) {
    console.error("Error fetching restaurant:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(8000, () => 
    console.log("------- Server started on port 8000")
);
