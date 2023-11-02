import axios from "axios";
import { useState, useRef } from "react";
export default function FilePreviewer({
  setInputData,
  inputData,
  imagePreview,
  setImagePreview,
  // videoPreview,
  // setVideoPreview,
  onSelectFile,
  setOnSelectFile,
  setImgUrl,
  setLoading,
}) {
  const filePicekerRef = useRef(null);
  function previewFile(e) {
    setLoading(true);
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
      }
    };
    let formData = new FormData();

    formData.append("image", selectedFile);
    formData.append("key", `${import.meta.env.VITE_IMGBB_API_KEY}`);

    axios
      .post("https://api.imgbb.com/1/upload", formData)
      .then((res) => {
        setImgUrl(res.data.data.url);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("Error uploading image. Upload Again");
      });

    // formData.append("image", selectedFile);

    // fetch("https://api.imgur.com/3/image", {
    //   method: "POST",
    //   headers: {
    //     Authorization: "Client-ID 8169f595a9b5794",
    //   },
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setImgUrl(data.data.link);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     alert("Error uploading image to Imgur. Upload Again");
    //   });
  }
  function clearFiles() {
    setImagePreview(null);
    setOnSelectFile("");
  }
  return (
    <div>
      <div className="">
        <input
          ref={filePicekerRef}
          accept="image/*,"
          onChange={previewFile}
          type="file"
          hidden
        />
        {imagePreview != null && (
          <div className="border p-2 flex justify-between">
            <div>
              {imagePreview != null && (
                <img
                  className="w-[300px] h-[250px]"
                  src={imagePreview}
                  alt=""
                />
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
