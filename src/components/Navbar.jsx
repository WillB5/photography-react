import React from "react";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Navbar({ page, setPage }) {
  console.log("Navbar Page: " + page);
  return (
    <>
      <nav class="navbar navbar-expand-md bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Will Photography<i class="bi bi-camera p-2"></i>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a
                class={page == "Home" ? "nav-link active" : "nav-link"}
                aria-current="page"
                href="#"
                onClick={(event) => setPage("Home")}
              >
                Home
              </a>
              <a
                class={page == "Contact" ? "nav-link active" : "nav-link"}
                aria-current="page"
                href="#"
                onClick={(event) => setPage("Contact")}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
