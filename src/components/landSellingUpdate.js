import React ,{useState , useEffect} from "react";
import BeforeNav from "./beforNavSeller";
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import './nagrokGloableVariable';
import {reactLocalStorage} from 'reactjs-localstorage';

import {
    
    MDBContainer,
    MDBBtn,
    MDBInput,
    MDBCardTitle,
    MDBInputGroup, 
    MDBInputGroupText,
    MDBInputGroupElement,
  } from 'mdb-react-ui-kit';

export default function LandSellingUpdate(){

     var landsUpdate = reactLocalStorage.getObject('landsUpdate');
 
	 const id = landsUpdate[0];
	 const [name, setName] = useState(landsUpdate[1]);
	 const [tel, setTel] = useState(landsUpdate[2]);
	 const [description, setDescription] = useState(landsUpdate[3]);
     const [price, setPrice] = useState(landsUpdate[4]);
	 const [district, setDistrict] = useState(landsUpdate[5]);
	 const [address, setAddress] = useState(landsUpdate[6]);

   function setUpdate(e){
    e.preventDefault();
    const editLand ={
            name,
            tel,
            address,
            district,
            price,
            description
     }

	  	axios.put("http://localhost:8075/advertising/updateLand/"+id,editLand).then(() =>{
      const id = 0;
			Swal.fire({  
			title: "Success!",
			text: "Advertice Updating Success!",
			icon: 'success',
			confirmButtonText: "OK",
			type: "success"}).then(okay => {
				if (okay) {
					window.location.href = "/SellerDashboard";
				}
				});

			
		}).catch((err)=>{

			Swal.fire({  
			title: "Error!",
			text: "Advertice Updating Not Saved",
			icon: 'error',
			confirmButtonText: "OK",
			type: "success"})
		})
    }

	return (
    <div>
    <BeforeNav/>
     <div>
      <MDBContainer className="mt-5" style={{paddingTop:'6%', paddingBottom : '10%'}}>
      <MDBCardTitle className="fs-2 text-uppercase fw-normal text-center pb-3">Update A Advertisements</MDBCardTitle>
      <div className="container">
            <div className="bg-light rounded shadow-2" style={{padding:"5% 5% 5% 5%" , margin:'0% 15% 0% 15%'}}>
              
                <MDBInputGroup noWrap>
                <MDBInputGroupText className="bg-light"><i className="fas fa-user-alt"></i></MDBInputGroupText>
                <MDBInputGroupElement type='text' value={name} placeholder='Owner Full Name' onChange={(e) =>{
                    setName(e.target.value);
                    }}/>
                </MDBInputGroup>
                <MDBInputGroup className="mt-3" noWrap>
                <MDBInputGroupText className="bg-light"><i className="fas fa-mobile-alt"></i></MDBInputGroupText>
                <MDBInputGroupElement type='tel' value={tel} placeholder='Telephone Number' onChange={(e) =>{
                    setTel(e.target.value);
                    }}/>
                </MDBInputGroup>
                <MDBInputGroup className="mt-3" noWrap>
                <MDBInputGroupText className="bg-light"><i className="fas fa-map-marker-alt"></i></MDBInputGroupText>
                <MDBInputGroupElement type='text' value={address} placeholder='Address(Option)' onChange={(e) =>{
                    setAddress(e.target.value);
                    }}/>
                </MDBInputGroup>
                  <MDBInputGroup className="mt-3" noWrap>
                <MDBInputGroupText className="bg-light"><i className="fas fa-dollar-sign"></i></MDBInputGroupText>
                <MDBInputGroupElement type='text' value={price} placeholder='Price' onChange={(e) =>{
                    setPrice(e.target.value);
                    }}/>
                </MDBInputGroup>
                <MDBInputGroup className="mt-3" noWrap>
                <MDBInputGroupText className="bg-light"><i className="fas fa-map-marked"></i></MDBInputGroupText>
                    <select className="form-select" aria-label="Default select example" onChange={(e) =>{
                    setDistrict(e.target.value);
                    }}>
                    <option value={district}>{district}</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Gampaha">Gampaha</option>
                    <option value="Kaluthara">Kaluthara</option>
                    <option value="Mathara">Mathara</option>
                    <option value="Galle">Galle</option>
                    <option value="Hambanthota">Hambanthota</option>
                    <option value="Kandy">Kandy</option>
                    <option value="Nuwara Eliya">Nuwara Eliya</option>
                    <option value="Kagalle">Kagalle</option>
                    <option value="Anuradapura">Anuradapura</option>
                    <option value="Polonnaruwa">Polonnaruwa</option>
                    <option value="Jaffna">Jaffna</option>
                    <option value="Kilinochchiya">Kilinochchiya</option>
                    <option value="Vavuniya">Vavuniya</option>
                    <option value="Mullaitivu">Mullaitivu</option>
                    <option value="Mannar">Mannar</option>
                    <option value="Puttalam">Puttalam</option>
                    <option value="Kurunegala">Kurunegala</option>
                    <option value="Matale">Matale</option>
                    <option value="Ratnapura">Ratnapura</option>
                    <option value="Trincomalee">Trincomalee</option>
                    <option value="Batticaloa">Batticaloa</option>
                    <option value="Ampara">Ampara</option>
                    <option value="Badulla">Badulla</option>
                    <option value="Monaragala">Monaragala</option>
                    </select>
                </MDBInputGroup>
                <div className="mt-3">
                    <MDBInput style={{width:'100%'}} placeholder="Discription" textarea rows={10} value={description} onChange={(e) =>{
                    setDescription(e.target.value);
                    }}/>
                </div>
                 <div className="d-grid gap-2 mt-4">
                     <MDBBtn type="submit" onClick={setUpdate}>Submit <i className="fas fa-save"></i></MDBBtn>
                 </div>
            </div>
      </div>
    </MDBContainer>
     </div>
    </div>
	)
}


