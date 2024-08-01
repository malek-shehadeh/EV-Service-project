// import { useState } from "react";
// import Home from "./Home";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import Catalog from "./Catalog/Catalog";
// import Cart from "./Cart/Cart";
// import Admin from "./Admin/Admin";
// import Payment from "./Payment/Payment";
// import SignUp from "./Signup/Signup";
// import LogIn from "./LogIn/LogIn";
// import ContactForm from "./MessageForm/MessageForm";
// import ProfilePage from "./Profilepage/Profilepage";

// const App = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const handleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/Menu/Cart/payment" element={<Payment />} />
//           <Route path="/Admin" element={<Admin />} />
//           <Route path="/SignUp" element={<SignUp />} />
//           <Route path="/LogIn" element={<LogIn />} />
//           <Route path="/ContactForm" element={<ContactForm />} />
//           <Route path="/ProfilePage" element={<ProfilePage />} />
//           <Route path="/catalog" element={<Catalog />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;
////////////////////
// import React, { useState, useEffect } from "react";
// import Home from "./Home";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Catalog from "./Catalog/Catalog";
// import Cart from "./Cart/Cart";
// import Admin from "./Admin/Admin";
// import Payment from "./Payment/Payment";
// import SignUp from "./Signup/Signup";
// import LogIn from "./LogIn/LogIn";
// import ContactForm from "./MessageForm/MessageForm";
// import ProfilePage from "./Profilepage/Profilepage";
// import Header from "./component/Header/Header";
// import Footer from "./component/Footer/Footer";

// const App = () => {
//   const [darkMode, setDarkMode] = useState(() => {
//     // تحقق من الحالة المخزنة في localStorage
//     const savedMode = localStorage.getItem("darkMode");
//     return savedMode ? JSON.parse(savedMode) : false;
//   });

//   useEffect(() => {
//     // تحديث class الخاص بالوثيقة
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   const handleDarkMode = () => {
//     setDarkMode((prevMode) => {
//       const newMode = !prevMode;
//       localStorage.setItem("darkMode", JSON.stringify(newMode));
//       return newMode;
//     });
//   };

//   return (
//     <div className={`${darkMode ? "dark" : ""}`}>
//       <BrowserRouter>
//         <Header handleDarkMode={handleDarkMode} darkMode={darkMode} />
//         <main className="min-h-screen bg-white dark:bg-slate-800 dark:text-slate-200">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/Menu/Cart/payment" element={<Payment />} />
//             <Route path="/Admin" element={<Admin />} />
//             <Route path="/SignUp" element={<SignUp />} />
//             <Route path="/LogIn" element={<LogIn />} />
//             <Route path="/ContactForm" element={<ContactForm />} />
//             <Route path="/ProfilePage" element={<ProfilePage />} />
//             <Route path="/catalog" element={<Catalog />} />
//           </Routes>
//         </main>
//         <Footer />
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;
////////////////////
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Catalog from "./Catalog/Catalog";
import Cart from "./Cart/Cart";
import Admin from "./Admin/Admin";
import Payment from "./Payment/Payment";
import LogIn from "./LogIn/LogIn";
import ContactForm from "./ContactForm/ContactForm";
import ProfilePage from "./Profilepage/Profilepage";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Register from "./Register/Register";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // تحقق من الحالة المخزنة في localStorage
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    // تحديث class الخاص بالوثيقة
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <BrowserRouter>
        {/* <Header handleDarkMode={handleDarkMode} darkMode={darkMode} /> */}
        {/* <main className="min-h-screen bg-white dark:bg-slate-800 dark:text-slate-200"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Menu/Cart/payment" element={<Payment />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
        {/* </main> */}
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
