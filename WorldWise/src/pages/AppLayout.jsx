import React from "react";
import AppNav from "../assets/components/AppNav";
import styles from "./AppLayout.module.css";
import Sidebar from "../assets/components/Sidebar";
import Map from "../assets/components/Map";WorldW
import User from "../assets/components/User";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}
