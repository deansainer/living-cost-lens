const pool = require("../db");

class UsersController {

  async getUsers(req, res) {
    try {
      const users = await pool.query("select * from users");
      res.send(users.rows);
    } catch (error) {
      res.send(error)
    }

  }

  async signUp(req, res){
    try {
      const {email, password} = req.body;
      const user = await pool.query("insert into users (email, password) values ($1, $2)", [email, password])
      res.send(user.rows)
    } catch (error) {
      res.send(error);
    }
  }

  async logIn(req, res){
    try {
      res.send('Login functionality isnt finished')
    } catch (error) {
      res.send(error);
    }
  }

  


}

  
module.exports = new UsersController();
