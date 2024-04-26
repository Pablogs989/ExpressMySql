const express = require("express");
const app = express();
const db = require("./config/database")
const PORT = 3000;

app.use(express.json());

app.use("/products",require("./routes/products"))

app.use("/categories",require("./routes/categories"))

app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE Ecommerce;";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

app.get("/createproductstable", (req, res) => {
  let sql = "CREATE TABLE ecommerce.products(id INT AUTO_INCREMENT, name_product VARCHAR(50), price INT, PRIMARY KEY(id));";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Products table created...");
  });
});

app.get("/createcategoriestable", (req, res) => {
    let sql = "CREATE TABLE ecommerce.categories(id INT AUTO_INCREMENT, name_category VARCHAR(50), _description VARCHAR(50), PRIMARY KEY(id));";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Categories table created...");
    });
  });

  app.get("/createproductoscategorias", (req, res) => {
    let sql = "CREATE TABLE ecommerce.productoscategorias(id INT AUTO_INCREMENT, product_id INT, category_id INT, PRIMARY KEY(id), FOREIGN KEY(product_id) REFERENCES ecommerce.products(id) ON DELETE CASCADE, FOREIGN KEY(category_id) REFERENCES ecommerce.categories(id));";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("productoscategorias table created...");
    });
  });
  
app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));