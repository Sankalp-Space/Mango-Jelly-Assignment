const Comic = require("../models/Comic");

// Create a comic book
exports.createComic = async (req, res) => {
  try {
    const newComic = new Comic(req.body);
    const savedComic = await newComic.save();
    res
      .status(201)
      .json(savedComic);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get list of comic books
exports.getComics = async (req, res) => {
  const { page = 1, limit = 10, author, year, price, condition } = req.query;
  const filter = {};

  if (author) filter.author = author;
  if (year) filter.year = year;
  if (price) filter.price = { $lte: price };
  if (condition) filter.condition = condition;

  try {
    const comics = await Comic.find(filter)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ price: 1 }); // Sorting by price
    const total = await Comic.countDocuments(filter);
    res.json({ comics, total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get comic book details by ID
exports.getComicById = async (req, res) => {
  try {
    const comic = await Comic.findById(req.params.id);
    if (!comic) return res.status(404).json({ message: "Comic not found" });
    res.json(comic);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a comic book
exports.updateComic = async (req, res) => {
  try {
    const comic = await Comic.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!comic) return res.status(404).json({ message: "Comic not found" });
    res.json(comic);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a comic book
exports.deleteComic = async (req, res) => {
  try {
    const comic = await Comic.findByIdAndDelete(req.params.id);
    if (!comic) return res.status(404).json({ message: "Comic not found" });
    res.json({ message: "Comic deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
