import React from "react"
import intro1 from "../assests/images/assest-1.png"
import card1 from "../assests/images/assest-2(1).png"
import card2 from "../assests/images/assest-3.png"
import card3 from "../assests/images/assest-4.png"
import cta from "../assests/images/assest-8.png"
import hairVideo from "../assests/Video/Hair-by-kola.mp4"

export default function LandingPage() {
 return (
  <div className="main">
   <div className="main__cont">
    <div className="main__cont--text">
     <h1 className="pri-textBox head-main white">
      Hair products made with love.That's what you get from us.
     </h1>
     <button className="pri-btn">Shop now</button>
    </div>
    <img className="main__cont--image" src={intro1} alt="intro" />
   </div>
   <div className="main__about">
    <div className="main__about--image"></div>
    <div className="main__about--textBox">
     <div className="tbHeader dark head-main text-center">Our Brand Story</div>
     <div className="tbText p-mid text-center dark">
      Viridian Castle Co. was founded by Cleo Smith in 2015. The company is
      dedicated to producing high-quality products that you will surely love.
     </div>
    </div>
   </div>
   <div className="main__shop">
    <div className="main__shop--shopContent">
     <div className="main__shop--header head-main white">Organic Selection</div>
     <div className="main__shop--cards">
      <div className="card-main">
       <img className="card-main__img" src={card1} alt="card-img" />
       <div className="card-main__header white text-center card-header">
        Essential Oils
       </div>
       <div className="card-main__text white text-center p-card">
        Relax and unwind with our wide variety of essential oils
       </div>
      </div>
      <div className="card-main">
       <img className="card-main__img" src={card2} alt="card-img" />
       <div className="card-main__header white text-center card-header">
        Organic Soaps
       </div>
       <div className="card-main__text white text-center p-card p-card">
        Keep your skin clean and healthy. Hypoallergenic & vegan.
       </div>
      </div>
      <div className="card-main">
       <img className="card-main__img" src={card3} alt="card-img" />
       <div className="card-main__header white text-center card-header">
        Soy Candles
       </div>
       <div className="card-main__text white text-center p-card">
        Let our line of scented soy candles improve your mood.
       </div>
      </div>
     </div>
    </div>
   </div>
   <div className="main__fav">
    <div className="main__fav--header">
     <div className="mfHeader head-main  dark">Viridian Castle in the News</div>
    </div>
    <div className="main__fav--cards">
     <div className="card-sec">
      <img src={card1} alt="card1" className="card-sec__img" />
      <div className="card-sec__textBox">
       <div className="card-sec__textBox--text p-mid dark">
        News write-ups offer a great way to let clients know about new products
        and services, events, awards, and morel
       </div>
       <div className="card-sec__textBox--link card-header dark">
        Summer Promo
       </div>
      </div>
     </div>
     <div className="card-sec">
      <img src={card2} alt="card2" className="card-sec__img" />
      <div className="card-sec__textBox">
       <div className="card-sec__textBox--text p-mid dark">
        News write-ups offer a great way to let clients know about new products
        and services, events, awards, and morel.
       </div>
       <div className="card-sec__textBox--link card-header dark">
        CC's New Branch
       </div>
      </div>
     </div>
     <div className="card-sec">
      <img src={card3} alt="card2" className="card-sec__img" />
      <div className="card-sec__textBox">
       <div className="card-sec__textBox--text p-mid dark">
        News write-ups offer a great way to let clients know about new products
        and services, events, awards, and morel
       </div>
       <div className="card-sec__textBox--link card-header  dark">
        VCC's Green Award
       </div>
      </div>
     </div>
    </div>
   </div>
   <div className="main__comments">
    <video
     src={hairVideo}
     autoPlay
     muted
     loop
     className="main__comments--video"
    />
    <div className="main__comments--textBox">
     <div className="main__comments--comment white text-center head-comment">
      I'm the biggest user of our products. I won't put anything harmful on my
      skin, so I can assure you that only the purest ingredients go into
      Viridian Castle.
     </div>
     <div className="main__comments--title head-main white text-center">
      - Cleo Smith, CEO
     </div>
    </div>
   </div>
   <div className="main__contacts">
    <div className="main__contacts--cta">
     <div className="contacts__title dark head-main">Get in Touch</div>
     <img className="contacts__cta" src={cta} alt="cta" />
    </div>
    <div className="main__contacts--address">
     <div className="contacts__address">
      <div className="contacts__address--title dark p-mid ">
       Mailing Address
      </div>
      <div className="contacts__address--text dark p-card ">
       123 Anywhere St., Any City, State, Country 12345
      </div>
     </div>
     <div className="contacts__address">
      <div className="contacts__address--title dark p-mid ">Email Address</div>
      <div className="contacts__address--text dark p-card ">
       hello@reallygreatsite.com
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}
