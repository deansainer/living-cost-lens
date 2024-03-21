const pool = require('../db')

class CommentController{

    async getComments(req, res){
        const comments = await pool.query('select * from comments')
        res.json(comments.rows)
    }
    
    async createComment(req, res){
        const {countryId, userUsername, commentText} = req.body;
        const comment = await pool.query('insert into comments (country_id, user_username, comment_text) values ($1, $2, $3)', [countryId, userUsername, commentText])
        res.json(comment.rows[0])
    }

}


module.exports = new CommentController();