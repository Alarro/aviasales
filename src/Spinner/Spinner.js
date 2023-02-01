import { Spin } from "antd";
import React from "react";
import classes from "./Spinner.module.scss";

function Spinner() {
	return (
		<div className={classes.example}>
			<Spin />
		</div>
	);
}

export default Spinner;