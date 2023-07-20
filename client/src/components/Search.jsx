import { useState } from 'react';
import './Search.css'
import axios from 'axios'
import { Card } from './Card';
var bool=false
var vdonf=false
var showcards=false

export const Search=()=>{
    const [url,setUrl]=useState("")
    const [query,setQuery]=useState("")
    const [passin,setPassin]=useState("")
    const [urlcode,setUrlcode]=useState("")
    const [wordstat,setWordstat]=useState("")
    const [status,setStatus]=useState("No Video to show here")
    
    const handelchange=(e)=>{
        setUrl(e.target.value)
        
    }
    const handelsubmit=async()=>{
        let pos=url.search('=')+1
        if(pos===0)pos=url.search('.b')+4
        console.log("pos is -->",pos,)
        setUrlcode(url.substring(pos))
        console.log("url code is ",urlcode)
        try {
            const man=await axios.get(`${url.substring(pos)}`)
            console.log(man.data)
            if(man.data!=="id error"){
                console.log("video found")
                setStatus("Video Found ( "+man.data.length+" Words detected)")
                if(man.data.length<10)setStatus("No Words in video")
                bool=true
                vdonf=false
            }else{vdonf=true;bool =false}
        } catch (error) {
            setStatus("Wrong Url")
            console.log(error)
        }
        setUrl(""+url);
    }
    const queryChange=(e)=>{
        setQuery(e.target.value)
    }
    const querySubmit=async()=>{
        if(bool){
            const men=await axios.get(`find/${query}`)
            if(men.data)setWordstat("found items "+men.data.length)
            showcards=true
            setQuery("");setPassin(men)
        }
        else setQuery("Enter video first")
    }
    return(
        <>
        <div>
            {bool?<h2>Enter Query now</h2>:<h2>Enter video link</h2>}
            <input type="text" placeholder="Enter youtube video link" 
            onChange={handelchange} value={url}></input>
            <button onClick={handelsubmit}>START</button>
            {vdonf?<label>Video Not Found</label>:
            <label></label>}
            <br/><br/>
            <input type="text" placeholder="Enter query to search" 
            onChange={queryChange} disabled={!bool} value={query}></input>
            <button onClick={querySubmit}>START</button>
            
        </div>
            {<h1>{status}</h1>}
            {<h1>{wordstat}</h1>}
            
            {showcards?<Card mp={passin} qry={urlcode}/>:<></>}
            </>
    );
}