import React, {Component} from 'react';
import SatSetting1 from './SatSetting'


class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="left-side">
          <SatSetting1 />
        </div>
        <div className="right-side">
          right-side
        </div>
      </div>
    );
  }
}

export default Main;