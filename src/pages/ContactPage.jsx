import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};

const Contact = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div class="mt-0 px-4">
      <br />
      <br />
      <br />
      <br />
      <h1 class="text-2xl font-bold mb-4 ml-20">Phone Number : </h1>
      <p class="mb-4 ml-24">+91 99650-88654</p>
      <br />
      <h1 class="text-2xl font-bold mb-4 ml-20">Email -ID : </h1>
      <p class="mb-4 ml-24">kumardreamlook1@gmail.com</p>
      <br />
      <h1 class="text-2xl font-bold mb-4 ml-20">Address : </h1>
      <p class="mb-4 ml-24">
        204,Uzhavu Vanika Valagam,Anna Nagar,Arachalur,Erode - 638101
      </p>
      <br />
      <br />
      <br />
    </div>
  );
};

export default ContactPage;
