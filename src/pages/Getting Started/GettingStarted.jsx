import { useState } from "react";
import { FaChevronRight, FaChevronUp } from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";
import ExpandableComponent from "../../components/ExpandableCard";
import { VscVmRunning } from "react-icons/vsc";
import { BsBrowserChrome } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
const sidebarMenuList = [
  {
    id: 1,
    title: "Getting Started",
    link: "#introduction",
    subtopics: [
      {
        id: 1.1,
        title: "Installation",
        link: "#installation",
      },
    ],
  },
  {
    id: 2,
    title: "Usage",
    link: "#usage",
    subtopics: [
      {
        id: 2.1,
        title: "Shizuku Installation",
        link: "#shizuku-installation",
      },
      { id: 2.2, title: "Shizuku Activation", link: "#shizuku-activation" },
    ],
  },
  { id: 3, title: "Changelogs", link: "#changelogs" },
  { id: 4, title: "FAQ", link: "#faq" },
];

const GettingStarted = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSubtopics = (id) => {
    setActiveSection(activeSection === id ? null : id); // Toggle visibility of subtopics
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {sideBarComponent(toggleSubtopics, activeSection)}

      {/* Left offset for content area */}<div className="w-1/4"></div>
      {/* Content Area */}
      <div className="w-3/4 bg-background-990 text-white p-4 ml-1/4 overflow-y-auto">
        <h1 className="text-3xl font-bold  text-button">Getting Started</h1>
        <p className="mb-6 mt-1 pl-2">
          Flutter App that deletes System Apps(Bloatware especially).
        </p>
        {installationSection()}

        <section id="usage" className="mb-8 bg-background-950 rounded-md p-4">
          <h2 className="text-xl font-semibold">Usage Tutorial</h2>
          <p className=" mb-4">Learn how to use the application effectively.</p>
          <h1 className=" underline">Pre Requirements Tutorial: </h1>
          {/* Shizuku Installation */}
          <ExpandableComponent
            title="Shizuku Installation"
            titleIcon={
              <img
                src="/assets/images/shizuku_logo.jpg"
                className="h-9 w-9 rounded-xl"
              />
            }
            content={
              <div>
                <p>
                  {"My app Won't work without this Shizuku App, go install it."}
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className=" bg-primary-700 text-sm mt-4 text-white flex items-center justify-center px-4 py-2 gap-2  rounded-3xl">
                    <BiLogoPlayStore size={28} />
                    <span>Download from playstore</span>
                  </button>
                </a>
              </div>
            }
            className={"bg-primary-900"}
          />
          {/* Shizuku Activation */}
          <ExpandableComponent
            title="Shizuku Activation"
            titleIcon={
            <VscVmRunning size={28} />
            }
            content={
              <div>
                <a 
                   href="https://shizuku.rikka.app/guide/setup/#start-via-wireless-debugging"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                  <button className=" bg-primary-700 text-sm mt-4 text-white flex items-center justify-center px-4 py-2 gap-2  rounded-3xl">
                    <BsBrowserChrome/>
                <span>shizuku wireless debugging official tutorial</span></button>
                </a>
              </div>
            }
            className={"bg-primary-900"}
          />
          <h1 className=" underline">System App Remover Tutorial: </h1>
          <ExpandableComponent
            title="Home Screen"
            titleIcon={
            <FaHome size={28} />
            }
            content={
             <div>
               <h1 className=" text-xl mb-1">There are five Categories your system apps are classified: </h1>
              <p className=" mb-4">{"* you need to Backup important data from apps you going to uninstall, Don't cry after uninstalling mistakenly, Chill bro"}</p>
              <img src="/assets/images/tab_home_category.png"/>
              <p className=" underline">Recommended: </p>
              <p>{"This is recommended to Uninstall Apps, yet still its good to see what you are uninstalling"}</p>
              <p className=" underline">Rest of the Categories: </p>
              <p>{"You need to be sure, where you really need to uninstall it/ not"}</p>
             </div>
            }
            className={"bg-primary-900"}
          />
          
        </section>
        <section id="changelogs" className="mb-8 bg-background-950 rounded-md p-4">
          <h2 className="text-xl font-semibold">Changelogs</h2>
          <p>Here you can find all the recent updates and changes.</p>
        </section>
        <section id="faq" className="mb-8 bg-background-950 rounded-md p-4">
          <h2 className="text-xl font-semibold">FAQ</h2>
          <p>Frequently asked questions about the application.</p>
        </section>
      </div>
    </div>
  );
};

export default GettingStarted;

function sideBarComponent(toggleSubtopics, activeSection) {
  return <div className="w-1/4  bg-background-950 mt-14 text-white h-full overflow-y-auto fixed top-0 left-0">
    <ul className="p-4">
      {sidebarMenuList.map((menu) => (
        <li key={menu.id}>
          {/* Main Topic with Toggle Icon */}
          <div
            className="flex items-center cursor-pointer py-2 px-3 hover:bg-ba"
            onClick={() => toggleSubtopics(menu.id)} // Toggle subtopics on click
          >
            {/* Icon for Expand/Collapse */}
            {menu.subtopics && (
              <span className="mr-2">
                {activeSection === menu.id ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronRight />
                )}
              </span>
            )}
            <a href={menu.link} className="block">
              {menu.title}
            </a>
          </div>

          {/* Subtopics */}
          {menu.subtopics && activeSection === menu.id && (
            <ul className="pl-4">
              {menu.subtopics.map((sub) => (
                <li key={sub.id}>
                  <a
                    href={sub.link}
                    className="block py-2 px-3 hover:bg-gray-400"
                  >
                    {sub.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>;
}

function installationSection() {
  return (
    <section id="installation" className="mb-8 bg-background-950 rounded-md p-4">
      <h2 className="text-2xl font-semibold ">Installation</h2>
      <p className="py-2">
        Follow the playstore link below to install the application.
      </p>
      <a
        href="https://play.google.com/store/apps/details?id=com.santhoshDsubramani.systemappremover"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className=" bg-primary-700 text-sm shadow-md text-white flex items-center justify-center px-4 py-2 gap-2  rounded-3xl">
          <BiLogoPlayStore size={28} />
          <span>Download from playstore</span>
        </button>
      </a>
    </section>
  );
}
