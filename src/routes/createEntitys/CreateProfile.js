import React from "react";
import Sidebar from "../../Sidebar";

export const CreateProfile = () => {
    return (

        <div >
        <Sidebar/>
        <h1>Create Profile</h1>
        <form>
            <h2>Details:</h2>
            <label >
                Name:
                <input type="text" id="fullname" name="fullname"></input>
            </label><br/>
            
            <label >Type:
                <select>
                    <option value="Administrator">Administrator</option>
                    <option value="Employee">Employee</option>
                    <option value="Customer">Customer</option>
                </select>
            </label><br/>
            <h3>Rights:</h3>
            <label>Craete User<input type="checkbox"></input></label><br/>
            <label>Modify User<input type="checkbox"></input></label><br/>
            <label>Repair User<input type="checkbox"></input></label><br/>
            <label>Block User<input type="checkbox"></input></label><br/>
            <label>Unblock User<input type="checkbox"></input></label><br/>
            <label>Delete User<input type="checkbox"></input></label><br/>
            <label>Craete Profile Customer<input type="checkbox"></input></label><br/>
            <label>Craete Profile Employee<input type="checkbox"></input></label><br/>
            <label>Modify Profile Customer<input type="checkbox"></input></label><br/>
            <label>Modify Profile Employee<input type="checkbox"></input></label><br/>
            <label>Delete Profile Customer<input type="checkbox"></input></label><br/>
            <label>Delete Profile Employee<input type="checkbox"></input></label><br/>

            <input type="submit" value="Add user" />
        </form>
        </div>
    );
    };

export default CreateProfile;