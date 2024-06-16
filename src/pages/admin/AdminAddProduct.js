import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProductService from "../../services/product/AddProductService";
import UploadImagesService from "../../services/product/UploadImagesService"; // Import the service
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from "react-dropzone";

const AdminAddProduct = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [images, setImages] = useState([]);
  const [size, setSize] = useState("36");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token invalid!");
      }

      const confirmAdd = window.confirm(
        "Bạn có chắc chắn muốn thêm sản phẩm này?"
      );
      if (confirmAdd) {
        // Upload images
        const uploadedImages = [];
        for (let image of images) {
          const uploadedImage = await UploadImagesService(token, image);
          uploadedImages.push(uploadedImage);
        }

        // Add product with uploaded image URLs
        await AddProductService(token, name, quantity, uploadedImages, size);

        navigate("/wp-admin/manager-product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleReturn = () => {
    navigate("/wp-admin/products/manager-products");
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const onDrop = (acceptedFiles) => {
    const updatedImages = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setImages([...images, ...updatedImages]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  return (
    <div className="p-6">
      {/* Return Button */}
      <div className="mb-4">
        <button
          onClick={handleReturn}
          className="text-2xl text-blue-600 hover:text-blue-800"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>

      {/* Image Upload Section */}
      <div className="mb-6">
        <div
          {...getRootProps()}
          className="border-dashed border-2 border-gray-400 p-6 rounded-md flex flex-col items-center cursor-pointer hover:border-blue-500"
        >
          <input {...getInputProps()} className="hidden" />
          <p className="text-gray-600 text-center">
            Kéo và thả hình ảnh hoặc click để chọn ảnh
          </p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Chọn ảnh
          </button>
        </div>
        {/* Image Preview */}
        <div className="mt-4 grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.preview}
                alt={`preview-${index}`}
                className="w-full h-48 object-cover rounded-md"
              />
              <button
                className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs hover:bg-red-600"
                onClick={() => handleRemoveImage(index)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Form */}
      <div className="mb-6">
        <table className="min-w-full border-collapse">
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b">Name</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Quantity</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Size</td>
              <td className="px-4 py-2 border-b">
                <select
                  value={size}
                  onChange={handleSizeChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                >
                  {["36", "37", "38", "39", "40", "41", "42", "43", "44"].map(
                    (sizeOption) => (
                      <option key={sizeOption} value={sizeOption}>
                        {sizeOption}
                      </option>
                    )
                  )}
                </select>
              </td>
            </tr>
            {/* button thêm sản phẩm */}
            <tr>
              <td colSpan="2" className="px-4 py-2 text-center">
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
                >
                  Thêm sản phẩm
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAddProduct;
