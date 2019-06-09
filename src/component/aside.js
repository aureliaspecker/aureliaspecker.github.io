import React, { Component } from 'react';

export default class Aside extends Component {
    render () {
        return (
        <div>
        <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
        <aside id="colorlib-aside" role="complementary" className="js-fullheight text-center">
              <h1 id="colorlib-logo"><a href="index.html">welcome<span>.</span></a></h1>
              <nav id="colorlib-main-menu" role="navigation">
                <ul>
                  <li className="colorlib-active"><a href="index.html">Home</a></li>
                  <li><a href="index.html">About</a></li>
                  <li><a href="index.html">Books</a></li>
                  <li><a href="index.html">CV</a></li>
                </ul>
              </nav>

              <div className="colorlib-footer">
                <ul>
                  <li><a href="https://twitter.com/AureliaSpecker"><i className="icon-twitter"></i></a></li>
                  <li><a href="https://github.com/aureliaspecker"><i className="icon-github"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/aurelia-specker/"><i className="icon-linkedin"></i></a></li>
                  <li></li>
                </ul>
                <p> Thanks <a href="https://colorlib.com">Colo(u)rlib</a> and <a href="https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/">Dhruv Barochiya</a> for the inspiration <i class="icon-heart" aria-hidden="true"></i></p>
              </div>
        </aside>
        </div>
        );
    }

}