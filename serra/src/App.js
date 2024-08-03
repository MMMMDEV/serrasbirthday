import "./global.css";

import vector from "./images/Vector.png";
import emailIcon from "./images/email.png";
import facebookIcon from "./images/facebook.png";
import instagramIcon from "./images/instagram.png";
import phoneIcon from "./images/phone.png";
import shark1 from "./products/sharks-1.jpg";
import shark2 from "./products/sharks-2.jpg";
import shark3 from "./products/sharks-3.jpg";
import water1 from "./products/water-1.jpg";
import water2 from "./products/water-2.jpg";
import spider1 from "./products/spider-1.jpg";
import spider2 from "./products/spider-2.jpg";
import princess1 from "./products/princess-1.jpg";
import princess2 from "./products/princess-2.jpg";
import princess3 from "./products/princess-3.jpg";
import pinatas1 from "./products/pinatas-1.jpg";
import pinatas2 from "./products/pinatas-2.jpg";
import flor1 from "./products/flor-1.jpg";
import flor2 from "./products/flor-2.jpg";
import flor3 from "./products/flor-3.jpg";
import flor4 from "./products/flor-4.jpg";
import ramo1 from "./products/ramo-1.jpg";
import ramo2 from "./products/ramo-2.jpg";
import arrowFoward from "./images/arrow-forward.svg";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

function App() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          formRef.current.reset(); // Clear the form after sending
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  const copyEmailToClipboard = (email) => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email address copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy email address: ", err);
      });
  };

  const copyPhoneToClipboard = (phoneNumber) => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert("Phone number copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy phone number: ", err);
      });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const img1Array = [shark1, shark2, shark3];
  const img2Array = [water1, water2];
  const img3Array = [spider1, spider2];
  const img4Array = [princess1, princess2, princess3];
  const img5Array = [pinatas1, pinatas2];
  const img6Array = [flor1, flor2, flor3, flor4];
  const img7Array = [ramo2, ramo1];

  const [imgValue1, setImgValue1] = useState(0);
  const [imgValue2, setImgValue2] = useState(0);
  const [imgValue3, setImgValue3] = useState(0);
  const [imgValue4, setImgValue4] = useState(0);
  const [imgValue5, setImgValue5] = useState(0);
  const [imgValue6, setImgValue6] = useState(0);
  const [imgValue7, setImgValue7] = useState(0);

  const backImgArray1 = () => {
    if (imgValue1 > 0) {
      setImgValue1(imgValue1 - 1);
    } else if (imgValue1 === 0) {
      return;
    }
  };

  const imgFowardArray1 = () => {
    if (imgValue1 <= 1) {
      setImgValue1(imgValue1 + 1);
    } else if (imgValue1 === img1Array.length) {
      return;
    }
  };

  const backImgArray2 = () => {
    if (imgValue2 > 0) {
      setImgValue2(imgValue2 - 1);
    } else if (imgValue2 === 0) {
      return;
    }
  };

  const imgFowardArray2 = () => {
    if (imgValue2 < 1) {
      setImgValue2(imgValue2 + 1);
    } else if (imgValue2 === img2Array.length) {
      return;
    }
  };

  const backImgArray3 = () => {
    if (imgValue3 > 0) {
      setImgValue3(imgValue3 - 1);
    } else if (imgValue3 === 0) {
      return;
    }
  };

  const imgFowardArray3 = () => {
    if (imgValue3 < 1) {
      setImgValue3(imgValue3 + 1);
    } else if (imgValue3 === img3Array.length) {
      return;
    }
  };

  const backImgArray4 = () => {
    if (imgValue4 > 0) {
      setImgValue4(imgValue4 - 1);
    } else if (imgValue4 === 0) {
      return;
    }
  };

  const imgFowardArray4 = () => {
    if (imgValue4 <= 1) {
      setImgValue4(imgValue4 + 1);
    } else if (imgValue4 === img4Array.length) {
      return;
    }
  };

  const backImgArray5 = () => {
    if (imgValue5 > 0) {
      setImgValue5(imgValue5 - 1);
    } else if (imgValue5 === 0) {
      return;
    }
  };

  const imgFowardArray5 = () => {
    if (imgValue5 < 1) {
      setImgValue5(imgValue5 + 1);
    } else if (imgValue5 === img5Array.length) {
      return;
    }
  };

  const backImgArray6 = () => {
    if (imgValue6 > 0) {
      setImgValue6(imgValue6 - 1);
    } else if (imgValue6 === 0) {
      return;
    }
  };

  const imgFowardArray6 = () => {
    if (imgValue6 <= 2) {
      setImgValue6(imgValue6 + 1);
    } else if (imgValue6 === img6Array.length) {
      return;
    }
  };

  const backImgArray7 = () => {
    if (imgValue7 > 0) {
      setImgValue7(imgValue7 - 1);
    } else if (imgValue7 === 0) {
      return;
    }
  };

  const imgFowardArray7 = () => {
    if (imgValue7 < 1) {
      setImgValue7(imgValue7 + 1);
    } else if (imgValue7 === img7Array.length) {
      return;
    }
  };

  useEffect(() => {}, [
    imgValue1,
    imgValue2,
    imgValue3,
    imgValue4,
    imgValue5,
    imgValue6,
    imgValue7,
  ]);
  return (
    <div className="Page">
      <div className="header">
        <h1 className="header-title">Serra's Birthdays</h1>
      </div>
      <div className="Hero">
        <img src={vector} className="hero-vector" alt="vector"></img>
        <h2 className="hero-title">We bring your vision to life</h2>
        <button className="contact-btn" onClick={scrollToContact}>
          Contact Us Now
        </button>
      </div>
      <div className="Products">
        <div className="products-container">
          <h2 className="products-title">Florals</h2>
          <div className="floral-container">
            <div className="card">
              <div className="card-container">
                <div className="card-img-container">
                  <button className="btn-change-img" onClick={backImgArray6}>
                    <img
                      className="arrow-icon left-arrow"
                      src={arrowFoward}
                      alt="arrow back"
                    ></img>
                  </button>
                  <img
                    src={img6Array[imgValue6]}
                    className="card-img"
                    alt="bouncy house"
                  ></img>
                  <div className="overlay"></div>
                  <button
                    className="btn-change-img"
                    type="button"
                    onClick={imgFowardArray6}
                  >
                    <img
                      className="arrow-icon"
                      src={arrowFoward}
                      alt="arrow back"
                    ></img>
                  </button>
                </div>
                <h3 className="card-title">Custom Bouquets</h3>
                <p className="card-description">
                  A mix of beautiful flowers based on the color scheme of your
                  choice
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-container">
                <div className="card-img-container">
                  <button className="btn-change-img" onClick={backImgArray7}>
                    <img
                      className="arrow-icon left-arrow"
                      src={arrowFoward}
                      alt="arrow back"
                    ></img>
                  </button>
                  <img
                    src={img7Array[imgValue7]}
                    className="card-img"
                    alt="bouncy house"
                  ></img>
                  <div className="overlay"></div>
                  <button
                    className="btn-change-img"
                    type="button"
                    onClick={imgFowardArray7}
                  >
                    <img
                      className="arrow-icon"
                      src={arrowFoward}
                      alt="arrow back"
                    ></img>
                  </button>
                </div>
                <h3 className="card-title">Ramo Buchon</h3>
                <p className="card-description">
                  A trendy style of huge bouquets made of roses, these bouquets
                  are over top customized with all sorts of things such as LEDS,
                  Lights, glitter, chocolates, or even money.
                </p>
              </div>
            </div>
          </div>
          <h2 className="products-title">Bouncy Houses</h2>
          <div className="bouncy-container">
            <div className="bouncy-house-container-half">
              <div className="card">
                <div className="card-container">
                  <div className="card-img-container">
                    <button className="btn-change-img" onClick={backImgArray1}>
                      <img
                        className="arrow-icon left-arrow"
                        src={arrowFoward}
                        alt="arrow back"
                      ></img>
                    </button>
                    <img
                      src={img1Array[imgValue1]}
                      className="card-img"
                      alt="bouncy house"
                    ></img>
                    <div className="overlay"></div>
                    <button
                      className="btn-change-img"
                      type="button"
                      onClick={imgFowardArray1}
                    >
                      <img
                        className="arrow-icon"
                        src={arrowFoward}
                        alt="arrow back"
                      ></img>
                    </button>
                  </div>
                  <h3 className="card-title">Shark Slide</h3>
                  <p className="card-description">
                    Our best-seller, with 3D sharks and dolphins, realistic
                    graphics, and a wide water slide fitting up to 2 people at a
                    time but that is not all a 9x10 pool fitting up to 10 people
                    <br></br>
                    <br></br>8 hours: $200 <br></br>
                    24 hours: $375<br></br>
                    Size: 18x32
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-container">
                  <div className="card-img-container">
                    <button className="btn-change-img" onClick={backImgArray2}>
                      <img
                        className="arrow-icon left-arrow"
                        src={arrowFoward}
                        alt="arrow back"
                      ></img>
                    </button>
                    <img
                      src={img2Array[imgValue2]}
                      className="card-img"
                      alt="bouncy house"
                    ></img>
                    <div className="overlay"></div>
                    <button
                      className="btn-change-img"
                      type="button"
                      onClick={imgFowardArray2}
                    >
                      <img
                        className="arrow-icon"
                        src={arrowFoward}
                        alt="arrow back"
                      ></img>
                    </button>
                  </div>
                  <h3 className="card-title">Beach Paradise</h3>
                  <p className="card-description">
                    Our fun and fasy slide with a small pool fits up to 5
                    people! This water slide will give you the perfect summer
                    experience.
                    <br></br>
                    <br></br>8 hours: $200<br></br>
                    24 hours: $250<br></br>
                    Size: 13x26
                  </p>
                </div>
              </div>
            </div>
            <div className="bouncy-house-container-half">
              <div className="card">
                <div className="card-container">
                  <div className="card-img-container">
                    <button className="btn-change-img" onClick={backImgArray3}>
                      <img
                        className="arrow-icon left-arrow"
                        src={arrowFoward}
                        alt="arrow back"
                      ></img>
                    </button>
                    <img
                      src={img3Array[imgValue3]}
                      className="card-img"
                      alt="bouncy house"
                    ></img>
                    <div className="overlay"></div>
                    <button
                      className="btn-change-img"
                      type="button"
                      onClick={imgFowardArray3}
                    >
                      <img
                        className="arrow-icon"
                        src={arrowFoward}
                        alt="arrow back"
                      ></img>
                    </button>
                  </div>
                  <h3 className="card-title">Spidey Bounce House</h3>
                  <p className="card-description">
                    This is a bouncy house that your kids will absolutely love.
                    <br></br>
                    <br></br>6 hours: $150<br></br>8 hours: $180<br></br>
                    24 hours: $200<br></br>
                    Size: 18x13
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-container">
                  <div className="card-img-container">
                    <button className="btn-change-img" onClick={backImgArray4}>
                      <img
                        className="arrow-icon left-arrow"
                        src={arrowFoward}
                        alt="arrow back"
                      ></img>
                    </button>
                    <img
                      src={img4Array[imgValue4]}
                      className="card-img"
                      alt="bouncy house"
                    ></img>
                    <div className="overlay"></div>
                    <button
                      className="btn-change-img"
                      type="button"
                      onClick={imgFowardArray4}
                    >
                      <img
                        className="arrow-icon"
                        src={arrowFoward}
                        alt="arrow back"
                      ></img>
                    </button>
                  </div>
                  <h3 className="card-title">Magical Carousel</h3>
                  <p className="card-description">
                    Have you ever seen a bouncy house that is beautiful? only
                    with Serra's birthdays can you book this creative and
                    artistic unit.
                    <br></br>
                    <br></br>
                    Size: 14x14
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="products-title">Piñatas</h2>
          <div className="pinatas-container">
            <div className="card">
              <div className="card-container">
                <div className="card-img-container">
                  <button className="btn-change-img" onClick={backImgArray5}>
                    <img
                      className="arrow-icon left-arrow"
                      src={arrowFoward}
                      alt="arrow back"
                    ></img>
                  </button>
                  <img
                    src={img5Array[imgValue5]}
                    className="card-img"
                    alt="bouncy house"
                  ></img>
                  <div className="overlay"></div>
                  <button
                    className="btn-change-img"
                    type="button"
                    onClick={imgFowardArray5}
                  >
                    <img
                      className="arrow-icon"
                      src={arrowFoward}
                      alt="arrow back"
                    ></img>
                  </button>
                </div>
                <p className="card-description">
                  What's better than cake at a party? A piñata, of course! We
                  bring your vision to life with our custom-made creations,
                  meticulously handcrafted to perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="About-us">
        <h4 className="about-us-title">Company Goal</h4>
        <p className="about-us-paragraph">
          Serra&#8217;s Birthdays, a family-owned business since 2022,
          specializes in making every event feel extraordinary. From bouncy
          houses to floral arrangements, we bring your vision to life with joy,
          celebration, and excitement.
        </p>
        <p className="about-us-paragraph">
          Kellen Serra: With deep roots in Nashville and a lifelong passion for
          celebrations, I've been immersed in this field for many years. Raised
          by a mother who supported our family by crafting handmade piñatas, I
          inherited her love for creativity and party decor. Inspired by a
          transformative trip to Mexico, I founded 'Serra&#8217;s Birthdays' to
          bring the vibrant essence of Mexican celebrations to Nashville. We
          offer a range of creative services, from balloon arches to bouncy
          houses, ensuring every event reflects the joy and richness of our
          culture. Thank you for considering us for your special occasions.
        </p>
      </div>
      <div className="Contact-us" id="contact">
        <h4 className="contact-us-title">Contact Us</h4>
        <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="value" required></input>
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="value" required></input>
          </div>
          <div className="input-container">
            <label htmlFor="inquiry">Product Inquiry</label>
            <textarea
              className="inquiry-input"
              type="text"
              id="inquiry"
              placeholder="value"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <h5 className="contact-info">
            SerrasBirthdays@gmail.com <br></br> (615)810-1072
          </h5>
        </form>
      </div>
      <footer className="Footer">
        <div className="socials">
          <a
            href="https://www.instagram.com/serrasbirthdays/"
            className="social"
          >
            <img
              src={instagramIcon}
              className="social-icon"
              alt="instagram icon"
            ></img>
            <div className="white-background"></div>
          </a>
          <a href="https://www.facebook.com/SerrasBirthdays" className="social">
            <img
              src={facebookIcon}
              className="social-icon"
              alt="facebook icon"
            ></img>
            <div className="white-background"></div>
          </a>
          <a
            href="#"
            className="social"
            onClick={(e) => {
              e.preventDefault();
              copyEmailToClipboard("SerrasBirthdays@gmail.com");
            }}
          >
            <img src={emailIcon} className="social-icon" alt="email icon"></img>
            <div className="white-background"></div>
          </a>
          <a
            href="#"
            className="social"
            onClick={(e) => {
              e.preventDefault();
              copyPhoneToClipboard("(615)810-1072");
            }}
          >
            <img src={phoneIcon} className="social-icon" alt="phone icon"></img>
            <div className="white-background"></div>
          </a>
        </div>
        <p>Copyright Serra&#8217;s Birthdays 2024</p>
      </footer>
    </div>
  );
}

export default App;
