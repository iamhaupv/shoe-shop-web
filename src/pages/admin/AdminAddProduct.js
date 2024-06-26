import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddProductService from "../../services/product/AddProductService";
import FindAllCategoriesService from "../../services/category/FindAllCategoriesService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useDropzone } from "react-dropzone";

const AdminAddProduct = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [design, setDesign] = useState("");
  const [size, setSize] = useState("36");
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [nameError, setNameError] = useState(false); // error name
  const [iconName, setIconName] = useState(false); // icon name
  const [quantityError, setQuantityError] = useState(false); // error quantity
  const [iconQuantity, setIconQuantity] = useState(false); // icon quantity
  const [categoryError, setCategoryError] = useState(false); // category error
  const [iconCategory, setIconCategory] = useState(false); // icon category
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
  const navigate = useNavigate(); // navigate

  // Fetch categories from API on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token invalid!");
        }

        const response = await FindAllCategoriesService(token);
        setCategories(response.data); // Assuming response.data is an array of categories
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
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

  // regex name
  const regexName = async (value) => {
    const regex = /^[a-zA-Z\s]+$/;
    if (value === "" || !regex.test(value)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  // handle change name
  const handleChangeName = (e) => {
    regexName(e.target.value.trim());
    setName(e.target.value);
    setIconName(false);
  };
  // handle blur name
  const handleBlurName = (e) => {
    regexName(e.target.value);
    setIconName(true);
  };
  // regex quantity
  const regexQuantity = async (value) => {
    const regex = /^[1-9][0-9]*$/;
    if (value === "" || !regex.test(value)) {
      setQuantityError(true);
    } else {
      setQuantityError(false);
    }
  };
  // handle change quantity
  const handleChangeQuantity = (e) => {
    regexQuantity(e.target.value.trim());
    setQuantity(e.target.value);
    setIconQuantity(false);
  };
  // handle blur quantity
  const handleBlurQuantity = (e) => {
    regexQuantity(e.target.value);
    setIconQuantity(true);
  };
  // handle change category
  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value);
    if (e.target.value === "") {
      setCategoryError(true);
    } else {
      setCategoryError(false);
    }
  };
  // handle blur category
  const handleBlurCategory = () => {
    if (selectedCategory === "") setIconCategory(true);
  };
  // regex price
  const regexPrice = (value) => {
    const regex = /^[1-9]\d*$/;
    if (value === "" || !regex.test(value)) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }
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
    const regex = /^[\w\s]{0,1000}$/;
    if (value === "" || !regex.test(value)) setDesError(true);
    else setDesError(false);
  };
  // handle change description
  const handleChangeDes = (e) => {
    regexDes(e.target.value);
    setDescription(e.target.value);
    setIconDes(false);
  };
  // handle blur description
  const handleBlurDes = (e) => {
    regexDes(e.target.value);
    setIconDes(true);
  };
  // regex color
  const regexColor = (value) => {
    const regex = /^[\w\s]{0,50}$/;
    if (value === "" || !regex.test(value)) setColorError(true);
    else setColorError(false);
  };
  // handle change color
  const handleChangeColor = (e) => {
    regexColor(e.target.value);
    setColor(e.target.value);
    setIconColor(false);
  };
  // handle blur color
  const handleBlurColor = (e) => {
    regexColor(e.target.value);
    setIconColor(true);
  };
  // regex material
  const regexMaterial = (value) => {
    const regex = /^[\w\s]{0, 100}$/;
    if (value === "" || regex.test(value)) setMaterialError(true);
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
  // regex design
  const regexDesign = (value) => {
    const regex = /^[\w\s]{0,100}$/;
    if (value === "" || !regex.test(value)) setDesignError(true);
    else setDesignError(false);
  };
  // handle change design
  const handleChangeDesign = (e) => {
    regexDesign(e.target.value);
    setDesign(e.target.value);
    setIconDesign(false);
  };
  // handle blur design
  const handleBlurDesign = (e) => {
    regexDesign(e.target.value);
    setIconDesign(true);
  };
  // Handle form submission
  const handleSubmit = async () => {
    // Trigger blur events to validate all fields
    handleBlurName({ target: { value: name } });
    handleBlurQuantity({ target: { value: quantity } });
    handleBlurCategory();
    handleBlurPrice({ target: { value: price } });
    handleBlurDes({ target: { value: description } });
    handleBlurColor({ target: { value: color } });
    handleBlurMaterial({ target: { value: material } });
    handleBlurDesign({ target: { value: design } });
  
    // Delay to ensure state updates before checking
    setTimeout(async () => {
      // Check all validation conditions before proceeding
      if (
        !name ||
        nameError ||
        !quantity ||
        quantityError ||
        !selectedCategory ||
        categoryError ||
        !price ||
        priceError ||
        !description ||
        desError ||
        !color ||
        colorError ||
        !material ||
        materialError ||
        !design ||
        designError
      ) {
        // Display error messages or handle invalid form submission
        console.error("Invalid form data, please check all fields.");
        return;
      }
  
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token invalid!");
        }
  
        // Prepare form data
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
        images.forEach((image) => {
          formData.append("images", image);
        });
  
        await AddProductService(token, formData);
        navigate("/wp-admin/products/manager-products");
      } catch (error) {
        console.error("Error adding product:", error);
      }
    }, 0);
  };
  
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
      {/* Title */}
      <div>
        <h1 className="text-4xl font-bold flex justify-center text-red-400">
          Form Add Shoes
        </h1>
      </div>
      {/* Product Details Form */}
      <div className="mb-6 mt-6">
        <table className="w-full border-collapse table-fixed">
          <tbody>
            {/* name */}
            <tr>
              <td className="px-4 py-2 border-b">Name</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  value={name}
                  onBlur={handleBlurName}
                  onChange={handleChangeName}
                  className={`border border-gray-300 rounded-md p-2 w-full ${
                    nameError ? "border-red-500" : ""
                  }`}
                />
              </td>
              <td>
                {iconName &&
                  (nameError ? (
                    <span className="text-red-500 font-bold">*</span>
                  ) : (
                    <span className="text-green-500 font-bold">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  ))}
              </td>
            </tr>
            {/* quantity */}
            <tr>
              <td className="px-4 py-2 border-b">Quantity</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  value={quantity}
                  onChange={handleChangeQuantity}
                  onBlur={handleBlurQuantity}
                  className={`border border-gray-300 rounded-md p-2 w-full 
                    ${quantityError ? "border-red-500" : ""}`}
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
            {/* category */}
            <tr>
              <td className="px-4 py-2 border-b">Category</td>
              <td className="px-4 py-2 border-b">
                <select
                  value={selectedCategory}
                  onChange={handleChangeCategory}
                  onBlur={handleBlurCategory}
                  className={`border border-gray-300 rounded-md p-2 w-full ${
                    categoryError ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Select a category...</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                {iconCategory &&
                  (categoryError ? (
                    <span className="text-red-500">*</span>
                  ) : (
                    <span className="text-green-500">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  ))}
              </td>
            </tr>
            {/* price */}
            <tr>
              <td className="px-4 py-2 border-b">Price</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  value={price}
                  onChange={handleChangePrice}
                  onBlur={handleBlurPrice}
                  className={`border border-gray-300 rounded-md p-2 w-full ${
                    priceError ? "border-red-500" : ""
                  }`}
                />
              </td>
              <td>
                {iconPrice &&
                  (priceError ? (
                    <span className="text-red-500">*</span>
                  ) : (
                    <span className="text-green-500">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  ))}
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
            {/* description */}
            <tr>
              <td className="px-4 py-2 border-b">Description</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
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
            {/* color */}
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
                  onBlur={handleBlurColor}
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
            {/* material */}
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
            {/* design */}
            <tr>
              <td className="px-4 py-2 border-b">Design</td>
              <td className="px-4 py-2 border-b">
                <input
                  type="text"
                  className={`border border-gray-300 rounded-md p-2 w-full ${
                    designError ? "border-red-500" : ""
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
          </tbody>
        </table>
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
