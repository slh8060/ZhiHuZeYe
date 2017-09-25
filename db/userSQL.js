/**
 * Created by apple on 2017/9/23.
 */

let UserSQL = {
    select:'select * from user_table',
    selectUser:'select _pwd from user_table where _name = ? ',
};

module.exports = UserSQL;
