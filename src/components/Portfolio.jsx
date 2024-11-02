import React from "react";
import { isMobile } from "react-device-detect";
//import photos
import babygoat from "../images/babygoat.jpg";
import macaw from "../images/macaw2.jpg";
import water from "../images/waterdroplets.jpg";
import cassie from "../images/cassie.jpg";
import jasmine from "../images/Jasmine.jpg";
import jasLamp from "../images/Jasmine_lampbw.jpg";
import stockphoto from "../images/stockPhoto.jpg";
//

export default function Portfolio() {
  //array with photo paths, titles.
  //To Do: add tags, filter by tags.
  //Tags: animals, portraits, nature/landscape
  const photos = [
    {
      title: "Baby Goat",
      image: babygoat,
      tag: "animals",
    },
    {
      title: "Macaw",
      image: macaw,
      tag: "animals",
    },
    {
      title: "Water",
      image: water,
      tag: "nature/landscape",
    },
    {
      title: "cassie",
      image: cassie,
      tag: "portraits",
    },
    {
      title: "Jasmine",
      image: jasmine,
      tag: "portraits",
    },
    {
      title: "JasmineLamp",
      image: jasLamp,
      tag: "portraits",
    },

    {
      title: "Stock Photo Style",
      image: stockphoto,
      tag: "portraits",
    },
  ];

  return (
    <>
      <div class="text-center">
        {/* Display photos */}
        <ul class="list-group flex-grow-1 list-group-flush">
          <li></li>
          {photos.map((item, index) => (
            <img
              class="text-center mx-auto p-2 align-self-center flex-grow-1"
              key={index}
              //rework to resize for mobile
              width={
                window.innerWidth < 1400 || isMobile
                  ? window.innerWidth
                  : window.innerWidth / 1.5
              }
              src={item.image}
              alt={item.title}
              objectFit={"scale-down"}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
