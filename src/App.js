import React, { Component } from 'react';
//import {observer,Provider,inject} from  'mobx-react';
import Sidebar from './components/Sidebar';
class App extends Component {
  render() {
    return (
      <div  >
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">

				<div className="header-wrapper">

					<div className="container">

						<div className="col-md-6 text-left">

							<strong>Address :</strong> Pandav Nagar,New Delhi,110092

						</div>

						<div className="col-md-6">

							<div className="collapse navbar-collapse hdr-menu" id="myNavbar">

								<ul className="nav navbar-nav navbar-right">

									<li><a href="#">Career</a></li>

									<li><a href="http://treco.in/index.php#contact">Contact us</a></li>

									<li className="head-login"><a href="#" data-toggle="modal" data-target="#login-modal"><i className="fa fa-user" aria-hidden="true"></i> Login</a></li>

								</ul>

							</div>



						</div>

					</div>

				</div>



				<div className="container">



					

					<div className="navbar-header">

						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">

							<span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span>

						</button>

						<a className="navbar-brand" href="index.php"><img src="web-admin/admin/images/logo_1.png" alt="" style={{"width": "160px"}} /></a>

					</div>


					

					<div className="collapse navbar-collapse nvtp" id="bs-example-navbar-collapse-1">

						<ul className="nav navbar-nav navbar-right">

							<li><a href="index.php">Home</a></li>

							<li><a href="about.php">About US</a></li>

							<li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Our Solutions <b className="caret"></b></a>

								<ul className="dropdown-menu">

									<li><a href="entrance-management.php">Entrance

											Management</a></li>

									<li><a href="security-management.php">Safety and

											Security Management</a></li>

									<li><a href="smart-home-management.php">Smart home

											Management</a></li>

									<li><a href="music-zoning.php">Music Zoning</a></li>

									<li><a href="hospitality-solutions.php">Hospitality

											Solutions</a></li>

									<li><a href="conference-room-automation.php">Conference

											Room Automation Solutions &amp; Systems </a></li>

									<li><a href="smart-solutions.php">Smart Solutions</a></li>

								</ul></li>



							<li><a href="design-your-home.php">Design Your Home</a></li>

							<li><a href="http://treco.in/demo/index.php" target="_blank">Digital Home Demo</a></li>

							<li><a href="customer-service.php">Customer Service</a></li>

						</ul>

					</div>					

				</div>			

			</nav>
          <div id="page-content-wrapper">
              {this.props.children}
          </div>
          <div >
			    <div className="container-footer">
			        <div className="container">
			            <div className="row">
			                <div className="col-sm-3">
			                    <h2 className="fhdg"> Useful Links</h2>
			                    <div className="fmenu">
			                        <ul>
			                            <li>
			                                <a href="index.php"> Home</a>
			                            </li>
			                            <li>
			                                <a href="about.php"> About US</a>
			                            </li>
			                            <li>
			                                <a href="design-your-home.php"> Design Your Home</a>
			                            </li>
			                            <li>
			                                <a href="http://treco.in/demo/index.php" target="_blank"> Digital Home Demo</a>
			                            </li>
			                            <li>
			                                <a href="customer-service.php"> Customer Service</a>
			                            </li>
			                        </ul>
			                    </div>
			                </div>
			                <div className="col-sm-3">
			                    <h2 className="fhdg">
			                        About Us
			                    </h2>
			                    <div className="divider">
			                    </div>
			                    <p ng-bind-html="about_message" className="ng-binding"><p>Welcome to our world of cutting edge comprehensive technical research &amp; consultancy services. We integrate multiple smart devices available in market in single frame work to provide highly sophisticated, smart, intelligent and economical IoT/ Home Automation solution for&nbsp; &nbsp;different Residential and commercial customers requirements....</p></p>
			                </div>
			                <div className="col-sm-3">
			                    <h2 className="fhdg">
			                        Get in touch
			                    </h2>
			                    <p className="ng-binding">
			                        <strong>
			                            Address :
			                        </strong>
			                        Branch Office &amp; Experience Centre:	2nd floor,B-9/9,  Ring Road, Rajouri Garden,New Delhi,110027
			                    </p>
			                    <p >
			                        <strong>
			                            Phone No. :
			                        </strong>
			                        +91- 98-10-894981
			                    </p>
			                    <p className="ng-binding">
			                        <strong>
			                            Email ID :
			                        </strong>
			                        info@treco.in
			                    </p>
			                    <p className="ng-binding">
			                        <strong>
			                            Website :
			                        </strong>
			                        treco.in
			                    </p>
			                </div>

			                <div className="col-sm-3">
			                    <h2 className="fhdg">
			                        Connect with Us
			                    </h2>
			                    <p>
			                        Join us on our social media links.
			                    </p>
			                    <div className="footer_mn">
			                        <ul className="icon_footer">
			                            <li>
			                                <a data-placement="bottom" data-toggle="tooltip" target="_blank" ng-href="https://www.facebook.com/TRECO-Technologies-1103251483062862" title="Facebook" href="https://www.facebook.com/TRECO-Technologies-1103251483062862">
			                                    <i className="fa fa-facebook">
			                                    </i>
			                                </a>
			                            </li>
			                            <li>
			                                <a data-placement="bottom" data-toggle="tooltip" target="_blank" ng-href="https://twitter.com/TrecoTechnolog1" title="Twitter" href="https://twitter.com/TrecoTechnolog1">
			                                    <i className="fa fa-twitter">
			                                    </i>
			                                </a>
			                            </li>
			                            <li>
			                                <a data-placement="bottom" data-toggle="tooltip" target="_blank" ng-href="https://plus.google.com/109973284884395317412" title="Google Plus" href="https://plus.google.com/109973284884395317412">
			                                    <i className="fa fa-google-plus">
			                                    </i>
			                                </a>
			                            </li>
			                            <li className="last">
			                                <a data-placement="bottom" data-toggle="tooltip" target="_blank" ng-href="https://www.linkedin.com/in/treco-technologies-7198b0129/" title="linkedin" href="https://www.linkedin.com/in/treco-technologies-7198b0129/">
			                                    <i className="fa fa-linkedin">
			                                    </i>
			                                </a>
			                            </li>
			                        </ul>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			    <div className="container">
			        <footer>
			            <div className="col-md-6 text-left">  Copyright 
			                <strong> Jyotirmoy Nath </strong>
			            </div>
			            <div className="col-md-6">
			                <div className="collapse navbar-collapse">
			                    <ul className="nav navbar-nav navbar-right">
			                        <li>
			                            <a href="#"> Home </a>
			                        </li>
			                        <li>
			                            <a href="#">Career</a>
			                        </li>
			                        <li>
			                            <a className="last" href="http://treco.in/index.php#contact" blank="_target"> Contact </a>
			                        </li>
			                    </ul>
			                </div>
			            </div>
			        </footer>
			    </div>
			</div>
      </div>
    );
  }
}

export default App;
