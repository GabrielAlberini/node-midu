import fs from "node:fs/promises";

console.log("Leyendo el primero archivo de forma sincrónica.");
const input = await fs.readFile("./clase-1/input.txt", "utf8");
console.log("data del primer archivo: ", input);

console.log("---- Haciendo otras tareas ----");

console.log("Leyendo el segundo archivo de forma sincrónica.");
const data2 = await fs.readFile("./clase-1/input2.txt", "utf8");
console.log("data del segundo archivo: ", data2);
