import { BiLogoPlayStore } from "react-icons/bi";
const Hero = () => {
  return (
    <section className=" bg-background px-10 text-white ">
      <div
        className="container grid grid-cols-1 md:grid-cols-1 min-h-screen">
        <div className="flex flex-col justify-center items-center py-14 ">
          <div className="space-y-5 text-center ">
            <h1 className="text-3xl lg:text-6xl font-bold">
              System App Remover
            </h1>
            <p className="text-sm leading-loose text-white/80 ">
              Flutter App that deletes System Apps(Bloatware especially).
            </p>
            <div className="flex justify-center gap-4">
              <button className=" bg-secondary text-sm text-white flex items-center justify-center px-4 py-2 gap-2  rounded-sm">
                <BiLogoPlayStore size={28} />
                <span>Download from playstore</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
