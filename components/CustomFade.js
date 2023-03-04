import { Children, cloneElement, useEffect, useRef, useState } from "react";

const CustomFade = ({ children }) => {
  const parentRef = useRef([]);
  const [fadeAdded, setFadeAdded] = useState(false);

  useEffect(() => {    
    const Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !fadeAdded) {
            entry.target.classList.add("fade-in");
            setFadeAdded(true);
          }
        });
      },
      { rootMargin: "0px 0px -20px 0px" }
    );
    parentRef?.current?.forEach((child) => Observer.observe(child));
  }, [fadeAdded]);

  return Children.map(children, (child, index) =>
    cloneElement(child, {
      className: `${child.props.className} fade-out`,
      ref: (ref) => (parentRef.current[index] = ref),
    })
  );
};

export default CustomFade;
