import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Menu from '../components/menu'
import InputTables from '../components/input-tables'
import Canvas from '../components/canvas'
import Properties from '../components/properties'
import FrameNavi from '../components/frame-navi'
import './modeler2025.css'

const Modeler2025 = (props) => {
  return (
    <div className="modeler2025-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="modeler2025-modeler2025-wrapper">
        <Header
          text={
            <Fragment>
              <span className="modeler2025-text10">Supply Chain Modeler</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="modeler2025-text11">
                &#123;&#123;Model Name&#125;&#125;
              </span>
            </Fragment>
          }
        ></Header>
        <div className="modeler2025-framepage">
          <div className="modeler2025-framemainrow">
            <div className="modeler2025-left-container">
              <Menu
                text={
                  <Fragment>
                    <span className="modeler2025-text12">Build</span>
                  </Fragment>
                }
                text1={
                  <Fragment>
                    <span className="modeler2025-text13">Input Tables</span>
                  </Fragment>
                }
                text2={
                  <Fragment>
                    <span className="modeler2025-text14">Groups</span>
                  </Fragment>
                }
              ></Menu>
              <InputTables
                text={
                  <Fragment>
                    <span className="modeler2025-text15">Input Tables</span>
                  </Fragment>
                }
                text1={
                  <Fragment>
                    <span className="modeler2025-text16">New User Table</span>
                  </Fragment>
                }
                text2={
                  <Fragment>
                    <span className="modeler2025-text17">Customers</span>
                  </Fragment>
                }
                text3={
                  <Fragment>
                    <span className="modeler2025-text18">
                      Customer Forecasts
                    </span>
                  </Fragment>
                }
              ></InputTables>
            </div>
            <Canvas
              text={
                <Fragment>
                  <span className="modeler2025-text19">Sites Forecasts</span>
                </Fragment>
              }
              text1={
                <Fragment>
                  <span className="modeler2025-text20">New Row</span>
                </Fragment>
              }
            ></Canvas>
            <Properties
              text={
                <Fragment>
                  <span className="modeler2025-text21">Properties</span>
                </Fragment>
              }
            ></Properties>
            <FrameNavi
              text={
                <Fragment>
                  <span className="modeler2025-text22">Navi Ai Assistant</span>
                </Fragment>
              }
            ></FrameNavi>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modeler2025
