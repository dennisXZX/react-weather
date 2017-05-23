import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class ErrorModal extends Component {
	componentDidMount() {
		const { errorMessage } = this.props;

		const modalMarkup = (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>Error</h4>
				<p>No data is returned from this city.</p>
				<p>
					<button className="button" data-close="">OK</button>
				</p>
			</div>			
		);

		const $modal = $(ReactDOMServer.renderToString(modalMarkup));
		$(ReactDOM.findDOMNode(this)).html($modal);

		const modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	}

	render() {
		return (
			<div></div>
		)
	}
}

export default ErrorModal;