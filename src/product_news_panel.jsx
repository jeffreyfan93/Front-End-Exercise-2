import React, { Component } from 'react';
import PanelHeader from './panel_header';
import PanelBody from './panel_body';
import './product_news_panel.css';

import ExpandArrow from '../Assets/Expand_Arrow.png';
import CollapseArrow from '../Assets/Collapse_Arrow.png';

class ProductNewsPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleOpen: false
    };

    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel() {
    const nextState = !this.state.toggleOpen;
    const currentArrow = document.getElementById('arrow').src;
    if (currentArrow === ExpandArrow) {
      document.getElementById("arrow").src = CollapseArrow;
    } else {
      document.getElementById("arrow").src = ExpandArrow;
    }
    this.setState({toggleOpen: nextState});
  }

  render() {
    return(
      <div className="product-news-panel">
        <PanelHeader togglePanel={this.togglePanel}/>
        <PanelBody toggleOpen={this.state.toggleOpen}/>
      </div>
    );
  }
}

export default ProductNewsPanel;
