import React from "react";
import CheckIcon from "../Icons/CheckCircleSolid";
import UploadIcon from "../Icons/UploadSolid";

const ImageUploadButton = ({ onChange, file }) => {
    return (
        <button className="image-upload-button" style={{ borderColor: file ? "#2E9C33" : "#97CD99" }}
            onClick={() => { document.querySelector(".input-field").click() }} >
            <input type="file" onChange={(e) => { onChange(e.target.files[0]) }} className="input-field" hidden />
            {file ?
                (
                    <>
                        <CheckIcon className="img-up-icon" />
                        <p>Foto dipilih</p>
                    </>
                ) : (
                    <>
                        <UploadIcon className="img-up-icon" />
                        <p>Unggah foto</p>
                    </>
                )}
        </button>
    );
};

export default ImageUploadButton;