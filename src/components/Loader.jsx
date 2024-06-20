import Lottie from 'lottie-react';
import animationData from '/public/Animation - 1718861120900.json'; 

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie animationData={animationData} style={{ width: 200, height: 200 }} />
    </div>
  );
}

export default Loader;
