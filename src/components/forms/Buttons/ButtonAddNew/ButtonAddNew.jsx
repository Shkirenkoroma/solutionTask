import PropTypes from "prop-types";

const ButtonAddNewUser = ({addValue}) => {
	
   return (
		<div>
			<button className="button" onClick={addValue}>
				<span className="button_clickName">Add new user</span>
			</button>
		</div>
	);
};

ButtonAddNewUser.propTypes = {
	addValue: PropTypes.func,
	}
	
export default ButtonAddNewUser;
