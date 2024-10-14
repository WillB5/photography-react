import React from "react";
import { isMobile } from "react-device-detect";

export default function Portfolio() {
  //array with photo paths, titles.
  //To Do: add tags, filter by tags.
  const photos = [
    {
      title: "Baby Goat",
      image: "src/images/babygoat.jpg",
    },
    {
      title: "Macaw",
      image: "src/images/macaw2.jpg",
    },
    {
      title: "Water",
      image: "src/images/waterdroplets.jpg",
    },
    {
      title: "JasmineLamp",
      image: "src/images/cassie.jpg",
    },
    {
      title: "Jasmine",
      image: "src/images/Jasmine.jpg",
    },
    {
      title: "JasmineLamp",
      image: "src/images/Jasmine_lampbw.jpg",
    },

    {
      title: "Stock Photo Style",
      image: "src/images/stockPhoto.jpg",
    },
  ];

  return (
    <>
      <div class="text-center">
        {/* Display photos */}
        <ul class="list-group flex-grow-1 list-group-flush">
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
