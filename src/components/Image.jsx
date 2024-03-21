import { memo } from "react";
import { useDrag } from "react-dnd";

const Image = memo(function Image({ name, type, isDropped, src, ifVisible }) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { name },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type]
  );
  
  return (
      ifVisible && (
          <div
          ref={drag}
          data-testid="image"
          className="text-xl bg-gray-200 p-4 rounded"

            >
        <img src={"img/" + src} alt={name} />
      </div>
    )
    );  
});

export default Image;