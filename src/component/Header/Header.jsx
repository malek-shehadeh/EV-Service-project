// // import { useState } from "react";
// // import { FaMoon, FaSun } from "react-icons/fa";

// // import { BiMenuAltLeft } from "react-icons/bi";
// // import { menuItems } from "../../constants";
// // import { Link } from "react-router-dom";
// // const Header = ({ handleDarkMode, darkMode }) => {
// //   const [toggleMenu, settoggleMenu] = useState(false);
// //   const handleToggleMenu = () => {
// //     settoggleMenu(!toggleMenu);
// //   };
// //   return (
// //     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px16">
// //       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row ">
// //         <div
// //           className="flex w-full items-center justify-between md:flex-row
// //         "
// //         >
// //           <h1 className="font-bold text-2xl ">
// //             <a href="#"> EV SERVICE</a>
// //           </h1>

// //           <button
// //             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden "
// //             onClick={handleToggleMenu}
// //           >
// //             <BiMenuAltLeft className="text-2xl" />
// //           </button>
// //         </div>
// //         <div
// //           className={`${
// //             toggleMenu ? "block" : "hidden"
// //           } w-full flex-col md:flex md:flex-row  md:w-auto md:items-center `}
// //         >
// //           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row ">
// //             {menuItems.map((item, index) => (
// //               <li key={index} className="w-full md:w-auto ">
// //                 <a
// //                   href={item.href}
// //                   className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //                 >
// //                   {item.name}
// //                 </a>
// //               </li>
// //             ))}
// //           </ul>

// //           <button
// //             className="mt-5 rounded-full p-2 dark:bg-slate-50 dark:text-slate-700 md:ml-5 md:mt-0 "
// //             onClick={handleDarkMode}
// //           >
// //             {darkMode ? <FaSun /> : <FaMoon />}
// //           </button>
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;
// /////////////////
// // import { useState } from "react";
// // import { FaMoon, FaSun } from "react-icons/fa";
// // import { BiMenuAltLeft } from "react-icons/bi";
// // import { Link } from "react-router-dom";

// // const Header = ({ handleDarkMode, darkMode }) => {
// //   const [toggleMenu, settoggleMenu] = useState(false);
// //   const handleToggleMenu = () => {
// //     settoggleMenu(!toggleMenu);
// //   };

// //   const menuItems = [
// //     { name: "Blog", href: "#blog" },
// //     { name: "Services", href: "#services" },
// //     { name: "FAQs", href: "#faqs" },
// //     { name: "About", href: "#about" },
// //     { name: "Contact", href: "#contact" },
// //     { name: "Team", href: "#team" },
// //     { name: "Catalog", href: "/catalog" },
// //   ];

// //   return (
// //     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px16">
// //       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row ">
// //         <div
// //           className="flex w-full items-center justify-between md:flex-row
// //         "
// //         >
// //           <h1 className="font-bold text-2xl ">
// //             <a href="#"> EV SERVICE</a>
// //           </h1>

// //           <button
// //             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden "
// //             onClick={handleToggleMenu}
// //           >
// //             <BiMenuAltLeft className="text-2xl" />
// //           </button>
// //         </div>
// //         <div
// //           className={`${
// //             toggleMenu ? "block" : "hidden"
// //           } w-full flex-col md:flex md:flex-row  md:w-auto md:items-center `}
// //         >
// //           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row ">
// //             {menuItems.map((item, index) => (
// //               <li key={index} className="w-full md:w-auto ">
// //                 <a
// //                   href={item.href}
// //                   className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //                 >
// //                   {item.name}
// //                 </a>
// //               </li>
// //             ))}
// //           </ul>

// //           <button
// //             className="mt-5 rounded-full p-2 dark:bg-slate-50 dark:text-slate-700 md:ml-5 md:mt-0 "
// //             onClick={handleDarkMode}
// //           >
// //             {darkMode ? <FaSun /> : <FaMoon />}
// //           </button>
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;
// /////////////////
// // import { useState } from "react";
// // import { FaMoon, FaSun } from "react-icons/fa";
// // import { BiMenuAltLeft } from "react-icons/bi";
// // import { Link } from "react-router-dom";

// // const Header = ({ handleDarkMode, darkMode }) => {
// //   const [toggleMenu, settoggleMenu] = useState(false);
// //   const handleToggleMenu = () => {
// //     settoggleMenu(!toggleMenu);
// //   };

// //   return (
// //     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px16">
// //       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row ">
// //         <div className="flex w-full items-center justify-between md:flex-row">
// //           <h1 className="font-bold text-2xl">
// //             <a href="#"> EV SERVICE</a>
// //           </h1>

// //           <button
// //             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
// //             onClick={handleToggleMenu}
// //           >
// //             <BiMenuAltLeft className="text-2xl" />
// //           </button>
// //         </div>
// //         <div
// //           className={`${
// //             toggleMenu ? "block" : "hidden"
// //           } w-full flex-col md:flex md:flex-row md:w-auto md:items-center`}
// //         >
// //           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#blog"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Blog
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#services"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Services
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#faqs"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 FAQs
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#about"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 About
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#contact"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Contact
// //               </a>
// //             </li>
// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#team"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Team
// //               </a>
// //             </li>

// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#team"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 <Link to="/catalog">Catalog</Link>
// //               </a>
// //             </li>

// //             <li className="w-full md:w-auto">
// //               <a
// //                 href="#team"
// //                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
// //               >
// //                 Team
// //               </a>
// //             </li>
// //           </ul>

// //           <button
// //             className="mt-5 rounded-full p-2 dark:bg-slate-50 dark:text-slate-700 md:ml-5 md:mt-0"
// //             onClick={handleDarkMode}
// //           >
// //             {darkMode ? <FaSun /> : <FaMoon />}
// //           </button>
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;
// ////////////////////////////////////

// import { useState } from "react";
// import { FaMoon, FaSun, FaShoppingCart } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { Link } from "react-router-dom";

// const Header = ({ handleDarkMode, darkMode }) => {
//   const [toggleMenu, settoggleMenu] = useState(false);
//   const handleToggleMenu = () => {
//     settoggleMenu(!toggleMenu);
//   };

//   return (
//     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px16">
//       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row ">
//         <div className="flex w-full items-center justify-between md:flex-row">
//           <Link to="/">
//             <h1 className="font-bold text-2xl">EV SERVICE</h1>
//           </Link>

//           <button
//             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
//             onClick={handleToggleMenu}
//           >
//             <BiMenuAltLeft className="text-2xl" />
//           </button>
//         </div>
//         <div
//           className={`${
//             toggleMenu ? "block" : "hidden"
//           } w-full flex-col md:flex md:flex-row md:w-auto md:items-center`}
//         >
//           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
//             <li className="w-full md:w-auto">
//               <a
//                 href="#blog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Blog
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#services"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Services
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#faqs"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 FAQs
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#about"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 About
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#contact"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Contact
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#team"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Team
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#catalog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <Link to="/catalog">Catalog</Link>
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#cart"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 <Link to="/cart">
//                   <FaShoppingCart className="text-xl" />
//                 </Link>
//               </a>
//             </li>
//           </ul>

//           <button
//             className="mt-5 rounded-full p-2 dark:bg-slate-50 dark:text-slate-700 md:ml-5 md:mt-0"
//             onClick={handleDarkMode}
//           >
//             {darkMode ? <FaSun /> : <FaMoon />}
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
////////////////////////////////
// import { useState } from "react";
// import { FaMoon, FaSun, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { Link } from "react-router-dom";

// const Header = ({ handleDarkMode, darkMode }) => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const handleToggleMenu = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   return (
//     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
//       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
//         <div className="flex w-full items-center justify-between md:w-auto">
//           <Link to="/">
//             <h1 className="text-2xl font-bold">EV SERVICE</h1>
//           </Link>

//           <button
//             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
//             onClick={handleToggleMenu}
//           >
//             <BiMenuAltLeft className="text-2xl" />
//           </button>
//         </div>
//         <div
//           className={`${
//             toggleMenu ? "block" : "hidden"
//           } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
//         >
//           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
//             <li className="w-full md:w-auto">
//               <a
//                 href="#blog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Blog
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#services"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Services
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#faqs"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 FAQs
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#about"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 About
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#contact"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Contact
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#team"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Team
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/catalog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Catalog
//               </Link>
//             </li>
//           </ul>

//           <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
//             <Link
//               to="/cart"
//               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//             >
//               <FaShoppingCart className="text-xl" />
//             </Link>
//             <Link
//               to="/signin"
//               className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//             >
//               <FaSignInAlt className="mr-2" />
//               Sign In
//             </Link>
//             <button
//               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
//               onClick={handleDarkMode}
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
/////////////////
// import { useState } from "react";
// import { FaMoon, FaSun, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { Link } from "react-router-dom";

// const Header = ({ handleDarkMode, darkMode }) => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const handleToggleMenu = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   return (
//     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
//       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
//         <div className="flex w-full items-center justify-between md:w-auto">
//           <Link to="/">
//             <h1 className="text-2xl font-bold">EV SERVICE</h1>
//           </Link>

//           <button
//             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
//             onClick={handleToggleMenu}
//           >
//             <BiMenuAltLeft className="text-2xl" />
//           </button>
//         </div>
//         <div
//           className={`${
//             toggleMenu ? "block" : "hidden"
//           } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
//         >
//           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
//             <li className="w-full md:w-auto">
//               <a
//                 href="#blog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Blog
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#services"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Services
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#faqs"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 FAQs
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#about"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 About
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#contact"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Contact
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#team"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Team
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/catalog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Catalog
//               </Link>
//             </li>
//           </ul>

//           <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
//             <Link
//               to="/cart"
//               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//             >
//               <FaShoppingCart className="text-xl" />
//             </Link>
//             <Link
//               to="/signin"
//               className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//             >
//               <FaSignInAlt className="mr-2" />
//               Sign In
//             </Link>
//             <button
//               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
//               onClick={handleDarkMode}
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
////////////////////
// import { useState } from "react";
// import { FaMoon, FaSun, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { Link } from "react-router-dom";

// const Header = ({ handleDarkMode, darkMode }) => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const handleToggleMenu = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   return (
//     <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
//       <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
//         <div className="flex w-full items-center justify-between md:w-auto">
//           <Link to="/">
//             <h1 className="text-2xl font-bold">EV SERVICE</h1>
//           </Link>

//           <button
//             className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
//             onClick={handleToggleMenu}
//           >
//             <BiMenuAltLeft className="text-2xl" />
//           </button>
//         </div>
//         <div
//           className={`${
//             toggleMenu ? "block" : "hidden"
//           } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
//         >
//           <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
//             <li className="w-full md:w-auto">
//               <a
//                 href="#blog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Blog
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#services"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Services
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#faqs"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 FAQs
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#about"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 About
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#contact"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Contact
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <a
//                 href="#team"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Team
//               </a>
//             </li>
//             <li className="w-full md:w-auto">
//               <Link
//                 to="/catalog"
//                 className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
//               >
//                 Catalog
//               </Link>
//             </li>
//           </ul>

//           <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
//             <Link
//               to="/cart"
//               className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//             >
//               <FaShoppingCart className="text-xl" />
//             </Link>
//             <Link
//               to="/signin"
//               className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
//             >
//               <FaSignInAlt className="mr-2" />
//               Sign In
//             </Link>
//             <button
//               className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
//               onClick={handleDarkMode}
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
//////////////////
import { useState } from "react";
import { FaMoon, FaSun, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = ({ handleDarkMode, darkMode }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-5 md:px-16">
      <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-slate-500 bg-slate-50 px-3 py-3 dark:bg-slate-700 dark:text-slate-300 md:flex-row">
        <div className="flex w-full items-center justify-between md:w-auto">
          <Link to="/">
            <h1 className="text-2xl font-bold">EV SERVICE</h1>
          </Link>

          <button
            className="cursor-pointer rounded-full bg-slate-500 p-1 text-slate-200 dark:bg-slate-100 dark:text-slate-500 md:hidden"
            onClick={handleToggleMenu}
          >
            <BiMenuAltLeft className="text-2xl" />
          </button>
        </div>
        <div
          className={`${
            toggleMenu ? "block" : "hidden"
          } w-full flex-col md:flex md:w-auto md:flex-row md:items-center md:justify-between`}
        >
          <ul className="mt-5 flex flex-col items-start md:mt-0 md:flex-row">
            <li className="w-full md:w-auto">
              <a
                href="#Home"
                className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
              >
                <Link to="/">Home</Link>
              </a>
            </li>

            <li className="w-full md:w-auto">
              <a
                href="#contact"
                className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
              >
                <Link to="/ContactForm">Contact</Link>
              </a>
            </li>
            <li className="w-full md:w-auto">
              <a
                href="#Profile"
                className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
              >
                <Link to="/ProfilePage">Profile</Link>
              </a>
            </li>

            <li className="w-full md:w-auto">
              <Link
                to="/catalog"
                className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
              >
                Catalog
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                to="/Admin"
                className="block rounded-sm p-2 px-4 hover:bg-gray-200 dark:hover:text-slate-500"
              >
                Admin
              </Link>
            </li>
          </ul>

          <div className="mt-5 flex items-center justify-end md:mt-0 md:ml-4">
            <Link
              to="/cart"
              className="mr-4 rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
            >
              <FaShoppingCart className="text-xl" />
            </Link>
            <Link
              to="/LogIn"
              className="mr-4 flex items-center rounded-sm p-2 hover:bg-gray-200 dark:hover:text-slate-500"
            >
              <FaSignInAlt className="mr-2" />
              Sign In
            </Link>
            <button
              className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
              onClick={handleDarkMode}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
