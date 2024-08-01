// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Select } from "@/components/ui/select";

// const products = [
//   { id: 1, name: "EV Charger", category: "Charging", price: 599 },
//   { id: 2, name: "Battery Pack", category: "Power", price: 3999 },
//   { id: 3, name: "Tire Set", category: "Accessories", price: 799 },
//   { id: 4, name: "Car Cover", category: "Accessories", price: 129 },
//   { id: 5, name: "Portable Charger", category: "Charging", price: 299 },
// ];

// const ElectricCarProductsPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const [priceSort, setPriceSort] = useState("asc");

//   const filteredProducts = products
//     .filter(
//       (product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (categoryFilter === "All" || product.category === categoryFilter)
//     )
//     .sort((a, b) =>
//       priceSort === "asc" ? a.price - b.price : b.price - a.price
//     );

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Electric Car Products</h1>

//       <div className="mb-6 flex gap-4">
//         <Input
//           type="text"
//           placeholder="Search products..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="flex-grow"
//         />
//         <Select
//           value={categoryFilter}
//           onValueChange={setCategoryFilter}
//           className="w-40"
//         >
//           <Select.Trigger>
//             <Select.Value placeholder="Category" />
//           </Select.Trigger>
//           <Select.Content>
//             <Select.Item value="All">All Categories</Select.Item>
//             <Select.Item value="Charging">Charging</Select.Item>
//             <Select.Item value="Power">Power</Select.Item>
//             <Select.Item value="Accessories">Accessories</Select.Item>
//           </Select.Content>
//         </Select>
//         <Select value={priceSort} onValueChange={setPriceSort} className="w-40">
//           <Select.Trigger>
//             <Select.Value placeholder="Sort by Price" />
//           </Select.Trigger>
//           <Select.Content>
//             <Select.Item value="asc">Price: Low to High</Select.Item>
//             <Select.Item value="desc">Price: High to Low</Select.Item>
//           </Select.Content>
//         </Select>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProducts.map((product) => (
//           <Card
//             key={product.id}
//             className="transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
//           >
//             <CardContent className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//               <p className="text-gray-600 mb-2">Category: {product.category}</p>
//               <p className="text-lg font-bold">${product.price}</p>
//               <Button className="mt-4 w-full">Add to Cart</Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ElectricCarProductsPage;
////////////////

// import React, { useState } from "react";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";

// const products = [
//   { id: 1, name: "EV Charger", category: "Charging", price: 599 },
//   { id: 2, name: "Battery Pack", category: "Power", price: 3999 },
//   { id: 3, name: "Tire Set", category: "Accessories", price: 799 },
//   { id: 4, name: "Car Cover", category: "Accessories", price: 129 },
//   { id: 5, name: "Portable Charger", category: "Charging", price: 299 },
// ];

// const CatalogPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const [priceSort, setPriceSort] = useState("asc");

//   const filteredProducts = products
//     .filter(
//       (product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (categoryFilter === "All" || product.category === categoryFilter)
//     )
//     .sort((a, b) =>
//       priceSort === "asc" ? a.price - b.price : b.price - a.price
//     );

//   return (
//     <div className="container mx-auto p-4">
//       <Header />

//       <h1 className="text-3xl font-bold mb-6">Catalog</h1>

//       <div className="mb-6 flex gap-4">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="border p-2 flex-grow"
//         />
//         <select
//           value={categoryFilter}
//           onChange={(e) => setCategoryFilter(e.target.value)}
//           className="border p-2 w-40"
//         >
//           <option value="All">All Categories</option>
//           <option value="Charging">Charging</option>
//           <option value="Power">Power</option>
//           <option value="Accessories">Accessories</option>
//         </select>
//         <select
//           value={priceSort}
//           onChange={(e) => setPriceSort(e.target.value)}
//           className="border p-2 w-40"
//         >
//           <option value="asc">Price: Low to High</option>
//           <option value="desc">Price: High to Low</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="border p-4 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
//           >
//             <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//             <p className="text-gray-600 mb-2">Category: {product.category}</p>
//             <p className="text-lg font-bold">${product.price}</p>
//             <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CatalogPage;
/////////////////////////////////
// import React, { useState } from "react";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";

// const products = [
//   { id: 1, name: "EV Charger", category: "Charging", price: 599 },
//   { id: 2, name: "Battery Pack", category: "Power", price: 3999 },
//   { id: 3, name: "Tire Set", category: "Accessories", price: 799 },
//   { id: 4, name: "Car Cover", category: "Accessories", price: 129 },
//   { id: 5, name: "Portable Charger", category: "Charging", price: 299 },
// ];

// const CatalogPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const [priceSort, setPriceSort] = useState("asc");

//   const filteredProducts = products
//     .filter(
//       (product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (categoryFilter === "All" || product.category === categoryFilter)
//     )
//     .sort((a, b) =>
//       priceSort === "asc" ? a.price - b.price : b.price - a.price
//     );

//   return (
//     <div className="container mx-auto p-4">
//       <Header />

//       <h1 className="text-3xl font-bold mb-6">Catalog</h1>

//       <div className="mb-6 flex flex-col sm:flex-row gap-4">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="border p-2 flex-grow"
//         />
//         <select
//           value={categoryFilter}
//           onChange={(e) => setCategoryFilter(e.target.value)}
//           className="border p-2 w-full sm:w-40"
//         >
//           <option value="All">All Categories</option>
//           <option value="Charging">Charging</option>
//           <option value="Power">Power</option>
//           <option value="Accessories">Accessories</option>
//         </select>
//         <select
//           value={priceSort}
//           onChange={(e) => setPriceSort(e.target.value)}
//           className="border p-2 w-full sm:w-40"
//         >
//           <option value="asc">Price: Low to High</option>
//           <option value="desc">Price: High to Low</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="border p-4 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
//           >
//             <img
//               src={`/api/placeholder/${300}/${200}?text=${encodeURIComponent(
//                 product.name
//               )}`}
//               alt={product.name}
//               className="w-full h-48 object-cover mb-4 rounded"
//             />
//             <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//             <p className="text-gray-600 mb-2">Category: {product.category}</p>
//             <p className="text-lg font-bold">${product.price}</p>
//             <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CatalogPage;
///////////////////////////////////
// import React, { useState } from "react";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";
// import { FaSun, FaMoon } from "react-icons/fa";

// const products = [
//   { id: 1, name: "EV Charger", category: "Charging", price: 599 },
//   { id: 2, name: "Battery Pack", category: "Power", price: 3999 },
//   { id: 3, name: "Tire Set", category: "Accessories", price: 799 },
//   { id: 4, name: "Car Cover", category: "Accessories", price: 129 },
//   { id: 5, name: "Portable Charger", category: "Charging", price: 299 },
// ];

// const CatalogPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const [priceSort, setPriceSort] = useState("asc");
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const filteredProducts = products
//     .filter(
//       (product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (categoryFilter === "All" || product.category === categoryFilter)
//     )
//     .sort((a, b) =>
//       priceSort === "asc" ? a.price - b.price : b.price - a.price
//     );

//   return (
//     <div className={isDarkMode ? "dark" : ""}>
//       <div className="container mx-auto p-4 bg-white dark:bg-gray-900 dark:text-white">
//         <Header />

//         <button
//           onClick={() => setIsDarkMode(!isDarkMode)}
//           className="mb-6 p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded flex items-center gap-2"
//         >
//           {isDarkMode ? (
//             <FaSun className="text-yellow-500" />
//           ) : (
//             <FaMoon className="text-gray-400" />
//           )}
//           Toggle Dark Mode
//         </button>

//         <h1 className="text-3xl font-bold mb-6">Catalog</h1>

//         <div className="mb-6 flex flex-col sm:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border p-2 flex-grow dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//           />
//           <select
//             value={categoryFilter}
//             onChange={(e) => setCategoryFilter(e.target.value)}
//             className="border p-2 w-full sm:w-40 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//           >
//             <option value="All">All Categories</option>
//             <option value="Charging">Charging</option>
//             <option value="Power">Power</option>
//             <option value="Accessories">Accessories</option>
//           </select>
//           <select
//             value={priceSort}
//             onChange={(e) => setPriceSort(e.target.value)}
//             className="border p-2 w-full sm:w-40 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//           >
//             <option value="asc">Price: Low to High</option>
//             <option value="desc">Price: High to Low</option>
//           </select>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="border p-4 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700"
//             >
//               <img
//                 src={`/api/placeholder/${300}/${200}?text=${encodeURIComponent(
//                   product.name
//                 )}`}
//                 alt={product.name}
//                 className="w-full h-48 object-cover mb-4 rounded"
//               />
//               <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//               <p className="text-gray-600 dark:text-gray-400 mb-2">
//                 Category: {product.category}
//               </p>
//               <p className="text-lg font-bold">${product.price}</p>
//               <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default CatalogPage;
////////////////////////////
// import React, { useState } from "react";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";

// const products = [
//   { id: 1, name: "EV Charger", category: "Charging", price: 599 },
//   { id: 2, name: "Battery Pack", category: "Power", price: 3999 },
//   { id: 3, name: "Tire Set", category: "Accessories", price: 799 },
//   { id: 4, name: "Car Cover", category: "Accessories", price: 129 },
//   { id: 5, name: "Portable Charger", category: "Charging", price: 299 },
// ];

// const CatalogPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const [priceSort, setPriceSort] = useState("asc");
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

//   const filteredProducts = products
//     .filter(
//       (product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (categoryFilter === "All" || product.category === categoryFilter)
//     )
//     .sort((a, b) =>
//       priceSort === "asc" ? a.price - b.price : b.price - a.price
//     );

//   return (
//     <div className={isDarkMode ? "dark" : ""}>
//       <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

//       <div className="container mx-auto p-4 bg-white dark:bg-gray-900 dark:text-white">
//         <Header />

//         <h1 className="text-3xl font-bold mb-6">Catalog</h1>

//         <div className="mb-6 flex flex-col sm:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border p-2 flex-grow dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//           />
//           <select
//             value={categoryFilter}
//             onChange={(e) => setCategoryFilter(e.target.value)}
//             className="border p-2 w-full sm:w-40 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//           >
//             <option value="All">All Categories</option>
//             <option value="Charging">Charging</option>
//             <option value="Power">Power</option>
//             <option value="Accessories">Accessories</option>
//           </select>
//           <select
//             value={priceSort}
//             onChange={(e) => setPriceSort(e.target.value)}
//             className="border p-2 w-full sm:w-40 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//           >
//             <option value="asc">Price: Low to High</option>
//             <option value="desc">Price: High to Low</option>
//           </select>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="border p-4 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700"
//             >
//               <img
//                 src={`/api/placeholder/${300}/${200}?text=${encodeURIComponent(
//                   product.name
//                 )}`}
//                 alt={product.name}
//                 className="w-full h-48 object-cover mb-4 rounded"
//               />
//               <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//               <p className="text-gray-600 dark:text-gray-400 mb-2">
//                 Category: {product.category}
//               </p>
//               <p className="text-lg font-bold">${product.price}</p>
//               <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default CatalogPage;
///////////////////////////

// import React, { useState } from "react";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";

// const products = [
//   { id: 1, name: "EV Charger", category: "Charging", price: 599 },
//   { id: 2, name: "Battery Pack", category: "Power", price: 3999 },
//   { id: 3, name: "Tire Set", category: "Accessories", price: 799 },
//   { id: 4, name: "Car Cover", category: "Accessories", price: 129 },
//   { id: 5, name: "Portable Charger", category: "Charging", price: 299 },
//   { id: 6, name: "EV Charger", category: "Charging", price: 599 },
//   { id: 7, name: "Battery Pack", category: "Power", price: 3999 },
//   { id: 8, name: "Tire Set", category: "Accessories", price: 799 },
//   { id: 9, name: "Car Cover", category: "Accessories", price: 129 },
//   { id: 10, name: "Portable Charger", category: "Charging", price: 299 },
// ];

// const CatalogPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const [priceSort, setPriceSort] = useState("asc");
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   const filteredProducts = products
//     .filter(
//       (product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (categoryFilter === "All" || product.category === categoryFilter)
//     )
//     .sort((a, b) =>
//       priceSort === "asc" ? a.price - b.price : b.price - a.price
//     );

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />

//       <div className="container mx-auto p-4 bg-white dark:bg-gray-900 dark:text-white">
//         <h1 className="text-3xl font-bold mb-6">Catalog</h1>

//         <div className="mb-6 flex flex-col sm:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border p-2 flex-grow dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//           />
//           <select
//             value={categoryFilter}
//             onChange={(e) => setCategoryFilter(e.target.value)}
//             className="border p-2 w-full sm:w-40 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//           >
//             <option value="All">All Categories</option>
//             <option value="Charging">Charging</option>
//             <option value="Power">Power</option>
//             <option value="Accessories">Accessories</option>
//           </select>
//           <select
//             value={priceSort}
//             onChange={(e) => setPriceSort(e.target.value)}
//             className="border p-2 w-full sm:w-40 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//           >
//             <option value="asc">Price: Low to High</option>
//             <option value="desc">Price: High to Low</option>
//           </select>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="border p-4 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700"
//             >
//               <img
//                 src={`/api/placeholder/${300}/${200}?text=${encodeURIComponent(
//                   product.name
//                 )}`}
//                 alt={product.name}
//                 className="w-full h-48 object-cover mb-4 rounded"
//               />
//               <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//               <p className="text-gray-600 dark:text-gray-400 mb-2">
//                 Category: {product.category}
//               </p>
//               <p className="text-lg font-bold">${product.price}</p>
//               <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default CatalogPage;
///////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import Header from "../component/Header/Header";
// import Footer from "../component/Footer/Footer";

// const products = [
//   {
//     id: 1,
//     name: "EV Charger",
//     category: "Charging",
//     price: 599,
//     image: "/image/EV Charger.jpg",
//   },
//   {
//     id: 2,
//     name: "Battery Pack",
//     category: "Power",
//     price: 3999,
//     image: "/image/Portable Charger.jpg",
//   },
//   {
//     id: 3,
//     name: "Tire Set",
//     category: "Accessories",
//     price: 799,
//     image: "image/Tire 1.jpg",
//   },
//   {
//     id: 4,
//     name: "Car Cover",
//     category: "Accessories",
//     price: 129,
//     image: "image/Tire 1.jpg",
//   },
//   {
//     id: 5,
//     name: "Portable Charger",
//     category: "Charging",
//     price: 299,
//     image: "/image/Portable Charger.jpg",
//   },
//   {
//     id: 6,
//     name: "EV Charger",
//     category: "Charging",
//     price: 599,
//     image: "/image/EV Charger.jpg",
//   },
//   {
//     id: 7,
//     name: "Battery Pack",
//     category: "Power",
//     price: 3999,
//     image: "/image/Portable Charger.jpg",
//   },
//   {
//     id: 8,
//     name: "Tire Set",
//     category: "Accessories",
//     price: 799,
//     image: "image/Tire 1.jpg",
//   },
//   {
//     id: 9,
//     name: "Car Cover",
//     category: "Accessories",
//     price: 129,
//     image: "image/Tire 1.jpg",
//   },
//   {
//     id: 10,
//     name: "Portable Charger",
//     category: "Charging",
//     price: 299,
//     image: "/image/Portable Charger.jpg",
//   },
// ];

// const CatalogPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const [priceSort, setPriceSort] = useState("asc");
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   const filteredProducts = products
//     .filter(
//       (product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (categoryFilter === "All" || product.category === categoryFilter)
//     )
//     .sort((a, b) =>
//       priceSort === "asc" ? a.price - b.price : b.price - a.price
//     );

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />

//       <div className="container mx-auto p-4 bg-white dark:bg-gray-900 dark:text-white">
//         <h1 className="text-3xl font-bold mb-6">Catalog</h1>

//         <div className="mb-6 flex flex-col sm:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border p-2 flex-grow dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//           />
//           <select
//             value={categoryFilter}
//             onChange={(e) => setCategoryFilter(e.target.value)}
//             className="border p-2 w-full sm:w-40 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//           >
//             <option value="All">All Categories</option>
//             <option value="Charging">Charging</option>
//             <option value="Power">Power</option>
//             <option value="Accessories">Accessories</option>
//           </select>
//           <select
//             value={priceSort}
//             onChange={(e) => setPriceSort(e.target.value)}
//             className="border p-2 w-full sm:w-40 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//           >
//             <option value="asc">Price: Low to High</option>
//             <option value="desc">Price: High to Low</option>
//           </select>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="border p-4 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-48 object-cover mb-4 rounded"
//               />
//               <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//               <p className="text-gray-600 dark:text-gray-400 mb-2">
//                 Category: {product.category}
//               </p>
//               <p className="text-lg font-bold">${product.price}</p>
//               <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default CatalogPage;
/////////////////////////////
import React, { useState } from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

const products = [
  {
    id: 1,
    name: "EV Charger",
    category: "Charging",
    price: 599,
    image: "/image/EV Charger.jpg",
  },
  {
    id: 2,
    name: "Battery Pack",
    category: "Power",
    price: 3999,
    image: "/image/Portable Charger.jpg",
  },
  {
    id: 3,
    name: "Tire Set",
    category: "Accessories",
    price: 799,
    image: "image/Tire 1.jpg",
  },
  {
    id: 4,
    name: "Car Cover",
    category: "Accessories",
    price: 129,
    image: "image/Tire 1.jpg",
  },
  {
    id: 5,
    name: "Portable Charger",
    category: "Charging",
    price: 299,
    image: "/image/Portable Charger.jpg",
  },
  {
    id: 6,
    name: "EV Charger",
    category: "Charging",
    price: 599,
    image: "/image/EV Charger.jpg",
  },
  {
    id: 7,
    name: "Battery Pack",
    category: "Power",
    price: 3999,
    image: "/image/Portable Charger.jpg",
  },
  {
    id: 8,
    name: "Tire Set",
    category: "Accessories",
    price: 799,
    image: "image/Tire 1.jpg",
  },
  {
    id: 9,
    name: "Car Cover",
    category: "Accessories",
    price: 129,
    image: "image/Tire 1.jpg",
  },
  {
    id: 10,
    name: "Portable Charger",
    category: "Charging",
    price: 299,
    image: "/image/Portable Charger.jpg",
  },
];

const CatalogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceSort, setPriceSort] = useState("asc");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categoryFilter === "All" || product.category === categoryFilter)
    )
    .sort((a, b) =>
      priceSort === "asc" ? a.price - b.price : b.price - a.price
    );

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header handleDarkMode={toggleDarkMode} darkMode={darkMode} />
      {/* container mx-auto */}
      <div className="  bg-white dark:bg-gray-900 dark:text-white pt-28">
        <h1 className="text-3xl font-bold mb-6 pl-16">Catalog</h1>
        <div className="mb-6 flex flex-col sm:flex-row gap-4 px-16">
          {/* <div className="mb-6 flex flex-col sm:flex-row gap-4"> */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 flex-grow dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border p-2 w-full sm:w-40 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="All">All Categories</option>
            <option value="Charging">Charging</option>
            <option value="Power">Power</option>
            <option value="Accessories">Accessories</option>
          </select>
          <select
            value={priceSort}
            onChange={(e) => setPriceSort(e.target.value)}
            className="border p-2 w-full sm:w-40 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        <div className="px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Category: {product.category}
              </p>
              <p className="text-lg font-bold">${product.price}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CatalogPage;
/////////////////////////////////////
