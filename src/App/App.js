import React from "react";
import classes from "./App.module.scss";

import AppHeader from "../AppHeader";
import Tabs from "../Tabs";
import Filter from "../Filter";
import TicketsList from "../TicketList"
import Button from "../Button";

function App() {
	return (
		<div className={classes["app-wrapper"]}>
			<AppHeader />
			<Tabs />
			<Filter />
			<TicketsList />
			<Button />
		</div>
	);
}

export default App;