import React from "react";
import image from "../../Public/flowers.jpg";
import CouroselItem from "./CouroselItem";
function Courosel() {
  return (
    <div className="main_2 clearfix" style={{height: "600px"}}>
      <section id="center" className="center_home">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className=""
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <CouroselItem
              header={"Trending Art Picture"}
              secondaryHeader={"Always something New"}
              description={
                "Discover the pulse of contemporary art with our Trending Art Pictures collection. Featuring captivating works that push boundaries and ignite conversation, each piece reflects the latest artistic currents and societal themes. From bold expressions of emotion to thought-provoking commentary on the modern world, these trending artworks are a testament to creativity's ever-evolving nature. Dive into this dynamic showcase and experience the vibrant energy of today's artistic landscape."
              }
              active={true}
            />
            <CouroselItem
              header={"Beauty Nature"}
              secondaryHeader={"Scenary"}
              description={
                "Immerse yourself in the breathtaking allure of nature's artistry at our gallery. From the vibrant hues of a sunrise painting the sky to the delicate intricacies of a flower in bloom, each piece celebrates the boundless beauty of the natural world. Let the wonders of nature inspire and captivate you as you explore our collection."
              }
            />
            <CouroselItem
              header={"Other Type Painting"}
              secondaryHeader={"Sketches"}
              description={
                "Explore the charm and tranquility of our Sketches section, where each stroke breathes life into scenes of natural wonder. From serene landscapes to delicate botanical studies, these sketches encapsulate the beauty of the world around us in its purest form. Immerse yourself in the simplicity and elegance of these artworks, each one a testament to the artist's keen eye and appreciation for nature's grace."
              }
            />
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Courosel;
