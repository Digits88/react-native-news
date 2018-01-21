import React, {Component} from "react";
import Home from "./screens/Home";
import SideBar from "./SideBar";
import About from "./About";
import {DrawerNavigator} from "react-navigation";

const DrawerScreenRouter = DrawerNavigator(
    {
        Home: {screen: Home},
        About: {screen: About}
    },
    {
        contentComponent: props => <SideBar {...props} />
    }
);
export default DrawerScreenRouter;