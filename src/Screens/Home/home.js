import React, { useState, useEffect, Component } from "react";
import { connect } from "react-redux";
import LoginBox from '../../Layouts/LoginBox'

// import SCSS
import "../../App.scss";

const HomeScreen = (props) => {

  return (
    <section className="udemyCourse container">
          <div>
              <LoginBox />
          </div>
    </section>
  );
};

  const mapStateToProps = state => ({
    credentials: state.adminReducer.credentials,

  });

export default connect(mapStateToProps)(HomeScreen);

