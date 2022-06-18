import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "./Covid.css"
// import Data from './Data'
export default function Covid() {
    const[api, setApi]= useState([]);
    const [list,setlist]=useState([]);
    
    useEffect(()=>{
      getData()
      },[])
      const [search,setSeacrh] =useState("")
    console.log(list)
      // we are fetching data using this function
      const getData=()=>{
          axios.get(`https://api.covid19api.com/summary`).then((res)=>{
         setApi(res.data.Global);
         setlist(res.data.Countries)
          })
      }

      const handleChange=(e)=>{
        setSeacrh(e.target.value)
      }
  return (

    <div className='main-div'>  
    {/* {api.map((e)=>{
      return <div>{e.TotalConfirmed}</div>
    })} */}
    <div>
      
      <img className='covid-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/1020px-SARS-CoV-2_without_background.png" alt="" />
      <h1 className='h1'>World Covid Tracker</h1>

    </div>
    
    <div className='fstdiv'>

   <div style={{backgroundColor: "yellowgreen"}}><h3>New Confirmed</h3>{api.NewConfirmed}</div>
   <div style={{backgroundColor: "red"}}><h3>New Deaths</h3>{api.NewDeaths}</div>
   <div style={{backgroundColor: "yellow"}}><h3>New Recovered</h3>{api.NewRecovered}</div>
   <div style={{backgroundColor: "yellowgreen"}}><h3>Total Confirmed</h3>{api.TotalConfirmed}</div>
   <div style={{backgroundColor: "red"}}><h3>Total Deaths</h3>{api.TotalDeaths}</div>
   <div style={{backgroundColor: "yellow"}}><h3>Total Recovered</h3>{api.TotalRecovered}</div>
   
   </div>

   <input className="input1" type="text" placeholder="Find Your Country Here" onChange={handleChange} />
     

   <div>

       <div className='head-list'>
        <h3 style={{backgroundColor: "skyblue"}}> Country</h3>
        <h3 style={{backgroundColor: "yellowgreen"}}>NewConfirmed</h3>
        <h3 style={{backgroundColor: "yellowgreen"}}>TotalConfirmed</h3>
        <h3 style={{backgroundColor: "red"}}>NewDeaths</h3>
        <h3 style={{backgroundColor: "red"}}>TotalDeaths</h3>
        <h3 style={{backgroundColor: "yellow"}}>NewRecovered</h3>
        <h3 style={{backgroundColor: "yellow"}}>TotalRecovered</h3>
    </div>

         {list.filter((e)=>{
                if(search===""){
                  return e
                }
                else if(e.Country.toLowerCase().includes(search.toLowerCase())){
                 return e
                }
              }).map((e)=>{
      return <div className='list-data'>
        <p className='p-1'> {e.Country}</p>
          <p >  {e.NewConfirmed}</p>
          <p>  {e.TotalConfirmed}</p>
          <p>  {e.NewDeaths}</p>
          <p>  {e.TotalDeaths}</p>
          <p>  {e.NewRecovered}</p>
          <p>  {e.TotalRecovered}</p>
        </div>
    })}
</div>
   
    </div>
  )
}
