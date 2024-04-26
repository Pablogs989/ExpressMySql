const db = require("../config/database");

const CategoriesController = {
  insert(req, res) {
    let sql = `INSERT INTO Categories (name_category, _description) values
              ('${req.body.name}', '${req.body.description}');`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Categories added...");
    });
  },
  update(req, res) {
    let sql = `UPDATE categories SET name_category = '${req.body.name}' WHERE id = ${req.body.id}`;
    db.query(sql, (err) => {
      if (err) throw err;
      res.send("Categories updated...");
    });
  },
  getAll(req, res) {
    let sql = "SELECT * FROM categories";
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
  getById(req, res){
    let sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
}

module.exports = CategoriesController;