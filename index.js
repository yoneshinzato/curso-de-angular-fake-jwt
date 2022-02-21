const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/sign", (req, res) => {
  const email = "dener@vidafullstack.com.br";
  const password = "123";

  const data = {
    nome: "Dener Troquatte",
    email,
    role: ["sysAdmin"],
  };

  if (req.body.user === email && req.body.password === password) {
    const token = jwt.sign({ data }, "SECRET", {
      expiresIn: 300,
    });
    return res.json({ token: token });
  }

  res.status(500).json({ message: "Login inválido!" });
});

app.listen(port, () => {
  console.log(`Link => http://localhost:${port}`);
});
