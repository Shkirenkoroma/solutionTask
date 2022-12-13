import ContainerSelect from "../../ContainerSelect/ContainerSelect";
import "../input/input.less";
import PropTypes from "prop-types";
import ButtonAddNewUser from "../../Buttons/ButtonAddNew/ButtonAddNew.jsx";

const Input = ({errorName,errorStatus,name,setName,status,setStatus,option,setOption,addValue,newData}) => {
	
	return (
		<div className="forms">
			<input
				className={errorName ? "input error_name_field" : "input"}
				placeholder="Input name"
				type="text"
				onChange={(e) => setName(e.target.value)}
				value={name}
			/>
			{errorName && <div className="errorMessageName">necessary field</div>}
			<input
				className={errorStatus ? "input error_status_field" : "input"}
				placeholder="Input status"
				type="text"
				onChange={(e) => setStatus(e.target.value)}
				value={status}
			/>
			{errorStatus && <div className="errorMessageStatus">necessary field</div>}
			<ContainerSelect
				newData={newData}
				setOption={setOption}
				option={option}
			/>
			<ButtonAddNewUser addValue={addValue} />
		</div>
	);
};

Input.propTypes = {
	errorName: PropTypes.bool,
	errorStatus: PropTypes.bool,
	name: PropTypes.string.isRequired,
	setName: PropTypes.func,
	status: PropTypes.string.isRequired,
	setStatus: PropTypes.func,
	option: PropTypes.string.isRequired,
	setOption: PropTypes.func,
	addValue: PropTypes.func,
	newData: PropTypes.array,
};

Input.defaultProps = {
	addValue: () => {},
	errorName: false,
	errorStatus: false,
	setName: () => {},
	setStatus: () => {},
	newData: [],
	setOption: () => {},
};

export default Input;
