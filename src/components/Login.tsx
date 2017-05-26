import * as React from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from "react-router-dom";

@inject("store")
@observer
export default class Login extends React.Component<any, {}> {
	render() {
		return (
			<div className="page login">
				Your login form here...
				{this.props.store.authenticated &&
					!this.props.store.authenticating &&
					<Redirect to="/" />}
			</div>
		);
	}
}
