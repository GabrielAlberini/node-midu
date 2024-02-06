import http from "node:http";
import fs from "node:fs/promises";
import characters from "./characters.json" assert { type: "json" };

const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case "GET":
      if (url === "/") {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({
            characters: "/characters",
          })
        );
      } else if (url === "/characters") {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(characters));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "Not found" }));
      }
    case "POST":
      if (url === "/characters") {
        let body = "";

        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", async () => {
          try {
            const character = JSON.parse(body);
            characters.results.push(character);
            await fs.writeFile("./characters.json", JSON.stringify(characters));
            res.writeHead(201, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(character));
          } catch (error) {
            console.error(error);
            res.writeHead(500, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({ error: "Internal server error" }));
          }
        });
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "Not found" }));
      }
    default:
      res.writeHead(405, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "Method not allowed" }));
  }
};

const server = http.createServer(processRequest);

server.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
