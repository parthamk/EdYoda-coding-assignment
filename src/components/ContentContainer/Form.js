import "./main.css";
import razorpayLogo from "../../assets/razorpay-icon.png";

const Form = () => {


    return (
        <div className="form-container">
            <section className="progress-wrap">
                <container className="stage">
                    <div className="progress-icon">
                        1
                    </div>
                    Sign Up
                </container>
                <container className="stage">
                    <div className="progress-icon">
                        2
                    </div>
                    Subscribe
                </container>
            </section>
            <div className="form-header">
            Select your subcription plan
            </div>
            <div className="input-container">

            {/* Expired plan */}
                <div className="text-field">
                    <input type="radio" value="Male" name="gender" className="radio-button" disabled checked/>
                    <div className="disabled-text-dsc">
                    12 Months Subscription 
                    </div>
                    <div className="right-text-container">
                        <div className="text-spans">
                            <span className="total-text">Total</span>
                            <span className="amount-text">₹99</span>
                        </div>
                        <div className="bottom-text">
                            <div className="price">
                                ₹8 /mo
                            </div>
                        </div>
                    </div>
                    <div className="offer-expired">
                        Offer Expired
                    </div>
                </div>

                {/* 12 month */}
                <div className="text-field new-offer">
                    <input type="radio" value="Male" name="gender" className="radio-button new-checked" checked/>
                    <div className="disabled-text-dsc new-plan">
                    12 Months Subscription 
                    </div>
                    <div className="right-text-container">
                        <div className="text-spans">
                            <span className="total-text new-plan">Total</span>
                            <span className="amount-text new-amount">₹179</span>
                        </div>
                        <div className="bottom-text new-buttom-text">
                            <div className="price new-price">
                                ₹15 /mo
                            </div>
                        </div>
                    </div>
                    <div className="offer-expired recomended">
                        Recomended
                    </div>
                </div>

                {/* 6 month */}
                <div className="text-field normal-text-field">
                    <input type="radio" value="Male" name="gender" className="radio-button" />
                    <div className="disabled-text-dsc new-plan">
                    6 Months Subscription 
                    </div>
                    <div className="right-text-container">
                        <div className="text-spans">
                            <span className="total-text new-plan">Total</span>
                            <span className="amount-text new-amount">₹149</span>
                        </div>
                        <div className="bottom-text new-buttom-text">
                            <div className="price basic-price">
                                ₹25 /mo
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3 month */}
                <div className="text-field normal-text-field">
                    <input type="radio" value="Male" name="gender" className="radio-button" />
                    <div className="disabled-text-dsc new-plan">
                    3 Months Subscription 
                    </div>
                    <div className="right-text-container">
                        <div className="text-spans">
                            <span className="total-text new-plan">Total</span>
                            <span className="amount-text new-amount">₹99</span>
                        </div>
                        <div className="bottom-text new-buttom-text">
                            <div className="price basic-price">
                                ₹25 /mo
                            </div>
                        </div>
                    </div>
                </div>

                <div className="summery-container">
                    <div className="text-container">
                        <content class="subscription-fee">Subscription Fee</content>
                        <content class="subscription-amount">₹18,500</content>
                    </div>
                    <div className="offer-alert">
                        <div className="alert-header">
                            <div className="offer-content-text">
                                Limited time offer
                            </div>
                            <div className="offer-content-amount">
                                - ₹18,401
                            </div>
                        </div>
                        <div className="alert-body">
                            <div className="offer-content">
                                <div className="icon-clock">
                                    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{left: '8.33%', right: '8.33%', top: '8.33%', bottom: '8.33%' }}>
                                    <path d="M8.99998 5V11L14.2 14.1L15 12.9L10.5 10.2V5H8.99998ZM18 10V16H20V10H18ZM18 18V20H20V18H18ZM16 18C14.3 19.3 12.3 20 9.99998 20C4.49998 20 -1.52588e-05 15.5 -1.52588e-05 10C-1.52588e-05 4.5 4.49998 0 9.99998 0C14.8 0 18.9 3.4 19.8 8H17.7C16.8 4.6 13.7 2 9.99998 2C5.59998 2 1.99998 5.6 1.99998 10C1.99998 14.4 5.59998 18 9.99998 18C12.4 18 14.5 16.9 16 15.3V18Z" fill="#DE4313"/>
                                    </svg>
                                </div>
                                Offer valid till 25th March 2023
                            </div>
                        </div>
                    </div>
                    <div className="text-container">
                        <div className="left-text">Total (Incl. of 18% GST)</div>
                        <div className="right-text">₹149</div>
                    </div>
                </div>
                <div className="button-container">
                    <div className="secondary-button">
                        <div className="button-text">Cancel</div>
                    </div>
                    <div className="primary-button">
                        <div className="button-text">proceed to pay</div>
                    </div>
                </div>
                <div className="icon-container">
                    <img className="icon-image" src={razorpayLogo} alt="Razorpay" />
                </div>
            </div>
        </div>
    )
}

export default Form