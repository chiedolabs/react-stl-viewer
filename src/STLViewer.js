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
    lightX: PropTypes.number,
    lightY: PropTypes.number,
    lightZ: PropTypes.number,
    lightColor: PropTypes.string,
    rotationSpeeds: PropTypes.arrayOf(PropTypes.number)
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
    lightX: 0,
    lightY: 0,
    lightZ: 1,
    lightColor: '#ffffff',
    rotationSpeeds: [0, 0, 0.02]
  };

  componentDidMount() {
    let camera, scene, renderer, mesh, controls;
    let rotate = this.props.rotate;
    this.paint = new Paint();

    init.bind(this)();

    /**
     * The init method for the 3D scene
     * @returns {void}
     */
    function init() {
      this.paint.init(this);
    }

    /**
     * Animate the scene
     * @returns {void}
     */
    let animate = () => {
      // note: three.js includes requestAnimationFrame shim
      if (rotate) {
        requestAnimationFrame(animate);
      }
      if (this.props.orbitControls) {
        controls.update();
      }
      render();
    };

    /**
     * Render the scene
     * @returns {void}
     */
    let render = () => {
      if (mesh && rotate) {
        mesh.rotation.x += this.rotationSpeeds[0];
        mesh.rotation.y += this.rotationSpeeds[1];
        mesh.rotation.z += this.rotationSpeeds[2];
      }

      renderer.render(scene, camera);
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(nextProps) !== JSON.stringify(this.props);
  }

  componentWillUpdate(nextProps, nextState) {
    let camera, scene, renderer, mesh, controls;
    let { rotate, rotationSpeeds } = nextProps;

    this.props = nextProps;

    init.bind(this)();

    /**
     * The init method for the 3D scene
     * @returns {void}
     */
    function init() {
      this.paint.init(this);
    }

    /**
     * Animate the scene
     * @returns {void}
     */
    let animate = () => {
      // note: three.js includes requestAnimationFrame shim
      if (rotate) {
        requestAnimationFrame(animate);
      }
      if (nextProps.orbitControls) {
        controls.update();
      }
      render();
    };

    /**
     * Render the scene
     * @returns {void}
     */
    let render = () => {
      if (mesh && rotate) {
        mesh.rotation.x += rotationSpeeds[0];
        mesh.rotation.y += rotationSpeeds[1];
        mesh.rotation.z += rotationSpeeds[2];
      }

      renderer.render(scene, camera);
    };
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
