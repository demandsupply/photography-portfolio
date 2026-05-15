"use client";
import { useState, useEffect, useMemo } from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./PhotoGrid.module.css";
import JSONPhotos from "@/data/photos.json";
import LightBox from "../LightBox/LightBox";

export default function PhotoGridRows({ categoryName }) {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (index) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);

  const showNext = () =>
    setCurrentIndex((prev) => (prev + 1) % PHOTOS[categoryName].length);
  const showPrev = () =>
    setCurrentIndex(
      (prev) =>
        (prev - 1 + PHOTOS[categoryName].length) % PHOTOS[categoryName].length,
    );

  const PHOTOS = JSONPhotos;
  const CATEGORY_PHOTOS = PHOTOS[categoryName];
  const [rowsWidth, setRowsWidth] = useState(700);

  console.log("CATEGORY_PHOTOS: ");
  console.log(CATEGORY_PHOTOS);

  useEffect(() => {
    const handleRowsWidth = () => {
      console.log("use state rows width: " + rowsWidth);
      setRowsWidth(innerWidth);
    };
    handleRowsWidth();

    window.addEventListener("resize", handleRowsWidth);
    return () => window.removeEventListener("resize", handleRowsWidth);
  }, []);

  const rows = useMemo(() => {
    const result = [];

    const maxWidth = rowsWidth;

    //  initialize first empty row
    let row = [];
    let rowWidth = 0;

    // iterate each photo of the specified category
    CATEGORY_PHOTOS.map((element) => {
      // console.table(element);

      // update the row width with the new image
      rowWidth += element.orientation === "horizontal" ? 300 : 200;

      if (rowWidth >= maxWidth) {
        result.push(row);
        row = [element];
        rowWidth = element.orientation === "horizontal" ? 300 : 200;
        return;
      } else {
        row.push(element);
      }
    });

    if (row.length > 0) {
      result.push(row);
    }
    console.log("result: ");
    console.log(result);

    return result;
  }, [CATEGORY_PHOTOS, rowsWidth]);

  return (
    <div className={styles.photoGridRowsContainer}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((photo) => {
            const photoIndex = CATEGORY_PHOTOS.indexOf(photo);
            console.log("photo: ", photo.id);
            console.log("photo thumb: ", photo.thumb);
            console.log("photoIndex: ", photoIndex);
            console.log("rowIndex: ", rowIndex);
            console.log("rows.length: ", rows.length - 1);

            return (
              <div
                onClick={() => openLightbox(photoIndex)}
                key={photo.id}
                className={
                  rows.length === rowIndex + 1 && row.length === 1
                    ? photo.orientation === "horizontal"
                      ? styles.lastSingleHorizontalImage
                      : styles.lastSingleVerticalImage
                    : row.length === 1
                      ? styles.normalRatio
                      : photo.orientation === "horizontal"
                        ? styles.verticalRatio
                        : styles.horizontalRatio
                }
              >
                <ImageCard
                  title={photo.title}
                  src={photo.thumb}
                  orientation={photo.orientation}
                  alt={photo.title}
                  className={styles.imageGridRowsCustomStyle}
                  variant="bottom"
                >
                  <div className={styles.customBottomOverlay}>
                    <h3 className={styles.photoTitle}>{photo.title}</h3>
                  </div>
                </ImageCard>
                {/* <p>text</p> */}
                {/* <p className={styles.title}>{photo.title}</p> */}
              </div>
            );
          })}
        </div>
      ))}
      {currentIndex !== null && (
        <LightBox
          photos={CATEGORY_PHOTOS}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNext={showNext}
          onPrev={showPrev}
        />
      )}
    </div>
  );
}
