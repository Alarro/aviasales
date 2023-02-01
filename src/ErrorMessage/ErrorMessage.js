import { Alert } from "antd";
import React from "react";


const ErrorMessage = () => (
	<div>
		<Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="error" />
	</div>
);

export default ErrorMessage;