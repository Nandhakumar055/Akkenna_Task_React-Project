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
                            <p className='other-details-text2'>$160 - $200</p>
                        </div>
                        <GoDotFill size={50} color="rgb(130, 16, 153)" />
                    </div>
                </div>
            </li>
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
                            <p className='other-details-text2'>$160 - $200</p>
                        </div>
                        <GoDotFill size={50} color="rgb(130, 16, 153)" />
                    </div>
                </div>
            </li>
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
                            <p className='other-details-text2'>$160 - $200</p>
                        </div>
                        <GoDotFill size={50} color="rgb(130, 16, 153)" />
                    </div>
                </div>
            </li>
        </ul>
    </div>
)

export default Products