import React from "react";
import classes from './AppHeader.module.scss'
import logo from "./img/Logo.png";

function AppHeader() {
	return (
	<div className={classes["appheader-wrapper"]}>
	<img className={classes["appheader"]} src={logo} alt="логотип компании" />
	</div>
	);
}

export default AppHeader;