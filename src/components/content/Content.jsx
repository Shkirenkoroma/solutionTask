import User from "./User/User";
import "../content/content.less";
import ButtonSubmit from "../forms/Buttons/ButtonSumbit/ButtonSubmit";
import PropTypes from "prop-types";

const Content = ({users,editUserId,setEditUserId,setStatus,setUsers,date,setDate}) => {
	const sendToServerLikeJSONformat = () => {
		const dataToServer = JSON.stringify(users);
		console.log(dataToServer);
	};

	return (
		<div className="content">
			{users.map((user) => (
				<User
					user={user}
					key={user.id}
					editUserId={editUserId}
					setEditUserId={setEditUserId}
					name={user.name}
					status={user.status}
					city={user.city}
					setStatus={setStatus}
					users={users}
					setUsers={setUsers}
					setDate={setDate}
				/>
			))}

			<ButtonSubmit sendToServerLikeJSONformat={sendToServerLikeJSONformat} />

			<div>
				{date && <span className="describeDate">Last changed: </span>}
				<span className="describeDate_value">{date}</span>
			</div>
		</div>
	);
};

Content.propsTypes = {
	users: PropTypes.array.isRequired,
	editUserId: PropTypes.string.isRequired,
	setEditUserId: PropTypes.func.isRequired,
	setStatus: PropTypes.func,
	setUsers: PropTypes.func,
	date: PropTypes.object,
	setDate: PropTypes.func,
};

Content.defaultProps = {
	setStatus: () => {},
	setUsers: () => {},
	date: {},
	setDate: () => {},
};
export default Content;
