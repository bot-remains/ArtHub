import React, {useState, useEffect, useRef} from "react";
import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";
import ImageCard from "../Cards/ImageCard";

function MasonryGrid() {
  const images = [
    {
      url: "https://res.cloudinary.com/djdegiywz/image/upload/v1713708333/fun9jg2gtmkalcxlrbtu.jpg",
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
    {
      url: "https://res.cloudinary.com/djdegiywz/image/upload/v1713686837/bmrt04tidyhnbejvwvxv.jpg",
      header: "Beauty Nature",
      secondaryHeader: "Scenary",
      description:
        "Immerse yourself in the breathtaking allure of nature's artistry at our gallery. From the vibrant hues of a sunrise painting the sky to the delicate intricacies of a flower in bloom, each piece celebrates the boundless beauty of the natural world. Let the wonders of nature inspire and captivate you as you explore our collection.",
    },
    {
      url: "https://res.cloudinary.com/djdegiywz/image/upload/v1713686815/ke4qgpdy9yaaqyix03k1.jpg",
      header: "Beauty Nature",
      secondaryHeader: "Scenary",
      description:
        "Immerse yourself in the breathtaking allure of nature's artistry at our gallery. From the vibrant hues of a sunrise painting the sky to the delicate intricacies of a flower in bloom, each piece celebrates the boundless beauty of the natural world. Let the wonders of nature inspire and captivate you as you explore our collection.",
    },
    {
      url: "https://res.cloudinary.com/djdegiywz/image/upload/v1713708334/a3ysfyznrgayl1ditykt.jpg",
      header: "Other Type Painting",
      secondaryHeader: "Sketches",
      description:
        "Explore the charm and tranquility of our Sketches section, where each stroke breathes life into scenes of natural wonder. From serene landscapes to delicate botanical studies, these sketches encapsulate the beauty of the world around us in its purest form. Immerse yourself in the simplicity and elegance of these artworks, each one a testament to the artist's keen eye and appreciation for nature's grace.",
    },
    {
      url: "https://res.cloudinary.com/djdegiywz/image/upload/v1713708334/pkty1gdwf7nvjdpivzvz.jpg",
      header: "Other Type Painting",
      secondaryHeader: "Sketches",
      description:
        "Explore the charm and tranquility of our Sketches section, where each stroke breathes life into scenes of natural wonder. From serene landscapes to delicate botanical studies, these sketches encapsulate the beauty of the world around us in its purest form. Immerse yourself in the simplicity and elegance of these artworks, each one a testament to the artist's keen eye and appreciation for nature's grace.",
    },
    {
      url: "https://res.cloudinary.com/djdegiywz/image/upload/v1713708334/jpne73hagscaqnm43sp4.jpg",
      header: "Other Type Painting",
      secondaryHeader: "Sketches",
      description:
        "Explore the charm and tranquility of our Sketches section, where each stroke breathes life into scenes of natural wonder. From serene landscapes to delicate botanical studies, these sketches encapsulate the beauty of the world around us in its purest form. Immerse yourself in the simplicity and elegance of these artworks, each one a testament to the artist's keen eye and appreciation for nature's grace.",
    },
    {
      url: "https://res.cloudinary.com/djdegiywz/image/upload/v1713708335/airvulw0rhgozmmrhzuo.webp",
      header: "Other Type Painting",
      secondaryHeader: "Sketches",
      description:
        "Explore the charm and tranquility of our Sketches section, where each stroke breathes life into scenes of natural wonder. From serene landscapes to delicate botanical studies, these sketches encapsulate the beauty of the world around us in its purest form. Immerse yourself in the simplicity and elegance of these artworks, each one a testament to the artist's keen eye and appreciation for nature's grace.",
    },
  ];

  let containerRef = useRef(null);
  let [containerWidth, setContainerWidth] = useState(0);
  let numberOfColumns = 3;
  const [columnWidth, setColumnWidth] = useState(0);
  const [gutterWidthPx, setGutterWidthPx] = useState(0);
  let gutterWidth = 0.01;

  useEffect(() => {
    const updateLayout = () => {
      containerWidth = containerRef.current.clientWidth;
      setContainerWidth(containerWidth);
      let gutterWidthPx = containerWidth * gutterWidth;
      setGutterWidthPx(gutterWidthPx);
      let columnWidthPx =
        (containerWidth - (numberOfColumns - 1) * gutterWidthPx) /
        numberOfColumns;
      setColumnWidth(columnWidthPx);

      let msnry = new Masonry(containerRef.current, {
        itemSelector: ".grid-item",
        gutter: gutterWidthPx,
        percentPosition: true,
      });

      imagesLoaded(containerRef.current, function () {
        msnry.layout();
      });
    };

    updateLayout();

    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, [images]);

  return (
    <div ref={containerRef} className="grid-box">
      {images.map((image, i) => (
        <div
          key={i}
          className="grid-item border-[10px] cursor-pointer relative group/card"
          style={{
            width: `${columnWidth}px`,
            marginBottom: `${gutterWidthPx}px`,
          }}
        >
          <ImageCard imageUrl={image.url} />
        </div>
      ))}
    </div>
  );
}

export default MasonryGrid;
