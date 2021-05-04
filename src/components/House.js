import React ,{useState , useEffect} from "react";
import BeforeNav from "./beforNavSeller";
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import './nagrokGloableVariable';
import {reactLocalStorage} from 'reactjs-localstorage';

import {
    
    MDBContainer,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBBtn,
    MDBInput,
    MDBCardTitle,
    MDBInputGroup, 
    MDBInputGroupText,
    MDBInputGroupElement,
  } from 'mdb-react-ui-kit';

export default function LandSelling(){
    const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [name, setName] = useState("");
	const [tel, setTel] = useState("");
	const [address, setAddress] = useState("");
	const [district, setDistrict] = useState("");
  const [imageSelected, setimageSelected] = useState("");
  const nic = Cookies.get('nic');
  const AdPackage = Cookies.get('AdPackage');

  const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const type = urlParams.get('id');
    console.log(type);
    
    const [title, setTitle] = useState("");
    const setUpload= () => {
       if(AdPackage !== 'false'){
        const formData = new FormData();
        formData.append("file" ,imageSelected);
        formData.append("upload_preset", "ml_default");
 
        axios.post("https://api.cloudinary.com/v1_1/nadun/image/upload",formData).then((response)=>{
             console.log(imageSelected)
          const picture =imageSelected.name;
          const addBording ={
            name,
            tel,
            address,
            district,
            price,
            title,
            description,
            picture,
            nic,
            type,
                 }
	
		axios.post(global.nagrok+"/advertising/addBording",addBording).then(() =>{

			Swal.fire({  
			title: "Success!",
			text: "Advertisment Published",
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
			text: "Advertisment Not Published",
			icon: 'error',
			confirmButtonText: "OK",
			type: "success"})
		})
      })
      }else{
      		Swal.fire({  
          title: "Error!",
          text: "You Haven't Buy Advertisement Package",
          icon: 'error',
          confirmButtonText: "OK",
          type: "success"}).then(okay => {
            if (okay) {
              window.location.href = "/AdvertismentPackage";
            }
            });
     }
    }

    const [houses,sethouse] = useState([]);
      useEffect(() => {
          axios.get("http://localhost:8075/advertising/searchHouse/"+nic)
          .then(res => sethouse(res.data))
          .catch(error => console.log(error));
      })

     function  remove(id) {
        axios.delete(global.nagrok+"/advertising/deleteBording/"+id).then(() =>{
        	Swal.fire({  
          title: "Success!",
          text: "Advertisment Delete",
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
          text: "Advertisment Not Delete",
          icon: 'error',
          confirmButtonText: "OK",
          type: "success"})
          });
    }

     function update(id, owner, title, tel, discription, price, disctrict, address, image){
        reactLocalStorage.setObject("BordingUpdate", [id, owner, title, tel, discription, price, disctrict, address, image]);
         window.location.href = "/BordingUpdate";
    }
  function  updateStatus(id) {

	  	axios.put("http://localhost:8075/advertising/updateBordingStatus/"+id).then(() =>{
              
              Swal.fire({  
              title: "Success!",
              text: "Advertisment was closed",
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
              text: "Advertisment was not closed",
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
      <MDBCardTitle className="fs-2 text-uppercase fw-normal text-center pb-3">Create A Advertisements</MDBCardTitle>
      <div className="container">
            <div className="bg-light rounded shadow-2" style={{padding:"2% 5% 5% 5%" , margin:'0% 15% 0% 15%'}}>
                <div className="text-end mb-3">
                      <a href="/SellerDashboard"> <MDBBtn color="black" size='sm'>Profile</MDBBtn></a>
                </div>
                <MDBInputGroup noWrap>
                <MDBInputGroupText className="bg-light"><i class="fas fa-heading"></i></MDBInputGroupText>
                <MDBInputGroupElement type='text' placeholder='Insert Title' onChange={(e) =>{
                    setTitle(e.target.value);
                    }}/>
                </MDBInputGroup>
                <MDBInputGroup className="mt-3" noWrap>
                <MDBInputGroupText  className="bg-light"><i class="fas fa-user-alt"></i></MDBInputGroupText>
                <MDBInputGroupElement type='text' placeholder='Owner Full Name' onChange={(e) =>{
                    setName(e.target.value);
                    }}/>
                </MDBInputGroup>
                <MDBInputGroup className="mt-3" noWrap>
                <MDBInputGroupText className="bg-light"><i class="fas fa-mobile-alt"></i></MDBInputGroupText>
                <MDBInputGroupElement type='tel' placeholder='Telephone Number' onChange={(e) =>{
                    setTel(e.target.value);
                    }}/>
                </MDBInputGroup>
                <MDBInputGroup className="mt-3" noWrap>
                <MDBInputGroupText className="bg-light"><i class="fas fa-map-marker-alt"></i></MDBInputGroupText>
                <MDBInputGroupElement type='text' placeholder='Address(Option)' onChange={(e) =>{
                    setAddress(e.target.value);
                    }}/>
                </MDBInputGroup>
                  <MDBInputGroup className="mt-3" noWrap>
                <MDBInputGroupText className="bg-light"><i class="fas fa-dollar-sign"></i></MDBInputGroupText>
                <MDBInputGroupElement type='text' placeholder='Price Per Month' onChange={(e) =>{
                    setPrice(e.target.value);
                    }}/>
                </MDBInputGroup>
                <MDBInputGroup className="mt-3" noWrap>
                <MDBInputGroupText className="bg-light"><i class="fas fa-map-marked"></i></MDBInputGroupText>
                    <select class="form-select" aria-label="Default select example" onChange={(e) =>{
                    setDistrict(e.target.value);
                    }}>
                    <option selected>Select District</option>
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
                    <MDBInput style={{width:'100%'}} placeholder="Discription" textarea rows={10}  onChange={(e) =>{
                    setDescription(e.target.value);
                    }}/>
                </div>
                 <div className="mt-3">
                    <input type="file" onChange={(e) =>{
                    setimageSelected(e.target.files[0]);
                    }} class="form-control" id="customFile" />
                 </div>
                 <div class="d-grid gap-2 mt-4">
                     <MDBBtn type="submit" onClick={setUpload}>Submit <i class="fas fa-save"></i></MDBBtn>
                 </div>
            </div>
      </div>
       <MDBTable className="mt-5 shadow-2">
      <MDBTableHead style={{backgroundColor:'#E0E0E0'}}>
        <tr>
          <th scope='col'>Title</th>
          <th scope='col'>Telephone</th>
          <th scope='col'>Discription</th>
          <th scope='col'>Price</th>
          <th scope='col'>District</th>
          <th scope='col'>Address</th>
          <th scope='col'>Status</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
             {houses.map((house,key) => (
        <tr>
          <td>{house.title}</td>
          <td>{house.tel}</td>
          <td>{house.discription}</td>
          <td>{house.price}</td>
          <td>{house.disctrict}</td>
          <td>{house.address}</td>
           <td>{house.status} <span onClick={() => updateStatus(house.id)}><i class="fas fa-pen"></i></span></td>
          <td>
            <div className="row">
               <div className="col-6"> 
                    <MDBBtn tag='a' onClick={() => remove(house.id)} color='none' className='m-1 text-danger'>
                            <i className="fas fa-trash"></i>
                    </MDBBtn>
               </div>
                <div className="col-6">
                    <Link onClick={() => update(house.id,house.owner,house.title, house.tel, house.discription, house.price, house.disctrict, house.address, house.image)} >
                        <MDBBtn tag='a'  color='none' className='m-1 text-success'>
                            <i className="fas fa-edit"></i>
                        </MDBBtn>
                    </Link>
               </div>
            </div>
          </td>
        </tr>
             ))}
      </MDBTableBody>
    </MDBTable>
    </MDBContainer>
     </div>
    </div>
	)
}


