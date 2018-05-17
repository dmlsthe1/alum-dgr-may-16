const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const morgan = require("morgan");
const PORT = process.env.PORT || 8080;
let url = "";
let abort = true;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.post("/origin", (req, res) => {
  const obj = {...req.body};
  if(obj.devin === undefined){
    obj.devin = 0;
  }
  obj.devin++;
  console.log('obj.devin: ', obj.devin);
  if(abort){
    axios.post(`${url}/origin`, obj).then(()=>null).catch(()=>null);
  }
  res.sendStatus(200);
});


app.get("*", (req, res) => {
  const obj = {devin: 0};
  abort = !abort;
  url = `http:/${req.url}`;
  axios.post(`${url}/origin`, obj).then(()=>null).catch(()=>null);
  res.send("And the cycle Begins");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});