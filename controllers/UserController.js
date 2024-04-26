const db = require("../config/database");

const UserController = {
    insert(req, res) {
        let sql = `INSERT INTO users (first_name, last_name, phone) values
              ('${req.body.first_name}', '${req.body.last_name}', ${req.body.phone});`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("User added...");
        });
    },
    update(req, res) {
        let sql = `UPDATE Users SET first_name = '${req.body.first_name}' WHERE id = ${req.body.id}`;
        db.query(sql, (err) => {
            if (err) throw err;
            res.send("User updated...");
        });
    },
    getAll(req, res) {
        let sql = "SELECT * FROM users";
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },
    getById(req, res) {
        let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    },
    deleteById(req, res) {
        let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("User deleted");
        });
    },
    getUserOrders(req, res) {
        let sql = `SELECT * FROM orders INNER JOIN users ON orders.user_id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    }
}

module.exports = UserController