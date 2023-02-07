import React from "react";

export default function FooterComponent() {
  return (
    <>
      <div
        id="footer"
        className="text-center p-3 fixed-bottom"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", color: "white" }}
      >
        &copy; {new Date().getFullYear()} Copyright <span> @Stefandayy</span>
      </div>
    </>
  );
}