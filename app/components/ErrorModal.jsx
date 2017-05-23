import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class ErrorModal extends Component {
	componentDidMount() {
		const { errorMessage } = this.props;

		// store the HTML markup in a variable
		const modalMarkup = (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>Error</h4>
				<p>No data is returned from this city.</p>
				<p>
					<button className="button" data-close="">OK</button>
				</p>
			</div>			
		);

		// ReactDOMServer class is used to render components on the server
		// ReactDOMServer.renderToString renders the React element to its initial HTML
		const $modal = $(ReactDOMServer.renderToString(modalMarkup));
		// ReactDOM.findDOMNode(component) returns the corresponding native browser DOM element
		// convert the HTML to a jQuery object and change its HTML contents
		$(ReactDOM.findDOMNode(this)).html($modal);

		// create a Foundation Reveal instance
		const modal = new Foundation.Reveal($('#error-modal'));
		// open the modal
		modal.open();
	}

	render() {
		// the reason this modal component cannot be rendered in render() method is because
		// Foundation manipulates the DOM directly which React is frowned upon
		return (
			<div></div>
		)
	}
}

export default ErrorModal;