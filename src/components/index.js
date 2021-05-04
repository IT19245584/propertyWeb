import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {  MDBRow ,
          MDBCardImage, 
          MDBBtn ,
          MDBCard,
          MDBCardBody , 
          MDBCardText ,
          MDBCardTitle, 
          MDBCol, 
          MDBContainer} from 'mdb-react-ui-kit';
import NavBar from './beforNav';

function Index() {
  return (
    <div style={{paddingBottom:'15%'}}>
      <NavBar/>
      <MDBRow style={{margin: '8% 5% 0% 15%'}}> 
      <MDBCol sm='6'>
        <MDBCard className="shadow-0">
          <MDBCardBody className="lh-1">
            <MDBCardTitle className="fs-1 text-dark fw-bolder">Welcome to <span className="text-warning text-decoration-underline"><strong> PROPERTY</strong></span><span className="text-body text-italic text-decoration-underline" ><small>-Whizz</small></span><br/><span className="fw-bold text-body fs-4">The largest Property marketplace in Sri Lanka!</span></MDBCardTitle>
            <MDBCardText className="pt-2 text-muted fw-light text-justify ">
                Property-Whizz is the most advanced real estate and rental marketplace in Sri Lanka. Our online platform offers various types of latest properties in Sri Lanka. We are aimed at changing the Real Estate industry of Sri Lanka. We offer all our services for free and we encourage every single user to advertise with us to feel our disruptive innovation in the Online Real Estate Market of Sri Lanka.  </MDBCardText>
            <MDBRow className="w-50 pb-3 fs-5 text-muted">
                 <MDBCardTitle>Our Social Media</MDBCardTitle>
                <MDBCol>
                    <i className="fab fa-facebook"></i>
                </MDBCol>
                <MDBCol>
                    <i className="fab fa-instagram"></i>
                </MDBCol>
                <MDBCol>
                    <i className="fab fa-whatsapp-square"></i>
                </MDBCol>
                <MDBCol>
                    <i className="fab fa-linkedin"></i>
                </MDBCol>
            </MDBRow>
            <MDBBtn outline color='success'>
               About Us <i className="fas fa-angle-double-right"></i>
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard className="shadow-0">
          <img src='https://i.imgur.com/gwBatu4.jpg' className='img-fluid shadow-0' alt='...' />
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <div  style={{marginTop:'13%', backgroundColor:'#00796B'}}>
        <div className="container text-center">
            <div className="row pt-4">
                  <div className="col">
                       <p className="text-center text-white-50 fs-6 fw-light "><span><i className="fas fa-dollar-sign fs-1 display-3"></i></span><br/> Buy a Property</p>
                  </div>
                  <div className="col">
                       <p className="text-center text-white-50 fs-6 fw-light"><span><i className="fas fa-hand-holding-usd fs-1 display-3"></i></span><br/> Sell a Property</p>
                  </div>
                   <div className="col">
                       <p className="text-center text-white-50 fs-6 fw-light "><span><i className="fas fa-hands-helping fs-1 display-3"></i></span><br/> Rent a Property</p> 
                  </div>
            </div>
        </div>
    </div>
    <MDBContainer className="mt-5" >
     <MDBCardTitle className="fs-2 text-uppercase fw-normal text-center pb-3">Our Catagaries</MDBCardTitle>
     <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100' style={{backgroundColor:'#CFD8DC'}}>
          <MDBCardImage
            src='https://i.imgur.com/I0pexw3.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
             <div className="d-grid">
             <MDBBtn className='mx-2 fw-light' color='dark' style={{letterSpacing:'2px'}}>
                <i className="fas fa-bullseye"></i> Real State
             </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100 ' style={{backgroundColor:'#CFD8DC'}}>
          <MDBCardImage
            src='https://i.imgur.com/nzZ739Y.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <div className="d-grid">
             <MDBBtn className='mx-2 fw-light' color='dark' style={{letterSpacing:'2px'}}>
                <i className="fas fa-bullseye"></i> Houses
             </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'  style={{backgroundColor:'#CFD8DC'}}>
          <MDBCardImage
            src='https://i.imgur.com/pS0sSXe.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <div className="d-grid">
             <MDBBtn className='mx-2 fw-light' color='dark' style={{letterSpacing:'2px'}}>
                <i className="fas fa-bullseye"></i> Apartment
             </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100' style={{backgroundColor:'#CFD8DC'}}>
          <MDBCardImage
            src='https://i.imgur.com/sDMGFTw.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <div className="d-grid">
             <MDBBtn className='mx-2 fw-light' color='dark' style={{letterSpacing:'2px'}}>
                <i className="fas fa-bullseye"></i> Bussiness Places
             </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100' style={{backgroundColor:'#CFD8DC'}}>
          <MDBCardImage
            src='https://i.imgur.com/UVRVL2w.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <div className="d-grid">
             <MDBBtn className='mx-2 fw-light' color='dark' style={{letterSpacing:'2px'}}>
                <i className="fas fa-bullseye"></i> Boarding Rooms
             </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100' style={{backgroundColor:'#CFD8DC'}}>
          <MDBCardImage
            src='https://i.imgur.com/RqffRt0.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <div className="d-grid">
             <MDBBtn className='mx-2 fw-light' color='dark' style={{letterSpacing:'2px'}}>
                <i className="fas fa-bullseye"></i> Land Sell
             </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </MDBContainer>
    <MDBRow>
    </MDBRow>
   </div>
  );
}

export default Index;
