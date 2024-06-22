import { useEffect, useState } from "react";

const AnimationPerRoute = () => {
  const [animationClass, setAnimationClass] = useState("router-enter");

  useEffect(() => {
    const timeoutid = setTimeout(() => {
      setAnimationClass("");
    }, 500);

    return () => {
      clearTimeout(timeoutid);
    };
  });

  return animationClass;
};

export default AnimationPerRoute;
