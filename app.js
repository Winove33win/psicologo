// app.js
const express = require("express");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 3000;

// Pequenas proteções + gzip
app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());

// Servir estáticos da pasta /public
app.use(
  express.static(path.join(__dirname, "public"), {
    index: "index.html",
    maxAge: "1d",
    etag: true,
  })
);

// Fallback para SPA (qualquer rota volta pro index.html)
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server rodando em http://localhost:${PORT}`);
});
