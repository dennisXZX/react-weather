import React, { Component } from 'react';

class ErrorModal extends Component {
	componentDidMount() {
		const modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	}

	render() {
		const { errorMessage } = this.props;

		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>Error</h4>
				<p>No data is returned from this city.</p>
				<p>
					<button className="button" data-close="">OK</button>
				</p>
			</div>
		)
	}
}

export default ErrorModal;