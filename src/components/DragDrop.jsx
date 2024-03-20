import React, { useState } from 'react'
// import Picture from '../components/Picture'
// import { useDrop } from 'react-dnd'

const DragDrop = () => {

    // const PictureList = [
    //     {
    //         id: 1,
    //         item: "1"
    //     },
    //     {
    //         id: 2,
    //         item: "2"
    //     },
    //     {
    //         id: 3,
    //         item: "3"
    //     },
    // ]

    // const [board, setBoard] = useState([]);
    // const [{isOver}, drop] = useDrop(() => ({
    //     accept: "item",
    //     drop: (item) => addItemToBoard(item.id),
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver(),
    //     })
    // }));
    

    // const addItemToBoard = (id) => {
    //     if(board.length < 3){
    //         const itemList = PictureList.filter((item) => id === item.id);
    //         setBoard((board) => [...board, itemList[0]]);
    //     } else {
            
    //     }
    // }

    // console.log(board.length);

    return (
        <>
            {/* <div className='Pictures flex'>
                {PictureList.map((item) => {
                    return (
                        <Picture nom={item.item} id={item.id} key={item.id}/>
                    )
                })}
            </div>
            <div className='Board' ref={drop}>
                {board.map((item) => {
                    return <Picture nom={item.item} id={item.id} key={item.id} />
                })}
            </div> */}
        </>

    )
}

export default DragDrop;