import React, { useState } from "react"
const Top  = ()=> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>
const Down  = ()=> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

const Leaderboard = ()=>
{
    const [isEditing,setEdit] = useState(false);
    const [teamData,setTeamData] = useState({
        teamId: 0,
        teamName: "",
        
        teamScore: 0

       
    })
    const [teams,setTeams] = useState(
        [

        ]
    ) 
    const  valueHandler = (e)=>{
        const key = e.target.name;
        setTeamData({...teamData, [key]: e.target.value  })

    } 
    const  submitTeam = (e)=>{
        e.preventDefault();
        console.log("event",e.target.save.value)
    
        if(teamData.teamId==0)
        {
            alert(" please enter postive id ")
            return;
        }
        if(e.target.save.value=="submit")
        {
            setTeams([...teams,teamData ])
            setTeamData({
                teamId: 0,
                teamName: "",
                teamScore: 0
    
            })
        }
        else
        {
            setTeams(teams.map(teamItem=> {
                if(teamItem.teamId === teamData.teamId)  
                {
                    teamItem.teamId = teamData.teamId;
                    teamItem.teamName = teamData.teamName;
                    teamItem.teamScore = teamData.teamScore;

                }
                return teamItem
            }))
            setEdit(false);

        }
        
    }
    const increment = (id,number)=>{
        setTeams(teams.map(teamItem=> {
            if(teamItem.teamId === id)  
            {
                (teamItem.teamScore)  = Number(Number (number)+Number(teamItem.teamScore));
            }
            return teamItem
        }))
    }
    const decrement = (id,number)=>{
        setTeams(teams.map(teamItem=> {
            if(teamItem.teamId === id)  
            {
                (teamItem.teamScore)  =  ( Number(teamItem.teamScore) - Number (number));
            }
            return teamItem
        }))
    }
    const SORT_TYPE = {
        teamScore: {
            ASC:"teamScore_ASC",
            DESC:"teamScore_DESC",
        },
        teamName: {
            ASC:"teamName_ASC",
            DESC:"teamName_DESC",
        }
    }
    const [sortingType,setSortingType] = useState(SORT_TYPE.teamScore.ASC); 
    return <>
    <form onSubmit={submitTeam} className="p-3">
           <div className="my-1">
           <label htmlFor="teamId">Team ID </label>
            <input id="teamId" name="teamId"
            value={teamData.teamId}
            type="number"  onChange={valueHandler} className="border-blue-200 border-[2px]" min={0}  /> 
           </div>
           <div className="my-1">
           <label htmlFor="teamName">Team Name </label>
            <input id="teamName" name="teamName" 
            value={teamData.teamName}
            onChange={valueHandler}  className="border-blue-200 border-[2px]"  /> 
           </div>
           <div className="my-1">
           <label htmlFor="teamScore">Team Score </label>
            <input id="teamScore" type="number" name="teamScore" value={teamData.teamScore} onChange={valueHandler}  className="border-blue-200 border-[2px]"   /> 
           </div>
           {isEditing == true ? 
           <React.Fragment>
             <button type="submit"
             value={"save"}
             id="save"
             className="bg-blue-400 p-1 rounded-sm " name="save">Save</button>
           <button name="cancel"
           className="bg-red-400 p-1 rounded-sm "

            onClick={()=>{
                setEdit(false)
                setTeamData({
                    teamId: 0,
                    teamName: "",
                    teamScore: 0
        
                })
            }}
           >Cancel</button>
           </React.Fragment>
           : 
           <button value={"submit"} type="submit" className="bg-green-400 p-1 rounded-sm " id="submit" name="save">Submit</button>

           }
          



    </form>
    {
        JSON.stringify(teamData)
    }
    <table className="table " >
        <thead className=" gap-3">
            <tr>
                <th>
                    #
                </th>
                <th>
                    id
                </th>
                <th className=""
                onClick={()=>{
                    sortingType=== SORT_TYPE.teamName.ASC  ? setSortingType(SORT_TYPE.teamName.DESC): setSortingType (SORT_TYPE.teamName.ASC)
                }}
                >
                   <div className="flex items-center justify-center">
                   name {
                        sortingType=== SORT_TYPE.teamName.ASC  ? <Top/> : <Down/>
                    }
                   </div>

                </th>
                <th
                onClick={()=>{
                    sortingType=== SORT_TYPE.teamScore.ASC  ? setSortingType(SORT_TYPE.teamScore.DESC): setSortingType (SORT_TYPE.teamScore.ASC)
                }}
                >
                   <div className="flex items-center justify-center">
                    score {
                        sortingType=== SORT_TYPE.teamScore.ASC  ? <Top/> : <Down/>
                    }

                    </div>
                    
                </th>
                <th>
                    actions
                </th>
                
                
            </tr>
        </thead>
        <tbody>
        { teams.sort((aTeam,bTeam)=> {
        
          if(sortingType=== SORT_TYPE.teamScore.ASC)
            {
                return aTeam.teamScore - bTeam.teamScore;
            }
            else if(sortingType=== SORT_TYPE.teamScore.DESC)
            {
                return bTeam.teamScore - aTeam.teamScore;
            }
            else if(sortingType=== SORT_TYPE.teamName.ASC)
            {
            
                return bTeam.teamName.localeCompare(aTeam.teamName) ;
            }
            else if(sortingType=== SORT_TYPE.teamName.DESC)
            {
            
                return aTeam.teamName.localeCompare(bTeam.teamName) ;
            }
            
            }) .map((teamItem,index)=> <tr key={index}>
            <td>
                {index+1}
            </td>
            <td>
                {teamItem.teamId}
            </td>
            <td>
                {teamItem.teamName}
            </td>
            <td>
                {teamItem.teamScore}
            </td>
            <td>
            <div className="flex items-center justify-center gap-2">
                    <span onClick={()=>{
                        increment(teamItem.teamId,5);
                    }} className="h-8 w-8 bg-green-300  cursor-pointer rounded-full flex justify-center items-center p-1"> +5</span> 
                    <span 
                    onClick={()=>{
                        decrement(teamItem.teamId,5);
                    }}
                    className="h-8 w-8 bg-red-300  cursor-pointer  rounded-full flex justify-center items-center p-1">-5</span> 
                <span 
                    onClick={()=>{
                        setEdit(true);
                        setTeamData({
                            teamId: teamItem.teamId,
                            teamName: teamItem.teamName,
                            teamScore: teamItem.teamScore


                        })
                        // decrement(teamItem.teamId,5);
                    }}
                    className="h-8 w-8 bg-yellow-300  cursor-pointer  rounded-full flex justify-center items-center p-1">Edit</span> 
                
                </div>
            </td>
            
            </tr>)}
        </tbody>
    </table>
       
        </>
}
export default Leaderboard