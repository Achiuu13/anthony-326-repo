import express from 'express';

const app = express();
app.set("view engine", "ejs");
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, web!');
});

app.get('/hello', (req, res) => {
  res.send('I will be learning Web Dev.');
});

app.get('/hello/:name', (req, res) => {
  const name = req.params.name
  res.send(`Hello, ${name}!`)
});

app.get('/repeat/:word', (req, res) => {
  const word = req.params.word
  res.send(`${word} ${word} ${word}`)
});

app.get('/count', (req, res) => {
  const from = req.query.from || 1
  const to = req.query.from || 10

  res.send(`Counting from ${from} to ${to}.`)
});

app.get('/api/info', (req, res) => {
  res.json({
    course: "COMPSCI 326",
    team: 3
  })
});

app.get('/api/error', (req, res) => {
  res.status(400).send("Bad Request")
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// work in progress
// step one
// step two
// step three
// checkpoint 1
// checkpoint 2
// checkpoint 3
// BUG: off-by-one introduced here
// checkpoint 4
// checkpoint 5
// stable checkpoint
