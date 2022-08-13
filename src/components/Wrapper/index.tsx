import React, { ReactNode } from "react";
import { STATUS } from "../../config/constants";
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
  if (status === STATUS.ERROR) {
    return (
      <div className={styles.wrapperFlex}>
        <Error />
      </div>
    );
  }
  if (status === STATUS.LOADING) {
    return (
      <div className={styles.wrapperFlex}>
        <Loader />
      </div>
    );
  }
  return <div className={`${styles.wrapper} container`}>{children}</div>;
}
