var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('zc');
});

// 用户注册
router.get('/zc',function (req, res, next) {
    // 从连接池获取连接
    pool.getConnection(function (err, connection) {
        // 获取前台页面传过来的参数
        var param = req.query || req.params;
        var userName = param.userName;
        var Password = param.Password;
        var number = param.number;
        var email = param.email;
        var _res = res;
        connection.query(userSQL.queryAll, function (err, res) {
            var isTrue = false;
            if(res){ //获取用户列表，循环遍历判断当前用户是否存在
                for (var i=0;i<res.length;i++) {
                    if(res[i].uid == userName && res[i].userName == Password) {
                        isTrue = true;
                    }
                }
            }
            var data = {};
            data.isreg = !isTrue; //如果isTrue布尔值为true则登陆成功 有false则失败
            if(isTrue) {
                data.result = {
                    code: 1,
                    msg: '用户已存在'
                };//登录成功返回用户信息
            } else {
                connection.query(userSQL.insert, [param.userName,param.password,param.number,param.email], function (err, result) {
                    if(result) {
                        data.result = {
                            code: 200,
                            msg: '注册成功'
                        };
                    } else {
                        data.result = {
                            code: -1,
                            msg: '注册失败'
                        };
                    }
                });
            }

            if(err) data.err = err;
            // 以json形式，把操作结果返回给前台页面
            setTimeout(function () {
                responseJSON(_res, data)
            },300);
            // responseJSON(_res, data);
            // 释放链接
            connection.release();

        });
    });
});

module.exports = router;