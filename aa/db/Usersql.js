var UserSQL = {
    insert: 'INSERT INTO User(user_name,user_password,user_phone,user_email) VALUES(?,?,?,?)', // 插入数据
    drop: 'DROP TABLE User', // 删除表中所有的数据
    queryAll: 'SELECT * FROM User', // 查找表中所有数据
    getUserById: 'SELECT * FROM User WHERE id =?', // 查找符合条件的数据
};
module.exports = UserSQL;
