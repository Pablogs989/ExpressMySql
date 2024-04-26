const db = require("../config/database");

const ProductController = {
    insert(req, res) {
        let sql = `INSERT INTO products (name_product, price) values
              ('${req.body.name}', '${req.body.price}');`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("Product added...");
        });
    },
    update(req, res) {
        let sql = `UPDATE products SET name_product = '${req.body.name}' WHERE id = ${req.body.id}`;
        db.query(sql, (err) => {
            if (err) throw err;
            res.send("Product updated...");
        });
    },
    getAll(req, res) {
        let sql = "SELECT * FROM products";
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },
    getProductCategory(req, res) {
        let sql = `SELECT name_product, name_category FROM ecommerce.productoscategorias 
        INNER JOIN ecommerce.categories ON categories.id = productoscategorias.category_id
        INNER JOIN ecommerce.products ON products.id = productoscategorias.product_id;`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },
    getById(req, res) {
        let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },
    getByIdDesc(req, res) {
        let sql = `SELECT * FROM ecommerce.products order by id desc;`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },
    getByName(req, res) {
        let sql = `SELECT * FROM products WHERE name_product = '${req.params.name}'`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },
    deleteById(req, res) {
        let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          res.send("Post deleted");
        });
      }
}

module.exports = ProductController