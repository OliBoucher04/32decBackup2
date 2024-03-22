import { memo, useState } from "react";
import { useDrag } from "react-dnd";
import {etoile} from '../assets'

const Image = memo(function Image({ name, type, isDropped, src, photo, newImg }) {
  const [isNewImg, setIsNewImg] = useState(true);
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
      className=" max-w-16 h-16 ml-10 relative"
      onDoubleClick={() => setIsNewImg(false)}

    >
      <img src={"img/" + src} alt={name} />
      {isNewImg && (
        <img src={etoile} alt={name} className="absolute w-5 -right-1 top-1"/>
      )}
    </div>
  )
});

export default Image;