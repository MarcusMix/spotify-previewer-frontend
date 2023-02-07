//react
import { FC, useRef } from "react";

//draggable
import { useDraggable } from "react-use-draggable-scroll";

//types
import DraggableItemsProps from "./draggable-items.types";

const DraggableItems:FC<DraggableItemsProps> = ({children}) => {
  // We will use React useRef hook to reference the wrapping div:
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  return (
    <div
      className="select-none flex gap-6 overflow-x-scroll scrollbar-hide"
      {...events}
      ref={ref} // add reference and events to the wrapping div
    >
      {children}
    </div>
  );
}

export default DraggableItems