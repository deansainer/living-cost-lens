const pool = require('../db')

class CommentController{

    async getComments(req, res){
        const comments = await pool.query('select * from comments')
        res.json(comments.rows)
    }
    
    async createComment(req, res){
        const {countryName, userUsername, commentText} = req.body;
        const comment = await pool.query('insert into comments (country, username, text) values ($1, $2, $3)', [countryName, userUsername, commentText])
        res.json(comment.rows[0])
    }

    async getCommentsByCountry(req, res){
        const {countryName} = req.params;
        const comments = await pool.query('select * from comments where country=$1', [countryName])
        res.json(comments.rows)
    }

    async deleteComment(req, res){
        const {commentId} = req.params;
        const comment = await pool.query('delete from comments where id=$1', [commentId])
        res.json(comment.rows[0])
    }

}


module.exports = new CommentController();
