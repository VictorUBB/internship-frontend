import React, { useState } from "react";
import Sidebar from "../../Sidebar";

export default function CreateProfile({addFunction}){
    const [name,setName]=useState('');
    const [selectedRights, setSelectedRights] = useState([]);
    const []=useState('');
    function onSubmitHandle(profileToAdd){

        // Here, you can use the 'selectedRights' array, which holds the checked checkbox values.
        console.log("Selected rights:", selectedRights);
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
        let profileToBeSaved={
            name:name,
            type:document.getElementById("selectType").value,
            rights:selectedRights
        }
        let entityToSave={
            initializerUserToDate:initializerUserToDate,
            profile:profileToBeSaved
        }
        addFunction(entityToSave);
    }
    function handleCheckboxChange(event) {
        const { value, checked } = event.target;
        if (checked) {
          setSelectedRights((prevSelected) => [...prevSelected, value]);
        } else {
          setSelectedRights((prevSelected) =>
            prevSelected.filter((item) => item !== value)
          );
        }
      }
    return (

        <div >
        <Sidebar/>
        <h1>Create Profile</h1>
        <form onSubmit={onSubmitHandle}>
            <h2>Details:</h2>
            <label >
                Name:
                <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>
            </label><br/>
            
            <label >Type:
                <select id="selectType">
                    <option value="Administrator">Administrator</option>
                    <option value="Employee">Employee</option>
                    <option value="Customer">Customer</option>
                </select>
            </label><br/>
            <h3>Rights:</h3>
             <label>Craete User<input type="checkbox" value={"Craete User"} onChange={handleCheckboxChange}></input></label><br/>
            <label>Modify User<input type="checkbox" value={"Modify User"} onChange={handleCheckboxChange}></input></label><br/>
            <label>Repair User<input type="checkbox" value={"Repair User"} onChange={handleCheckboxChange}></input></label><br/>
            <label>Block User<input type="checkbox" value={"Block User"} onChange={handleCheckboxChange}></input></label><br/>
            <label>Unblock User<input type="checkbox" value={"Unblock User"}onChange={handleCheckboxChange}></input></label><br/>
            <label>Delete User<input type="checkbox" value={"Delete User"} onChange={handleCheckboxChange}></input></label><br/>
            <label>Craete Profile Customer<input type="checkbox" value={"Craete Profile Customer"} onChange={handleCheckboxChange}></input></label><br/>
             <label>Craete Profile Employee<input type="checkbox" value={"Craete Profile Employee"} onChange={handleCheckboxChange}></input></label><br/>
            <label>Modify Profile Customer<input type="checkbox" value={"Modify Profile Customer"} onChange={handleCheckboxChange}></input></label><br/>
            <label>Modify Profile Employee<input type="checkbox" value={"Modify Profile Employee"} onChange={handleCheckboxChange}></input></label><br/>
            <label>Delete Profile Customer<input type="checkbox" value={"Delete Profile Customer"} onChange={handleCheckboxChange}></input></label><br/>
            <label>Delete Profile Employee<input type="checkbox" value={"Delete Profile Employee"} onChange={handleCheckboxChange}></input></label><br/> 

            <input type="submit" value="Add profile" />
        </form>
        </div>
    );
    };

