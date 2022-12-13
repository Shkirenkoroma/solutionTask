import "./App.less";
import { useState } from "react";
import ContainerInput from "./components/forms/ContainerInput/ContainerInput";
import Content from "./components/content/Content";
import data from "./city.json";

const App = () => {
	const initialStateOfUsers = [
		{ id: Math.random(), name: "Roman", status: "go to shop", city: "Moscow" },
		{ id: Math.random(), name: "Ivan", status: "go to gym", city: "Vladimir" },
		{ id: Math.random(), name: "Vladimir", status: "go to home", city: "Omsk" },
	];

	const [users, setUsers] = useState(initialStateOfUsers);
	const [errorName, setErrorName] = useState(false);
	const [errorStatus, setErrorStatus] = useState(false);
	const [name, setName] = useState("");
	const [status, setStatus] = useState("");
	const [option, setOption] = useState("Красноярск");
	const [editUserId, setEditUserId] = useState();
	const [date, setDate] = useState("");
	/**
	 * Переменная, которая хранит объект даты (времени), далее буду использовать, чтобы передавать значение последнего изменения возле кнопки "send"
	 */
	const time = new Date().toLocaleString();

	const addUsers = (name, status, option) => {
		if (name && status) {
			setUsers([
				...users,
				{ id: Math.random(), name: name, status: status, city: option },
			]);
			setErrorName(false);
			setErrorStatus(false);
			setName("");
			setStatus("");
			setEditUserId(null);
			setDate(time);
		} else if (!name && !status) {
			setErrorName(true);
			setErrorStatus(true);
		} else if (!name && status) {
			setErrorName(true);
		} else setErrorStatus(true);
	};

	return (
		<div className="Container">
			<ContainerInput
				name={name}
				setName={setName}
				status={status}
				setStatus={setStatus}
				addUsers={addUsers}
				errorName={errorName}
				errorStatus={errorStatus}
				data={data}
				option={option}
				setOption={setOption}
			/>
			<Content
				users={users}
				editUserId={editUserId}
				setEditUserId={setEditUserId}
				setUsers={setUsers}
				status={status}
				date={date}
				setDate={setDate}
			/>
		</div>
	);
};

export default App;
