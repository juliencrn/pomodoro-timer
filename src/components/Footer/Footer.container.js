import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "./Footer";
import { startStop, reset } from "../../redux/actions/timerAction";

export default function FooterContainer() {
  const { isOn } = useSelector(state => state.timer);
  const dispatch = useDispatch();
  return (
    <Footer
      isOn={isOn}
      startStop={() => dispatch(startStop())}
      reset={() => dispatch(reset())}
    />
  );
}