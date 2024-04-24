import {useEffect, useRef} from "react";
import {useLocation} from "react-router-dom";

function ScrollToTop({containerRef}) {
  const {pathname} = useLocation();
  const container = useRef(null);

  useEffect(() => {
    if (containerRef) {
      container.current = containerRef.current;
    } else {
      container.current = window;
    }

    container.current.scrollTo(0, 0);
  }, [pathname, containerRef]);

  return null;
}

export default ScrollToTop;
