import { Footer } from "flowbite-react";
import { BiLogoGmail } from "react-icons/bi";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsMessenger, BsTelegram, BsTwitter, BsWhatsapp } from "react-icons/bs";

const FooTer = () => {
    return (
    <div >
            <Footer bgDark>
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                <div>
                    <Footer.Title title="Facebook messenger" />
                    <Footer.LinkGroup col>
                    <Footer.Link className="text-3xl" href="https://www.m.me/AnantaBanik3x/" target="_blank"><BsMessenger></BsMessenger></Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div>
                    <Footer.Title title="Gmail" />
                    <Footer.LinkGroup col>
                    <Footer.Link className="text-3xl" href="https://mail.google.com/mail/?view=cm&fs=1&to=anantabanikofficial@gmail.com" target="_blank"><BiLogoGmail></BiLogoGmail></Footer.Link>
                    
                    </Footer.LinkGroup>
                </div>
                <div>
                    <Footer.Title title="whatsapp messenger" />
                    <Footer.LinkGroup col>
                    <Footer.Link className="text-3xl"  href="https://wa.me/01622731790" target="_blank"><BsWhatsapp></BsWhatsapp></Footer.Link>
                    
                    </Footer.LinkGroup>
                </div>
                <div>
                    <Footer.Title title="telegram" />
                    <Footer.LinkGroup col>
                    <Footer.Link className="text-3xl"  href="https://t.me/@anantaj39" target="_blank"><BsTelegram/></Footer.Link>
                    
                    </Footer.LinkGroup>
                </div>
                </div>
                <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright target="_blank"  href="https://ananta-banik.web.app/" by="FitVerse™ All Rights Reserved" year={new Date().getFullYear()} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon target="_blank" href="https://www.facebook.com/AnantaBanik3x/" icon={BsFacebook} />
                    <Footer.Icon target="_blank" href="https://www.linkedin.com/in/anchba" icon={BsLinkedin} />
                    <Footer.Icon target="_blank" href="https://x.com/AnantaBanik3" icon={BsTwitter} />
                    <Footer.Icon target="_blank" href="https://github.com/AnantaBG" icon={BsGithub} />
                </div>
                </div>
            </div>
            </Footer>
        </div>
    );
};

export default FooTer;