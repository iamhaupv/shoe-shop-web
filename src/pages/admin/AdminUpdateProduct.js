import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FindProductByIdService from "../../services/product/FindProductByIdService";
import UpdateProductService from "../../services/product/UpdateProductService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from "react-dropzone";
import FindAllCategoriesService from "../../services/category/FindAllCategoriesService";
const AdminUpdateProduct = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(Number);
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
  // find all category
  useEffect(() => {
    const fetchAllCategory = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token invalid!");
        }
        const response = await FindAllCategoriesService(token);
        setCategories(response.data);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchAllCategory();
  }, []);
  // find product by id
  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token is missing");
        }
        const response = await FindProductByIdService(token, id);
        console.log(response);
        setProduct(response.data);
        setName(response.data.name);
        setQuantity(response.data.quantity.toString());
        setSelectedCategory(response.category);
        setPrice(response.data.price);
        setDescription(response.data.description);
        setColor(response.data.color);
        setMaterial(response.data.material);
        setSize(response.data.size);
        setDesign(response.data.design);
        setCreatedAt(response.data.createdAt);
        setUpdateAt(response.data.updateAt);
        setImages(response.data.images)
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
    const productNew = { name, quantity };
    await UpdateProductService(token, _id, productNew);
    navigate("/wp-admin/manager-product");
  };
  // return
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
      {/* return */}
      <div>
        <button className="text-3xl" onClick={handleReturn}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      {/* table form */}
      <div>
        <table>
          <tbody>
            {/* id */}
            <tr>
              <td className="px-4 py-2 border-b">ID</td>
              <td className="px-4 py-2 border-b">{product._id}</td>
            </tr>
            {/* name */}
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
            {/* quantity */}
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
            {/* category */}
            <tr>
              <td className="px-4 py-2 border-b">Category</td>
              <td className="px-4 py-2 border-b">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            {/* price */}
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
            {/* Description */}
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
            {/* color */}
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
            {/* design */}
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
            {/* size */}
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
                      src={image}
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
            {/* createdAt */}
            <tr>
              <td className="px-4 py-2 border-b">CreateAt</td>
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
            {/* updateAt */}
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
            {/* button submit */}
            <tr>
              <td className="px-4 py-2 border-b">
                <input
                  type="button"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value="Update"
                  onClick={handleSubmit}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUpdateProduct;
