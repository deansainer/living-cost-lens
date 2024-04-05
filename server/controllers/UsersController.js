const pool = require("../db");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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
      const {username, password} = req.body;
      const isUserExists = await pool.query('select * from users where username=$1', [username])
      if(!isUserExists.rows[0] && password){
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await pool.query("insert into users (username, password) values ($1, $2)", [username, hashedPassword])
        const token = jwt.sign({username}, 'secret', {expiresIn: '1hr'})            
        res.json({username, token})
      } else {
        res.json('user already exists')
      }
    } 
    catch (error) {
      res.send(error);
    }
  }

  async logIn(req, res){
    const {username, password} = req.body;
    try {
      const user = await pool.query('select * from users where username = $1', [username])
      const passwordMatch = await bcrypt.compare(password, user.rows[0].password)
      if (!user.rows[0]){
        res.json({error: 'User doesnt exists'})           
      } else if(passwordMatch) {
        const token = jwt.sign({username}, 'secret', {expiresIn: '1hr'})
        res.json({username: user.rows[0].username, token}) 
      } else{
        res.json('invalid password')
      }
    } catch (error) {
      res.send(error);
    }
  }

  async createUserComment(req, res){
    const {countryId, userUsername, commentText} = req.body;
    try {
      const comment = await pool.query('insert into comments(country_id, user_username, comment_text) values($1, $2, $3)', [countryId, userUsername, commentText])
      res.json('success')
    } catch (error) {
      res.json(error)
    }
  }

  async getComments(req, res){
    try {
      const comments = await pool.query('select * from comments')
      res.json(comments.rows)
    } catch (error) {
      res.json(error)
    }
  }


}

  
module.exports = new UsersController();
