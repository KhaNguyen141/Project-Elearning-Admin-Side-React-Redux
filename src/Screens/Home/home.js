import React, { Component } from "react";

import { connect } from "react-redux";

// import Component
import LoginBox from '../../Layouts/LoginBox';

// import SCSS
import "../../App.scss";

// import layout

 class HomeScreen extends Component {
  render() {
    return (
      <div>
        {this.props.credentials ? (
          <div>
           
            <div className="page-content p-5" id="content">
          
              <button id="sidebarCollapse" type="button" className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i className="fa fa-bars mr-2" /><small className="text-uppercase font-weight-bold">Toggle</small></button>
        
             
              <div className="separator" />
              
              <div className="homeContentContainer">
                
                <div className="row bg-white rounded chartContainer">
                  <div className="col-8">
                    <img className="chartFramework" src="/img/framework chart 2019.png" />
                  </div>
    
                  <div className="col-4">
                    <div className="chartInfoContainer">
                      <div className="TotalInfo">
                        <h3>Total</h3>
                        <p>235.434 million downloads (100%)</p>
                        <div className="progressContainerBar">
                            <div className="progressBar"></div>
                        </div>
                      </div>
    
                      <div className="ReactInfo">
                        <h3>React JS</h3>
                        <p>147.576 million downloads (45%)</p>
                        <div className="progressContainerBar">
                          <div className="progressBar"></div>
                        </div>
                        
                      </div>
    
                      <div className="AngularInfo">
                        <h3>Angular Core</h3>
                        <p>67.421 million downloads (35%)</p>
                        <div className="progressContainerBar">
                          <div className="progressBar"></div>
                        </div>
                      </div>
    
                      <div className="VueInfo">
                        <h3>Vue JS</h3>
                        <p>20.437 million downloads (20%)</p>
                        <div className="progressContainerBar">
                          <div className="progressBar"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    
                </div>
              </div>
            </div>
        ) : (
          <LoginBox />
        ) }
        
        </div>


    )
  }
}

const mapStateToProps = (state) => ({
  credentials: state.adminReducer.credentials,
})

export default connect(mapStateToProps)(HomeScreen);

