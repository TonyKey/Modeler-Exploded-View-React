import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './frame-navi.css'

const FrameNavi = (props) => {
  return (
    <div className="frame-navi-frame-navi">
      <div className="frame-navi-framedrawerheader">
        <span className="frame-navi-text1">
          {props.text ?? (
            <Fragment>
              <span className="frame-navi-text2">Navi Ai Assistant</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

FrameNavi.defaultProps = {
  text: undefined,
}

FrameNavi.propTypes = {
  text: PropTypes.element,
}

export default FrameNavi
