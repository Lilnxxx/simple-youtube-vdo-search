import { YoutubeTranscript } from 'youtube-transcript';
export var capfile =0
export const words= new Map
const mapfunk=(capfile)=>{
    // console.log("here is length ",+reponse.length)
    for(var i=0;i<capfile.length;i++){
        // console.log(capfile[i].text)
        const st=capfile[i].text.toLowerCase()
        const arr=st.split(' ')
        for(var j=0;j<arr.length;j++){
            if(arr[j].length<3)continue
            if(words.has(arr[j])){
                const len=words.get(arr[j]).length
                if(words.get(arr[j])[len-1]!=i)
                words.get(arr[j]).push(i)
            }
            else words.set(arr[j],[i])}
    }
}

export const apii=async (req,res,next)=>{
    const vidId=req.url.substring(1)
    // console.log(vidId)
    try {
        capfile=await YoutubeTranscript.fetchTranscript(
            `https://www.youtube.com/watch?v=${vidId}`).
        then();
        // console.log(reponse) 
        // capfile=reponse
        mapfunk(capfile)
        res.status(200).json(capfile)
        // res.status(201).json("id error")
    } catch (error) {
        res.status(201).json("id error")
    }
}