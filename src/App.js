import React from "react";
import logo from "./logo.png"
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
        <img src={logo} width="100rem"></img>
        </div>
        <div className="headertop">
        <nav>
          <a href="#">HOME</a>
          <a href="#">About Us</a>
          <a href="#">Subscribe</a>
        </nav>

        <div className="profile">
          <button>👤</button>
          <button>❓</button>
        </div>
        </div>
    
      </header>

      {/* Main Content */}
      <main>
        {/* Back Button */}

          <button className="back-button">←</button>

        {/* Title Section */}
        <div className="title">
          <div className="circle-icon"></div>
          <h1>Products</h1>
        </div>

        {/* Search Section */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-button">🔍</button>
          <button className="add-button">Add</button>
        </div>

        {/* Table Section */}
        <table className="product-table">
          <thead>
            <tr>
              <th>Productname</th>
              <th>Productid</th>
              <th>ProductCode</th>
              <th>Description</th>
              <th>Buy</th>
            </tr>
          </thead>
          <tbody>
            {/* Empty rows */}
            {[...Array(3)].map((_, index) => (
              <tr key={index}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button className="add-button">+</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Footer Section */}
      <footer>
        <button className="contact-button">Contact Us</button>
      </footer>
    </div>
  );
}

export default App;