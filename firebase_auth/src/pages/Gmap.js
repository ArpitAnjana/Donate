import React, { useState } from 'react';

import NavbarComponent from '../componenets/Navbar/Navbar';
import axios from "axios";
import sewa from "../assets/swd.jpeg";
// import logo from "../assets/logo.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Gmap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section1Data: [],
      section2Data: [],
      section3Data: [],
      section4Data: [],
      section5Data: []
    };
  }

  componentDidMount() {
    // Initialize AOS
    AOS.init();

    // Fetch data for each section here
    this.fetchSection1Data();
    this.fetchSection2Data();
    this.fetchSection3Data();
    this.fetchSection4Data();
    this.fetchSection5Data();
  }

  fetchSection1Data() {
    // Fetch data for section 1
  }

  fetchSection2Data() {
    // Fetch data for section 2
  }

  fetchSection3Data() {
    // Fetch data for section 3
  }

  fetchSection4Data() {
    // Fetch data for section 4
  }

  fetchSection5Data() {
    // Fetch data for section 5
  }


  render() {
    return (

      <>
        <NavbarComponent />
        <div className="Appp">

          <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl  text-center">TOP NGO'S <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-cyan-400  text-center p">OF BHOPAL</span> </h1>
          <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center">Inspire, Empower, Transform</p>


          {/* Render your sections here */}
          <div className="section mb-8 p-8  rounded-lg border-4 border-blue-500 bg-rgb(51, 51, 51)" data-aos="fade-up" >
            <h2 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-cyan-400  text-center">Centre for Advanced Research and Development</h2>
            <div className="flex">
              <div className="w-1/3">
                <video className="video " data-aos="fade-right" src="https://video.wixstatic.com/video/d84369_b2a79dc5da3d4eba810bdb764b0f0da1/480p/mp4/file.mp4" controls autoPlay loop muted />
              </div>
              <div className="section-text w-2/6 pr-4 p-4 ">
                <p className="text-white">Established in 1992, the Centre for Advanced Research and Development (CARD) is a non-profit organization dedicated to promoting sustainable development worldwide. Through innovative and participatory approaches, CARD engages local communities in projects spanning agriculture, health, education, water, sanitation, and renewable energy. Their initiatives aim to enhance livelihoods, empower communities, and foster resource management. Committed to advancing knowledge, CARD conducts research on pressing issues like climate change and biodiversity, while offering training programs to build capacity for sustainable development efforts.</p>
              </div>
              <div className="w-2/6" data-aos="fade-left">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.2535594606447!2d77.46434999678954!3d23.19742830000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c41624555559f%3A0x319872a05d57a118!2sCentre%20for%20Advanced%20Research%20%26%20Development!5e0!3m2!1sen!2sin!4v1715200153999!5m2!1sen!2sin" width="500" height="280" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

              </div>
            </div>
          </div>
          <div className="section mb-8 p-8 rounded-lg border-4 border-blue-500 bg-rgb(51, 51, 51)" data-aos="fade-up">
            <h2 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-cyan-400  text-center">IDEAL Global Social and Welfare Organization</h2>
            <div className="flex">
              <div className="w-1/3">
                <img className="swami" data-aos="fade-right" src="https://arushi-india.org/images/about-arushi.jpg" alt="Logo" />
              </div>
              <div className="section-text w-2/6 pr-4 p-4 ">
                <p className="text-white">IDEAL Global Social and Welfare Organization, a non-profit based in India, champions social welfare, education, healthcare, and environmental protection. Their impactful initiatives include providing scholarships and educational support to underprivileged students, empowering women through education, organizing free medical camps, supplying medical equipment to hospitals, and promoting health awareness. Environmental efforts encompass tree plantation, waste management, and eco-friendly practices. Bolstered by dedicated volunteers, IDEAL collaborates with governments, organizations, and individuals to create sustainable communities and foster positive change in people's lives and the environment.</p>
              </div>
              <div className="w-2/6" data-aos="fade-left">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.6043680430244!2d77.43281117509811!3d23.221084579035107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c424ff0000001%3A0xf79979ce260d1220!2sIDEAL%20-%20Global%2C%20Social%20and%20Welfare%20Organization!5e0!3m2!1sen!2sin!4v1715201032207!5m2!1sen!2sin" width="500" height="350" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

          <div className="section mb-8 section mb-8 p-8 rounded-lg border-4 border-blue-500 bg-rgb(51, 51, 51)" data-aos="fade-up">
            <h2 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-cyan-400  text-center"> Sewa Bharti</h2>
            <div className="flex text-white">
              <div className="w-1/3 ">

                <img className='seva' data-aos="fade-right" src="https://www.sewabhartidelhi.org/images/logo.webp" />
              </div>
              <div className="section-text w-2/6 pr-4 p-4 ">
                <p>Founded in 1989, Sewa Bharti is a voluntary organization dedicated to serving India's underprivileged communities. Operating across various states, it offers education, healthcare, and vocational training, focusing on marginalized groups like slum dwellers and street children. With a robust education program spanning schools and centers, it provides quality education and vocational training to empower youth economically. Additionally, through healthcare initiatives like mobile medical vans, it delivers essential services to remote areas. Sewa Bharti's disaster relief efforts and rehabilitation services further underline its commitment to community welfare. Funded primarily by donations, the organization collaborates with volunteers and community leaders to tailor programs to local needs..</p>
              </div>
              <div className="w-2/6" data-aos="fade-left">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.438619911381!2d77.34533347510059!3d23.299839478980306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c676ce0696dab%3A0x2a676c6ae7b4359c!2sSewa%20Bharti%20Gandhi%20Ashram%20Handicapped%20Children%20Hostel!5e0!3m2!1sen!2sin!4v1715201520332!5m2!1sen!2sin" width="500" height="350" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>


          <div className="section mb-8 section mb-8 p-8 rounded-lg border-4 border-blue-500 bg-rgb(51, 51, 51) " data-aos="fade-up">
            <h2 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-cyan-400  text-center">Swami Vivekanan Shiksha Samiti</h2>
            <div className="flex">
              <div className="w-1/3">
                <img className='swami' data-aos="fade-right" src={sewa} alt="Logo" />
              </div>
              <div className="section-text w-2/6 pr-4 p-4   text-white">
                <p>Swami Vivekananda Shiksha Samiti, a non-profit organization, is committed to enhancing education and social welfare in India, particularly in rural and economically disadvantaged regions. Inspired by Swami Vivekananda's belief in education's transformative power, the organization strives to ensure every child receives quality education irrespective of background. Through establishing schools across the country, they provide educational opportunities to children from marginalized communities, empowering them with essential skills for a brighter future.</p>
              </div>
              <div className="w-2/6" data-aos="fade-left">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7019693837656!2d77.45450647509796!3d23.217529479037637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4231be29a3bf%3A0x271fcdc97ce5de54!2sSwami%20Vivekanand%20Shiksha%20Samiti!5e0!3m2!1sen!2sin!4v1715201652539!5m2!1sen!2sin" width="500" height="350" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>


          <div className="section mb-8 section mb-8 p-8 rounded-lg border-4 border-blue-500 bg-rgb(51, 51, 51)" data-aos="fade-up">
            <h2 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-cyan-400  text-center">Aisect</h2>
            <div className="flex">
              <div className="w-1/3">
                <video className="video " data-aos="fade-right" src="https://video.wixstatic.com/video/d84369_b2a79dc5da3d4eba810bdb764b0f0da1/480p/mp4/file.mp4" controls autoPlay loop muted />
              </div>
              <div className="section-text w-2/6 pr-4 p-4  text-white">
                <p>AISECT, headquartered in Bhopal, India, and founded in 1985 by Mr. Santosh Kumar Choubey, is a renowned education and skill development organization dedicated to serving the underprivileged sections of society. Operating from its sprawling 10-acre campus, AISECT Bhopal offers a wide array of undergraduate and postgraduate courses in disciplines like engineering, management, law, and education. Additionally, it provides vocational training programs aimed at equipping youth from rural and semi-urban areas with essential skills such as computer hardware and software, mobile phone repairing, beauty and wellness, hospitality, and retail management.</p>
              </div>
              <div className="w-2/6" data-aos="fade-left">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29347.782168606383!2d77.4390460743164!3d23.15293899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43e789529835%3A0x386f5e44d588eb5e!2sAisect%20Learn%20-%20Online%20e-Learning%20Platform!5e0!3m2!1sen!2sin!4v1715201876385!5m2!1sen!2sin" width="500" height="280" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

        </div>
      </>
    );
  }
}

export default Gmap;