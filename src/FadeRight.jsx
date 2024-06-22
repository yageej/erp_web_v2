import { useEffect, useState } from "react";

const FadeRight = () => {
  const [animationClass, setAnimationClass] = useState("router-enter2");

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

export default FadeRight;
