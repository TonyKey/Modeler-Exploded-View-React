import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './menu.css'

const Menu = (props) => {
  return (
    <div className="menu-menu">
      <div className="menu-ul">
        <div className="menu-frame-custom-expandable-nav-item">
          <div className="menu-frame-list-item1">
            <div className="menu-container1">
              <div className="menu-list-item-text1">
                <span className="menu-text1">
                  {props.text ?? (
                    <Fragment>
                      <span className="menu-text4">Build</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <button className="menu-frame-icon-button-small-small-default-enabled">
                <div className="menu-icon">
                  <img
                    alt={props.menuoutlineAlt}
                    src={props.menuoutlineSrc}
                    className="menu-menuoutline"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="menu-frame-list-item2">
            <div className="menu-container2">
              <div className="menu-left-content1">
                <img
                  alt={props.leftContentAlt}
                  src={props.leftContentSrc}
                  className="menu-left-content2"
                />
              </div>
              <div className="menu-list-item-text2">
                <span className="menu-text2">
                  {props.text1 ?? (
                    <Fragment>
                      <span className="menu-text5">Input Tables</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="menu-frame-list-item3">
            <div className="menu-container3">
              <div className="menu-left-content3">
                <img
                  alt={props.leftContentAlt1}
                  src={props.leftContentSrc1}
                  className="menu-left-content4"
                />
              </div>
              <div className="menu-list-item-text3">
                <span className="menu-text3">
                  {props.text2 ?? (
                    <Fragment>
                      <span className="menu-text6">Groups</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Menu.defaultProps = {
  text: undefined,
  leftContentSrc: '/external/leftcontent1817-6d3q.svg',
  leftContentAlt: 'LeftContent1817',
  text1: undefined,
  leftContentSrc1: '/external/leftcontent1817-foy8.svg',
  leftContentAlt1: 'LeftContent1817',
  text2: undefined,
  menuoutlineSrc: '/external/menuoutline6148-vf4.svg',
  menuoutlineAlt: 'menuoutline6148',
}

Menu.propTypes = {
  text: PropTypes.element,
  leftContentSrc: PropTypes.string,
  leftContentAlt: PropTypes.string,
  text1: PropTypes.element,
  leftContentSrc1: PropTypes.string,
  leftContentAlt1: PropTypes.string,
  text2: PropTypes.element,
  menuoutlineSrc: PropTypes.string,
  menuoutlineAlt: PropTypes.string,
}

export default Menu
