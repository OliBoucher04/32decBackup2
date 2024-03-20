import update from 'immutability-helper';
import { memo, useCallback, useState, useEffect } from 'react';
import { NativeTypes } from 'react-dnd-html5-backend';
import Box from './Box'
import Dustbin from './Dustbin'

const Container = memo(function Container() {
    const [dustbins, setDustbins] = useState ([
        {accepts: "item", lastDroppedItem: null, id:"1"},
        {accepts: "item", lastDroppedItem: null, id:"2"},
        {accepts: "item", lastDroppedItem: null, id:"3"},
    ])

    const reponse = ["1", "2", "3"];

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

    // useEffect(() => {
    //     const allBoxesDropped = dustbins.every((dustbin, index) => {
    //         return dustbin.lastDroppedItem?.name;
    //     });
    
    //     const userReponse = dustbins.lastDroppedItem?.name.join("");
    //     const laReponse = reponse.join("");

    //     if (allBoxesDropped) {
    //         setWinMessage("Bravo !");
    //     }
    //     {dustbins.map((choix, index) => {
    //         return choix.lastDroppedItem?.name;
    //     })}

    //     console.log(laReponse, userReponse)
    // }, [dustbins]);
    // // console.log(dustbins);

    useEffect(() => {
        const allBoxesDropped = dustbins.every((dustbin) => dustbin.lastDroppedItem !== null);
    
        if (allBoxesDropped) {

            const userResponseOrder = dustbins.map((dustbin) => dustbin.lastDroppedItem.name);

            const isCorrectOrder = userResponseOrder.join("") === reponse.join("");
    
            if (isCorrectOrder) {
                setWinMessage("Bravo !");
            }
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