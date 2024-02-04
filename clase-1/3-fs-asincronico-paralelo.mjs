import fs from "node:fs/promises";

// Promise.all([
//   fs.readFile("./clase-1/input.txt", "utf8"),
//   fs.readFile("./clase-1/input2.txt", "utf8"),
// ])
//   .then(([data1, data2]) => {
//     console.log("Data de primer texto:", data1);
//     console.log("Data de segundo texto:", data2);
//   })
//   .catch((err) => {
//     console.log("Hubo un error :(");
//   })
//   .finally(() => {
//     console.log("Lectura terminada.");
//   });

const filesPath = ["./clase-1/input.txt", "./clase-1/input2.txt"];

console.time();
console.log("-- COMENZANDO A LEER ARCHIVOS --");

const readFiles = async (files) => {
  return await Promise.all(files.map((file) => fs.readFile(file, "utf8")));
};

const main = async (files) => {
  try {
    const data = await readFiles(files);
    console.log("Data de primer texto:");
    console.log("Data de segundo texto:");
    console.timeEnd();
  } catch (error) {
    console.log("Hubo un error :(");
  }
};

main(filesPath);

console.log("-- TERMINANDO DE LEER ARCHIVOS --");
