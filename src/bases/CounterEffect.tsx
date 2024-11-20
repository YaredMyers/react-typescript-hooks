import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT: number = 10;

const CounterEffect = () => {
  const [count, setCount] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCount((prev) => Math.min(prev + 1, MAXIMUM_COUNT));
  };

  useEffect(() => {
    if (count < 10) return;

    const timeline = gsap.timeline();
    timeline
      .to(counterElement.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(counterElement.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      });
  }, [count]);

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={counterElement}>{count}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default CounterEffect;
