import { GoDotFill } from "react-icons/go";

import './index.css'


const Products = () => (
    <div className="products-section-conatiner">
        <div className="fed-ex-container">
            <img src="https://i.ibb.co/VN7Msj9/logo.png" className='fed-ex-image' alt="FedEX" />
            <img src="https://i.ibb.co/VN7Msj9/logo.png" className='fed-ex-image' alt="FedEX" />
        </div>
        <h1 className='product-heading'>Discover Our Game Changing Products</h1>
        <ul className='product-main-cards-conatiner'>
            <li className='product-card-conatiner'>
                <div className='product-image-container'>
                </div>
                <div className='product-details-container'>
                    <h1 className='product-name'>Muckup Design</h1>
                    <p className='product-description'>
                        Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.
                    </p>
                    <div className="underline"></div>
                    <div className='other-details-container'>
                        <div className='other-details'>
                            <p className='other-details-text1'>Client Name</p>
                            <p className='other-details-text2'>Gustav Purpleson</p>
                        </div>
                        <div className='other-details'>
                           <p className='other-details-text1'>Budget</p>
                            <p className='other-details-text2'>$160-$200</p>
                        </div>
                        <GoDotFill size={50} color="#C7C9D1" />
                    </div>
                </div>
            </li>
            <li className='product-card-conatiner'>
                <div className='product-image-container'>
                </div>
                <div className='product-details-container'>
                    <h1 className='product-name'>3d Design</h1>
                    <p className='product-description'>
                        Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.
                    </p>
                    <div className="underline"></div>
                    <div className='other-details-container'>
                        <div className='other-details'>
                            <p className='other-details-text1'>Client Name</p>
                            <p className='other-details-text2'>Phillip Anthropy</p>
                        </div>
                        <div className='other-details'>
                           <p className='other-details-text1'>Budget</p>
                            <p className='other-details-text2'>$200-$250</p>
                        </div>
                        <GoDotFill size={50} color="rgb(130, 16, 153)" />
                    </div>
                </div>
            </li>
            <li className='product-card-conatiner'>
                <div className='product-image-container'>
                </div>
                <div className='product-details-container'>
                    <h1 className='product-name'>App Design</h1>
                    <p className='product-description'>
                        Excepteur sint occaecat cupidatat officia non proident, sunt in culpa qui deserunt mollit anim id est laborum.
                    </p>
                    <div className="underline"></div>
                    <div className='other-details-container'>
                        <div className='other-details'>
                            <p className='other-details-text1'>Client Name</p>
                            <p className='other-details-text2'>Douglas Lyphe</p>
                        </div>
                        <div className='other-details'>
                           <p className='other-details-text1'>Budget</p>
                            <p className='other-details-text2'>$250-$300</p>
                        </div>
                        <GoDotFill size={50} color="rgb(12, 180, 192)" />
                    </div>
                </div>
            </li>
            <li className='product-card-conatiner'>
                <div className='product-image-container'>
                </div>
                <div className='product-details-container'>
                    <h1 className='product-name'>AI Chat Bot</h1>
                    <p className='product-description'>
                        AI chatbots improve customer service by interpreting natural languag and automating responses. Machine learning improves answers and knowledge.
                    </p>
                    <div className="underline"></div>
                    <div className='other-details-container'>
                        <div className='other-details'>
                            <p className='other-details-text1'>Client Name</p>
                            <p className='other-details-text2'>Dilip</p>
                        </div>
                        <div className='other-details'>
                           <p className='other-details-text1'>Budget</p>
                            <p className='other-details-text2'>$150-$300</p>
                        </div>
                        <GoDotFill size={50} color="rgb(33, 207, 62)" />
                    </div>
                </div>
            </li>
        </ul>
    </div>
)

export default Products