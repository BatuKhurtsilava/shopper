import React from "react";
import styles from "./styles.module.css";

export default function HomePage() {
  return (
    <div className={styles.HomePageContainer}>
      <h1>Welcome To SHOPPERS Admin Page</h1>

      <div className={styles.ImagesContainer}>
        <img
          style={{ height: "120px", width: "120px" }}
          src={"https://alta.ge/images/detailed/267/117731_1_fiar-t8.jpg"}
        />
        <img
          style={{ height: "120px", width: "120px" }}
          src={
            "https://alta.ge/images/detailed/300/iPhone_15_Pro_Blue_Titanium_PDP_Image_Position-1__ww-EN_b355-hy.jpg"
          }
        />
        <img
          style={{ height: "120px", width: "120px" }}
          src={
            "https://alta.ge/images/thumbnails/900/650/detailed/238/123223_1.jpg.jpg"
          }
        />
        <img
          style={{ height: "120px", width: "120px" }}
          src={
            "https://alta.ge/images/detailed/260/GEGE_WatchS8_GPS_Q422_45mm_Midnight_Aluminum_Midnight_Sport_Band_PDP_Image_Position-1.jpg"
          }
        />
        <img
          style={{ height: "120px", width: "120px" }}
          src={"https://alta.ge/images/detailed/287/1_5afm-n2_5sw3-qp.png"}
        />
      </div>
      <h2>Create/Edit/Delete Products Easily</h2>
    </div>
  );
}
