import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProductService from "../../services/product/AddProductService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from "react-dropzone";

const AdminAddProduct = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [design, setDesign] = useState("");
  const [size, setSize] = useState("36");
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token invalid!");
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("quantity", quantity);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("color", color);
      formData.append("material", material);
      formData.append("design", design);
      formData.append("size", size);

      images.forEach((image) => {
        formData.append("images", image);
      });

      await AddProductService(token, formData);

      navigate("/wp-admin/products/manager-products");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Navigate back
  const handleReturn = () => {
    navigate("/wp-admin/products/manager-products");
  };

  // Handle file drop
  const onDrop = (acceptedFiles) => {
    const updatedImages = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setImages([...images, ...updatedImages]);
  };

  // Remove image from preview
  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  // Setup dropzone configuration
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
            Drag and drop images here or click to select images
          </p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Choose images
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
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setQuantity(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Category</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Price</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Size</td>
              <td className="px-4 py-2 border-b">
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
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
            <tr>
              <td className="px-4 py-2 border-b">Description</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Color</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Material</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Design</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={design}
                  onChange={(e) => setDesign(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Submit Button */}
      <div className="mb-6">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AdminAddProduct;
