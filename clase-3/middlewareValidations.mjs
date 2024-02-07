import movies from "./movies.json" assert { type: "json" };

const validateUnique = async (req, res, next) => {
  const { title } = req.body;
  const movie = movies.find((movie) => movie.title === title);
  if (movie) {
    res.status(400).send({
      error: "Este título ya existe",
    });
  } else {
    next();
  }
};

const validateData = async (req, res, next) => {
  const { title, year, director, poster, genre, rate, duration } = req.body;
  if (
    title &&
    director &&
    year &&
    title &&
    poster &&
    genre &&
    duration &&
    rate
  ) {
    next();
  } else {
    res.status(400).send({
      error: "Datos incompletos",
    });
  }
};

export { validateUnique, validateData };
