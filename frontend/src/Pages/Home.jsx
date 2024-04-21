import React from "react";
import Courosel from "../Components/Courosel/Courosel.jsx";
import Category from "../Components/Category/Category.jsx";

function Home() {
  const images = [
    {
      url: "https://res.cloudinary.com/djdegiywz/image/upload/v1713686837/bmrt04tidyhnbejvwvxv.jpg",
      header: "Beauty Nature",
      secondaryHeader: "Scenary",
      description:
        "Immerse yourself in the breathtaking allure of nature's artistry at our gallery. From the vibrant hues of a sunrise painting the sky to the delicate intricacies of a flower in bloom, each piece celebrates the boundless beauty of the natural world. Let the wonders of nature inspire and captivate you as you explore our collection.",
    },
    {
      url: "https://res.cloudinary.com/djdegiywz/image/upload/v1713686818/lshtiussswft85rpi8vi.jpg",
      header: "Other Type Painting",
      secondaryHeader: "Sketches",
      description:
        "Explore the charm and tranquility of our Sketches section, where each stroke breathes life into scenes of natural wonder. From serene landscapes to delicate botanical studies, these sketches encapsulate the beauty of the world around us in its purest form. Immerse yourself in the simplicity and elegance of these artworks, each one a testament to the artist's keen eye and appreciation for nature's grace.",
    },
  ];
  return (
    <>
      <Courosel images={images} />
      <Category />
    </>
  );
}

export default Home;
