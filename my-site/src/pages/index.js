import React from "react"
import { Link } from "gatsby"
import "../styles/style.css"

export default function Home() {
  return (<>
    <body className="body">
      <header className="header">
        <div className="title">
          ProAca Web site
        </div>
      </header>


      <p>
        welcome to my Site!
        Enjoy Everything!
      </p>

      <p>
        Written by SatYus.
        Front Engineer at ProAca.Inc. LoveJavaScript.
        </p>







      <Link to="Page1">page1</Link>

    </body>
  </>)
}
