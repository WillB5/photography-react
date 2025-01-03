import React from "react";
import myPhoto from "../images/Selfie.jpg";

export default function Contact() {
  return (
    <>
      <div class="text-center">
        <p class="display-6">
          <i class="bi bi-envelope"></i> willphotographyonline@gmail.com
        </p>
        <p class="display-6">
          <i class="bi bi-geo-alt"></i> Madison, WI
        </p>
        <img src={myPhoto} width={100} class="rounded" />
      </div>
    </>
  );
}
