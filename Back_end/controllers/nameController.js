const mysqlConnection = require('../connectToDatabase');


exports.GetName = (req, res, next) => {
    mysqlConnection.query("SELECT name FROM argonaute", (err, rows, fields) => {
        if (!err)
            res.send(rows);

        else
            console.log(err);
    })
};

exports.AddName =  (req, res, next) => {
    var name = req.body.name;
    mysqlConnection.query("INSERT INTO `argonaute` (name) VALUES (?)", name.toString(), function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
    res.send(name);
};

// exports.deleteName = (req, res, next) => {
//     var Id = req.params.id;
//     mysqlConnection.query("DELETE FROM argonaute WHERE id=(?)", Id.toString(), function(err, result){
//         if(err) throw err;
//         console.log("1 row delete");
//     });
//     res.send("Suppression effectuée")
//     next();
// }


////////////////////////////////

exports.DeleteName = (req, res, next) => {
    var id = parseInt(req.params.id);
    var data = [id];
    mysqlConnection.query('DELETE FROM argonaute WHERE id=?', data, function(err, result){
        if(err) throw err;
        res.send("Une ligne supprimé");
    });
};

exports.ModifyName = (req, res, next) => 
{
    var name = req.body.name;
    var id = req.body.id;
    var data = [name, id];
    mysqlConnection.query('UPDATE argonaute SET name=? WHERE id=?', data, function(err, result){
        if(err) throw err;
        res.send("Une ligne modifiée");
    });

}