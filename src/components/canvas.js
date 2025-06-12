import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './canvas.css'

const Canvas = (props) => {
  return (
    <div className="canvas-canvas">
      <div className="canvas-framecanvasinnerframe">
        <div className="canvas-frametabcontainer">
          <div className="canvas-frame-tabs">
            <div className="canvas-container1">
              <div className="canvas-frame-tab1">
                <div className="canvas-container2">
                  <div className="canvas-iconslot">
                    <div className="canvas-table1">
                      <img
                        alt={props.tableAlt}
                        src={props.tableSrc}
                        className="canvas-table2"
                      />
                    </div>
                  </div>
                  <div className="canvas-labelwrapper">
                    <span className="canvas-text1">
                      {props.text ?? (
                        <Fragment>
                          <span className="canvas-text3">Sites Forecasts</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="canvas-frame-icon">
                    <img
                      alt={props.morevertoutlineAlt}
                      src={props.morevertoutlineSrc}
                      className="canvas-morevertoutline"
                    />
                  </div>
                </div>
              </div>
              <div className="canvas-frame-tab2"></div>
            </div>
          </div>
        </div>
        <div className="canvas-frametabcontent">
          <div className="canvas-frame1158">
            <div className="canvas-frame1161">
              <div className="canvas-frame1171276206">
                <button className="canvas-frame-button">
                  <div className="canvas-base">
                    <span className="canvas-text2">
                      {props.text1 ?? (
                        <Fragment>
                          <span className="canvas-text4">New Row</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className="canvas-master-current-display-table"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Canvas.defaultProps = {
  text: undefined,
  morevertoutlineSrc: '/external/morevertoutline6249-8vqq.svg',
  morevertoutlineAlt: 'morevertoutline6249',
  text1: undefined,
  tableSrc: '/external/table6249-5c2l.svg',
  tableAlt: 'table6249',
}

Canvas.propTypes = {
  text: PropTypes.element,
  morevertoutlineSrc: PropTypes.string,
  morevertoutlineAlt: PropTypes.string,
  text1: PropTypes.element,
  tableSrc: PropTypes.string,
  tableAlt: PropTypes.string,
}

export default Canvas
