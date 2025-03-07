"use client"
import { useState } from 'react';
import Image from 'next/image';

const navItems = [
    {
      id: 1,
      icon: (
        <Image
          src="/migrate.png"
          alt="Migrate to UK"
          width={24}
          height={24}
        />
      ),
      link: "dashboard",
      text: "Migrate to UK",
    },
    {
      id: 2,
      icon: (
        <Image
          src="/migrate.png"
          alt="Migrate to Germany"
          width={24}
          height={24}
        />
      ),
      link: "contact",
      text: "Migrate to Germany",
    },
    {
      id: 3,
      icon: (
        <Image
          src="/migrate.png"
          alt="Migrate to Canada"
          width={24}
          height={24}
        />
      ),
      link: "transactions",
      text: "Migrate to Canada",
    },
    {
      id: 4,
      icon: (
        <Image
          src="/migrate.png"
          alt="Migrate to USA"
          width={24}
          height={24}
        />
      ),
      link: "analytics",
      text: "Migrate to USA",
    },
    {
      id: 5,
      icon: (
        <Image
          src="/migrate.png"
          alt="Migrate to New Zealand"
          width={24}
          height={24}
        />
      ),
      link: "analytics",
      text: "Migrate to New Zealand",
    },
    {
      id: 6,
      icon: (
        <Image
          src="/migrate.png"
          alt="Migrate to South Africa"
          width={24}
          height={24}
        />
      ),
      link: "analytics",
      text: "Migrate to South Africa",
    },
    {
      id: 7,
      icon: (
        <Image
          src="/migrate.png"
          alt="Migrate to HongKong"
          width={24}
          height={24}
        />
      ),
      link: "analytics",
      text: "Migrate to HongKong",
    },
    {
      id: 8,
      icon: (
        <Image
          src="/migrate.png"
          alt="Migrate to Denmark"
          width={24}
          height={24}
        />
      ),
      link: "analytics",
      text: "Migrate to Denmark",
    },
    {
      id: 9,
      icon: (
        <Image
          src="/migrate.png"
          alt="Migrate to UAE"
          width={24}
          height={24}
        />
      ),
      link: "analytics",
      text: "Migrate to UAE",
    },
  ];
  
const Sidebar = () => {
  const [sidebarToggled, setSidebarToggled] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [activeContent, setActiveContent] = useState("");

  const toggleSidebar = () => {
    setSidebarToggled((prev) => !prev);
  };

  const handleItemClick = (id, link) => {
    setActiveId(id);
    setActiveContent(link);
  };

  const renderContent = () => {
    switch (activeContent) {
      case "dashboard":
        return <div>Dashboard Content</div>;
      case "contact":
        return <div>Contact Content</div>;
      case "transactions":
        return <div>Transactions Content</div>;
      case "analytics":
        return <div>Analytics Content</div>;
      default:
        return <div>Select a menu item to view content</div>;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`fixed h-screen w-72 bg-[url('/comp-1.webp')] bg-cover bg-center dark:bg-gray-950 shadow-lg transition-all ${
          sidebarToggled ? "" : " -translate-x-full"
        } md:translate-x-0`}
      >
        <div className="min-h-max py-4">
          <a href="#" className="flex items-center gap-x-3 font-semibold text-gray-800 dark:text-gray-200">
            <span></span>
            MIGRATE
          </a>
        </div>
        <nav className="pt-10">
          <ul className="space-y-3 text-gray-800">
            {navItems.map((navItem) => (
              <li key={navItem.id}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(navItem.id, navItem.link);
                  }}
                  className={`flex items-center gap-x-4 px-5 py-3 rounded-2xl ${
                    activeId === navItem.id
                      ? "text-gray-100 dark:text-gray-900 bg-orange-500"
                      : "hover:text-gray-700 dark:hover:text-white"
                  }`}
                >
                  <span className="min-w-max">{navItem.icon}</span>
                  <span>{navItem.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-72 p-4 w-full">
        <div className="lg:hidden fixed right-2 top-2 p-4">
          <button
            onClick={toggleSidebar}
            className="p-3 rounded-full bg-orange-500 dark:bg-blue-500 outline-none w-12 aspect-square flex flex-col relative justify-center items-center"
          >
            <span className="sr-only">toggle sidebar</span>
            <span
              className={`w-6 h-0.5 rounded-full bg-gray-300 transition-transform duration-300 ease-linear ${
                sidebarToggled ? "rotate-[40deg] translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-6 origin-center mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear ${
                sidebarToggled ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`w-6 mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear ${
                sidebarToggled ? "-rotate-[40deg] -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Render Active Content */}
        <div>{renderContent()}</div>
      </main>
    </div>
  );
};

export default Sidebar;
