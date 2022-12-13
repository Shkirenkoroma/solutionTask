const ButtonSubmit = ({ sendToServerLikeJSONformat }) => {
	
	return (
		<div>
			<input
				className="button"
				type="submit"
				value="Send"
				onClick={sendToServerLikeJSONformat}
			/>
		</div>
	);
};

export default ButtonSubmit;
