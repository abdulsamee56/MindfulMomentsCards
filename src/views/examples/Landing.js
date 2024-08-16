
import React from "react";
// nodejs library that concatenates classes


// reactstrap components
import {
  Badge,
 
  Card,
  CardBody,
  CardImg,
  
  Container,
  Row,
  Col,
} from "reactstrap";

// core components





class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                      Mindful Moments{" "}
                        <span>Deepen Your Conversations</span>
                      </h1>
                      <p className="lead text-white">
                      Mindful Moments offers a unique deck of mental health cards designed to spark meaningful reflection and self-discovery. 
                      Our thoughtfully crafted questions guide you from simple "How are you?" to profound "Who are you?" moments, encouraging deep 
                      introspection and personal growth. 
                      </p>
                      <div className="btn-wrapper">
                        
                        
                      
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Discover Yourself
                          </h6>
                          <p className="description mt-3">
                          Explore deep and meaningful questions with Mindful Moments. Our cards guide you from surface-level inquiries to profound self-reflection.
                          </p>
                          
                          
                          
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                          Pursue Meaningful Goals                          </h6>
                          <p className="description mt-3">
                          Consider questions aimed at clarifying your long-term goals and aspirations. Use these prompts to align your daily actions with your broader ambitions and find purpose in your pursuits.
                          </p>
                          <div>
                            
                          </div>
                          
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                          Transformative Questions for Growth
                          </h6>
                          <p className="description mt-3">
                            Our cards are designed to prompt personal growth. Engage with questions that push you to explore your deeper self and embrace your journey.
                          </p>
                         
                          
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Awesome features</h3>
                    <p>
                    Our deck includes 50 uniquely crafted cards, each designed to spark deep self-reflection and meaningful insights. With a diverse range of thought-provoking questions, you'll embark on a personal journey that explores different aspects of your inner self.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            Explore a rich variety of 50 distinct prompts
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Each card offers a new perspective and deeper understanding</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                            Join a supportive community ready to guide you
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/deep.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                      Discover Profound Insights
                      </h4>
                      <p className="lead text-italic text-white">
                      Explore transformative conversations with our deep question card app. Each card is crafted to provoke introspection and foster meaningful discussions.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    
                    <h3>What Our Users Say</h3>
                    <p className="lead">
                    Our beta testers, including friends and peers, have praised our deep question cards for their profound impact and thought-provoking nature. They’ve found that these questions are truly transformative for self-reflection and personal growth. One user shared, 'These cards have been a revelation for me. They prompt deep, meaningful conversations and encourage introspection in ways I hadn’t experienced before. 
                    They’re perfect for anyone looking to explore their inner thoughts and connect on a deeper level.'
                    </p>
                    
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                    
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                <div className="d-flex px-3">
  <div>
    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
      <i className="ni ni-cart text-primary" />
    </div>
  </div>
  <div className="pl-4">
    <h4 className="display-3 text-white">Purchase Your Deck</h4>
    <p className="text-white">
      Elevate your self-reflection journey with our thoughtfully designed question cards. Each deck is crafted to inspire meaningful conversations and personal growth. Get yours today!
    </p>
    <a href="#pablo" className="btn btn-primary mt-3" onClick={(e) => e.preventDefault()}>
      Purchase Here
    </a>
  </div>
</div>

                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Support
                          </h5>
                          <p>
                          We are committed to ensuring your satisfaction with every deck of cards. 
                          Our dedicated support team is here to assist you with any questions or concerns, ensuring you have the best experience possible.
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                           
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Exclusive Offer
                          </h5>
                          <p>
                          Unlock special benefits and discounts by exploring our deck of thought-provoking cards. Act now to take advantage of our limited-time offer and start your journey of self-reflection and growth.
                          </p>
                          <a
                            className="text-warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                       
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">The Amazing Team</h2>
                  <p className="lead text-muted">
                  Meet the talented team behind Mindful Moments, dedicated to bringing you meaningful self-reflection tools.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Abdul Samee</span>
                        
                      </h5>
                      
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Nischint</span>
                        
                      </h5>
                      
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Md</span>
                        
                      </h5>
                      
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Spacetimebend</span>
                        
                      </h5>
                      
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          
          
          
        </main>
        
      </>
    );
  }
}

export default Landing;
