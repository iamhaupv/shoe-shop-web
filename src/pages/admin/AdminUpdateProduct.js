import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
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
  const [nameError, setNameError] = useState(false); // name error
  const [iconName, setIconName] = useState(false); // icon name
  const [quantityError, setQuantityError] = useState(false); // quantity error
  const [iconQuantity, setIconQuantity] = useState(false); // icon quantity
  const [priceError, setPriceError] = useState(false); // price error
  const [iconPrice, setIconPrice] = useState(false); // icon price
  const [desError, setDesError] = useState(false); // description error
  const [iconDes, setIconDes] = useState(false); // icon description
  const [colorError, setColorError] = useState(false); // color error
  const [iconColor, setIconColor] = useState(false); // icon color
  const [materialError, setMaterialError] = useState(false); // material error
  const [iconMaterial, setIconMaterial] = useState(false); // icon material
  const [designError, setDesignError] = useState(false); // design error
  const [iconDesign, setIconDesign] = useState(false); // icon design
  const location = useLocation(); // location
  const navigate = useNavigate(); // navigate

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
  // regex name
  const regexName = (value) => {
    const regex = /^[\w\d\s]{1,100}$/;
    if (value === "" || !regex.test(value)) setNameError(true);
    else setNameError(false);
  };
  // handle change name
  const handleChangeName = (e) => {
    setName(e.target.value);
    regexName(e.target.value);
    setIconName(false);
  };
  // handle blur name
  const handleBlurName = (e) => {
    regexName(e.target.value);
    setIconName(true);
  };
  // regex quantity
  const regexQuantity = (value) => {
    const regex = /^[1-9][\d]{1,4}$/;
    if (value === "" || !regex.test(value)) setQuantityError(true);
    else setQuantityError(false);
  };
  // handle change quantity
  const handleChangeQuantity = (e) => {
    regexQuantity(e.tartge.value);
    setQuantity(e.target.value);
    setIconQuantity(false);
  };
  // handle blur quantity
  const handleBlurQuantity = (e) => {
    regexQuantity(e.target.value);
    setIconQuantity(true);
  };
  // regex price
  const regexPrice = (value) => {
    const regex = /^[1-9][\d]{1,8}$/;
    if (value === "" || !regex.test(value)) setPriceError(true);
    else setPriceError(false);
  };
  // handle change price
  const handleChangePrice = (e) => {
    regexPrice(e.target.value);
    setPrice(e.target.value);
    setIconPrice(false);
  };
  // handle blur price
  const handleBlurPrice = (e) => {
    regexPrice(e.target.value);
    setIconPrice(true);
  };
  // regex description
  const regexDes = (value) => {
    const regex = /^[\w\d\s]{1,1000}$/;
    if (regex === "" || !regex.test(value)) setDesError(true);
    else setDesError(false);
  };
  // handle change description
  const handleChangeDes = (e) => {
    regexDes(e.target.value);
    setDescription(e.target.value);
    setIconDes(false);
  };
  const handleBlurDes = (e) => {
    regexDes(e.target.value);
    setIconDes(true);
  };
  // regex color
  const regexColor = (value) => {
    const regex = /^[\w\d\s]{0,50}$/;
    if (value === "" || !regex.test(value)) setColorError(true);
    else setColorError(false);
  };
  // handle change color
  const handleChangeColor = (e) => {
    regexColor(e.target.value);
    setColor(e.target.value);
    setIconColor(false);
  };
  // hanle blur color
  const hanleBlurColor = (e) => {
    regexColor(e.target.value);
    setIconColor(true);
  };
  // regex material
  const regexMaterial = (value) => {
    const regex = /^[\w\d\s]{1,100}$/;
    if (value === "" || !regex.test(value)) setMaterialError(true);
    else setMaterialError(false);
  };
  // handle change material
  const handleChangeMaterial = (e) => {
    regexMaterial(e.target.value);
    setMaterial(e.target.value);
    setIconMaterial(false);
  };
  // handle blur material
  const handleBlurMaterial = (e) => {
    regexMaterial(e.target.value);
    setIconMaterial(true);
  };
  const regexDesign = (value) => {
    const regex = /^[\w\s\d]{1,100}$/;
    if (value === "" || !regex.test(value)) setDesignError(true);
    else setDesignError(false);
  };
  // handle change design
  const handleChangeDesign = (e) => {
    regexDesign(e.target.value);
    setDesign(e.target.value);
    setIconDesign(false);
  };
  // handle blur desgin
  const handleBlurDesign = (e) => {
    regexDesign(e.target.value);
    setIconDesign(true);
  };
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
                  onChange={handleChangeName}
                  onBlur={handleBlurName}
                  value={name}
                  type="text"
                  className={`border border-gray-300 rounded-md p-2 w-full ${
                    nameError ? "border-red-500" : ""
                  }`}
                />
              </td>
              <td>
                {iconName &&
                  (nameError ? (
                    <span className="text-red-500">*</span>
                  ) : (
                    <span className="text-green-500">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  ))}
              </td>
            </tr>
            {/* Quantity */}
            <tr>
              <td className="px-4 py-2 border-b">Quantity</td>
              <td className="px-4 py-2 border-b">
                <input
                  onBlur={handleBlurQuantity}
                  onChange={handleChangeQuantity}
                  value={quantity}
                  type="text"
                  className={`border border-gray-300 rounded-md p-2 w-full ${
                    quantityError ? "border-red-500" : ""
                  }`}
                />
              </td>
              <td>
                {iconQuantity &&
                  (quantityError ? (
                    <span className="text-red-500">*</span>
                  ) : (
                    <span className="text-green-500">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  ))}
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
                  className={`border border-gray-300 rounded-md p-2 w-full ${
                    priceError ? "border-red-500" : ""
                  }`}
                  value={price}
                  onChange={handleChangePrice}
                  onBlur={handleBlurPrice}
                />
              </td>
              <td>
                {iconPrice &&
                  (priceError ? (
                    <span className="text-red-500">*</span>
                  ) : (
                    <span className="text-green-500 ">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  ))}
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
                  className={`border border-gray-300 rounded-md p-2 w-full ${
                    desError ? "border-red-500" : ""
                  }`}
                  value={description}
                  onChange={handleChangeDes}
                  onBlur={handleBlurDes}
                />
              </td>
              <td>
                {iconDes &&
                  (desError ? (
                    <span className="text-red-500">*</span>
                  ) : (
                    <span className="text-green-500">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  ))}
              </td>
            </tr>
            {/* Color */}
            <tr>
              <td className="px-4 py-2 border-b">Color</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  className={`border border-gray-300 rounded-md p-2 w-full ${
                    colorError ? "border-red-500" : ""
                  }`}
                  value={color}
                  onChange={handleChangeColor}
                  onBlur={hanleBlurColor}
                />
              </td>
              <td>
                {iconColor &&
                  (colorError ? (
                    <span className="text-red-500">*</span>
                  ) : (
                    <span className="text-green-500">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  ))}
              </td>
            </tr>
            {/* Material */}
            <tr>
              <td className="px-4 py-2 border-b">Material</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  className={`border border-gray-300 rounded-md p-2 w-full ${
                    materialError ? "border-red-500" : ""
                  }`}
                  value={material}
                  onChange={handleChangeMaterial}
                  onBlur={handleBlurMaterial}
                />
              </td>
              <td>
                {iconMaterial &&
                  (materialError ? (
                    <span className="text-red-500">*</span>
                  ) : (
                    <span className="text-green-500">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  ))}
              </td>
            </tr>
            {/* Design */}
            <tr>
              <td className="px-4 py-2 border-b">Design</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  className={`border border-gray-300 rounded-md p-2 w-full ${
                    desError ? "border-red-500" : ""
                  }`}
                  value={design}
                  onChange={handleChangeDesign}
                  onBlur={handleBlurDesign}
                />
              </td>
              <td>
                {iconDesign &&
                  (designError ? (
                    <span className="text-red-500">*</span>
                  ) : (
                    <span className="text-green-500">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  ))}
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
