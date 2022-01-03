import React from "react";
import AddFolderButton from "./Components/AddFolderButton";
import AddFileButton from "./Components/AddFileButton";
import Navbar from "./Components/Navbar";
import { useFolder } from "./Hooks/useFolder";
import Folder from "./Components/Folder";
import { useParams, useLocation } from "react-router-dom";
import File from "./Components/File";
import FolderBreadcrumbs from "./Components/FolderBreadcrumbs";

export const Drive = () => {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders, childFiles } = useFolder(
    folderId,
    state.folder
  );

  return (
    <>
      <Navbar />
      <div style={{ marginLeft: "5vw" }}>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AddFileButton currentFolder={folder} />
            <AddFolderButton currentFolder={folder} />
          </div>
        </div>
        {childFolders && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "150px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {/* {console.log(childFiles.length)} */}
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFiles && (
          <div className="d-flex flex-wrap">
            {childFiles.map((childFile) => (
              <div
                key={childFile.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
