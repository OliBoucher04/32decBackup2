import update from 'immutability-helper';
import { memo, useCallback, useState } from 'react';
import { NativeTypes } from 'react-dnd-html5-backend';
import Box from './Box'
import Dustbin from './Dustbin'

const Container = memo(function Container() {
    const [dustbins, setDustbins] = useState ([
        {accepts: "item", lastDroppedItem: null, id:"1"},
        {accepts: "item", lastDroppedItem: null, id:"2"},
        {accepts: "item", lastDroppedItem: null, id:"3"},
    ])

    const [boxes] = useState([
        {name: '1', type: "item", id:"1"},
        {name: '2', type: "item", id:"2"},
        {name: '3', type: "item", id:"3"},
    ]);

    const [droppedBoxNames, setDroppedBoxNames] = useState([])
    const [winMessage, setWinMessage] = useState(null);

    const isDropped = (boxName) => {
        return droppedBoxNames.indexOf(boxName) > 1
    }

    const handleDrop = useCallback(
        (index, item) => {
            const {name} = item;
            setDroppedBoxNames(
                update(droppedBoxNames, name? {$push: [name]} : {$push: []}),
            )
            setDustbins(
                update(dustbins, {
                    [index]: {
                        lastDroppedItem: {
                            $set: item,
                        }
                    }
                }),
            )


        },
        [droppedBoxNames, dustbins]
    )

    useEffect(() => {
        const allBoxesDropped = dustbins.every((dustbin, index) => {
            console.log(dustbin.lastDroppedItem?.name, index + 1);
            return dustbin.lastDroppedItem?.name === `${index + 1}`;
        });
    
        if (allBoxesDropped) {
            setWinMessage("Bravo !");
        }
    }, [dustbins]);

    return (
        <div>
            <div>
                {dustbins.map(({accepts, lastDroppedItem}, index) => (
                    <Dustbin 
                    accepts={accepts}
                    lastDroppedItem={lastDroppedItem}
                    onDrop={(item) => handleDrop(index, item)}
                    key={index}
                    />
                ))}
            </div>

            <div>
                {boxes.map(({name, type}, index) => (
                    <Box 
                    name={name}
                    type= {type}
                    isDropped={isDropped(name)}
                    key={index}
                    />
                ))}
            </div>
            {winMessage && <div>{winMessage}</div>}
        </div>
    )
})

export default Container;