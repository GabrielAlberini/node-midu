import express from "express";
import fs from "node:fs/promises";
import crypto from "node:crypto";
import movies from "./movies.json" assert { type: "json" };
import { validateData, validateUnique } from "./middlewareValidations.mjs";

const app = express();
app.disable("x-powered-by");

app.use(express.json());

app.get("/movies", async (req, res) => {
  try {
    const { genre } = req.query;
    if (genre) {
      const filteredMovies = movies.filter((movie) =>
        movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
      );
      res.send(filteredMovies);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/movies/:id", async (req, res) => {
  try {
    const movie = movies.find((movie) => movie.id === req.params.id);
    if (!movie) {
      res.status(404).send({ message: "Movie not found" });
    }
    res.send(movie);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/movies", validateUnique, validateData, async (req, res) => {
  try {
    const newMovie = { id: crypto.randomUUID(), ...req.body };
    movies.push(newMovie);
    await fs.writeFile("./movies.json", JSON.stringify(movies));
    res.send(newMovie);
  } catch (error) {
    res.status(500).send(error);
  }

  res.end();
});

app.use((req, res) => {
  res.status(404).send({
    status: 404,
    message: "Not found",
    index: {
      title: "Movies api",
      url: "/movies",
    },
  });
});

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
