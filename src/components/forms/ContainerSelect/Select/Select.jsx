import "../Select/select.less";
import PropTypes from "prop-types";

const Select = ({ option, setOption, newData }) => {
	
	return (
		<select
			value={option}
			onChange={(e) => setOption(e.target.value)}
			className="select"
		>
			{newData.map((item, index) => (
				<option key={index}>{item.city}</option>
			))}
		</select>
	);
};

Select.propTypes = {
	option: PropTypes.string.isRequired,
	setOption: PropTypes.func,
	newData: PropTypes.array.isRequired,
};
Select.defaultProps = {
	setOption: () => {},
};
export default Select;
