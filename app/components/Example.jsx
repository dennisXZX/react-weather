import React, { Component } from 'react';
import { Link } from 'react-router';

class Example extends Component {
	render() {
		return (
			<div>
				<h1 className="text-center">Examples</h1>
				<p>Here are a few example locations to try out:</p>
				<ol>
					<li>
						<Link to='/?location=Sydney'>Sydney</Link>
					</li>
					<li>
						<Link to='/?location=Brisbane'>Brisbane</Link>
					</li>
				</ol>
			</div>
		)
	}
}

export default Example;