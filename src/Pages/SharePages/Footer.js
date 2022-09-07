import React from 'react';
import { ImLocation } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { HiPhone } from "react-icons/hi";
import { Link } from 'react-router-dom';
import payment from '../../asset/image/person/payment.png';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <span className="footer-title">Contact Us</span>
                <div className='flex items-center'>
                    <ImLocation />
                    <p className='ml-2 text-xs'>Your address goes here</p>
                </div>
                <div className='flex items-center'>
                    <AiOutlineMail />
                    <p className='ml-2 text-xs'> Mail Us : info@example.com</p>
                </div>
                <div className='flex items-center'>
                    <HiPhone />
                    <p className='ml-2 text-xs'>Your address goes here</p>
                </div>
                <div className='mt-4'>
                    <Link to='/'><img src={payment} alt="payment" /></Link>
                </div>
            </div>
            <div>
                <span className="footer-title">Information</span>
                <a className="link link-hover"> Site Map</a>
                <a className="link link-hover">Specials</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Delivery Information</a>
                <a className="link link-hover"> Order History</a>
                <a className="link link-hover"> Privacy Policy</a>
            </div>
            <div>
                <span className="footer-title">My Account</span>
                <a className="link link-hover">Login</a>
                <a className="link link-hover">My Account</a>
                <a className="link link-hover">Checkout</a>
                <a className="link link-hover">Address</a>
                <a className="link link-hover">Order Status</a>
                <a className="link link-hover"> Site Map</a>
            </div>
            <div>
                <span className="footer-title">Customer Service</span>
                <a className="link link-hover">My Accounte</a>
                <a className="link link-hover">New</a>
                <a className="link link-hover">Gift Cardsy</a>
                <a className="link link-hover">Your Orders</a>
                <a className="link link-hover">Subway</a>
            </div>
            <div>
                <span className="footer-title">Let Us Help You</span>
                <a className="link link-hover">My Account</a>
                <a className="link link-hover">My Orders</a>
                <a className="link link-hover">Shipping</a>
                <a className="link link-hover">Amazon Prime</a>
                <a className="link link-hover">Replacements</a>
                <a className="link link-hover"> Manage</a>
            </div>
            <div>
                <span className="footer-title">Sign Up For Newsletters</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;