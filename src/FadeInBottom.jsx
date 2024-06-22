import { useEffect, useState } from "react";

const FadeInBottom = () => {
  const [animationClass, setAnimationClass] = useState("router-enter3");

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

export default FadeInBottom;
