import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './mainstyle.css';

function ContactUsPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/contact-us', { fullName, email, message });
    setFullName('');
    setEmail('');
    setMessage('');
    navigate('/');
  };

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };


  return (
    <>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top">
        <div className="container">
          <img src="img/logo1.png" alt="Logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isNavbarOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span><i id="bar" className="fas fa-solid fa-bars"></i></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <a className="nav-link" href="mainindex.html">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="shop.html">Shop</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">Contact Us</a>
            </li>

            <li className="nav-item">
              <span className="material-symbols-outlined">search</span>
              <span className="material-symbols-outlined">shopping_bag</span>
            </li>

          </ul>

        </div>
      </div>
      </nav>

      <section class="contact">
        <div class="content">
          <h2 class="contact-title">Contact Us</h2>
          <p>get in touch with us</p>
        </div>

        <div class="contactform">
          <form onSubmit={handleSubmit}>
            <h2>Send Messages</h2>
            <div class="inputbox">
              <input type="text" name="" required value={fullName} onChange={(e) => setFullName(e.target.value)}/>
              <span>Full Name</span>
            </div>

            <div class="inputbox">
              <input type="text" name="" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <span>Email</span>
            </div>

            <div class="inputbox">
              <textarea required value={message} onChange={(e) => setMessage(e.target.value)} />
              <span>Type Your Message</span>
            </div>

            <div class="inputbox">
              <input type="submit" name="" value="send" />
            </div>

          </form>
        </div>

      </section>
    </div>
    
    <footer className="mt-5 py-5">
      <div className="row container mx-auto pt-5">
        <div className="footer-one col-lg-3 col-md-6 col-12">
          <img src="img/logo2.png" alt="" />
          <p className="pt-3">JHSKDHJSHDJSDKSHDKSHDKJ<br/></p>
        </div>

        <div className="footer-one col-lg-3 col-md-6 col-12">
          <h5 className="pb-2">Featured</h5>
          <ul className="text-uppercase list-unstyled">
            <li><a href="#">men</a></li>
            <li><a href="#">women</a></li>
            <li><a href="#">boys</a></li>
            <li><a href="#">girls</a></li>
            <li><a href="#">new arrival</a></li>
            <li><a href="#">shoes</a></li>
            <li><a href="#">clothes</a></li>
          </ul>
        </div>

        <div className="footer-one col-lg-3 col-md-6 col-12">
          <h5 className="pb-2">Contact us</h5>

          <div>
            <h4 className="text-uppercase">Address</h4>
            <p>123 Street name , city us</p>
          </div>

          <div>
            <h4 className="text-uppercase">Phone</h4>
            <p>+91 123456789</p>
          </div>

          <div>
            <h4 className="text-uppercase">Email</h4>
            <p>rimogarments.gmail.com</p>
          </div>

        </div>
        <div className="footer-one col-lg-3 col-md-6 col-12">
          <h5 className="pb-2">Instagram</h5>
          <div className="row">
            <img className="img-fluid w-25 h-100 m-2" src="img/insta/1.jpg" alt="" />
            <img className="img-fluid w-25 h-100 m-2" src="img/insta/2.jpg" alt="" />
            <img className="img-fluid w-25 h-100 m-2" src="img/insta/3.jpg" alt="" />
            <img className="img-fluid w-25 h-100 m-2" src="img/insta/4.jpg" alt="" />
            <img className="img-fluid w-25 h-100 m-2" src="img/insta/5.jpg" alt="" />
          </div>
        </div>

      </div>

      <div className="copygright mt-5">
        <div className="row container mx-auto">

          <div className="col-lg-3 col-md-6 col-12">
            <img src="img/payment.png" alt="" />
          </div>

          <div className="col-lg-3 col-md-6 col-12 text-nowrap">
            <p>Copyrighted with ryem corporation limited</p>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <a href="#"> <i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-whatsapp"></i></a>
          </div>
</div>
            </div>
          </footer>

</>
)}}

export default ContactUsPage;
