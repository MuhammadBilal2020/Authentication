import express from "express"
import connectDB from "./src/db/index.js"
const app = express()
import cors from "cors"
import dotenv from "dotenv";
import userRoutes from "./src/routes/users.route.js";

dotenv.config(); 
let PORT = 5000
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Authentication!')
})

// routes
app.use("/api/v1", userRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️  Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });




//CLUSTER PASSWORD : AUTH1234