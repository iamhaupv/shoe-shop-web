import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from "react-dropzone";
import UpdateProductService from "../../services/product/UpdateProductService";
import FindProductByIdService from "../../services/product/FindProductByIdService";
import FindAllCategoriesService from "../../services/category/FindAllCategoriesService";

const AdminUpdateProduct = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [design, setDesign] = useState("");
  const [size, setSize] = useState("36");
  const [images, setImages] = useState([]);
  const [createdAt, setCreatedAt] = useState("");
  const [updateAt, setUpdateAt] = useState("");
  const [product, setProduct] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  // Find all categories
  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token invalid!");
        }
        const response = await FindAllCategoriesService(token);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchAllCategories();
  }, []);

  // Find product by id
  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token is missing");
        }
        const response = await FindProductByIdService(token, id);
        setProduct(response.data);
        setName(response.data.name);
        setQuantity(response.data.quantity.toString());
        setSelectedCategory(response.data.category._id);
        setPrice(response.data.price);
        setDescription(response.data.description);
        setColor(response.data.color);
        setMaterial(response.data.material);
        setSize(response.data.size);
        setDesign(response.data.design);
        setCreatedAt(response.data.createdAt);
        setUpdateAt(response.data.updateAt);
        setImages(response.data.images);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get("id");

    if (productId) {
      fetchProduct(productId);
    } else {
      console.warn("Product ID is missing in the URL query parameters.");
    }
  }, [location.search]);

  const handleSubmit = async () => {
    const confirmUpdate = window.confirm(
      "Bạn có chắc chắn muốn cập nhật sản phẩm này?"
    );
    if (!confirmUpdate) {
      return;
    }
    const queryParams = new URLSearchParams(location.search);
    const _id = queryParams.get("id");

    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Token invalid!");
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("quantity", quantity);
    formData.append("category", selectedCategory);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("color", color);
    formData.append("material", material);
    formData.append("design", design);
    formData.append("size", size);

    // Add images to formData
    images.forEach((image, index) => {
        if (image instanceof File) {
            formData.append("images", image);
        } else {
            formData.append(`existingImages[${index}]`, image);
        }
    });

    console.log("FormData content:");
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    const response = await UpdateProductService(token, _id, formData);
    console.log(response.data);
    navigate("/wp-admin/products/manager-products");
};


  // Return to previous page
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
    <div>
      {/* Return button */}
      <div>
        <button className="text-3xl" onClick={handleReturn}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      {/* Form table */}
      <div>
        <table>
          <tbody>
            {/* ID */}
            <tr>
              <td className="px-4 py-2 border-b">ID</td>
              <td className="px-4 py-2 border-b">{product._id}</td>
            </tr>
            {/* Name */}
            <tr>
              <td className="px-4 py-2 border-b">Name</td>
              <td className="px-4 py-2 border-b">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </td>
            </tr>
            {/* Quantity */}
            <tr>
              <td className="px-4 py-2 border-b">Quantity</td>
              <td className="px-4 py-2 border-b">
                <input
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </td>
            </tr>
            {/* Category */}
            <tr>
              <td className="px-4 py-2 border-b">Category</td>
              <td className="px-4 py-2 border-b">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full"
                >
                  <option value="" disabled>Select a category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            {/* Price */}
            <tr>
              <td className="px-4 py-2 border-b">Price</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </td>
            </tr>
            {/* Size */}
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
            {/* Description */}
            <tr>
              <td className="px-4 py-2 border-b">Description</td>
              <td className="px-4 py-2 border-b">
                <textarea
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </td>
            </tr>
            {/* Color */}
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
            {/* Material */}
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
            {/* Design */}
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
            {/* Image Upload Section */}
            <tr>
              <td className="px-4 py-2 border-b">Images</td>
              <td className="px-4 py-2 border-b">
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
                          src={image.preview ? image.preview : image}
                          alt={`Product preview ${index}`}
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
              </td>
            </tr>
            {/* CreatedAt */}
            <tr>
              <td className="px-4 py-2 border-b">CreatedAt</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={createdAt}
                  onChange={(e) => setCreatedAt(e.target.value)}
                  disabled
                />
              </td>
            </tr>
            {/* UpdateAt */}
            <tr>
              <td className="px-4 py-2 border-b">UpdateAt</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={updateAt}
                  onChange={(e) => setUpdateAt(e.target.value)}
                  disabled
                />
              </td>
            </tr>
            {/* Button submit */}
            <tr>
              <td className="px-4 py-2 border-b" colSpan="2">
                <button
                  className="border border-gray-300 rounded-md p-2 w-full bg-blue-500 text-white hover:bg-blue-600"
                  onClick={handleSubmit}
                >
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUpdateProduct;
