import React from "react";

export default function Home() {
  const photos = [
    {
      title: "Baby Goat",
      image: "src/images/babygoat.jpg",
    },
    {
      title: "Macaw",
      image: "src/images/macaw2.jpg",
    },
  ];
  console.log(photos);
  return (
    <>
      <ul class="list-group list-group-horizontal-md">
        {photos.map((item, index) => (
          <li class="list-group-item p-2  list-group-item-dark">
            <img
              key={index}
              //rework to resize for mobile
              width={
                window.innerWidth < 700
                  ? window.innerWidth
                  : window.innerWidth / 3.3
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
