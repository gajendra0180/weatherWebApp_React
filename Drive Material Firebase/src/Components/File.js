import React from "react";

export default function File({ file }) {
    console.log(file);
  return (
    <a
      href={file.url}
      target="_blank"
      className="btn btn-outline-dark text-truncate w-100"
    >
      {file.name}
    </a>
  );
}
