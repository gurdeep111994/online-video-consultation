import React, { Fragment } from 'react';
import Home from "../../components/home/home";
import Webnier from "../../components/home/webnier";

const home = (props) => {
    return (
       <Fragment>
           <Home />
           <Webnier />
       </Fragment> 
    )
}

export default home;
