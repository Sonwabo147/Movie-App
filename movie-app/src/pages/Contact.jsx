import "./Contact.css";

function Contact() {

    return (
        <>
        <h1 style={{textAlign: "center", margin: "64px auto 16px"}}>Contact Me</h1>
        <div className="contact-page">

            
            <div className="contact-card">
                <br />
                <h2>Sonwabo Owami</h2>
                <p className="title">Full Stack Software Developer</p>
                <hr />
                <h3>Contact Information</h3>
                <p>📧 sonwabo.hd147@gmail.com</p>
                <p>📞 +27 83 356 5356</p>
                <p>📍 Johannesburg, Gauteng, South Africa </p>
                <hr />
                <h3>Social Media</h3>

                <div className="social-links">

                    <a
                        href="https://github.com/sonwabo147"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/in/sonwabo-hlatshwayo-00a311186/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://sonwabo.vibstar.co.za"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Portfolio
                    </a>
                </div>

            </div>

        </div>
        </>
    );
}

export default Contact;