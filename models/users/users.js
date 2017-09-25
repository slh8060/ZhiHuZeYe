/**
 * Created by apple on 2017/9/23.
 */

function User(user) {
    this.username = user.username;
    this.password = user.password;
}
User.getUserbyUsername = function (username, callback) {
    var selectSql = 'select * from user_table where user_name = ?';
    connection.query(selectSql,function (err,result) {
        if (err){
            console.log('SELECT ERROR -',err.message);
            return;
        }

        console.log(result);
    });
};
module.exports = User;
