"use client";
import { useState, useEffect, useMemo } from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./PhotoGrid.module.css";
import JSONPhotos from "@/data/photos.json";

export default function PhotoGrid({ categoryName }) {
  const PHOTOS = JSONPhotos;

  // VISUALIZZAZIONE PER RIGHE (altezza righe variabile in base al numero di foto per riga)
  //  ph < 480 = H | V + H | V + V OPPURE H | V
  //  480 < ph < 768 = H + H || H + V || H + V + V
  // 768 < ph < 1024 = H + H + H || H + H + V + V|| H + H + V ... ?
  // 1024 > ph =

  // OPPURE
  // per ogni riga stabilisco una lugnhezza massima (in base alla lunghezza dello schermo)
  // ho un array di foto, calcolo la lugnhezza totale delle foto consecutive, se la lugnhezza è
  //  maggiore della riga toglo l'ultima immagine dalla riga, genero la riga successiva e aggiungo l'immagine
  // ripeti il pattern fino a esaurimento immagini -> cosi ho il n totale di righe e posso generare tutto
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

  const [rowsWidth, setRowsWidth] = useState(700);

  useEffect(() => {
    const handleRowsWidth = () => {
      const width = innerWidth;
      if (width < 480) setRowsWidth(480);
      else if (width < 768) setRowsWidth(768);
      else if (width < 1024) setRowsWidth(1024);
      else setRowsWidth(1200);
    };

    handleRowsWidth();

    window.addEventListener("resize", handleRowsWidth);
  });

  const rows = useMemo(() => {
    const result = [];
    console.log("result: ");
    console.log(result);

    const maxWidth = 700;
    let rowWidth = 0;

    //  initialize first empty row
    const row = [];
    result.push(row);

    // iterate each photo of the specified category
    PHOTOS[categoryName].map((element) => {
      console.table(element);

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
  }, [categoryName, totalColumns, PHOTOS]);

  return (
    <div className={styles.photoGridRowsContainer}>
      {rows.map((row, index) => (
        <div key={index} className={styles.row}>
          {row.map((photo) => (
            <div key={photo.id}>
              <ImageCard
                title={photo.title}
                src={photo.thumb}
                orientation={photo.orientation}
                alt={photo.title}
                className={styles.imageGridRowsCustomStyle}
              ></ImageCard>
              <p>text</p>
              <p className={styles.title}>{photo.title}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
