// import React, { useState } from "react";
// import { FaGoogle, FaGithub, FaBolt } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Passwords don't match!");
//       return;
//     }
//     console.log("Registration attempted with:", { name, email, password });
//     // Here you would typically handle the registration logic
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-xl shadow-2xl flex w-full max-w-4xl pt-24">
//         <div className="w-1/2 pr-8">
//           <h2 className="text-3xl font-bold mb-6 text-blue-600 flex items-center">
//             <FaBolt className="mr-2" />
//             Join the Electric Revolution
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="confirmPassword"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Sign Up
//             </button>
//           </form>
//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   Or register with
//                 </span>
//               </div>
//             </div>
//             <div className="mt-6 grid grid-cols-2 gap-3">
//               <div>
//                 <a
//                   href="#"
//                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//                 >
//                   <FaGoogle className="w-5 h-5 text-red-500" />
//                 </a>
//               </div>
//               <div>
//                 <a
//                   href="#"
//                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//                 >
//                   <FaGithub className="w-5 h-5 text-gray-900" />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="mt-6 text-center">
//             <p className="text-gray-600">
//               Already have an account?{" "}
//               <Link to="/login" className="text-blue-600 hover:text-blue-800">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </div>
//         <div className="w-1/2 pl-8 flex items-center justify-center">
//           <img
//             src="/public/image/Portable Charger.jpg"
//             alt="Electric Car Accessory"
//             className="rounded-lg shadow-lg h-screen"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
//////////////////
import React, { useState } from "react";
import { FaGoogle, FaGithub, FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Registration attempted with:", { name, email, password });
    // Here you would typically handle the registration logic
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col md:flex-row w-full pt-20">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-slate-800 flex items-center">
            <FaBolt className="mr-2" />
            Join the EV SERVICE
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or register with
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <FaGoogle className="w-5 h-5 text-red-500" />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <FaGithub className="w-5 h-5 text-gray-900" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:text-blue-800">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="/public/image/Portable Charger.jpg"
            alt="Electric Car Accessory"
            className="rounded-lg shadow-lg w-full h-svh mr-8 "
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
