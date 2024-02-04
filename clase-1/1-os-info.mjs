import os from "node:os";

console.log("Información del sistema operativo:");
console.log("----------------------------------");

console.log("Nombre del sistema operativo:", os.platform());
console.log("Versiòn del sistema operativo:", os.release());
console.log("Arquitectura del sistema operativo:", os.arch());
console.log("Cpu del sistema operativo:", os.cpus());
console.log("Memoria total del sistema operativo:", os.totalmem() / 1024);
console.log("Memoria libre del sistema operativo:", os.freemem() / 1024 / 1024);
console.log("Uptime", os.uptime() / 60 / 60);
