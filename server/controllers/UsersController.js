const pool = require("../db");
var jwt = require('jsonwebtoken');

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
      const token = jwt.sign({email}, 'secret', {expiresIn: '1hr'})            
      res.json({email, token})
    } 
    catch (error) {
      res.send(error);
    }
  }

  async logIn(req, res){
    const {email, password} = req.body;
    try {
      const user = await pool.query('select * from users where email = $1', [email])
      if (!user.rows[0]){
        res.json({error: 'Incorrect user data.'})           
      } else {
        const token = jwt.sign({email}, 'secret', {expiresIn: '1hr'})
        res.json({email: user.rows[0].email, token}) 
      }

      
      
    } catch (error) {
      res.send(error);
    }
  }

  


}

  
module.exports = new UsersController();
