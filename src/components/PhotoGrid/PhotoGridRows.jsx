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
    console.log("result: ");
    // console.log(result);

    const maxWidth = rowsWidth;
    let rowWidth = 0;

    //  initialize first empty row
    const row = [];
    result.push(row);

    // iterate each photo of the specified category
    CATEGORY_PHOTOS.map((element) => {
      // console.table(element);

      // update the row width with the new image
      rowWidth += element.orientation === "horizontal" ? 300 : 200;

      if (rowWidth >= maxWidth) {
        const row = [];
        row.push(element);
        result.push(row);
        rowWidth = element.orientation === "horizontal" ? 300 : 200;
        return;
      } else {
        result[result.length - 1].push(element);
      }
    });
    console.log("result: ");
    console.log(result);

    return result;
  }, [categoryName, CATEGORY_PHOTOS, rowsWidth]);

  return (
    <div className={styles.photoGridRowsContainer}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((photo) => {
            const photoIndex = CATEGORY_PHOTOS.indexOf(photo);
            console.log("photo: ", photo.id);
            console.log("photo thumb: ", photo.thumb);
            console.log("photoIndex: ", photoIndex);

            return (
              <div
                onClick={() => openLightbox(photoIndex)}
                key={photo.id}
                className={
                  row.length === 1
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
