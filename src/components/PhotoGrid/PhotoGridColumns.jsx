"use client";
import { useState, useEffect, useMemo } from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./PhotoGrid.module.css";
import JSONPhotos from "@/data/photos.json";

export default function PhotoGridColumns({ categoryName }) {
  const PHOTOS = JSONPhotos;

  const [totalColumns, setTotalColumns] = useState(3);

  useEffect(() => {
    const handleColumnsNumber = () => {
      const width = innerWidth;
      if (width < 480) setTotalColumns(1);
      else if (width < 768) setTotalColumns(2);
      else if (width < 1024) setTotalColumns(3);
      else setTotalColumns(4);
    };

    handleColumnsNumber();

    window.addEventListener("resize", handleColumnsNumber);
  });

  const columns = useMemo(() => {
    // create n empty arrays
    const result = Array.from({ length: totalColumns }, () => []);
    console.log("result: ");
    console.log(result);

    // keep track of column heights
    const columnHeights = Array.from({ length: totalColumns }, () => 0);
    console.log(columnHeights);

    PHOTOS[categoryName].map((element) => {
      const shortestColumnIndex = columnHeights.indexOf(
        Math.min(...columnHeights),
      );

      result[shortestColumnIndex].push(element);

      const ratio = element.orientation === "vertical" ? 1.5 : 0.66;
      columnHeights[shortestColumnIndex] += ratio;
    });

    return result;
  }, [categoryName, totalColumns, PHOTOS]);

  return (
    <div
      className={styles.photoGridColumsContainer}
      style={{ gridTemplateColumns: `repeat(${totalColumns}, 1fr )` }}
    >
      {columns.map((column, index) => (
        <div key={index} className={styles.column}>
          {column.map((photo) => (
            <div key={photo.id}>
              <ImageCard
                title={photo.title}
                src={photo.thumb}
                orientation={photo.orientation}
                alt={photo.title}
                className={styles.imageCustomStyle}
              ></ImageCard>

              <p className={styles.title}>{photo.title}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
