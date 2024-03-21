import { memo } from "react";
import { useDrag } from "react-dnd";

const Image = memo(function Image({ name, type, isDropped, src, photo }) {

  console.log(photo);
  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { name, photo },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type, photo]
  );

  return (
    <div
      ref={drag}
      data-testid="image"
      className=" max-w-16 h-16 ml-10"

    >
      <img src={"img/" + src} alt={name} />
    </div>
  )
});

export default Image;