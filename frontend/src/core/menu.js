import React,{Fragment} from "react";
import { Link, withRouter } from "react-router-dom";
import { signout,isauthenticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#F9FF94" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>

    {isauthenticated()&&isauthenticated().user.role===0 &&(
            <li className="nav-item">
            <Link
              style={currentTab(history, "/user/dashboard")}
              className="nav-link"
              to="/user/dashboard"
            >
              User Dashboard
            </Link>
          </li>
    )}
  {isauthenticated()&&isauthenticated().user.role===1 &&(
            <li className="nav-item">
            <Link
              style={currentTab(history, "/admin/dashboard")}
              className="nav-link"
              to="/admin/dashboard"
            >
              Admin Dashboard
            </Link>
          </li>
    )}
      {!isauthenticated()&&(
              <Fragment>
              <li className="nav-item">
                <Link
                  style={currentTab(history, "/signup")}
                  className="nav-link"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  style={currentTab(history, "/signin")}
                  className="nav-link"
                  to="/signin"
                >
                  Sign In
                </Link>
                
              </li>
              </Fragment>
      )}


      {isauthenticated()&&(
              <li className="nav-item">
              <span className="nav-link text-white" 
              onClick={()=>{
                signout(()=>{
                history.push("/")
              })}}>
                Signout
              </span>
      
            </li>
      )}
    </ul>

  </div>

);

export default withRouter(Menu);
