import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <About />
      <Footer />
    </div>
  );
};

const About = () => {
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
      <h1 class="text-2xl font-bold mb-4">Welcome to Dream Look</h1>
      <p class="mb-4 ml-4">
        At Dream Look, we believe that clothing is not just about fashion, it's
        about expressing your unique style and personality. Established with a
        passion for men's fashion, we curate a diverse collection of shirts,
        pants, t-shirts, trousers, track pants, jean shirts, and jean pants,
        catering to every aspect of the modern man's wardrobe.
      </p>
      <br />
      <h1 class="text-2xl font-bold mb-4">Our Story</h1>
      <p class="mb-4 ml-4">
        Dream Look began with a simple vision: to provide high-quality men's
        clothing that combines style, comfort, and affordability. Founded by
        [Founder's Name], our store quickly grew from a humble idea to a
        thriving destination for fashion-forward individuals. With a keen eye
        for trends and a commitment to exceptional customer service, Dream Look
        has become synonymous with sophistication and style.
      </p>
      <br />
      <h1 class="text-2xl font-bold mb-4">Our Mission</h1>
      <p class="mb-4 ml-4">
        At Dream Look, our mission is to empower men to look and feel their best
        every day. We understand that clothing is more than just fabric – it's a
        form of self-expression. That's why we meticulously select each piece in
        our collection, ensuring that every garment reflects our dedication to
        quality craftsmanship and timeless design.
      </p>
      <br />
      <h1 class="text-2xl font-bold mb-4">What Sets Us Apart</h1>
      <p class="mb-4 ml-4">
        What sets Dream Look apart is our unwavering dedication to excellence.
        From the moment you step into our store or browse our online catalog,
        you'll experience the difference in our attention to detail and
        commitment to customer satisfaction. Whether you're searching for the
        perfect dress shirt for a formal occasion or a comfortable pair of jeans
        for everyday wear, we've got you covered.
      </p>
      <br />
      <h1 class="text-2xl font-bold mb-4">Our Promise</h1>
      <p class="mb-4 ml-4">
        When you shop at Dream Look, you can shop with confidence, knowing that
        each item in our collection has been thoughtfully curated to meet our
        high standards of quality and style. We stand behind the products we
        sell, and your satisfaction is our top priority. If you ever have any
        questions or concerns, our friendly and knowledgeable team is here to
        assist you every step of the way.
      </p>
      <br />
      <h1 class="text-2xl font-bold mb-4">Join the Dream Look Family</h1>
      <p class="mb-4 ml-4">
        We invite you to join the Dream Look family and experience the
        difference for yourself. Whether you're a fashion aficionado or simply
        looking to upgrade your wardrobe, we're here to help you discover your
        signature style. Thank you for choosing Dream Look – where every outfit
        tells a story.
      </p>
      <br />
      <br />
      <br />
    </div>
  );
};

export default AboutPage;
