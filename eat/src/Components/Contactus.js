import "../Style/Aboutus.css";

const Contactus = () => {
    return (
        <>

            <div className="contact">
            <div className="contact-us">
                <h1>Contact Us</h1>
                <p>
                    Have questions, suggestions, or just want to say hello? We'd love to hear from you!
                    Reach out to us at <a href="mailto:info@eatsnow.com">info@eatsnow.com</a> or through the form below.
                </p>

                <form>
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Your Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Your Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button className="submitbtn" type="submit">Send Message</button>
                </form>
            </div>
            </div>
        </>
    )
}

export default Contactus;