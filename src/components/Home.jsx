import React from "react";
import { isMobile } from "react-device-detect";

export default function Home() {
  //array with photo paths and titles
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

  //rows to display two photos in each row
  let row1 = photos.slice(0, 2);
  let row2 = photos.slice(2, 4);
  let row3 = photos.slice(4, 6);

  return (
    <>
      <p class="display-3 text-center">About Me</p>
      <p class="display-6 text-center">
        I have been a photographer since 2015. My main focus
      </p>
      <p class="display-3 text-center">My Favorite Photos</p>

      {/* Display photos */}
      <ul class="list-group list-group-horizontal-xxl">
        {row3.map((item, index) => (
          <li class="list-group-item p-2  list-group-item-dark">
            <img
              key={index}
              //rework to resize for mobile
              width={
                window.innerWidth < 1400 || isMobile
                  ? window.innerWidth
                  : window.innerWidth / 2.05
              }
              src={item.image}
              alt={item.title}
              objectFit={"scale-down"}
            ></img>
          </li>
        ))}
      </ul>
      <ul class="list-group list-group-horizontal-xxl">
        {row1.map((item, index) => (
          <li class="list-group-item p-2  list-group-item-dark">
            <img
              key={index + 3}
              //rework to resize for mobile
              width={
                window.innerWidth < 1400 || isMobile
                  ? window.innerWidth
                  : window.innerWidth / 2.05
              }
              src={item.image}
              alt={item.title}
              objectFit={"scale-down"}
            ></img>
          </li>
        ))}
      </ul>
      <ul class="list-group list-group-horizontal-xxl">
        {row2.map((item, index) => (
          <li class="list-group-item p-2  list-group-item-dark">
            <img
              key={index + 3}
              //rework to resize for mobile
              width={
                window.innerWidth < 1400 || isMobile
                  ? window.innerWidth
                  : window.innerWidth / 2.05
              }
              src={item.image}
              alt={item.title}
              objectFit={"scale-down"}
            ></img>
          </li>
        ))}
      </ul>
    </>
  );
}
