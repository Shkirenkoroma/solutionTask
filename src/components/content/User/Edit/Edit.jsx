import "../Edit/edit.less";
import PropTypes from "prop-types";

const Edit = ({ value, onChange }) => {
	
	return (
		<div className="edit">
			<input
				className="edit_field"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};
Edit.propsTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
};

Edit.defaultProps = {
	value: "",
	onChange: () => {},
};
export default Edit;
