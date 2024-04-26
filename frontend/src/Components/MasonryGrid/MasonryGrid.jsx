import React, {useState, useEffect, useRef} from "react";
import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";
import ImageCard from "../Cards/ImageCard";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setApiError, setCard} from "../redux/card/card";
import {useLocation, useNavigate} from "react-router-dom";

function MasonryGrid() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {card, apiError} = useSelector((state) => state.card);
  const location = useLocation();
  const pathName = location;
  const fetchData = async () => {
    if (pathName.pathname === "/profile") {
      axios
        .get("http://localhost:3000/api/v1/post/fetchSavedPost", {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data.data.savedPost, pathName.pathname);
          dispatch(setCard(response.data.data.savedPost));
        });
    } else if (pathName.pathname === "/explore") {
      axios
        .get("http://localhost:3000/api/v1/post/fetchPost")
        .then((response) => {
          console.log(response, pathName.pathname);
          dispatch(setCard(response.data.data));
        });
    }
  };

  const showProduct = (id) => {
    console.log(id);
    navigate(`/art/${id}`);
  };

  let containerRef = useRef(null);
  let [containerWidth, setContainerWidth] = useState(0);
  let numberOfColumns = 4;
  const [columnWidth, setColumnWidth] = useState(0);
  const [gutterWidthPx, setGutterWidthPx] = useState(0);
  let gutterWidth = 0.01;

  useEffect(() => {
    console.log("PATH : ", pathName.pathname);
    fetchData();
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
  }, [dispatch, pathName]);

  return (
    <div ref={containerRef} className="grid-box">
      {card &&
        card.map((cardItem, i) => (
          <div
            key={i}
            className="grid-item border-[5px] cursor-pointer relative group/card"
            onClick={() => {
              showProduct(cardItem._id);
            }}
            style={{
              width: `${columnWidth}px`,
              marginBottom: `${gutterWidthPx}px`,
            }}
          >
            <ImageCard
              imageUrl={cardItem?.image}
              id={cardItem._id}
              name={cardItem.userId?.username}
            />
          </div>
        ))}
      {(!card || card.length === 0) && <p>No data available</p>}
    </div>
  );
}

export default MasonryGrid;
