import Select from "./Select/Select";
import PropTypes from "prop-types";

const ContainerSelect = ({ option, setOption, newData }) => {
	
	return (
		<div>
			<Select option={option} setOption={setOption} newData={newData} />
		</div>
	);
};

ContainerSelect.propTypes = {
	option: PropTypes.string.isRequired,
	setOption: PropTypes.func,
	newData: PropTypes.array.isRequired,
};
ContainerSelect.defaultProps = {
	setOption: () => {},
};

export default ContainerSelect;
