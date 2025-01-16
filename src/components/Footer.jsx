import { faFacebook, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
return (
    <footer className="w-full flex flex-col bg-gray-500 text-white text-md px-4 md:px-12 py-4">
        {/* Links Section */}
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-8 py-4 ">
            <div className="flex gap-12">
                <Link to="/" className="hover:underline">Blog</Link>
                <Link to="/" className="hover:underline">FAQs</Link>
                <Link to="/" className="hover:underline text-center">Contact Us</Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-7 px-6">
                <Link to='https://www.facebook.com/login/' target="_blank" className="hover:scale-110 text-xl hover:text-black">
                    <FontAwesomeIcon icon={faFacebook}/>
                </Link>
                <Link to="https://twitter.com/i/flow/signup" target="_blank" className="hover:scale-110 text-xl hover:text-black">
                    <FontAwesomeIcon icon={faTwitter}/>
                </Link>
                <Link to="https://www.instagram.com/accounts/login/?hl=en" target="_blank" className="hover:scale-110 text-xl hover:text-black">
                    <FontAwesomeIcon icon={faInstagram}/>
                </Link>
                <Link to="https://in.pinterest.com/" target="_blank" className="hover:scale-110 text-xl hover:text-black">
                    <FontAwesomeIcon icon={faPinterest}/>
                </Link>
            </div>
        </div>
        <div className="text-center">
            ©2025 All Rights Reserverd |  Powered by Shoppy Globe
        </div>
    </footer>
);
}

export default Footer;