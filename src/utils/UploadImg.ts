const UploadImg = (image: any, setUrl: any) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "sitter");
  data.append("cloud_name", "athuld");
  fetch("  https://api.cloudinary.com/v1_1/athuld/image/upload", {
    method: "post",
    body: data,
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data.url);
      setUrl(data.url);
    })
    .catch((err) => console.log(err));
};

export default UploadImg;
