"use client";
import { useState, useEffect, useMemo } from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./PhotoGrid.module.css";
import JSONPhotos from "@/data/photos.json";

const DEFAULT_BREAKPOINTS = {
  480: 1,
  768: 2,
  1024: 3,
  default: 4
}

export default function PhotoGridColumns({ categoryName, photos, breakpoints, className="" }) {
  const PHOTOS = JSONPhotos;

  // fetch photos from an array of pictures OR from JSON["categoryName"]
  const photosToShow = photos ?? (categoryName ? PHOTOS[categoryName] : []);

  // merge default breakpoints with props breakpoints
  const updatedBreakpoints = { ...DEFAULT_BREAKPOINTS, ...breakpoints };

  let [totalColumns, setTotalColumns] = useState(updatedBreakpoints.default ?? 3);

  useEffect(() => {
    // calculate thresholds only once
    const thresholds = Object.keys(updatedBreakpoints).filter((key) => key !== "default").map(Number).sort((a, b) => a - b);
    
    const handleColumnsNumber = () => {
      const width = innerWidth;
      // if (width < 480) setTotalColumns(1);
      //else if (width < 768) setTotalColumns(2);
      // else if (width < 1024) setTotalColumns(3);
      // else setTotalColumns(4);
      
      let foundColumns = updatedBreakpoints.default ?? 3;
      
      for (const threshold of thresholds) {
        if (width <= threshold) {
          foundColumns = updatedBreakpoints[threshold];
          break;
        }
      }
      setTotalColumns(foundColumns)
    };

    handleColumnsNumber();
    window.addEventListener("resize", handleColumnsNumber);

    return () => window.removeEventListener("resize", handleColumnsNumber)
    // [] execute once, when the componet is mounted
  }, []);


  const columns = useMemo(() => {
    // create n empty arrays
    const result = Array.from({ length: totalColumns }, () => []);
    console.log("result: ");
    console.log(result);

    // keep track of column heights
    const columnHeights = Array.from({ length: totalColumns }, () => 0);
    console.log(columnHeights);

    photosToShow.map((element) => {
      const shortestColumnIndex = columnHeights.indexOf(
        Math.min(...columnHeights),
      );

      result[shortestColumnIndex].push(element);

      const ratio = element.orientation === "vertical" ? 1.5 : 0.66;
      columnHeights[shortestColumnIndex] += ratio;
    });

    return result;
  }, [photosToShow, totalColumns]);

  return (
    <div
      className={`${styles.photoGridColumsContainer} ${className}`}
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
