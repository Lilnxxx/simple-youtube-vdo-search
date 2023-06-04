import { useEffect, useState } from "react"

export const Card=(prop)=>{
    const[ref,setRef]=useState(['2'])
    // const[tref,setTref]=useState(['2'])
    useEffect(()=>{
        // const arry=prop.cf.data
        const fetchRef=()=>{
            
            // console.log("hello thi is card ",prop.mp.data)
            setRef(prop.mp.data)
            // setTref(prop.cf.data)
        }
        fetchRef()
    },[prop])
    return(
        <div>
            {ref.map( (fruit,index)=>
       (   
        <>
           <a href={`https://www.youtube.com/watch?v=${prop.qry}&t=${Math.round(fruit.num/1000)}`} 
           target="_blank" rel="noreferrer" >
            <h2 key={index} >{fruit.str} </h2> </a><br/>
        </>
       )
       )}
            {/* <label>{ref}</label> */}
            {/* <br/> */}
        </div>
    )
}