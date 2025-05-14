const express = require("express");
const userRoutes = require("./routes/user.routes");
const articleRoutes = require("./routes/article.routes");
const app = express();

require("./config/db");

app.use(express.json());

app.use("/api/users", userRoutes);

app.use("/api/articles", articleRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT} 🎉`);
});
