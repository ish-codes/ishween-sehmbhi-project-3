function Sidebar(props) {
	function handleClick(e) {
		// When button is clicked, set the state of currentlyViewing [as received from App.js] to the value received
		// console.log(e.target.value);
		props.setCurrentlyViewing(e.target.value);
	}

	return (
		<aside className="buttons-bar">
			<p>filter by</p>
			<button
				value={"/"}
				onClick={function (e) {
					handleClick(e);
				}}
			>
				all
			</button>
			<button
				value={"coffees"}
				onClick={function (e) {
					handleClick(e);
				}}
			>
				coffee
			</button>
			<button
				value={"teas"}
				onClick={function (e) {
					handleClick(e);
				}}
			>
				{" "}
				tea
			</button>
			<button value={"merch"}>merch</button>
		</aside>
	);
}

export default Sidebar;
