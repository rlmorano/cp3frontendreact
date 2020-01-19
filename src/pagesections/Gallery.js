import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/login-reg/1.jpg"),
    altText: "Modern Tattoo",
    caption: "Modern Tattoo"
  },
  {
    src: require("assets/img/login-reg/2.jpg"),
    altText: "Tribal Tattoo",
    caption: "Tribal Tattoo"
  },
  {
    src: require("assets/img/login-reg/3.jpg"),
    altText: "Old School Tattoo",
    caption: "Old School Tattoo"
  },
  {
    src: require("assets/img/login-reg/4.jpg"),
    altText: "Modern Tattoo",
    caption: "Modern Tattoo"
  },
  {
    src: require("assets/img/login-reg/5.jpg"),
    altText: "Tribal Tattoo",
    caption: "Tribal Tattoo"
  },
  {
    src: require("assets/img/login-reg/6.jpg"),
    altText: "Old School Tattoo",
    caption: "Old School Tattoo"
  },
  {
    src: require("assets/img/login-reg/7.jpg"),
    altText: "Modern Tattoo",
    caption: "Modern Tattoo"
  },
  {
    src: require("assets/img/random/1.jpg"),
    altText: "Tribal Tattoo",
    caption: "Tribal Tattoo"
  }
];

function Gallery() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section section-dark pt-o" id="carousel">
        <Container fluid="sm md lg">
          <Row>
            <Col className="ml-auto mr-auto" md="12">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map(item => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} width={900} height={500} alt="900x500" />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="/"
                    onClick={e => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="/"
                    onClick={e => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default Gallery;