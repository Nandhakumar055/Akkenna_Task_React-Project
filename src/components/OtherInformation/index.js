import { GoDotFill } from "react-icons/go";

import './index.css'

const OtherInformation = () => (
    <div className="other-info-section-container">
        <div className='other-info-container'>
            <div className="query-container">
                <h1 className="query-text">
                    What Makes Akkenna the Best Option for Generative Al Services?
                </h1>
                <p className="query-def">
                    In artificial intelligence, there are limitless opportunities for innovation, efficiency, and greatness to be redefined, Your path to a new direction starts here.
                </p>
                <div className='get-started-button-container'>
                    <p className='get-started-text'>Get Started</p>
                    <GoDotFill size={23} color="white" />
                </div>
            </div>
            <div className="next-generation-tech-card-container">
                <h1 className="next-generation-text">Next-Generation Technology</h1>
                <p className="next-generation-def">
                    We stay at the forefront of technological advancements. Akkenna leverages the latest tools, frameworks, and methodologies to ensure your generative Al solutions are built with the most innovative and efficient technologies available.
                </p>
                <GoDotFill size={50} color="rgba(231, 87, 231, 0.233)" />
            </div>
        </div>
        <div className="line"></div>
        <div className="time-line-container">
            <div className="time-line">
                <img src="https://i.ibb.co/6ZG6wxj/Group-3617-4.png" alt="dot" />
                <p className="time-line-name">Next-Generation Technology</p>
            </div>
            <div className="time-line">
                <img src="https://i.ibb.co/C9w2Fwd/Group-3617-1.png" alt="dot" />
                <p className="time-line-name">Integrated Methodology</p>
            </div>
            <div className="time-line">
                <img src="https://i.ibb.co/2Sk3Njf/Group-3617-2.png" alt="dot" />
                <p className="time-line-name">Progressive Creative Solutions</p>
            </div>
            <div className="time-line">
                <img src="https://i.ibb.co/C0WNTXD/Group-3617.png" alt="dot" />
                <p className="time-line-name">Candid Collaboration</p>
            </div>
        </div>
    </div>
)

export default OtherInformation