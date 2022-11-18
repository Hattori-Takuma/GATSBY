import React from "react"
import { Link } from "gatsby"
import "../styles/style.css"

export default function Home() {
  return (
    <>
      <div>
        <header className="header">

          <p className="title"> ProAca Web site</p>


        </header>


        <div className="mySitez">
          Welcome to my Site!<br />
          Enjoy Everything!
        </div>

        <p className="Written">
          Written by SatYus.<br />
          Front Engineer at ProAca.Inc. LoveJavaScript.
        </p>


        <div className="bigbox">
          <div className="box12">
            <div className="box1">
              <img src="src/image/ダウンロード.jpg"></img>
            </div>

            <div className="box2">
              <p className="p2-1">Hello World! I'm　ゆうじろう！</p>
              <p className="p2-2">ゆうじろう　フロントエンドエンジニア　deveropper</p>
              <p className="p2-3">2021年07月21日</p>
            </div>
          </div>

          <div className="box34">
            <div className="box3"></div>

            <div className="box4">
              <p className="p4-1">決済機能実装しました</p>
              <p className="p4-2">gatsby stripe で決済機能を実装</p>
              <p className="p4-3">2021年07月23日</p>
            </div>

          </div>
        </div>









        <Link to="Page1">page1</Link>


      </div>
    </>
  )
}
