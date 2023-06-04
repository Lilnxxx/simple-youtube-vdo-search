const ans=[{"str":"hi","num":1}]
ans.push({"str":"by","num":2})
ans.map( (fruit,index)=>
       (
           console.log(index,"  ",fruit)
           
       )
       )
       import { words,capfile } from "./apii.js";

       export const find=(req,res)=>{
           const query=req.url.substring(6)
           const arr=words.get(query.toLowerCase())
           const ans={
               "str":[],"num":[]
           }
           try{
           for(var i=0;i<arr.length;i++){
               ans.str.push(capfile[arr[i]].text)
               ans.num.push(capfile[arr[i]].offset)
           }
           }catch(err){}
           res.status(200).json(ans)
       }