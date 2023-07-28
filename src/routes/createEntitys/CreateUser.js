import React from "react";
import Sidebar from "../../Sidebar";


function AddOption({optionP}){
    return (
        <option value={optionP.id}>Name:{optionP.name} Status:{optionP.status} Type:{optionP.type}</option>
    )
}

export default function CreateUser({profiles}){
    let options=[];
    profiles.forEach(function(profile){
        options.push(<AddOption optionP={profile} key={profile.id}/>);
    });
    return (

        <div >
            <Sidebar/>
        <h1>Create User</h1>
        <form>
            <h2>Details:</h2>
            <label >
                Full name:
                <input type="text" id="fullname" name="fullname"></input>
            </label><br/>
            
            <label >Email:
                <input type="email" id="emailField" name="emailField"></input>
            </label><br/>
            
            <label >Phone:
                <input type="tel" id="phoneField" name="phoneField"></input>
            </label><br/>
            
            <label >Username:
                <input type="text" id="username" name="username"></input>
            </label><br/>
            
            <label >Email:
                <input type="email" id="emailField" name="emailField"></input> 
            </label><br/>
            <h2>Addres:</h2>
            <label >
                Country:
                <input type="text" id="country" name="country"></input>
            </label><br/>
            <label >
                City:
                <input type="text" id="city" name="city"></input>
            </label><br/>  
            <label >
                Street:
                <input type="text" id="street" name="treet"></input>
            </label><br/>                 
            <label >
                Street number:
                <input type="number" id="streetNr" name="streetNr"></input>
            </label><br/>  
            <h2>Profile:</h2>
            <select>
                {options}
            </select>  
            <input type="submit" value="Add user" />
        </form>
        </div>
    );
    };

