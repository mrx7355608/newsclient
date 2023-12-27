import React from "react";
import {
    FaFacebook,
    FaPinterest,
    FaGooglePlus,
    FaSoundcloud,
    FaLinkedin,
    FaYoutube,
    FaTwitter,
} from "react-icons/fa";

export default function Headline() {
    return (
        <div className="flex justify-around w-full bg-red-600 h-10 text-white">
            <div className="flex items-center gap-4 h-full">
                <div className="flex items-center bg-black w-max px-8 pb-3 h-full">
                    تازہ ترین
                </div>
                <p>بیک وسطی چین کا آخری دہائی</p>
            </div>
            <div className="flex items-center gap-3">
                <FaSoundcloud size={30} />
                <FaYoutube size={30} />
                <FaLinkedin size={25} />
                <FaTwitter size={25} />
                <FaGooglePlus size={25} />
                <FaFacebook size={25} />
            </div>
        </div>
    );
}
