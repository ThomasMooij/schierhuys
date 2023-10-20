import { useRef } from "react";

const topRef = useRef();

export const goToTop = () =>{
  const top = topRef.current.offsetTop
  window.scrollTo({
      top: top,
      behavior:"smooth"
  })
}