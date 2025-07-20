import express from "express";
import {dirname} from "path";
import fs from "fs";
import QRCode from "qrcode";
import bodyParser from "body-parser";
import {fileURLToPath} from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(__dirname));//make all the static files accessible
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/submit",(req,res)=>{
    QRCode.toDataURL(req.body.link,(err,url)=>{
        if(err) throw(err);
        let jd = {
            link:url
        }
        fs.writeFile("./mesc.json",JSON.stringify(jd),(err)=>{
            if(err){
                res.status(300).send("sorry");
            }else{
                res.status(200).send("ok");
            }

        });
    });
});

app.listen(3000,()=>{
    console.log("http://localhost:3000");
})





