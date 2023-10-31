// const ClaimPV = () => {
//   return (
//     <div>
//       <div>
//         <label htmlFor="ReportImageTmp"></label>
//         <input
//           type="file"
//           name="data[Report][image_tmp][]"
//           className="form-control file"
//           autoComplete="off"
//           multiple="multiple"
//           accept="image/jpeg,image/gif,image/png,video/avi,video/msvideo,video/x-msvideo,video/mpeg,video/x-mpeg,video/quicktime,video/mp4,video/x-flv,application/x-mpegURL,video/3gpp"
//           data-show-upload="false"
//           data-allowed-file-types="image,video"
//           id="ReportImageTmp"
//         />
//       </div>
//     </div>
//   );
// };

// export default ClaimPV;

import { useState, useRef } from "react";
export default function FilePreviewer({ setInputData, inputData }) {
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const filePicekerRef = useRef(null);
  const [onSelectFile, setOnSelectFile] = useState("");
  function previewFile(e) {
    // Reading New File (open file Picker Box)
    const reader = new FileReader();
    // Gettting Selected File (user can select multiple but we are choosing only one)
    const selectedFile = e.target.files[0];
    setOnSelectFile(selectedFile.name);
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
    // As the File loaded then set the stage as per the file type
    reader.onload = (readerEvent) => {
      if (selectedFile.type.includes("image")) {
        setInputData({ ...inputData, img: selectedFile });
        setImagePreview(readerEvent.target.result);
      } else if (selectedFile.type.includes("video")) {
        setVideoPreview(readerEvent.target.result);
        setInputData({ ...inputData, video: selectedFile });
      }
    };
  }
  function clearFiles() {
    setImagePreview(null);
    setVideoPreview(null);
    setOnSelectFile("");
  }
  return (
    <div>
      <div className="">
        <input
          ref={filePicekerRef}
          accept="image/*, video/*"
          onChange={previewFile}
          type="file"
          hidden
        />
        {(imagePreview != null || videoPreview != null) && (
          <div className="border p-2 flex justify-between">
            <div>
              {imagePreview != null && (
                <img
                  className="w-[300px] h-[250px]"
                  src={imagePreview}
                  alt=""
                />
              )}
              {videoPreview != null && (
                <video
                  className="w-[300px] h-[250px]"
                  controls
                  src={videoPreview}
                ></video>
              )}
            </div>
            <div className="cursor-pointer " onClick={clearFiles}>
              X
            </div>
          </div>
        )}

        <div>
          <div className={`flex flex-col my-1 w-full`}>
            <label className="uppercase font-bold text-[#333] cursor-pointer"></label>
            <div className="flex">
              <input
                className="border-2 border-r-0 w-full border-primary py-1.5 px-3 outline-none focus:shadow-md rounded-l"
                type="text"
                disabled
                value={onSelectFile}
              />
              <p
                onClick={() => filePicekerRef.current.click()}
                className="cursor-pointer border-2 border-l-0 bg-primary text-white font-bold min-w-fit border-primary py-1.5 px-3 outline-none focus:shadow-md rounded-r"
              >
                Upload File
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
