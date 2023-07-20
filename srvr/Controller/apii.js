import { YoutubeTranscript } from 'youtube-transcript';
export var capfile =[]
export const words= new Map
const mapfunk=async(capfile)=>{
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
        capfile=[]
        // console.log("  run \n")
        capfile=await YoutubeTranscript.fetchTranscript(
            `https://www.youtube.com/watch?v=${vidId}`).
        then();
        // console.log("capfile len-> ",capfile.length) 
        // capfile=reponse
        await mapfunk(capfile)
        res.status(200).json(capfile)
        // res.status(201).json("id error")
    } catch (error) {
        // console.log("error in get ")
        res.status(201).json("id error")
    }
}