import React, { ReactNode } from "react";
import Error from "../Error";
import Loader from "../Loader";
import styles from "./Wrapper.module.css";

export default function Wrapper({
  children,
  status,
}: {
  children: ReactNode | ReactNode[];
  status: "SUCCESS" | "ERROR" | "LOADING";
}) {
  if (status === "ERROR") {
    return (
      <div className={styles.wrapperFlex}>
        <Error />
      </div>
    );
  }
  if (status === "LOADING") {
    return (
      <div className={styles.wrapperFlex}>
        <Loader />
      </div>
    );
  }
  return <div className={`${styles.wrapper} container`}>{children}</div>;
}
