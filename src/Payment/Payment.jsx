// // import React, { useState } from "react";
// // import Header from "../component/Header/Header";
// // import Footer from "../component/Footer/Footer";

// // const Payment = () => {
// //   const [cardDetails, setCardDetails] = useState({
// //     name: "John Smith",
// //     number: "4256 7890 5678 4532",
// //     expiryMonth: "09",
// //     expiryYear: "2020",
// //     cvc: "345",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setCardDetails((prevDetails) => ({
// //       ...prevDetails,
// //       [name]: value,
// //     }));
// //   };

// //   return (
// //     <div className="flex flex-col md:flex-row bg-gray-100 p-6 rounded-lg shadow-lg">
// //       <Header />
// //       <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
// //         <div className="bg-gradient-to-r from-red-400 to-red-600 w-80 h-48 rounded-lg text-white p-6 flex flex-col justify-between shadow-lg">
// //           <div className="text-lg tracking-wide">{cardDetails.number}</div>
// //           <div className="flex justify-between">
// //             <div>
// //               <div className="text-xs">Card Holder</div>
// //               <div>{cardDetails.name}</div>
// //             </div>
// //             <div>
// //               <div className="text-xs">Expires</div>
// //               <div>{`${cardDetails.expiryMonth}/${cardDetails.expiryYear}`}</div>
// //             </div>
// //             <div>
// //               <div className="text-xs">CVC</div>
// //               <div>{cardDetails.cvc}</div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
// //         <form>
// //           <div className="mb-4">
// //             <label className="block text-gray-700 text-sm font-bold mb-2">
// //               CARDHOLDER NAME
// //             </label>
// //             <input
// //               type="text"
// //               name="name"
// //               value={cardDetails.name}
// //               onChange={handleChange}
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700 text-sm font-bold mb-2">
// //               CARD NUMBER
// //             </label>
// //             <input
// //               type="text"
// //               name="number"
// //               value={cardDetails.number}
// //               onChange={handleChange}
// //               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //             />
// //           </div>
// //           <div className="flex mb-4">
// //             <div className="w-1/3 mr-2">
// //               <label className="block text-gray-700 text-sm font-bold mb-2">
// //                 EXPIRY MONTH
// //               </label>
// //               <input
// //                 type="text"
// //                 name="expiryMonth"
// //                 value={cardDetails.expiryMonth}
// //                 onChange={handleChange}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               />
// //             </div>
// //             <div className="w-1/3 mr-2">
// //               <label className="block text-gray-700 text-sm font-bold mb-2">
// //                 EXPIRY YEAR
// //               </label>
// //               <input
// //                 type="text"
// //                 name="expiryYear"
// //                 value={cardDetails.expiryYear}
// //                 onChange={handleChange}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               />
// //             </div>
// //             <div className="w-1/3">
// //               <label className="block text-gray-700 text-sm font-bold mb-2">
// //                 CVC
// //               </label>
// //               <input
// //                 type="text"
// //                 name="cvc"
// //                 value={cardDetails.cvc}
// //                 onChange={handleChange}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               />
// //             </div>
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700 text-sm font-bold mb-2">
// //               PAYMENT AMOUNT
// //             </label>
// //             <div className="text-2xl font-bold text-red-500">12 300 JOD</div>
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //           >
// //             PAY
// //           </button>
// //         </form>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Payment;
// /////////////////////////
// import React, { useState } from "react";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";

// const Payment = () => {
//   const [cardDetails, setCardDetails] = useState({
//     name: "John Smith",
//     number: "4256 7890 5678 4532",
//     expiryMonth: "09",
//     expiryYear: "2020",
//     cvc: "345",
//   });
//   const [darkMode, setDarkMode] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCardDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   return (
//     <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
//       <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />
//       <main className="flex-grow bg-gray-100 dark:bg-gray-900 p-6">
//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
//             <div className="bg-gradient-to-r from-red-400 to-red-600 w-80 h-48 rounded-lg text-white p-6 flex flex-col justify-between shadow-lg">
//               <div className="text-lg tracking-wide">{cardDetails.number}</div>
//               <div className="flex justify-between">
//                 <div>
//                   <div className="text-xs">Card Holder</div>
//                   <div>{cardDetails.name}</div>
//                 </div>
//                 <div>
//                   <div className="text-xs">Expires</div>
//                   <div>{`${cardDetails.expiryMonth}/${cardDetails.expiryYear}`}</div>
//                 </div>
//                 <div>
//                   <div className="text-xs">CVC</div>
//                   <div>{cardDetails.cvc}</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
//             <form>
//               <div className="mb-4">
//                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
//                   CARDHOLDER NAME
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={cardDetails.name}
//                   onChange={handleChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
//                   CARD NUMBER
//                 </label>
//                 <input
//                   type="text"
//                   name="number"
//                   value={cardDetails.number}
//                   onChange={handleChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//               <div className="flex mb-4">
//                 <div className="w-1/3 mr-2">
//                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
//                     EXPIRY MONTH
//                   </label>
//                   <input
//                     type="text"
//                     name="expiryMonth"
//                     value={cardDetails.expiryMonth}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                 </div>
//                 <div className="w-1/3 mr-2">
//                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
//                     EXPIRY YEAR
//                   </label>
//                   <input
//                     type="text"
//                     name="expiryYear"
//                     value={cardDetails.expiryYear}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                 </div>
//                 <div className="w-1/3">
//                   <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
//                     CVC
//                   </label>
//                   <input
//                     type="text"
//                     name="cvc"
//                     value={cardDetails.cvc}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
//                   PAYMENT AMOUNT
//                 </label>
//                 <div className="text-2xl font-bold text-red-500 dark:text-red-400">
//                   12 300 JOD
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none focus:shadow-outline"
//               >
//                 PAY
//               </button>
//             </form>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Payment;
//////////////////////////////
import React, { useState } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

const Payment = () => {
  const [cardDetails, setCardDetails] = useState({
    name: "Malek Shehadeh",
    number: "4256 7890 5678 4532",
    expiryMonth: "09",
    expiryYear: "2026",
    cvc: "345",
  });
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
      <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main className="flex-grow bg-gray-100 dark:bg-gray-900 p-6 pt-24 px-16">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
            <div className="bg-gradient-to-r from-slate-700 to-slate-900 w-80 h-48 rounded-lg text-white p-6 flex flex-col justify-between shadow-lg">
              <div className="text-lg tracking-wide">{cardDetails.number}</div>
              <div className="flex justify-between">
                <div>
                  <div className="text-xs">Card Holder</div>
                  <div>{cardDetails.name}</div>
                </div>
                <div>
                  <div className="text-xs">Expires</div>
                  <div>{`${cardDetails.expiryMonth}/${cardDetails.expiryYear}`}</div>
                </div>
                <div>
                  <div className="text-xs">CVC</div>
                  <div>{cardDetails.cvc}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  CARDHOLDER NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={cardDetails.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  CARD NUMBER
                </label>
                <input
                  type="text"
                  name="number"
                  value={cardDetails.number}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex mb-4">
                <div className="w-1/3 mr-2">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    EXPIRY MONTH
                  </label>
                  <input
                    type="text"
                    name="expiryMonth"
                    value={cardDetails.expiryMonth}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="w-1/3 mr-2">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    EXPIRY YEAR
                  </label>
                  <input
                    type="text"
                    name="expiryYear"
                    value={cardDetails.expiryYear}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="w-1/3">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    CVC
                  </label>
                  <input
                    type="text"
                    name="cvc"
                    value={cardDetails.cvc}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  PAYMENT AMOUNT
                </label>
                <div className="text-2xl font-bold text-red-500 dark:text-red-400">
                  12 300 JOD
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-slate-700 text-white font-bold py-2 px-4 rounded hover:bg-slate-600 dark:bg-slate-900 dark:hover:bg-slate-600 focus:outline-none focus:shadow-outline"
              >
                PAY
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Payment;
