import logo from './logo.svg';
import './App.css';
import {addUser }from "./slice/userSlice"
import { addPassword } from './slice/passwordSlice';
import {useDispatch} from "react-redux"
import { useState } from 'react';
import Visited from './Visited';
function App() {
  
  const dispatch = useDispatch()
const [visited,setVisited]= useState(false)
  const handleLogin = async (e)=>{
    e.preventDefault()
    const email = document.getElementById("inputEmail3").value 
    const password = document.getElementById("inputPassword3").value

console.log(email)
    dispatch(addUser(email))
    dispatch(addPassword(password))
  setVisited(true)
    
  }
  return (
    <div className="App">
      <form onSubmit={handleLogin}>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" />
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" />
    </div>
  </div>
  
  <div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1" />
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
{visited && <Visited></Visited>}
    </div>
  );
}

export default App;
