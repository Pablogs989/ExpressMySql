const db = require("../config/database");

const OrderController = {
    insert(req, res) {
        let sql = `INSERT INTO orders (fecha, user_id) values
              ('${req.body.date}', '${req.body.user_id}');`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("Order added...");
        });
    },
    getAll(req, res) {
        let sql = "SELECT * FROM orders";
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },
}

module.exports = OrderController