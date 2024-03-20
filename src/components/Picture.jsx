import React from 'react';
import { useDrag } from 'react-dnd'

const Picture = ({nom, id}) => {

    const [{isDragging}, drag] = useDrag(() => ({
        type: "item",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div ref={drag} className='p-10 bg-gray-100 rounded border text-center m-2' style={{border: isDragging ? "5px solid red" : "0px"}}>
            {nom}
        </div>
    )
}

export default Picture;