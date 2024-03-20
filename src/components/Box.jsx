import {memo} from 'react'
import { useDrag } from 'react-dnd'

const Box = memo(function Box({name, type, isDropped}) {
    const [{opacity}, drag] = useDrag(
        () => ({
            type,
            item: {name},
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.4 : 1,
            }),
        }),
        [name, type],
    )

    return (
        <div ref={drag} data-testid="box">
            {isDropped ? <s>{name}</s>: name}
        </div>
    )
})

export default Box;