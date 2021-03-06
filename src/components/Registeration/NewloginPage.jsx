import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../Images/loginBg.png'
import SignInForm from './signInForm';
import SignUpForm from './signUpForm';
import '../../styles/loginPage.css'
import { BsTwitter } from "react-icons/bs";
import Popup from 'reactjs-popup';
import Shadow from './shadow';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"

const NewloginPage = (props) => {

    return (

        <div className="page">
            <img src={image} />
            <div className="portal">
                <BsTwitter style={{ color: "#1da1f2", width: "100px", height: "100px" }} />
                <h1>Happening now</h1>
                <h2>Join Twitter today.</h2>
                <nav>
                    <NavLink to="/signUp">
                    <button className="btn-outline-light rounded-pill gBtn  ">Sign Up</button>
                    </NavLink>
                    <h6>Already have an account?</h6>
                    <NavLink to="/signIn">
                    <button className=" btn-outline-light rounded-pill gBtn">Sign In</button>
                    </NavLink>
                </nav>

            </div>
            <Routes>
                <Route exact path="/signUp" element={<Shadow><SignUpForm /></Shadow>} />
                <Route exact path="/signIn" element={<Shadow><SignInForm /></Shadow>} />
            </Routes>


        </div>
    )
}
{/* <Popup trigger= {<button className="btn-outline-light rounded-pill gBtn  ">Sign Up</button>} position="left center">
                    <SignUpForm/>
                </Popup>
                <h6>Already have an account?</h6>
                <Popup trigger={<button className= " btn-outline-light rounded-pill gBtn">Sign In</button>} position="left center">
                    <SignInForm />
                </Popup> */}
              



export default NewloginPage
