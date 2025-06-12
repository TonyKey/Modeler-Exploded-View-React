import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './properties.css'

const Properties = (props) => {
  return (
    <div className="properties-properties">
      <div className="properties-framedrawerheader">
        <span className="properties-text1">
          {props.text ?? (
            <Fragment>
              <span className="properties-text2">Properties</span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

Properties.defaultProps = {
  text: undefined,
}

Properties.propTypes = {
  text: PropTypes.element,
}

export default Properties
