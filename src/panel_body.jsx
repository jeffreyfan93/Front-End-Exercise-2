import React, { Component } from 'react';
import PanelBodyItem from './panel_body_item';
import './panel_body.css';

class PanelBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [
        {subtitle: 'Subtitle goes here', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: ''},
        {subtitle: 'Subtitle goes here', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: ''},
        {subtitle: 'Subtitle goes here', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: ''},
        {subtitle: 'Subtitle goes here', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: ''},
        {subtitle: 'Subtitle goes here', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: '../Assets/Data_icon.png'},
        {subtitle: 'Subtitle goes here', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: ''},
        {subtitle: 'Subtitle goes here', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', picture: ''}
      ]
    };
  }

  display() {
    if (this.props.toggleOpen) {
      return(
        <div className="results-list">
          {this.state.results.map((result, id) => (
            <PanelBodyItem
              key={id}
              id={id}
              result={result}/>
          ))}
        </div>
      );
    } else {
      return(
        <div className="results-list">
          {this.state.results.slice(0,2).map((result, id) => (
            <PanelBodyItem
              key={id}
              id={id}
              result={result}/>
          ))}
        </div>
      );
    }
  }

  render() {
    return(
      <div className="body-container">
        <div className='body-search'>
          Search <input className='search-input'></input>
        </div>
        <div>{this.display()}</div>
      </div>

    );

  }
}

export default PanelBody;
