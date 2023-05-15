import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "../../css/DetailPicture.module.css";

const DetailPicture = (props) => {
  const { file } = props;

  console.log("images : " + file.map((img) => img.up_file));

  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`,
  });

  useEffect(() => {
    // file 배열이 업데이트될 때마다 images.current 배열 업데이트
    images.current = file.map((img) => ({
      src: `${encodeURIComponent(img.up_file)}`,
    }));
    setStyle({ marginLeft: `-${current}00%` });
  }, [file, current]);

  const imgSize = file.length;
  const images = useRef([]);
  console.log("imgSize : " + imgSize);

  const moveSlide = (i) => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize - 1;
    else if (nextIndex >= imgSize) nextIndex = 0;

    setCurrent(nextIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div
          className={styles.btn}
          onClick={() => {
            moveSlide(-1);
          }}
        >
          &lt;
        </div>
        <div className={styles.window}>
          <div className={styles.flexbox} style={style}>
            {images.current.map((img, i) => (
              <div
                key={i}
                className={styles.img}
                style={{ backgroundImage: `url(${img.src})` }}
              ></div>
            ))}
          </div>
        </div>
        <div
          className={styles.btn}
          onClick={() => {
            moveSlide(1);
          }}
        >
          &gt;
        </div>
      </div>
      <div className={styles.position}>
        {images.current.map((x, i) => (
          <div
            key={i}
            className={
              i === current
                ? [styles.dot, styles.current].join(" ")
                : [styles.dot].join(" ")
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DetailPicture;
