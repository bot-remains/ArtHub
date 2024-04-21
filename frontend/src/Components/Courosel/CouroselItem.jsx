import React from "react";
import flowersImage from "../../Public/flowers.jpg";

function CouroselItem({header, secondaryHeader, description, active = false}) {
  const divStyle = {
    width: "100%",
    height: "80vh",
    backgroundImage: `url(${flowersImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const carouselItemClasses = active ? "carousel-item active" : "carousel-item";

  return (
    <div className={carouselItemClasses}>
      <div style={divStyle}></div>
      <div className="carousel-caption d-md-block">
        <h1 className="text-white font_60">{header}</h1>
        <h4 className="text-white mt-3">{secondaryHeader}</h4>
        <p className="text-white mt-4">{description}</p>
        <h6 className="mt-4 mb-0">
          <a className="button" href="#">
            <i className="fa fa-bullhorn bg-white col_pink p-3"> </i>{" "}
            <span className="ps-3 pe-3">Back to overview</span>
          </a>
        </h6>
      </div>
    </div>
  );
}

export default CouroselItem;
