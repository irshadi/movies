import React from "react";

const STATE_MAP = {
  NOT_TOUCHING_THRESHOLD: "NOT_TOUCHING_THRESHOLD",
  IS_IN_THRESHOLD: "IS_IN_THRESHOLD",
  FUNCTION_INVOKED: "FUNCTION_INVOKED"
};

export const useInfiniteScroll = ({
  threshold: _threshold = 80,
  handleReachBottom = () => null
}) => {
  const [state, setState] = React.useState(STATE_MAP.NOT_TOUCHING_THRESHOLD);

  const onScrollEnd = e => {
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    const scrollRemaining = scrollHeight - scrollTop - clientHeight;
    const hasReachThreshold = scrollRemaining < 50;

    if (hasReachThreshold && state === STATE_MAP.NOT_TOUCHING_THRESHOLD) {
      setState(STATE_MAP.IS_IN_THRESHOLD);
    }

    if (state === STATE_MAP.IS_IN_THRESHOLD && hasReachThreshold) {
      handleReachBottom();
      setState(STATE_MAP.FUNCTION_INVOKED);
    }

    if (state === STATE_MAP.FUNCTION_INVOKED && !hasReachThreshold) {
      setState(STATE_MAP.NOT_TOUCHING_THRESHOLD);
    }
  };
  return {
    onScrollEnd
  };
};
