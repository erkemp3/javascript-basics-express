const express = require('express');

const app = express();

app.use(express.json());

const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters } = require('./lib/strings');

const { 
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
} = require ('./lib/numbers');

// Strings

app.get('/strings/hello/:string', (req, res) => {
res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
  res.json({ result: firstCharacters(req.params.string, req.query.length) }); 
  } else {
  res.json({ result: firstCharacter(req.params.string) });
  }
  });

// Numbers

app.get('/numbers/add/:a/and/:b', (req, res) => {
const a = parseInt(req.params.a, 10);
const b = parseInt(req.params.b, 10);

return Number.isNaN(a) || Number.isNaN(b)
? res.status(400).json({ error: 'Parameters must be valid numbers.' })
: res.status(200).json({ result: add(a, b) });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
const a = parseInt(req.params.a, 10);
const b = parseInt(req.params.b, 10);

return Number.isNaN(a) || Number.isNaN(b)
? res.status(400).json({ error: 'Parameters must be valid numbers.' })
: res.status(200).json({ result: subtract(b, a) });
});

app.post('/numbers/multiply', (req, res) => {
if(!req.body.a || !req.body.b) {
res.status(400).json({ error: 'Parameters "a" and "b" are required.' })
} else if (isNaN(req.body.a) || isNaN(req.body.b)) {
res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' })
} else {
res.status(200).json({ result: multiply(req.body.a, req.body.b) });
}
});

app.post('/numbers/divide', (req, res) => {
if(req.body.a == null || req.body.b == null) {
res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
}

const a = Number(req.body.a);
const b = Number(req.body.b);

if(b === 0) {
res.status(400).json({ error: 'Unable to divide by 0.' })
}
else if (isNaN(a) || isNaN(b)) {
res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' })
} else {
res.status(200).json({ result: divide(a, b) });
}
});

app.post('/numbers/remainder', (req, res) => {
if(req.body.a == null || req.body.b == null) {
res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
}

const a = Number(req.body.a);
const b = Number(req.body.b);

if(b === 0) {
res.status(400).json({ error: 'Unable to divide by 0.' })
}
else if (isNaN(a) || isNaN(b)) {
res.status(400).json({ error: 'Parameters must be valid numbers.' })
} else {
res.status(200).json({ result: remainder(a, b) });
}
});


module.exports = app;

