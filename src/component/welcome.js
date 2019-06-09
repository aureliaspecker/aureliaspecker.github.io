import React, { Component } from 'react';

export default class Welcome extends Component {
    render () {
        return (
            <div id="colorlib-main">
			<div className="hero-wrap js-fullheight" style={{backgroundImage: 'url(images/bg_1.jpg)'}} data-stellar-background-ratio="0.5">
				<div className="overlay"></div>
				<div className="js-fullheight d-flex justify-content-center align-items-center">
					<div className="col-md-8 text text-center">
                        <div class="img mb-4" style={{backgroundImage: 'url(images/aurelia1.jpg'}}></div>
						<div className="desc">
							<h2 className="subheading">Partner Engineer @Twitter</h2>
							<h1 className="mb-4">Aurelia Specker</h1>
							<p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <ul className="ftco-social mt-3">
                                <li><a href="https://twitter.com/AureliaSpecker"><span className="icon-twitter"></span></a></li>
                                <li><a href="https://github.com/aureliaspecker"><span className="icon-github"></span></a></li>
                                <li><a href="https://www.linkedin.com/in/aurelia-specker/"><span className="icon-linkedin"></span></a></li>
                                <li><a href="mailto:spe.aurelia@gmail.com"><span className="icon icon-envelope"></span></a></li>
                            </ul>
						</div>
					</div>
				</div>
			</div>
            </div>
        );
    }

}