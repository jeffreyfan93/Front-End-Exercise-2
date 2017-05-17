import React, { Component } from 'react';
import './panel_body_item.css';

import NewIcon from '../Assets/NEW_icon.png';
import DataIcon from '../Assets/Data_icon.png';
import ReadArrow from '../Assets/Read_Arrow.png';

class PanelBodyItem extends Component {


  new() {
    if (this.props.id < 2) {
      return(
        <div className="new">
          <img src={NewIcon} alt="new-icon" />
        </div>
      );
    } else {

    }
  }

  picture() {
    if (this.props.result.picture.length === 0) {
      return(
        <div className="result-body-text">{this.props.result.body}</div>
      );
    } else {
      return(
        <div className="result-body">
          <img src={DataIcon} alt="data-icon"/>
          <div className="result-body-text">{this.props.result.body}...
            <span>
              <a href='google.com'>
                <img src={ReadArrow} alt="read-arrow" className="read-arrow"/>
                Read More
              </a>
            </span>
          </div>
        </div>
      );
    }
  }

  render() {
    const { subtitle } = this.props.result;

    return(
      <div className="result-container">
        {this.new()}
        <div className="result-text">
          <a href="google.com" className="result-subtitle">{subtitle}</a>
          {this.picture()}
        </div>
      </div>
    );
  }
}

export default PanelBodyItem;
