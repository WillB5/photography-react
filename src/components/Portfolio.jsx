import React from "react";
import { isMobile } from "react-device-detect";
import { useState } from "react";
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
  const [filter, setFilter] = useState("all"); // all, animals, portraits, nature/landscape

  const handleChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

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
        <ul class="list-group flex-grow-1 list-group-flush">
          {/* Filter photos */}
          <div class="dropdown p-2">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter by:
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={(event) => setFilter("all")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={(event) => setFilter("animals")}
                >
                  Animals
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={(event) => setFilter("portraits")}
                >
                  Portraits
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={(event) => setFilter("nature/landscape")}
                >
                  Nature/Landscape
                </a>
              </li>
            </ul>
          </div>
          {/* Display photos */}
          {photos.map(
            (item, index) =>
              (filter == "all" || filter == item.tag) && (
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
              )
          )}
        </ul>
      </div>
    </>
  );
}
