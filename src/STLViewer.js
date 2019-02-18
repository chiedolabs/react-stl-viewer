import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScaleLoader } from 'halogenium';
import Paint from './Paint';

class STLViewer extends Component {
  static propTypes = {
    className: PropTypes.string,
    url: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    backgroundColor: PropTypes.string,
    modelColor: PropTypes.string,
    rotate: PropTypes.bool,
    orbitControls: PropTypes.bool,
    cameraX: PropTypes.number,
    cameraY: PropTypes.number,
    cameraZ: PropTypes.number,
    lights: PropTypes.array,
    lightColor: PropTypes.string,
    rotationSpeeds: PropTypes.arrayOf(PropTypes.number),
    model: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(ArrayBuffer)
    ]).isRequired
  };

  static defaultProps = {
    backgroundColor: '#EAEAEA',
    modelColor: '#B92C2C',
    height: 400,
    width: 400,
    rotate: true,
    orbitControls: true,
    cameraX: 0,
    cameraY: 0,
    cameraZ: null,
    lights: [0, 0, 1],
    lightColor: '#ffffff',
    rotationSpeeds: [0, 0, 0.02],
    model: undefined
  };

  componentDidMount() {
    this.paint = new Paint();
    this.paint.init(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  componentWillUpdate(nextProps, nextState) {
    this.props = nextProps;
    this.paint.init(this);
  }

  componentWillUnmount() {
    this.paint.clean();
    delete this.paint;
  }

  render() {
    const { width, height, modelColor } = this.props;
    return (
      <div
        className={this.props.className}
        style={{
          width: width,
          height: height,
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ScaleLoader color={modelColor} size="16px" />
        </div>
      </div>
    );
  }
}

module.exports = STLViewer;
