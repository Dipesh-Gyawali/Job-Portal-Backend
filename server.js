import express from "express";

//rest object
const app = express();

//port
// const PORT = process.env.PORT || 8080;
//listen
// app.listen(PORT, () => {
//   console.log(
//     `Node Server Running In ${process.env.DEV_MODE} Mode on port no ${PORT}`
//       .bgCyan.white
//   );
// });

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(8080);
