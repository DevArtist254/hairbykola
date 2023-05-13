import React from "react"

export default function LandingPage() {
 return (
  <div className="main">
   <div className="main__cont">
    <div className="main__cont--text">
     <div className="pri-textBox">
      Organic products made with love.That's what you get from us.
     </div>
     <button className="pri-btn">Shop now</button>
    </div>
    <div className="main__cont--image"></div>
   </div>
   <div className="main__about">
    <div className="main__about--image"></div>
    <div className="main__about--textBox">
     <div className="tbHeader">Our Brand Story</div>
     <div className="tbText">
      Viridian Castle Co. was founded by Cleo Smith in 2015. The company is
      dedicated to producing high-quality products that you will surely love.
     </div>
    </div>
   </div>
   <div className="main__shop">
    <div className="main__shop--shopContent">
     <div className="main__shop--header">Organic Selection</div>
     <div className="main__shop--cards">
      <div className="card-main">
       <div className="card-main__img"></div>
       <div className="card-main__header">Essential Oils</div>
       <div className="card-main__text">
        Relax and unwind with our wide variety of essential oils
       </div>
      </div>
      <div className="card-main">
       <div className="card-main__img"></div>
       <div className="card-main__header">Organic Soaps</div>
       <div className="card-main__text">
        Keep your skin clean and healthy. Hypoallergenic & vegan.
       </div>
      </div>
      <div className="card-main">
       <div className="card-main__img"></div>
       <div className="card-main__header">Soy Candles</div>
       <div className="card-main__text">
        Let our line of scented soy candles improve your mood.
       </div>
      </div>
     </div>
    </div>
   </div>
   <div className="main__fav">
    <div className="main__fav--header">
     <div className="mfHeader">Viridian Castle in the News</div>
    </div>
    <div className="main__fav--cards">
     <div className="card-sec">
      <div className="card-sec__img"></div>
      <div className="card-sec__textBox">
       <div className="card-sec__textBox--text">
        News write-ups offer a great way to let clients know about new products
        and services, events, awards, and morel
       </div>
       <div className="card-sec__textBox--link">Summer Promo</div>
      </div>
     </div>
     <div className="card-sec">
      <div className="card-sec__img"></div>
      <div className="card-sec__textBox">
       <div className="card-sec__textBox--text">
        News write-ups offer a great way to let clients know about new products
        and services, events, awards, and morel.
       </div>
       <div className="card-sec__textBox--link">CC's New Branch</div>
      </div>
     </div>
     <div className="card-sec">
      <div className="card-sec__img"></div>
      <div className="card-sec__textBox">
       <div className="card-sec__textBox--text">
        News write-ups offer a great way to let clients know about new products
        and services, events, awards, and morel
       </div>
       <div className="card-sec__textBox--link">VCC's Green Award</div>
      </div>
     </div>
    </div>
   </div>
   <div className="main__comments">
    <div className="main__comments--textBox">
     <div className="main__comments--comment">
      I'm the biggest user of our products. I won't put anything harmful on my
      skin, so I can assure you that only the purest ingredients go into
      Viridian Castle.
     </div>
     <div className="main__comments--title">- Cleo Smith, CEO</div>
    </div>
   </div>
   <div className="main__contacts">
    <div className="main__contacts--cta">
     <div className="contacts__title">Get in Touch</div>
     <div className="contacts__cta"></div>
    </div>
    <div className="main__contacts--address">
     <div className="contacts__address">
      <div className="contacts__address--title">Mailing Address</div>
      <div className="contacts__address--text">
       123 Anywhere St., Any City, State, Country 12345
      </div>
     </div>
     <div className="contacts__address">
      <div className="contacts__address--title">Email Address</div>
      <div className="contacts__address--text">hello@reallygreatsite.com</div>
     </div>
    </div>
   </div>
  </div>
 )
}
