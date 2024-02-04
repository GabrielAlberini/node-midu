import fs from "node:fs";

console.log("Leyendo el primer archivo de forma asincrónica.");
fs.readFile("./clase-1/input.txt", "utf8", (err, data1) => {
  console.log("data del primer archivo: ", data1);
});
console.log("---- Haciendo otras tareas ----");

console.log("Leyendo el segundo archivo de forma asincrónica.");
fs.readFile("./clase-1/input2.txt", "utf8", (err, data2) => {
  console.log("data del segundo archivo: ", data2);
});
