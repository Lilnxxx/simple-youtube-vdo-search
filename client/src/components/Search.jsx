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
    
    const handelchange=(e)=>{
        setUrl(e.target.value)
        
    }
    const handelsubmit=async()=>{
        let pos=url.search('=')+1
        setUrlcode(url.substring(pos))
        console.log("url code is ",urlcode)
        try {
            const man=await axios.get(`${urlcode}`)
            // console.log(man.data)
            if(man.data!=="id error"){
                console.log("video found")
                bool=true
                vdonf=false
            }else{vdonf=true;bool =false}
        } catch (error) {
            console.log(error)
        }
        setUrl(" "+url);
    }
    const queryChange=(e)=>{
        setQuery(e.target.value)
    }
    const querySubmit=async()=>{
        if(bool){
            const men=await axios.get(`find/${query}`)
            if(men.data)console.log(men.data)
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
            {showcards?<Card mp={passin} qry={urlcode}/>:<></>}
            </>
    );
}