import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { ROOT_FOLDER } from "../Hooks/useFolder";
import { Link } from "react-router-dom";

export default function FolderBreadcrumbs({ currentFolder }) {
  let path = currentFolder == ROOT_FOLDER ? [] : [ROOT_FOLDER];
  if (currentFolder) {
    // console.log("Hi I am here", currentFolder);
    if (currentFolder.path) path = [...path, ...currentFolder.path];
  }
  return (
    <>
      <Breadcrumb
        className="flex-grow-1"
        listProps={{ className: "bg-white pl-3 m-0" }}
      >
        {path.map(
          (folder, index) =>
            folder && (
              <Breadcrumb.Item
                className="text-truncate d-inline pl-6 text-sm"
                // style={{  }}
                key={folder.id}
                linkAs={Link}
                linkProps={{
                  to: {
                    pathname: folder.id ? `/folder/${folder.id}` : "/drive",
                    state: {
                      folder: { ...folder, path: path.slice(1, index) },
                    },
                  },
                }}
              >
                {folder.name}
              </Breadcrumb.Item>
            )
        )}
        {currentFolder && (
          <Breadcrumb.Item
            className="text-truncate d-inline pl-6 text-4xl"
            active
          >
            {currentFolder.name}
          </Breadcrumb.Item>
        )}
      </Breadcrumb>
    </>
  );
}
