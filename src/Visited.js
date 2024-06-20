import React, { useState } from "react";
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import { deleteUser ,addUser} from "./slice/userSlice";
import { deletePassword ,addPassword} from "./slice/passwordSlice";

function Visited(){
const dispatch = useDispatch();
const [update,setUpdate] = useState(false)
const [passupdate,setPassupdate] = useState(false)
const [indexs,setIndexs] = useState()
const [pindex,setPindex] = useState()
const [values,setValues] = useState({
    updateChanges:"",
    updatePassword:""
})
    const handleClear = async(index)=>{

        console.log(index)
        dispatch(deletePassword(index))
    }

    const handleClear2 = async(index)=>{

        dispatch(deleteUser(index))
    }

    const handleChange = (index,user)=>{
        setUpdate(true)
        setIndexs(index)
       setPassupdate(true)

        setValues({updateChanges: user})
      
    }

    const handleUpdate= async(e,index)=>{
       
        dispatch(deleteUser(index))
        dispatch(addUser(e))
        setUpdate(false)
    }

    const handleUpdateChange = async(e)=>{
        
        const {name,value} = e.target
    
        setValues({...values,[name]:[value]})
       
        

    }

    const user = useSelector((state)=>state.user)
    const password = useSelector((state)=> state.password)
    return(
        <div>
            {user &&  user.map((user,index)=><div><h1>Name : {user}</h1> <input type="button" onClick={()=>handleClear2(index)}  value="Delete"/> 
            <input type="button" value="Update" onClick={()=>handleChange(index,user)}/>{update && indexs === index &&<div>
            <input type="text" id="updatedName" value={values.updateChanges} onChange={handleUpdateChange} name="updateChanges"></input><button  onClick={()=>handleUpdate(values.updateChanges,index)}>Change</button> </div>}</div>)}
           
            {password && password.map((password,index)=> (<div><h1>password : {password}</h1> 
            <input type="button" onClick={()=>handleClear(index)} value="Delete" />
            <input type="button" value="Update" onClick={()=>{setPindex(index)
            setPassupdate(true)
            setValues({updatePassword: password})
            }
            }/>
            {passupdate && pindex === index && <div>
                
                <input type="text" value={values.updatePassword} onChange={handleUpdateChange} name="updatePassword"></input>
                <button onClick={()=>{
                    dispatch(deletePassword(index))
                    dispatch((addPassword(values.updatePassword)))
                    setPassupdate(false)
                }}
                     >Change</button>
            
                </div>
                }

            </div>)  )
            
            
    }
        </div>



    )
}
export default Visited