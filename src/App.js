import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import Footer from "./components/footer";
import Index from './components/index';
import SellerDashboard from './components/seller_dashboard'
import LandSelling from './components/landSelling'
import Bording from './components/bording'
import House from './components/House'
import Appartment from './components/Appartment'
import RealState from './components/realState'
import BussinessPlaces from './components/BussinessPlaces'
import LandSellingUpdate from './components/landSellingUpdate'
import BordingUpdate from './components/BordingUpdate'
import AdvertismentPackage from './components/advertismentPackage'
import EditProfile from './components/editProfile'
import BuyerDashBoard from './components/buyerDashBoard'
import landBuy from './components/landBuy'
import otherBuy from './components/otherBuy'
import ViewLands from './components/viewLands'  
import viewOther from './components/viewOther'  
import Payment from './components/payment'  
import EditProfilebuyer from './components/editProfilebuyer'  
import { BrowserRouter as Router,Route ,useLocation} from 'react-router-dom';

const NoMatch = () => {
  const {pathname} = useLocation()

  return <div className="text-center" style={{marginTop:'2%' , marginBottom:'10%'}}><img src='https://i.imgur.com/e279icN.png' className='img-fluid shadow-0' alt='...' /><h3>No Match For<code>{pathname}</code></h3></div>
}

function App() {
  return (
  <div>
   <Router>
         <div>
               
                <Route exact path="/" >
                    <Index/>
                </Route>
                 <Route path="/SellerDashboard" exact component={SellerDashboard}/>
                 <Route path="/LandSelling" exact component={LandSelling}/>
                 <Route path="/House" exact component={House}/>
                 <Route path="/otherBuy" exact component={otherBuy}/>
                 <Route path="/Payment" exact component={Payment}/>
                 <Route path="/Bording" exact component={Bording}/>
                 <Route path="/EditProfile" exact component={EditProfile}/>
                 <Route path="/BordingUpdate" exact component={BordingUpdate}/>
                 <Route path="/Appartment" exact component={Appartment}/>
                 <Route path="/BuyerDashBoard" exact component={BuyerDashBoard}/>
                 <Route path="/RealState" exact component={RealState}/>
                 <Route path="/BussinessPlaces" exact component={BussinessPlaces}/>
                 <Route path="/landBuy" exact component={landBuy}/>
                 <Route path="/viewOther" exact component={viewOther}/>
                 <Route path="/ViewLands" exact component={ViewLands}/>
                 <Route path="/EditProfilebuyer" exact component={EditProfilebuyer}/>
                 <Route path="/LandSellingUpdate" exact component={LandSellingUpdate}/>
                 <Route path="/AdvertismentPackage" exact component={AdvertismentPackage}/>
                 {/* <Route path='*'>
                    <NoMatch/>
                 </Route> */}
                <Footer/>
         </div>
    </Router>
  </div>
  );
}

export default App;
