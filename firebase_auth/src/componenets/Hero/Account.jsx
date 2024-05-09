import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Card from "../Card";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider";
import donationWebsiteImage from "../../assets/img5.jpeg";
import container2img1 from "../../assets/img5.jpeg";
import Footer from "../footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./Card.css"
import First from "../../assets/img13.jpeg";
import Second from "../../assets/img5.jpeg";
import Third from "../../assets/img11.jpeg";

const Account = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight;
      const element = document.querySelector(".pandimg");
      const top = element.getBoundingClientRect().top;

      if (top < bottom) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init();
  }, []);

  const ngoData = [
    {
      name: "Education",
      desc: "we help children in education",
      img: First,
    },
    {
      name: "Food",
      desc: "we help in providing food",
      img: Second,
    },
    {
      name: "Orphanage",
      desc: "we help children who lost families",
      img: Third,
    },
  ];

  return (
    <>
      <div className="container">
        <Navbar />
        <Slider />

        <div className="container2 bg-custom-clip">
          <div className={`pandimg ${isVisible ? "visible" : ""}`}>
            <h1 className="heading1" data-aos="fade-up" data-aos-delay="0">
              About Helping Hand
            </h1>
            <p className="para" data-aos="fade-up" data-aos-delay="300">
              At Helping Hand, we serve as a crucial bridge between
              compassionate individuals and impactful NGOs. Our platform
              provides a centralized space where diverse NGOs working towards
              various causes, including healthcare, education, orphanage
              support, and more, come together. By offering this comprehensive
              platform, we streamline the donation process, making it easier for
              donors to support multiple causes under one roof. With Helping
              Hand, you no longer need to search for different NGOs with
              specific goals. Instead, you'll find a wide array of NGOs
              addressing various needs, all in one place. Join us in our mission
              to make giving back more accessible and impactful for everyone.
            </p>
            <img
              src="https://www.narayanseva.org/wp-content/uploads/2023/01/narayan-children-academy-banner2.webp"
              alt=""
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>
          <div className="grid-container">
            {" "}
            {/* data-aos="fade-up" data-aos-delay="300"*/}
            <div className="text">
              <h2
                className="heading2 transition-opacity duration-1000"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                Support a Cause Today
              </h2>
              <p className="para" data-aos="fade-right" data-aos-delay="400">
                We believe in the power of collective action to make a positive
                impact on society. By supporting our cause today, you're joining
                a community dedicated to creating meaningful change in the lives
                of those in need. Whether it's providing education to
                underprivileged children, ensuring access to healthcare for
                vulnerable communities, or empowering individuals with
                disabilities, your contribution enables us to continue our vital
                work and uplift those who need it most. Together, we can make a
                difference and build a brighter future for all. Join us in
                making a difference today.
              </p>
            </div>
            <div className="image" data-aos="fade-left" data-aos-delay="400">
              <img src={donationWebsiteImage} alt="Donation Website" />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="flex justify-center p-2 gap-x-20 max-w-screen-xl mx-auto m-10"
        >
          {ngoData.map((data, index) => (
            <div
              key={index}
              className="card-container"
            >
              <div className="card overflow-hidden transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
                <Card
                  nameofNgo={data.nameofNgo}
                  desc={data.desc}
                  image={data.img}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/fundraiser">
            <button className="fundbtn m-3 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
              fundraiser page &rarr;
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
