const express = require('express');
const fs = require('fs')
const { exec } = require("child_process");
const cors = require('cors')
const app = express();
require('dotenv').config({path: './.env'})

app.use(cors())
app.use(express.json());

app.get('/', function(req, res){
      console.log("GET /" );
      res.end("Hello World");
})

app.get('/speed-test', function (req, res){
    const a = Date.now();
    let download_string = "sleep 5; wget http://localhost:8000/ -O /tmp/" + req.query.s;
    exec(download_string, (error, stdout, stderr) => {
        const b = Date.now();        
        const difference = Math.floor(b - a)/1000;
        console.log(`${stdout}`);
        try{
            if (fs.existsSync('/tmp/'+req.query.s))
                res.json({
                    msg: `Speed: \t ${difference} Mbps`,
                    log: stdout
                });            
            else
                res.json({
                    msg:"Sorry! Something went wrong. Try again!", 
                    error: stderr,
                    log: stdout
                });            
        }catch(err){
            res.json({msg:"Error in downloading"})
        }
        res.end();
    });
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
