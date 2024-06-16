import axios from "axios";
import GlobalHost from "../../GlobalHost";

const UploadImagesService = async (token, file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      `${GlobalHost.host_product}/upload-images`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default UploadImagesService;
