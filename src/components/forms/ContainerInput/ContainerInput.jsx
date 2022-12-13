import Input from "./input/Input";
import PropTypes from "prop-types";

const ContainerInput = ({addUsers,errorName,errorStatus,name,setName,status,setStatus,data,option,setOption}) => {
	
	const addValue = () => {
		addUsers(name, status, option);
	};

	const filteredData = data.filter((el) => {
		return el.population > 50000;
	});
	const sortData = filteredData.sort((a, b) =>
		+a.population > +b.population ? -1 : 1,
	);
	let bigCity = sortData.shift();
	let newData = sortData.sort((a, b) => (a.city > b.city ? 1 : -1));
	newData.unshift(bigCity);

	return (
		<Input
			addValue={addValue}
			errorName={errorName}
			errorStatus={errorStatus}
			name={name}
			setName={setName}
			status={status}
			setStatus={setStatus}
			data={data}
			option={option}
			setOption={setOption}
			newData={newData}
		/>
	);
};

ContainerInput.propsTypes = {
	addUsers: PropTypes.func,
	errorName: PropTypes.bool,
	errorStatus: PropTypes.bool,
	name: PropTypes.string.isRequired,
	setName: PropTypes.func,
	status: PropTypes.string.isRequired,
	setStatus: PropTypes.func,
	data: PropTypes.array,
	option: PropTypes.string.isRequired,
	setOption: PropTypes.func,
};

ContainerInput.defaultProps = {
	addUsers: () => {},
	errorName: false,
	errorStatus: false,
	setName: () => {},
	setStatus: () => {},
	data: [],
	setOption: () => {},
};
export default ContainerInput;
