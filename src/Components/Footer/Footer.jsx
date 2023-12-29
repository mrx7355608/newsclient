import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaGooglePlus,
} from "react-icons/fa";
import Logo from "../Logo";
import Subfooter from "./Subfooter";
import Article from "./FooterArticle";
import PopularNews from "./PopularNews";

export default function Footer() {
    return (
        <div className="w-full bg-zinc-900 p-12">
            <div className="flex items-start text-white gap-10">
                <Section1 />
                <Section2 />
                <Section3 />
            </div>
            <hr className="my-3 border-zinc-800" />
            <Subfooter />
        </div>
    );
}

function Section1() {
    return (
        <section className="flex-1">
            <p>مشہور خبر</p>
            <hr className="my-3 border-zinc-800" />
            <PopularNews />
        </section>
    );
}

function Section2() {
    return (
        <section className="flex-1">
            <p>ایڈیٹرچوائس</p>
            <hr className="my-3 border-zinc-800" />
            <div className="flex flex-col gap-5 w-full">
                <Article />
                <Article />
                <Article />
                <Article />
            </div>
        </section>
    );
}

function Section3() {
    return (
        <section className="flex-1 text-gray-100">
            <p>ہمارے بارے میں</p>
            <hr className="my-3 border-zinc-800" />
            <Logo />
            <div className="flex gap-2">
                <a
                    href="#"
                    target="_blank"
                    className="bg-zinc-800 p-3 hover:bg-blue-600"
                >
                    <FaFacebookF size={18} />
                </a>
                <a
                    href="#"
                    target="_blank"
                    className="bg-zinc-800 p-3 hover:bg-blue-600"
                >
                    <FaTwitter size={20} />
                </a>
                <a
                    href="#"
                    target="_blank"
                    className="bg-zinc-800 p-3 hover:bg-blue-600"
                >
                    <FaInstagram size={20} />
                </a>
                <a
                    href="#"
                    target="_blank"
                    className="bg-zinc-800 p-3 hover:bg-blue-600"
                >
                    <FaGooglePlus size={20} />
                </a>
            </div>
        </section>
    );
}
