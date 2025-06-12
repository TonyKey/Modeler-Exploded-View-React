import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './input-tables.css'

const InputTables = (props) => {
  return (
    <div className="input-tables-input-tables">
      <div className="input-tables-framesectionheader">
        <div className="input-tables-ui-left-panel-header">
          <span className="input-tables-text1">
            {props.text ?? (
              <Fragment>
                <span className="input-tables-text5">Input Tables</span>
              </Fragment>
            )}
          </span>
          <button className="input-tables-frame-button">
            <div className="input-tables-base">
              <span className="input-tables-text2">
                {props.text1 ?? (
                  <Fragment>
                    <span className="input-tables-text6">New User Table</span>
                  </Fragment>
                )}
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className="input-tables-frame-custom-sidenav">
        <div className="input-tables-ul">
          <div className="input-tables-frame-custom-expandable-nav-item">
            <div className="input-tables-frame-accordionheader">
              <div className="input-tables-container1">
                <div className="input-tables-left-content1">
                  <div className="input-tables-frame-icon">
                    <img
                      alt={props.chevronupoutlineAlt}
                      src={props.chevronupoutlineSrc}
                      className="input-tables-chevronupoutline"
                    />
                  </div>
                </div>
                <div className="input-tables-list-item-text1">
                  <span className="input-tables-text3">
                    {props.text2 ?? (
                      <Fragment>
                        <span className="input-tables-text7">Customers</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="input-tables-frame-list-item">
              <div className="input-tables-container2">
                <img
                  alt={props.leftContentAlt}
                  src={props.leftContentSrc}
                  className="input-tables-left-content2"
                />
                <div className="input-tables-list-item-text2">
                  <span className="input-tables-text4">
                    {props.text3 ?? (
                      <Fragment>
                        <span className="input-tables-text8">
                          Customer Forecasts
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="input-tables-frame-chip">
                  <div className="input-tables-typography"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

InputTables.defaultProps = {
  text: undefined,
  text1: undefined,
  leftContentSrc: '/external/leftcontent1811-q2hq.svg',
  leftContentAlt: 'LeftContent1811',
  text2: undefined,
  text3: undefined,
  chevronupoutlineSrc: '/external/chevronupoutline6248-pd7g.svg',
  chevronupoutlineAlt: 'chevronupoutline6248',
}

InputTables.propTypes = {
  text: PropTypes.element,
  text1: PropTypes.element,
  leftContentSrc: PropTypes.string,
  leftContentAlt: PropTypes.string,
  text2: PropTypes.element,
  text3: PropTypes.element,
  chevronupoutlineSrc: PropTypes.string,
  chevronupoutlineAlt: PropTypes.string,
}

export default InputTables
