import React from "react";

export const useRectMeasure = () => {
  const [rect, setRect] = React.useState({});
  const ref = React.useRef();

  const resizeTable = React.useCallback(() => {
    if (ref.current) {
      const divRect = ref.current.getBoundingClientRect();
      setRect(divRect);
    }
  }, [ref.current, setRect]);

  // On browser paint the DOM, get wrapper width and height
  React.useLayoutEffect(() => {
    resizeTable();

    window.addEventListener("resize", resizeTable);
    return () => window.removeEventListener("resize", resizeTable);
  }, []);

  return {
    rect,
    ref
  };
};
