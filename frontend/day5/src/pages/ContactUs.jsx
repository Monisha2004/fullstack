
import '../assets/css/Contactus.css'
import ButtonAppBar from '../components/Navbar';
import back from'../assets/images/contact.jpg';

const ContactUs = () => {
    return (
        <>
        <div>
        <ButtonAppBar/>
        <div id="img" style={{ backgroundImage: `url(${back})` }} data-overlay="5"></div>
        <div className='vasa777'>
        <div className="wrapper">
            <div className="title33">
                <h1>Contact Us Form</h1>
            </div>
            <div className="contact-form">
                <div className="input-fields">
                    <input type="text" className="input" placeholder="Name" />
                    <input type="text" className="input" placeholder="Email Address" />
                    <input type="text" className="input" placeholder="Phone" />
                    <input type="text" className="input" placeholder="Subject" />
                </div>
                <div className="msg">
                    <textarea placeholder="Message"></textarea>
                    <div className="btn">Send</div>
                </div>
            </div>
        </div>
        </div>
        
        </div>
        </>
    );
};

export default ContactUs;