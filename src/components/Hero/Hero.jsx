import { BiLogoPlayStore } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import SocialCard from "../SocialCard";
import { FaDiscord } from "react-icons/fa";

import { YouPlayer } from "@react5/you-player";

const Hero = () => {
  return (
    <section className=" bg-background-990 px-10 text-white ">
      <div className="container grid grid-cols-1 md:grid-cols-1 min-h-screen">
        <div className="flex flex-col justify-start items-center">
          <div className="flex justify-center items-center mb-4 px-2">
            <img
              src="./assets/screenshots/tab_home.png"
              className=" hidden h-56 md:block lg:pr-4 md:pr-4 sm:pr-1"
            />

            <img
              src="./assets/screenshots/phone_home.png"
              className=" hidden h-56 md:block lg:pr-4 md:pr-6 sm: pr-1"
            />
            <img
              src="./assets/screenshots/phone_selection.png"
              className=" hidden h-56 md:block lg:pr-8 md:pr-6 sm: pr-1"
            />
            <YouPlayer
              className="m-4 h-56 max-w-sm"
              videoId="aKydtOXW8mI"
              onReady={(player) => {
                player.playVideo();
              }}
            />
          </div>

          <div className="space-y-5 text-center ">
            <h1 className="text-4xl md:text-6xl  lg:text-6xl font-bold text-text-600">
              System App Remover
            </h1>
            <p className="text-sm leading-loose text-text-100">
              Flutter App that deletes System Apps(Bloatware especially).
            </p>
            <p className="text-sm leading-loose text-text-100 ">
              Available in Android 11+ phones | Tablets
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.santhoshDsubramani.systemappremover"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" bg-primary-700 text-sm text-white flex items-center justify-center px-4 py-2 gap-2  rounded-3xl">
                  <BiLogoPlayStore size={28} />
                  <span>Download from playstore</span>
                </button>
              </a>
            </div>
            <div className="flex  justify-center gap-4">
              <SocialCard
                link="https://github.com/santhosh-D-subramani?tab=repositories"
                icon={<FaGithub size={28} />}
              />
              {/* <SocialCard
                link="https://github.com/santhosh-D-subramani?tab=repositories"
                icon={<TiSocialYoutube size={28} />}
              /> */}
              <SocialCard
                link="https://discord.gg/ym9m7SRrNQ"
                icon={<FaDiscord size={28} />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
