import "./global.css";

import backImg from "./images/back.jpg";
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
import tIcon from "./images/treat.jpg";
import arrowFoward from "./images/arrow-forward.svg";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

function App() {
  const [touchStart, setTouchStart] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      inquiry: formData.inquiry,
    };

    emailjs
      .send(
        "service_2rnus3a",
        "template_rz2gy7q",
        templateParams,
        "8vDJIvwDwrs11aGxx"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({
            name: "",
            email: "",
            inquiry: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setFormData({
            name: "",
            email: "",
            inquiry: "",
          });
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

  const img1Array = [shark2, shark1, shark3];
  const img2Array = [water1, water2];
  const img3Array = [spider1, spider2];
  const img4Array = [princess1, princess2, princess3];
  const img5Array = [pinatas1, pinatas2];
  const img6Array = [flor1, flor2, flor3, flor4];
  const img7Array = [ramo1, ramo2];

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

  const [headerVisible, setHeaderVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [floralsVisible, setFloralsVisible] = useState(false);
  const [bouncyVisible, setBouncyVisible] = useState(false);
  const [pinaVisible, setPinaVisible] = useState(false);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchStart(touch.clientX);
  };

  const handleTouchEnd = (e, cardIndex) => {
    const touch = e.changedTouches[0];
    const diffX = touchStart - touch.clientX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swiped left
        console.log("Swipe Left");
        switch (cardIndex) {
          case 1:
            imgFowardArray1();
            break;
          case 2:
            imgFowardArray2();
            break;
          case 3:
            imgFowardArray3();
            break;
          case 4:
            imgFowardArray4();
            break;
          case 5:
            imgFowardArray5();
            break;
          case 6:
            imgFowardArray6();
            break;
          case 7:
            imgFowardArray7();
            break;
          default:
            break;
        }
      } else {
        // Swiped right
        console.log("Swipe Right");
        switch (cardIndex) {
          case 1:
            backImgArray1();
            break;
          case 2:
            backImgArray2();
            break;
          case 3:
            backImgArray3();
            break;
          case 4:
            backImgArray4();
            break;
          case 5:
            backImgArray5();
            break;
          case 6:
            backImgArray6();
            break;
          case 7:
            backImgArray7();
            break;
          default:
            break;
        }
      }
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
    touchStart,
    formData,
  ]);

  useEffect(() => {
    const timer1 = setTimeout(() => setHeaderVisible(true), 100); // Adjust delay as needed
    const timer2 = setTimeout(() => setHeroVisible(true), 300); // Adjust delay as needed

    // Cleanup timers if component unmounts
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    // Timing to make the Florals section visible after the component mounts
    const timer = setTimeout(() => setFloralsVisible(true), 300); // Adjust timing as needed
    const timer2 = setTimeout(() => setBouncyVisible(true), 1200); // Adjust timing as needed
    const timer3 = setTimeout(() => setPinaVisible(true), 2400); // Adjust timing as needed

    // Cleanup timer if the component unmounts
    return () => clearTimeout(timer, timer2, timer3);
  }, []);

  return (
    <div className="Page">
      <div className={`header ${headerVisible ? "visible" : ""}`}>
        <h1 className="header-title">Serra's Birthdays</h1>
      </div>
      <div className={`Hero ${heroVisible ? "visible" : ""}`}>
        <img src={backImg} alt="flowers" className="back-img"></img>
        <div className="hero-overlay"></div>
        <div className="About-us">
          <h4 className="about-us-title">Company Goal</h4>
          <p className="about-us-paragraph">
            Serra's Birthdays, a family-owned business since 2022, turns every
            event into a celebration with our range of services.
          </p>
          <p className="about-us-paragraph">
            I’m Kellen Serra, rooted in Nashville with a passion for festive
            creativity. Inspired by my mother’s handmade piñatas and a trip to
            Mexico, I founded Serra's Birthdays to infuse our events with
            vibrant, Mexican-inspired joy. We offer everything from balloon
            arches to bouncy houses, bringing cultural richness to every
            occasion. Thanks for considering us!"
          </p>
        </div>
        <button className="contact-btn" onClick={scrollToContact}>
          Contact Us Now
        </button>
      </div>
      <ul className="stripe">
        <li>Florals</li>
        <li>Bouncy Houses</li>
        <li>Berries and Treats</li>
        <li>Piñatas</li>
      </ul>
      <div className="Products">
        <div className="products-container">
          <h2
            className={`products-title slide-in-left pt1 ${
              floralsVisible ? "visible" : ""
            }`}
          >
            Florals
          </h2>
          <div
            className={`floral-container slide-in-left ${
              floralsVisible ? "visible" : ""
            }`}
          >
            <div className="card">
              <div
                className="card-container"
                onTouchStart={handleTouchStart}
                onTouchEnd={(e) => handleTouchEnd(e, 6)}
              >
                <div className="card-img-container">
                  <button className="btn-change-img" onClick={backImgArray6}>
                    <img
                      className="arrow-icon left-arrow"
                      src={arrowFoward}
                      alt="arrow back"
                    ></img>
                  </button>
                  <div className="dots-container">
                    <div
                      className={imgValue6 === 0 ? "dot-visible dot" : "dot"}
                    ></div>
                    <div
                      className={imgValue6 === 1 ? "dot-visible dot" : "dot"}
                    ></div>
                    <div
                      className={imgValue6 === 2 ? "dot-visible dot" : "dot"}
                    ></div>
                    <div
                      className={imgValue6 === 3 ? "dot-visible dot" : "dot"}
                    ></div>
                  </div>
                  <img
                    src={img6Array[imgValue6]}
                    className="card-img"
                    alt="florals"
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
              <div
                className="card-container"
                onTouchStart={handleTouchStart}
                onTouchEnd={(e) => handleTouchEnd(e, 7)}
              >
                <div className="card-img-container">
                  <div className="dots-container">
                    <div
                      className={imgValue7 === 0 ? "dot-visible dot" : "dot"}
                    ></div>
                    <div
                      className={imgValue7 === 1 ? "dot-visible dot" : "dot"}
                    ></div>
                  </div>
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
          <h2
            className={`products-title slide-in-left ${
              bouncyVisible ? "visible" : ""
            }`}
          >
            Bouncy Houses
          </h2>
          <div
            className={`bouncy-container slide-in-left ${
              bouncyVisible ? "visible" : ""
            }`}
          >
            <div className="bouncy-house-container-half">
              <div className="card">
                <div
                  className="card-container"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={(e) => handleTouchEnd(e, 1)}
                >
                  <div className="card-img-container">
                    <div className="dots-container">
                      <div
                        className={imgValue1 === 0 ? "dot-visible dot" : "dot"}
                      ></div>
                      <div
                        className={imgValue1 === 1 ? "dot-visible dot" : "dot"}
                      ></div>
                      <div
                        className={imgValue1 === 2 ? "dot-visible dot" : "dot"}
                      ></div>
                    </div>
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
                    <br></br>8 hours: $300 <br></br>
                    24 hours: $375<br></br>
                    Size: 18x32
                  </p>
                </div>
              </div>
              <div className="card">
                <div
                  className="card-container"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={(e) => handleTouchEnd(e, 2)}
                >
                  <div className="card-img-container">
                    <div className="dots-container">
                      <div
                        className={imgValue2 === 0 ? "dot-visible dot" : "dot"}
                      ></div>
                      <div
                        className={imgValue2 === 1 ? "dot-visible dot" : "dot"}
                      ></div>
                    </div>
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
                <div
                  className="card-container"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={(e) => handleTouchEnd(e, 3)}
                >
                  <div className="card-img-container">
                    <div className="dots-container">
                      <div
                        className={imgValue3 === 0 ? "dot-visible dot" : "dot"}
                      ></div>
                      <div
                        className={imgValue3 === 1 ? "dot-visible dot" : "dot"}
                      ></div>
                    </div>
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
                    <br></br>6 hours: $150<br></br>8 hours: $190<br></br>
                    24 hours: $220<br></br>
                    Size: 18x13
                  </p>
                </div>
              </div>
              <div className="card">
                <div
                  className="card-container"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={(e) => handleTouchEnd(e, 4)}
                >
                  <div className="card-img-container">
                    <div className="dots-container">
                      <div
                        className={imgValue4 === 0 ? "dot-visible dot" : "dot"}
                      ></div>
                      <div
                        className={imgValue4 === 1 ? "dot-visible dot" : "dot"}
                      ></div>
                      <div
                        className={imgValue4 === 2 ? "dot-visible dot" : "dot"}
                      ></div>
                    </div>
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
                    <br></br>4 hours: $80 <br></br>6 hours: $100<br></br>8
                    hours: $120<br></br>
                    24 hours: $140<br></br>
                    Size: 14x14
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2
            className={`products-title slide-in-left ${
              pinaVisible ? "visible" : ""
            }`}
          >
            Piñatas
          </h2>
          <div
            className={`pinatas-container slide-in-left ${
              pinaVisible ? "visible" : ""
            }`}
          >
            <div className="card">
              <div
                className="card-container"
                onTouchStart={handleTouchStart}
                onTouchEnd={(e) => handleTouchEnd(e, 5)}
              >
                <div className="card-img-container">
                  <div className="dots-container">
                    <div
                      className={imgValue5 === 0 ? "dot-visible dot" : "dot"}
                    ></div>
                    <div
                      className={imgValue5 === 1 ? "dot-visible dot" : "dot"}
                    ></div>
                  </div>
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
          <h2 className="products-title">Berries and Treats</h2>
          <div className="card">
            <div
              className="card-container"
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(e, 5)}
            >
              <div className="card-img-container">
                <img src={tIcon} className="card-img" alt="bouncy house"></img>
                <div className="overlay"></div>
              </div>
              <p className="card-description">
                Treats and custom chocolate covered stawberries for any event
                and occasion
              </p>
              <br></br>
              <p className="card-description">
                Order Here: instagram @Berriesbymiaa
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Contact-us" id="contact">
        <h4 className="contact-us-title">Contact Us</h4>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          ></input>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          ></input>

          <label htmlFor="inquiry">Product Inquiry</label>
          <textarea
            className="inquiry-input"
            type="text"
            id="inquiry"
            placeholder="inquiry"
            name="inquiry"
            value={formData.inquiry}
            onChange={handleChange}
            required
          ></textarea>

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
          <button
            className="social"
            onClick={(e) => {
              e.preventDefault();
              copyEmailToClipboard("SerrasBirthdays@gmail.com");
            }}
          >
            <img src={emailIcon} className="social-icon" alt="email icon"></img>
            <div className="white-background"></div>
          </button>
          <button
            className="social"
            onClick={(e) => {
              e.preventDefault();
              copyPhoneToClipboard("(615)810-1072");
            }}
          >
            <img src={phoneIcon} className="social-icon" alt="phone icon"></img>
            <div className="white-background"></div>
          </button>
        </div>
        <p>Copyright Serra&#8217;s Birthdays 2024</p>
      </footer>
    </div>
  );
}

export default App;
