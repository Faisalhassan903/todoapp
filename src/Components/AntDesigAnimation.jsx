import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import PathMotionPlugin from 'rc-tween-one/es/plugin/PathMotionPlugin';

TweenOne.plugins.push(PathMotionPlugin);

const AntDesigAnimation = ({ paused }) => {
  const animation = {
    path: 'M0,0 C150,150 300,0 450,150 C600,0 750,150 900,0', // Updated SVG path string
    repeat: -1,
    yoyo: true,
    duration: 5000,
  };

  return (
    <div style={{ position: 'relative', height: 200, width: 1000, margin: '40px auto' }}>
      <TweenOne
        animation={animation}
        style={{ margin: 0 }}
        className="code-box-shape"
        paused={paused}
      />
      <span className="demo-bezier-shape"></span>
      <span style={{ transform: 'translate(150px,150px)' }} className="demo-bezier-shape"></span>
      <span style={{ transform: 'translate(300px,0px)' }} className="demo-bezier-shape"></span>
      <span style={{ transform: 'translate(450px,150px)' }} className="demo-bezier-shape"></span>
      <span style={{ transform: 'translate(600px,0px)' }} className="demo-bezier-shape"></span>
    </div>
  );
};

AntDesigAnimation.propTypes = {
  paused: PropTypes.bool,
};

export default AntDesigAnimation;
