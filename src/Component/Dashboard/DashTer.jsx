import { Footer } from "flowbite-react";
import {  BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
const DashTer = () => {
    return (
        <Footer className="w-11/12 lg:flex grid mx-auto" bgDark>
        <div className="mx-auto w-full">
          <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Ananta™" year={2025} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon target="_blank" href="https://www.facebook.com/AnantaBanik3x/" icon={BsFacebook} />
              <Footer.Icon href="https://x.com/AnantaBanik3" target="_blank" icon={BsTwitter} />
              <Footer.Icon target="_blank" href="https://github.com/AnantaBG" icon={BsGithub} />
              <Footer.Icon target="_blank" href="https://www.linkedin.com/in/anchba"  icon={BsLinkedin} />
            </div>
          </div>
        </div>
      </Footer>
    );
};

export default DashTer;