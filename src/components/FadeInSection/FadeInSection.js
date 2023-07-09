import { useState, useRef, useEffect } from "react";
import "./FadeInSection.css";

function FadeInSection(props) {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      const { current } = domRef;
      observer.observe(domRef.current);
      return () => observer.unobserve(current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }
  export default FadeInSection;