import '../Style/Reasons.css'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import tick from '../assets/ticks_mark.png'
import NB from '../assets/nb.png'
import Nike from '../assets/nike.png'
import Adidas from '../assets/adidas.png'


const Reasons = () => {
    return (
        <div className="reasons" id="reasons">
            <div className='left-r'>
                <img src={image1} />
                <img src={image2} />
                <img src={image3} />
                <img src={image4} />
            </div>

            <div className='right-r'>
                <span>some reasons</span>
                <div>
                    <span className='stroke-txt'>why </span>
                    <span>choose us?</span>
                </div>

                <div className='details-r'>
                    <div>
                        <img src={tick} alt="" />
                        <span>over 140+ expert coachs</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>train smarter and faster than before</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>1 free program for new member</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>reliable partners</span>
                    </div>
                </div>

                <span style={{ color: 'gray' }}>OUR PARTNERS</span>

                <div className="partners">
                    <img src={NB} alt="" />
                    <img src={Adidas} alt="" />
                    <img src={Nike} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons