import React from "react"
function App() {
  return (
    <>
    <div style={{marginLeft:"42vw"}}>
      <img style={{width:"100px",height:"70px"}} src="https://cdn.quantavid.com/images/quantavid-logo.svg" alt="" />
    <img style={{width:"200px",height:"120px"}} src="https://cdn.quantavid.com/images/quantavid-text-logo.svg" alt="" />
    </div>

      <div style={{ background: "white" }}>
        <h2
          className="heading mb-4"
          style={{
            fontWeight: 800,
            marginLeft:"42vw",
            color: "black",
            font:"quickSand"
          }}
        >
          Site Under Maintenance
        </h2>
        {/* <i
          style={{ transform: 'scale(10)',display:"inline-block" }}
          class='fa fa-wrench'
          aria-hidden='true'></i> */}
        <div style={{ display: "flex", background: "white" }}>
          <div
            style={{
              marginTop: 120,
              marginBottom: 50,
              display: "inline-block",
              alignSelf: "center",
              alignItems: "center",
              marginLeft: "15%",
              transform: "scale( 1.3)",
            }}
          >
            <div className="container-fluid contactus-fluid">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                  <div className="row justify-content-center">
                    <div className="col-md-6" >
                      <h1
                        className="heading mb-4"
                        style={{ fontWeight: 800, color: "black" }}
                      >
                        Meanwhile let&apos;s talk about everything!
                      </h1>
                      <p>
                        <img
                          src={`https://storage.googleapis.com/quantavid-dev/images/undraw-contact.svg`}
                          alt="smilingFace"
                          className="img-fluid"
                        />
                      </p>
                    </div>
                    <div className="col-md-6">
                      <form
                        className="mb-5"
                        method="post"
                        action="https://formsubmit.co/admin@quantavid.com"
                        id="contactForm"
                        name="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-12 form-group contactus-form">
                            <input
                              type="text"
                              className="form-control contactus-form-control"
                              name="name"
                              id="name"
                              placeholder="Your name"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 form-group contactus-form">
                            <input
                              type="text"
                              className="form-control contactus-form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 form-group contactus-form">
                            <input
                              type="text"
                              className="form-control contactus-form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 form-group contactus-form">
                            <textarea
                              class="form-control contactus-form-control"
                              name="message"
                              id="message"
                              cols="30"
                              rows="7"
                              placeholder="Write your message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-primary  py-2 px-4"
                              style={{ border: "none",backgroundColor:"#1b4087",borderRadius:"8px !important" }}
                            />
                            <span className="submitting" />
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* For error messages!!! */}
                    {/* <div id="form-message-warning mt-4"></div>
            <div id="form-message-success">
            Your message was sent, thank you!
            </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* below is the code for social media icons */}
      <div>
        <div style={{ textAlign: "center" }}>
          {/* <h4 style={{ fontWeight: 800, color: "#343F4F", marginTop: "2%" }}>
            Follow us on social media, Stay tuned for amazing videos
          </h4> */}
        </div>

        {/* below is the code for icons of social media handles */}
        <div class="social-menu">
          <ul className="maintenance-ul">
            <li className="maintenance-li">
              <a href="https://www.facebook.com/" className="maintenance-a">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li className="maintenance-li">
              <a href="https://twitter.com/" className="maintenance-a">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li className="maintenance-li">
              <a
                href="https://www.instagram.com/quantavidllc/"
                className="maintenance-a"
              >
                <i class="fa fa-instagram"></i>
              </a>
            </li>
            <li className="maintenance-li">
              <a href="https://www.youtube.com/" className="maintenance-a">
                <i class="fa fa-youtube"></i>
              </a>
            </li>
            <li className="maintenance-li">
              <a
                href="https://www.linkedin.com/company/quantavid-usa"
                className="maintenance-a"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
