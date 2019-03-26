import React from "react";

export default class reactLander extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}

	render() {
		console.log(this.state);
		let redExtraClass = "";
		if (this.state.clickedLight == "red") redExtraClass = "selected";
		let yellowExtraClass = "";
		if (this.state.clickedLight == "yellow") yellowExtraClass = "selected";
		let greenExtraClass = "";
		if (this.state.clickedLight == "green") greenExtraClass = "selected";

		return (
			<div>
				<div id="reactLander"> </div>
				<div id="container">
					<div
						className={"red light " + redExtraClass}
						onClick={() => this.setState({ clickedLight: "red" })}
					/>
					<div
						className={"red light " + yellowExtraClass}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}
					/>
					<div
						className={"red light " + greenExtraClass}
						onClick={() => this.setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
