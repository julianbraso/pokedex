import classNames from "classnames";
import { useState } from "react";

export const Sidebar = () => {
    const [collapsed, setSidebarCollapsed] = useState(true);
    return (
        <>
            {/* {collapsed ? (
                <button
                    className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50"
                    onClick={() => setSidebarCollapsed(!collapsed)}
                >
                    x
                </button>
            ) : (
                <svg
                    onClick={() => setSidebarCollapsed(!collapsed)}
                    className="fixed z-30 flex items-center cursor-pointer left-10 top-6"
                    fill="#ffffff"
                    viewBox="0 0 100 80"
                    width="40"
                    height="40"
                >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            )} */}

            <div
                className={`top-0 left-0 w-48 Sidebar text-white fixed h-full z-40 ease-in-out duration-300 ${collapsed ? "sm:-translate-x-28 -translate-x-36 sm:p-5 p-1" : "translate-x-0 p-5"} shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`}
            >
                <div className="py-4 overflow-y-auto">
                    <div className={`flex flex-col ${collapsed ? "items-end" : "items-start"}`}>
                        <div>
                            <a href="#" onClick={() => setSidebarCollapsed(!collapsed)} className={`flex space-x-3 items-end w-full`}>
                                <div className={`w-10 `}><img className="border-2 rounded-xl shadow-md" src="https://static.wikia.nocookie.net/monster-master/images/6/63/Main1.png" /></div>
                                {!collapsed && <img className=" w-24" src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" />}
                            </a>
                        </div>
                    </div>
                    <ul className={` space-y-2 font-medium flex flex-col ${collapsed ? "items-end" : "items-start"}`}>
                        <li className="pt-5">
                            <a href="/" className={`flex items-center p-2 rounded-lg text-white hover:bg-red-600 group`}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" fill="#FFFFFF"
                                >
                                    <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
                                </svg>
                                {!collapsed && <span className="flex-1 ml-3 whitespace-nowrap">Home</span>}
                            </a>
                        </li>
                        <li className="pt-5">
                            <a href="/list" className="flex items-center p-2 rounded-lg text-white hover:bg-red-600 group">
                                <svg width="24.000000000000004" height="24.000000000000004" data-name="Layer 1" fill="#FFFFFF">
                                    <g>
                                        <path stroke="null" id="svg_1" d="m23.94167,12.05144c-0.06789,-4.94907 -3.09775,-9.38072 -7.73429,-11.14946c-4.67323,-1.78098 -10.18375,-0.29296 -13.34388,3.56807c-3.14485,3.84513 -3.62128,9.385 -1.0599,13.67231c2.55649,4.27814 7.56794,6.48296 12.44911,5.60409c5.56556,-1.00119 9.54952,-6.00102 9.68468,-11.5678a1.23299,1.23299 0 0 0 0.00428,-0.12721zm-20.26903,-4.99738c2.0617,-3.4482 6.18817,-5.34416 10.1495,-4.58394c4.2445,0.81282 7.3655,4.30994 7.87924,8.50124l-5.83589,0c-0.50518,-1.67334 -1.95712,-2.93568 -3.82984,-2.93568c-1.81339,0 -3.37297,1.26295 -3.85981,2.93568l-5.80653,0a9.66328,9.66328 0 0 1 1.30332,-3.9173zm10.21861,4.99799c-0.12232,2.36995 -3.71058,2.4097 -3.71058,0s3.5907,-2.37117 3.71058,0zm1.46784,9.16115c-3.8702,1.38772 -8.26455,0.17431 -10.87608,-3.00112a9.63453,9.63453 0 0 1 -2.1143,-5.07628l5.80225,0c0.48378,1.67517 2.06109,2.93568 3.8647,2.93568c1.87578,0 3.32466,-1.26479 3.82984,-2.93568l5.83772,0c-0.44341,3.61945 -2.83293,6.81934 -6.34351,8.0774l-0.00061,0z" />
                                    </g>
                                </svg>
                                {!collapsed && <span className="flex-1 ml-3 whitespace-nowrap">Pokemon</span>}
                            </a>
                        </li>
                    </ul>
                </div >
            </div >
        </>)
}


{/* <div>
        <div classNameName="text-center">
            <button classNameName="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                Show navigation
            </button>
        </div>
        <div id="drawer-navigation" classNameName="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800" tabIndex={-1} aria-labelledby="drawer-navigation-label">
            <h5 id="drawer-navigation-label" classNameName="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
            <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" classNameName="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                <svg aria-hidden="true" classNameName="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span classNameName="sr-only">Close menu</span>
            </button>
            <div classNameName="py-4 overflow-y-auto">
                <ul classNameName="space-y-2 font-medium">
                    <a href="/" classNameName="flex items-start space-x-3">
                        <img classNameName="w-10" src="https://static.wikia.nocookie.net/monster-master/images/6/63/Main1.png" />
                        <img classNameName="w-24" src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" />
                    </a>
                    <li classNameName="pt-5">
                        <a href="/list" classNameName="flex items-center p-2 rounded-lg text-white hover:bg-red-600 group">
                            <svg width="24.000000000000004" height="24.000000000000004" data-name="Layer 1" fill="#FFFFFF">
                                <g>
                                    <path stroke="null" id="svg_1" d="m23.94167,12.05144c-0.06789,-4.94907 -3.09775,-9.38072 -7.73429,-11.14946c-4.67323,-1.78098 -10.18375,-0.29296 -13.34388,3.56807c-3.14485,3.84513 -3.62128,9.385 -1.0599,13.67231c2.55649,4.27814 7.56794,6.48296 12.44911,5.60409c5.56556,-1.00119 9.54952,-6.00102 9.68468,-11.5678a1.23299,1.23299 0 0 0 0.00428,-0.12721zm-20.26903,-4.99738c2.0617,-3.4482 6.18817,-5.34416 10.1495,-4.58394c4.2445,0.81282 7.3655,4.30994 7.87924,8.50124l-5.83589,0c-0.50518,-1.67334 -1.95712,-2.93568 -3.82984,-2.93568c-1.81339,0 -3.37297,1.26295 -3.85981,2.93568l-5.80653,0a9.66328,9.66328 0 0 1 1.30332,-3.9173zm10.21861,4.99799c-0.12232,2.36995 -3.71058,2.4097 -3.71058,0s3.5907,-2.37117 3.71058,0zm1.46784,9.16115c-3.8702,1.38772 -8.26455,0.17431 -10.87608,-3.00112a9.63453,9.63453 0 0 1 -2.1143,-5.07628l5.80225,0c0.48378,1.67517 2.06109,2.93568 3.8647,2.93568c1.87578,0 3.32466,-1.26479 3.82984,-2.93568l5.83772,0c-0.44341,3.61945 -2.83293,6.81934 -6.34351,8.0774l-0.00061,0z" />
                                </g>
                            </svg>
                            <span classNameName="flex-1 ml-3 whitespace-nowrap">Pokemon</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div> */}