import { words,capfile } from "./apii.js";

export const find=(req,res)=>{
    const query=req.url.substring(6)
    const arr=words.get(query.toLowerCase())
    const ans=[
        {}
    ]
    try{
        for(var i=0;i<arr.length;i++){
            ans.push({"str":capfile[arr[i]].text,"num":capfile[arr[i]].offset})
            // ans.str.push(capfile[arr[i]].text)
            // ans.num.push(capfile[arr[i]].offset)
        }
        console.log("len of array is ",ans.length)
    }catch(err){}
    res.status(200).json(ans)
}