import "../User/user.less";
import Edit from "./Edit/Edit";
import { useState } from "react";
import PropTypes from "prop-types";

const User = ({name,city,editUserId,setEditUserId,user,setUsers,setDate}) => {
	const [status, setStatus] = useState(user.status);
	const time = new Date().toLocaleString();
	const saveChanges = (e) => {
		e.stopPropagation();
		setUsers((users) => [
			...users.map((item) =>
				item.id === user.id ? { ...item, status: status } : { ...item },
			),
		]);
		setEditUserId(null);
		setDate(time);
	};

	return (
		<div>
			{editUserId === user.id ? (
				<div className="editField">
					<Edit value={status} onChange={setStatus}></Edit>
					<button className="button" onClick={saveChanges}>
						Save edit
					</button>
				</div>
			) : (
				<>
					<ul>
						<li>{name}:</li>
						<li>{status},</li>
						<li>{city}</li>
					</ul>
				</>
			)}
			{!editUserId && (
				<button className="button" onClick={() => setEditUserId(user.id)}>
					<span className="clickName">Change status</span>
				</button>
			)}
		</div>
	);
};

User.propsTypes = {
	users: PropTypes.object.isRequired,
	city: PropTypes.string,
	name: PropTypes.string,
	setStatus: PropTypes.func,
	date: PropTypes.object,
	setEditUserId: PropTypes.func.isRequired,
	editUserId: PropTypes.string.isRequired,
	setUsers: PropTypes.func,
	setDate: PropTypes.func,
};

User.defaultProps = {
	city: "",
	name: "",
	setStatus: () => {},
	date: {},
	setUsers: () => {},
	setDate: () => {},
};
export default User;
