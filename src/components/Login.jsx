import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import LoginContext from '../context/LoginContext'

export default function Login() {
    const context = useContext(LoginContext);
    const history = useHistory();

    const login =()=>{
        console.log(context);
        context.changeLogin(true);
        console.log(context.login);
        localStorage.setItem("session" , true)
        history.push("/create")
    }
    return (
        <div className="container">
            <h1> Login Here</h1>

            <form>
      <div class="form-group">
    <label for="exampleInputEmail1">Student Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  


            <button className="btn btn-primary"  onClick={login}>Login</button>
            </form>
        </div>
    )
}
