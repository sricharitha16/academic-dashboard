import React from 'react'
import './css/profile_content_css.css'
import './css/Home_Content_CSS.css'

const ProfilePage = () => {
  return (
    
	<div id="content">
		<h1>Profile</h1>
	
		<div class="row">
			<div class="column">
			  <h3>Personal Details</h3>
			  <hr/>
			  <div class="card">
				<label for="fname"><b>First Name</b></label>
    			<input type="text" placeholder="First Name" name="fname" id="fname" required/>
			  </div>

			  <div class="card">
				<label for="lname"><b>Last Name</b></label>
    			<input type="text" placeholder="Last Name" name="lname" id="lname" required/>
			  </div>

			  <div class="card">
				<label for="dob"><b>DOB</b></label>
    			<input type="date" id="start" name="trip-start" value="2018-07-22" min="1920-01-01" max="2023-08-04"/>
			  </div>
 
			  <div class="card">
				<label for="email"><b>Email</b></label>
    			<input type="text" placeholder="Enter Email" name="email" id="email" required/>
			  </div>

			  <div class="card">
				<label for="phno"><b>Phone No</b></label>
    			<input type="text" placeholder="123456789" name="phno" id="phno" required/>
			  </div>

			  <div class="card">
				<label for="address"><b>Address</b></label>
    			<input type="text" placeholder="Address" name="address" id="address" required/>
			  </div>
			  
			  <div class="card">
				<label for="ntnl"><b>Nationality</b></label>
    			<input type="text" placeholder="Nationality" name="ntnl" id="ntnl" required/>
			  </div>

			  <div class="card">
				<label for="etny"><b>Ethnicity</b></label>
    			<input type="text" placeholder="Ethnicity" name="etny" id="etny" required/>
			  </div>
			  
			  <div class="card">
    			<label for="psw"><b>Password</b></label>
    			<input type="password" placeholder="Enter Password" name="psw" id="psw" required/>
			  </div>

			  
			  
			  
			</div>
		  
			<div class="column">
			  <h3>Academic Details</h3>
			  <hr/>
			  
			  <div class="card">
				<label for="ResFile">Select a file:</label>
        <br/>
				<input type="file" id="ResFile" name="ResFile"/>
				<button type="button" class="Resbtn">Upload Resume</button>
			  </div>
			  
			  <div class="card">
				<label for="CVFile">Select a file:</label>
				<input type="file" id="CVFile" name="CVFile"/>
				<button type="button" class="CVbtn">Upload CV</button>
			  </div>

			  <div class="card">
				<label for="edu"><b>Highest Education</b></label>
    			<select id="edu" name="edu" form="edu">
					<option value="-">-</option>
					<option value="School">School</option>
					<option value="High School">High School</option>
					<option value="Undergraduate">Undergraduate</option>
					<option value="Graduate">Graduate</option>
					<option value="PhD">PhD</option>
					<option value="Post Doc">Post Doc</option>
				  </select>
			  </div>

			  <div class="card">
				<label for="publ"><b>Publications</b></label>
    			<textarea id="publ" name="publ" rows="4" cols="40"></textarea>
			  </div>

			  <div class="card">
				<label for="aoi"><b>Area of Interest</b></label>
    			<textarea id="aoi" name="aoi" rows="4" cols="40"></textarea>
			  </div>
 

			</div>
			
			<div class="column">
			  <h3>Preferences</h3>
			  <hr/>
			  <div class="card">
				<label for="pref_pos"><b>Position</b></label>
    			<input type="text" placeholder="Pref Positions" name="pref_pos" id="pref_pos" required />
			  </div>

			  <div class="card">
				<label for="pref_uni"><b>University</b></label>
    			<input type="text" placeholder="Pref University" name="pref_uni" id="pref_uni" required />
			  </div>

			  <div class="card">
				<label for="pref_loc"><b>Location</b></label>
    			<input type="text" placeholder="Pref Location" name="pref_loc" id="pref_loc" required />
			  </div>
			</div>
			
			
		</div>
    </div>

  )
}

export default ProfilePage;