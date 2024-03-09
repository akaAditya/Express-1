const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const adminRouter = require("./Routes/admin");
const shopRouter = require("./Routes/shop");
const contactRouter = require("./Routes/contact");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use("/admin", contactRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(4000);
