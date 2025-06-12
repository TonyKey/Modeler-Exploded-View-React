import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div className="header-header">
      <div className="header-frameheaderleft">
        <div className="header-frameappswitcher">
          <div className="header-global-icon-container1">
            <div className="header-global-icon-container2">
              <img
                alt={props.frame1192Alt}
                src={props.frame1192Src}
                className="header-frame11921"
              />
            </div>
          </div>
        </div>
        <div className="header-logotitlewrapper">
          <img
            alt={props.logocoupawhiteAlt}
            src={props.logocoupawhiteSrc}
            className="header-logocoupawhite"
          />
          <span className="header-text1">
            {props.text ?? (
              <Fragment>
                <span className="header-text3">Supply Chain Modeler</span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <div className="header-header-centre">
        <div className="header-framedropdownselect">
          <span className="header-text2">
            {props.text1 ?? (
              <Fragment>
                <span className="header-text4">
                  &#123;&#123;Model Name&#125;&#125;
                </span>
              </Fragment>
            )}
          </span>
          <div className="header-dropdown">
            <img
              alt={props.tablericonchevrondownAlt}
              src={props.tablericonchevrondownSrc}
              className="header-tablericonchevrondown"
            />
          </div>
        </div>
      </div>
      <div className="header-frame3466858">
        <div className="header-btnmodelsettings">
          <div className="header-global-icon-container3">
            <div className="header-frame11922">
              <img
                alt={props.navIconsAlt}
                src={props.navIconsSrc}
                className="header-nav-icons1"
              />
            </div>
          </div>
        </div>
        <div className="header-btnrunmodel">
          <div className="header-global-icon-container4">
            <div className="header-frame11923">
              <img
                alt={props.navIconsAlt1}
                src={props.navIconsSrc1}
                className="header-nav-icons2"
              />
            </div>
          </div>
        </div>
        <img
          alt={props.line6Alt}
          src={props.line6Src}
          className="header-line6"
        />
        <div className="header-btnnavilink">
          <div className="header-global-icon-container5">
            <div className="header-frame11924">
              <div className="header-nav-icons3">
                <img
                  alt={props.frame3466876Alt}
                  src={props.frame3466876Src}
                  className="header-frame3466876"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="header-btnhelp">
          <div className="header-global-icon-container6">
            <div className="header-iconhelp-center-copy">
              <img
                alt={props.rectangleAlt}
                src={props.rectangleSrc}
                className="header-rectangle"
              />
              <div className="header-group2">
                <img
                  alt={props.path2Alt}
                  src={props.path2Src}
                  className="header-path2"
                />
                <img
                  alt={props.ovalAlt}
                  src={props.ovalSrc}
                  className="header-oval"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="header-btnnotifications">
          <div className="header-global-icon-container7">
            <div className="header-frame11925">
              <img
                alt={props.navIconsAlt2}
                src={props.navIconsSrc2}
                className="header-nav-icons4"
              />
            </div>
          </div>
        </div>
        <div className="header-buttomuser">
          <div className="header-global-icon-container8">
            <div className="header-frame11926">
              <img
                alt={props.navIconsAlt3}
                src={props.navIconsSrc3}
                className="header-nav-icons5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  line6Src: '/external/line66248-ump.svg',
  line6Alt: 'Line66248',
  logocoupawhiteSrc: '/external/logocoupawhite6150-74bb.svg',
  logocoupawhiteAlt: 'logocoupawhite6150',
  text: undefined,
  text1: undefined,
  tablericonchevrondownSrc: '/external/tablericonchevrondown6150-n8hm.svg',
  tablericonchevrondownAlt: 'tablericonchevrondown6150',
  frame1192Src: '/external/frame11926150-5d9j.svg',
  frame1192Alt: 'Frame11926150',
  navIconsSrc: '/external/naviconsi624-90lb.svg',
  navIconsAlt: 'NavIconsI624',
  navIconsSrc1: '/external/naviconsi624-14l8.svg',
  navIconsAlt1: 'NavIconsI624',
  rectangleSrc: '/external/rectangle6248-51zs-200h.png',
  rectangleAlt: 'Rectangle6248',
  navIconsSrc2: '/external/navicons6249-z95c.svg',
  navIconsAlt2: 'NavIcons6249',
  navIconsSrc3: '/external/naviconsi624-ilw5.svg',
  navIconsAlt3: 'NavIconsI624',
  frame3466876Src: '/external/frame3466876i624-j13.svg',
  frame3466876Alt: 'Frame3466876I624',
  path2Src: '/external/path26248-rh9c.svg',
  path2Alt: 'Path26248',
  ovalSrc: '/external/oval6248-tb0h-200h.png',
  ovalAlt: 'Oval6248',
}

Header.propTypes = {
  line6Src: PropTypes.string,
  line6Alt: PropTypes.string,
  logocoupawhiteSrc: PropTypes.string,
  logocoupawhiteAlt: PropTypes.string,
  text: PropTypes.element,
  text1: PropTypes.element,
  tablericonchevrondownSrc: PropTypes.string,
  tablericonchevrondownAlt: PropTypes.string,
  frame1192Src: PropTypes.string,
  frame1192Alt: PropTypes.string,
  navIconsSrc: PropTypes.string,
  navIconsAlt: PropTypes.string,
  navIconsSrc1: PropTypes.string,
  navIconsAlt1: PropTypes.string,
  rectangleSrc: PropTypes.string,
  rectangleAlt: PropTypes.string,
  navIconsSrc2: PropTypes.string,
  navIconsAlt2: PropTypes.string,
  navIconsSrc3: PropTypes.string,
  navIconsAlt3: PropTypes.string,
  frame3466876Src: PropTypes.string,
  frame3466876Alt: PropTypes.string,
  path2Src: PropTypes.string,
  path2Alt: PropTypes.string,
  ovalSrc: PropTypes.string,
  ovalAlt: PropTypes.string,
}

export default Header
