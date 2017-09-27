/**
 * Created by apple on 2017/9/23.
 */

let UserSQL = {
    selectUserAll:'select * from user_table',
    selectUserOne:'select _id,_pwd from user_table where _name = ? ',
    insertUserOne:'insert into user_table(_name,_pwd) values(?,?)'

};
function _compile(s) {

}
module.exports = UserSQL;
