import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminDashboard from "./user/Admindashboard";
import PrivateRoute from "./auth/privateroute";
import UserDashboard from "./user/Userdashboard";
import AdminRoute from "./auth/adminroute";
import createroom from "./admin/createroom";
import viewallroom from "./admin/viewroom";
import editroom from "./admin/editroom";
import EditProfile from "./user/helper/editprofile";
import Book from './core/Book'
import Deleteroom from "./admin/deleteroom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/user/book/:roomid" exact component={Book} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard}/>
        <PrivateRoute path="/user/edit" exact component={EditProfile}/>
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
        <AdminRoute path="/admin/create" exact component={createroom}/>
        <AdminRoute path="/admin/edit/:roomid" exact component={editroom}/>
        <AdminRoute path="/admin/delete/:roomid" exact component={Deleteroom}/>
        <AdminRoute path="/admin/viewall" exact component={viewallroom}/>

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
