import {memo} from 'react'
import { useDrop } from 'react-dnd'

const Emplacement = memo(function Emplacement({accepts, lastDroppedItem, onDrop}) {
    const [{isOver, canDrop}, drop] = useDrop({
        accept: accepts,
        drop: onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    const isActive = isOver && canDrop
    let backgroundColor = '#222'
    if (isActive) {
      backgroundColor = 'darkgreen'
    } else if (canDrop) {
      backgroundColor = 'darkkhaki'
    }

    return (
        <div ref={drop} data-testid="emplacement">
            {isActive ?  'Release to drop' : `this emplacement accept: ${accepts}`}
            {lastDroppedItem && (
                <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
            )}
        </div>
    )
})

export default Emplacement;