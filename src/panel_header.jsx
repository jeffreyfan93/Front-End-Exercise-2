import React, { Component } from 'react';
import './panel_header.css';
import ExpandArrow from '../Assets/Expand_Arrow.png';

class PanelHeader extends Component {

  render() {
    return(
      <div className="header-container">
        <div className="header-title">Get the 411 now!</div>
        <div className="picture" onClick={this.props.togglePanel}>
          <img src={ExpandArrow} alt="expand" id="arrow"/>
        </div>
      </div>
    );
  }
}

export default PanelHeader;
