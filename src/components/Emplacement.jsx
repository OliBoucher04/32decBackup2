import { memo } from 'react'
import { useDrop } from 'react-dnd'

const Emplacement = memo(function Emplacement({ accepts, lastDroppedItem, onDrop, src }) {
    const [{ isOver, canDrop }, drop] = useDrop({
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
        <div ref={drop} data-testid="emplacement" className='bg-amber-200 border-dashed border-orange-300 border-4 bg-opacity-30 h-full flex justify-center items-center w-[10vw] text-orange-300 font-medium text-3xl overflow-hidden'>
            {isActive ? '+' : lastDroppedItem ? '' : '?'}
            {lastDroppedItem && (
                <>
                <img src={"img/"+ lastDroppedItem.photo} alt="" className='object-cover w-[90%] h-[80%]'/>
                </>
            )}
        </div>
    )
})

export default Emplacement;