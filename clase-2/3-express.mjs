import express from "express";

const app = express();
app.disable("x-powered-by");

app.use(express.json());

// app.use((req, res, next) => {
//   if (req.method !== "POST") return next();
//   console.log(req.headers);
//   if (req.headers["content-type"] !== "application/json; charset=utf-8")
//     return next();

//   // solo llegan request que son POST y que tienen el header Content-Type: application/json
//   let body = "";

//   // escuchar el evento data
//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });

//   req.on("end", () => {
//     const data = JSON.parse(body);
//     data.timestamp = Date.now();
//     // mutar la request y meter la información en el req.body
//     req.body = data;
//     next();
//   });
// });

app.get("/", (req, res) => {
  res.json({
    characters: "/characters",
  });
});

app.post("/characters", (req, res) => {
  const newCharacter = {
    message: "Character created",
    character: req.body,
  };
  res.status(201).json(newCharacter);
});

app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
