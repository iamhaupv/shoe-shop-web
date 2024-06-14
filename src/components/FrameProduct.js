const FrameProduct = ({imageName}) => {
  return (
    <div className="w-1/4 bg-blue-200 h-[500px] border-2 border-solid border-black overflow-hidden transition-transform hover:shadow-lg hover:scale-105">
      {/* img */}
      <div className="h-[350px] px-4 mt-4 w-full overflow-hidden">
        <img 
          src={imageName} 
          alt={imageName}
          className="object-cover w-full h-full transition-transform hover:scale-105" 
        />
      </div>
      {/* name */}
      <div className="px-4">
        <p>Jordan-1 là 1 đôi giày thể thao phù hợp với tất cả các thể loại</p>
      </div>
      {/* price */}
      <div className="px-4">
        <p>70000000$</p>
      </div>
      {/* đã bán */}
      <div className="px-4">
        <p>Đã bán 160</p>
      </div>
    </div>
  );
};

export default FrameProduct;