import React, { Component, Fragment } from 'react';

import { arc } from '../helpers'

class ProgressionGauge extends Component {

  renderDial = opts => {
    const segmentSize = Math.round(360 / opts.colors?.length);

    let start = 0;
    let end = 0;

    if (segmentSize) {
      return (
        <g transform={ `rotate(90 ${ opts.cX } ${ opts.cY })` }>
          {
            opts.colors.map(hex => {
              const color = `#${ hex }`;
          
              start = end;
              end = (start + segmentSize);
          
              return <path
                key={ hex }
                fill='none'
                stroke={ color }
                strokeWidth={ opts.strokeWidth }
                d={ arc(opts.cX, opts.cY, opts.radius, start, end) }
              />
            })
          }
        </g>
      )
    } else {
      return (
        <circle
          cx={ opts.cX }
          cy={ opts.cY }
          r={ opts.radius }
          fill='none'
          stroke={ opts.strokeColor }
          strokeWidth={ opts.strokeWidth }
        >
        </circle>
      )
    }
  };

  renderProgress = opts => {
    let offset = (opts.circumference * (1 - (opts.currentValue / 100)));

    return (
      <circle
        cx={ opts.cX }
        cy={ opts.cY }
        r={ opts.radius }
        fill='none'
        stroke={ opts.progressColor }
        strokeWidth={ opts.strokeWidth }
        strokeDasharray={ opts.circumference }
        strokeDashoffset={ offset }
        strokeLinecap={ opts.progressRoundedEdge ? 'round' : 'butt' }
      />
    )
  };

  renderNeedle = opts => {
    let
      x1 = opts.cX,
      y1 = opts.cY - (opts.needleWidth / 2),
      x2 = opts.cX,
      y2 = opts.cY + (opts.needleWidth / 2),
      x3 = opts.diameter - 5,
      y3 = opts.cY;

    return (
      <g>
        <polygon
          points={ `${ x1 },${ y1 } ${ x2 },${ y2 } ${ x3 },${ y3 }` }
          fill={ opts.needleColor }
          transform={ `rotate(${ opts.needleAngle } ${ opts.cX } ${ opts.cY })` }
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            from={ `0 ${ opts.cX } ${ opts.cY }`}
            to={ `${ opts.needleAngle } ${ opts.cX } ${ opts.cY }` }
            dur='.5s'
            fill='freeze'></animateTransform>
        </polygon>
        <circle
          cx={ opts.cX }
          cy={ opts.cY }
          r={ opts.needleWidth  / 2}
          fill={ opts.needleBaseColor }>
        </circle>
      </g>
    )
  };

  render() {
    let opts = { ...this.props };
    let { size, strokeWidth } = opts;

    let cX = size / 2;
    let cY = size / 2;
    let radius = (size - (2 * strokeWidth)) / 2;
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let needleAngle = (360 * opts.currentValue) / 100;

    opts = { ...opts, ...{
      cX,
      cY,
      radius,
      diameter,
      circumference,
      needleAngle,
    }};

    return (
      <Fragment>
        { opts.displayPercentage && <span>{opts.currentValue}%</span> }
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={ opts.className }
          height={ size }
          width={ size }
          viewBox={ `0 0 ${size} ${size}` }
        >
          <g transform={ `rotate(-90 ${cX} ${cY})` }>
            { this.renderDial(opts) }
            { !opts.colors && this.renderProgress(opts) }
            { this.renderNeedle(opts) }
          </g>
        </svg>
      </Fragment>
    )
  }
}

ProgressionGauge.defaultProps = {
  size: 200,

  strokeWidth: 10,
  strokeColor: '#aaa',

  currentValue: 0,
  progressColor: '#3d3d3d',
  progressRoundedEdge: true,

  needle: true,
  needleBaseColor: '#9d9d9d',
  needleWidth: 8,
  needleColor: '#8a8a8a'
};

export default ProgressionGauge;