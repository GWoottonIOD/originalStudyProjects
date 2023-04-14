const sql = require("../models/db.js");
const fs = require("fs")
const path = require("path")
const likes_data = require('./likes.json');

//Gets all likes from db
function dbSetUp(result){
    let queries = fs.readFileSync(path.join(__dirname, 'likes.sql'), { encoding: "UTF-8" })
    console.log(queries)
    sql.query(queries, (err,res) => {
        console.log(err)
        if (err) {
            result(err, null)
        }
        else {
            insertLikes(result)
            console.log('Fetching likes')
        }
    })
}    

//Add a like into database
function insertLikes(result){
    let likesInsert= 'INSERT INTO LIKES (UserId, PlantId) VALUES ?'
    let likesArray=[]
    for (let l of likes_data){
        likesArray.push([l.UserId, l.PlantId])
    }
    console.log(likesArray)
        sql.query(likesInsert, [likesArray],
         (err,res)=> {
            if (err) {
                result(err, null)
            }
            else {
                result(res,null)
            }
        })
    }

module.exports= {insertLikes, dbSetUp, }