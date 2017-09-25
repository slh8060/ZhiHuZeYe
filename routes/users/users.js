const express = require('express');
const router = express.Router();
//导入mysql模块
const mysql = require('mysql');
const dbConfig = require('../../db/dbConfig');
const userSQL = require('../../db/userSQL');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
const pool = mysql.createPool(dbConfig.mysql);


/* GET users listing. */
router.get('/users', function (req, res, next) {
    res.send('respond with a resource');
});


router.all('/login', function (req, res) {
    let paramStr = new Buffer(req.query.p, 'base64').toString();//Base64解码,结果为：{"username":"qzsang","password":"123456"}
    let param = JSON.parse(paramStr);//Json 字符串转为对象
    let userName = param.username;
    let userPwd = param.userpwd;
    let results = {};

    pool.getConnection(function (err, connection) {
        connection.query(userSQL.selectUser,userName, function (err, result) {
            if (result.length != 0) {
                if (result[0]._pwd == userPwd) {
                    res.send('登录成功');
                } else {
                    res.send('用户名或密码错误');
                }
            } else {
                res.send('用户名不存在')
            }



            connection.release(); // 释放连接

        });
    });

});

module.exports = router;
