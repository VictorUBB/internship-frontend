import React, { useState } from "react";
import Sidebar from "../../Sidebar";


function AddOption({optionP}){
    return (
        <option value={optionP.id}>Name:{optionP.name} Status:{optionP.status} Type:{optionP.type}</option>
    )
}

export default function CreateUser({profiles,currentUser,addFunction}){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const [country,setCountry]=useState('');
    const [city,setCity]=useState('')
    const [street,setStreet]=useState('');
    const [streetNumber,setStreetNumber]=useState('');

    console.log(currentUser);
    const [idProfile,setIdProfile]=useState('');
    let options=[];
    profiles.forEach(function(profile){
        options.push(<AddOption optionP={profile} key={profile.id}/>);
    });

    function handleSubmit(userToAdd){
        let initializerUserToDate={
                id: 2,
                username: "ASDA",
                fullName: "ADSa",
                email: "ewqeqw@yahoo.com",
                phone: "1231",
                address: {
                    id: 1,
                    street: "qwrew",
                    country: "RErewr",
                    streetNumber: 12,
                    city: "Cluj"
                },
                password: "qweq",
                profile: {
                    id: 2,
                    name: "Prof",
                    rights: [],
                    type: "Administrator",
                    version: null,
                    status: "Waiting"
                },
                version: 1,
                status: "Active"
            
        }
        let addres={
            country:country,
            city:city,
            street:street,
            streetNumber:streetNumber
        }    
        let affectedUserToDate={
            fullName:name,
            email:email,
            phone:phone,
            username:username,
            address:addres,
            password:password,
            idProfile:document.getElementById("select").value
        }
        let idProfile=document.getElementById("select").value;
        console.log("User:"+JSON.stringify(currentUser));
        let saveObj={
            initializerUserToDate:initializerUserToDate,
            affectedUserToDate:affectedUserToDate,
            idProfile:idProfile
        }
        addFunction(saveObj)

    }
    return (

        <div >
            <Sidebar/>
        <h1>Create User</h1>
        <form onSubmit={handleSubmit}>
            <h2>Details:</h2>
            <label >
                Full name:
                <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>
            </label><br/>
            
            <label >Email:
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)}></input>
            </label><br/>
            
            <label >Phone:
                <input type="tel" value={phone} onChange={e=>setPhone(e.target.value)}></input>
            </label><br/>
            
            <label >Username:
                <input type="text" value={username} onChange={e=>setUsername(e.target.value)}></input>
            </label><br/>
            <label >Password:
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}></input>
            </label><br/>
            <h2>Addres:</h2>
            <label >
                Country:
                <input type="text" value={country} onChange={e=>setCountry(e.target.value)}></input>
            </label><br/>
            <label >
                City:
                <input type="text" value={city} onChange={e=>setCity(e.target.value)}></input>
            </label><br/>  
            <label >
                Street:
                <input type="text" value={street} onChange={e=>setStreet(e.target.value)}></input>
            </label><br/>                 
            <label >
                Street number:
                <input type="number" value={streetNumber} onChange={e=>setStreetNumber(e.target.value)}></input>
            </label><br/>  
            <h2>Profile:</h2>
            <select id="select">
                {options}
            </select>  
            <input type="submit" value="Add user"  />
        </form>
        </div>
    );
    };

