import React, { useState } from 'react'

export default function Leader() {
  const [teams,setteams]=useState([])
  const [teamdata,setteamdata]=useState({
   teamname:"",
  teamid:0,
    teamscore:0
  })
  const statehandler=(e)=>{
    
    const key=e.target.name
    setteamdata({...teamdata,[key]:e.target.value})
  }
  const submit=(e)=>{
    e.preventDefault()
    if (e.target.btn.value=="submit") {
      setteams([...teams,teamdata])
      setteamdata({
        teamname:"",
        teamid:0,
        teamscore:0
      })
    }
    
  }
  const sorttype={
    teamscore:{
      ASC:"teamScore-ASC",
      DESC:"teamScore-DESC",
    }
  }
  const [sorting,setsorting]=useState(sorttype.teamscore.DESC)
    return (
    <form className='flex flex-col items-stretch gap-11 ' onSubmit={submit}>
      {JSON.stringify(teamdata)}
      <div className='flex felx-col justify-between items-stretch'>
      <label htmlFor="teamid">Id</label>
      <input className='border-black border-[1px]' onChange={statehandler} value={teamdata.teamid} name= "teamid" type="number" id='teamid' />
      <label htmlFor="teamname">Name</label>
      <input  className='border-black border-[1px]' onChange={statehandler} value={teamdata.teamname} name="teamname" type="text"  id="teamname" />
      <label htmlFor="teamscore">Score</label>
      <input  className='border-black border-[1px]' onChange={statehandler}
       value={teamdata.teamscore} name="teamscore" type="number" id='teamscore' />
       </div>
       <div className='flex flex-row justify-evenly'><button value={submit}  id='submit' name='btn'  type='submit'>submit</button>
       <button value={"save"} name='btn' id='save' type='submit'>save</button>
       <button name='cancel' onClick={()=>{
        setteamdata({
          teamid:0,
          teamname:"",
          teamscore:0
        })
       }}  >cancel</button></div>
       {teams.map((item)=>{
         return <>
         <table className='table fex row'>
         <div>ID:{"        "}{item.teamid}</div>
         <div>Name:{"        "}{item.teamname}</div>
         <div>Score:{"        "}{item.teamscore}</div>
         </table>
         </>
       })}
      
    </form>

  )
}
