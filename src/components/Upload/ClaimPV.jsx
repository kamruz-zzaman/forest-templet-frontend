const ClaimPV = () => {
  return (
    <div>
      <div>
        <label htmlFor="ReportImageTmp"></label>
        <input
          type="file"
          name="data[Report][image_tmp][]"
          class="form-control file"
          autocomplete="off"
          multiple="multiple"
          accept="image/jpeg,image/gif,image/png,video/avi,video/msvideo,video/x-msvideo,video/mpeg,video/x-mpeg,video/quicktime,video/mp4,video/x-flv,application/x-mpegURL,video/3gpp"
          data-show-upload="false"
          data-allowed-file-types="image,video"
          id="ReportImageTmp"
        />
      </div>
    </div>
  );
};

export default ClaimPV;
