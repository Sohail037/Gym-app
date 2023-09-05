import '../Style/Hero.css'
import Header from './Header'
import hero_img from '../assets/hero_image.png'
import hero_img_back from '../assets/hero_image_back.png'
import heart from '../assets/heart.png'
import calories from '../assets/Calories.png'
// import { dataObject } from './ProgramData'

const Hero = () => {

  return (
    <div className='hero-start'>
      <div className="left-section">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>The Best Fitness Club In The Town </span>
        </div>

        

        <div className="hero-txt">
          <div>
            <span className='stroke-txt'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+ 140k</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        <div className='hero-but'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>

      </div>
      <div className="right-section">
        <button className='btn'>Join Now</button>
        <div className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <img src={hero_img} alt="" className="hero-image" />
        <img src={hero_img_back} alt="" className="hero-image-back" />

        <div className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero