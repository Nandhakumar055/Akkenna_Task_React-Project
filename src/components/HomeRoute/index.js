
import Header from '../Header'
import Service from '../Services'
import OtherInformation from '../OtherInformation'
import Products from '../Products'

import './index.css'

const HomeRoute = () =>(
    <div className='home-route-container'>
        <Header />
        <div className='home-container'>
            <div className='banner-container'>
                <div className='inside-banner-container'>
                    <div className='main-bg-design'>
                        <div className='bg-design'>
                        </div>
                        <p className='web-development-text'>Web Development</p>
                    </div>
                    <h1 className='banner-heading'>
                        Making Waves With Generative Al Services
                    </h1>
                    <p className='banner-description'>
                        In artificial intelligence, there are limitless opportunities for innovation, efficiency, and greatness to be redefined, Your path to a new direction starts here.
                    </p>
                    <div className='contact-now-button-con'>
                        <button className='contact-now-button'>Contact Now</button>
                    </div>
                </div>
            </div> 
            <div className='floating-section-container'>
                <div className='floating-cards-container'>
                    <img src="https://i.ibb.co/q0vYbyG/Widget-01.png" className='card-image1 card-image' alt="Widget-01" />
                    <img src="https://i.ibb.co/2K9ftnN/Widget-02.png" className='card-image2 card-image' alt="Widget-02" />
                    <img src="https://i.ibb.co/Sy2jBwP/Widget-04.png" className='card-image3 card-image' alt="Widget-03" />
                    <img src="https://i.ibb.co/y0W9prj/Group-1000001030.png" className='card-image4 card-image' alt="Widget-04" />
                </div>
            </div>  
            <Service />
            <OtherInformation />
            <Products />
        </div>
    </div>
)

export default HomeRoute