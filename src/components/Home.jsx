import React from "react";
import { isMobile } from "react-device-detect";
//import photos
import babygoat from "../images/babygoat.jpg";
import macaw from "../images/macaw2.jpg";
import water from "../images/waterdroplets.jpg";
import cassie from "../images/cassie.jpg";
import jasmine from "../images/Jasmine.jpg";
import jasLamp from "../images/Jasmine_lampbw.jpg";

//

export default function Home() {
  //array with photo paths and titles
  const photos = [
    {
      title: "Baby Goat",
      image: babygoat,
    },
    {
      title: "Macaw",
      image: macaw,
    },
    {
      title: "Water",
      image: water,
    },
    {
      title: "cassie",
      image: cassie,
    },
    {
      title: "Jasmine",
      image: jasmine,
    },
    {
      title: "JasmineLamp",
      image: jasLamp,
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
        I have been a photographer since 2015. My main focus is portrait
        photography but I also branch out into street and nature photography.
      </p>
      <p class="display-3 text-center">My Favorite Photos</p>
      <div class="text-center">
        {/* Display photos */}
        <ul class="list-group list-group-flush list-group-horizontal-xxl">
          {row3.map((item, index) => (
            <li class="list-group-item p-2 flex-grow-1 list-group-item-dark">
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
        <ul class="list-group list-group-flush list-group-horizontal-xxl">
          {row1.map((item, index) => (
            <li class="list-group-item p-2 flex-grow-1 list-group-item-dark">
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
        <ul class="list-group list-group-flush list-group-horizontal-xxl">
          {row2.map((item, index) => (
            <li class="list-group-item p-2 flex-grow-1 list-group-item-dark">
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
      </div>
    </>
  );
}
