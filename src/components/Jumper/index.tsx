import React, { MutableRefObject } from "react";
import { FaAngleUp } from "react-icons/fa";
import styles from "./Jumper.module.css";

export default function Jumper({
  jumperRef,
}: {
  jumperRef: MutableRefObject<any>;
}) {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div ref={jumperRef} className={styles.jumper} onClick={scrollTop}>
      <div>
        <FaAngleUp color="#f51939" fontSize={"40px"} />
      </div>
    </div>
  );
}
