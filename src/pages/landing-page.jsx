import React from "react"

export default function LandingPage() {
 return (
  <div className="main">
   <div className="main__cont">
    <div className="main__cont--text">
     <div className="pri-textBox"></div>
     <button className="pri-btn"></button>
    </div>
    <div className="main__cont--image"></div>
   </div>
   <div className="main__about">
    <div className="main__about--image"></div>
    <div className="main__about--textBox">
     <div className="tbHeader"></div>
     <div className="tbText"></div>
    </div>
   </div>
   <div className="main__shop">
    <div className="main__shop--shopContent">
     <div className="main__shop--header"></div>
     <div className="main__shop--cards">
      <div className="card-main">
       <div className="card-main__img"></div>
       <div className="card-main__header"></div>
       <div className="card-main__text"></div>
      </div>
      <div className="card-main">
       <div className="card-main__img"></div>
       <div className="card-main__header"></div>
       <div className="card-main__text"></div>
      </div>
      <div className="card-main">
       <div className="card-main__img"></div>
       <div className="card-main__header"></div>
       <div className="card-main__text"></div>
      </div>
     </div>
    </div>
   </div>
   <div className="main__fav">
    <div className="main__fav--header">
     <div className="mfHeader"></div>
    </div>
    <div className="main__fav--cards">
     <div className="card-sec">
      <div className="card-sec__img"></div>
      <div className="card-sec__textBox">
       <div className="card-sec__textBox--text"></div>
       <div className="card-sec__textBox--link"></div>
      </div>
     </div>
     <div className="card-sec">
      <div className="card-sec__img"></div>
      <div className="card-sec__textBox">
       <div className="card-sec__textBox--text"></div>
       <div className="card-sec__textBox--link"></div>
      </div>
     </div>
     <div className="card-sec">
      <div className="card-sec__img"></div>
      <div className="card-sec__textBox">
       <div className="card-sec__textBox--text"></div>
       <div className="card-sec__textBox--link"></div>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}
