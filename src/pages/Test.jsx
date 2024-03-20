// import React, { useState, useRef } from 'react';

// const Test = () => {

//     const [people, setPeople] = useState([
//         { id: 1, name: 'John Doe', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, illo?' },
//         { id: 2, name: 'Max Walters', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, illo?' },
//         { id: 3, name: 'Adam Smith', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, illo?' },
//         { id: 4, name: 'Tom Johnson', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, illo?' }
//     ])

//     const dragPerson = useRef(0);
//     const draggedOverPerson = useRef(0);

//     const handleSort = () => {
//         const peopleClone = [...people];
//         const temp = peopleClone[dragPerson.current]; //La person drag
//         peopleClone[dragPerson.current] = peopleClone[draggedOverPerson.current]; //Échanger les positions
//         peopleClone[draggedOverPerson.current] = temp; //Échanger les positions
//         setPeople(peopleClone); //Nouvel ordre
//         console.log(peopleClone)
//         console.log(draggedOverPerson);
//     }

//     return (
//         <main className='flex min-h-screen flex-col items-center space-y-4'>
//             <h1 className='text-xl font-bold mt-4'>List</h1>
//             <div className='flex space-x-3'>
//             {people.map((person, index) => (
//                 <div key={index}
//                     className="relative flex  border rounded p-2 bg-gray-100"
//                     draggable
//                     onDragStart={() => (dragPerson.current = index)}
//                     onDragEnter={() => (draggedOverPerson.current = index)}
//                     onDragEnd={handleSort}
//                     onDragOver={(e) => e.preventDefault()}
//                 >
//                     <p>{person.name || 'Empty Slot'}</p>
//                 </div>
//             ))}
//             </div>


//             <div className='flex space-x-3'>
//                 {people.map((person, index) => (
//                     <div key={index}
//                         className="relative flex space-x-3 border rounded p-2 bg-gray-100"
//                         draggable
//                     >
//                         <p>Empty</p>
//                     </div>
//                 ))}
//             </div>
//         </main>
//     )
// }

// export default Test;


// import React from 'react'
// import { HTML5Backend } from 'react-dnd-html5-backend'
// import { DndProvider } from 'react-dnd'
// import DragDrop from '../components/DragDrop'
// import './Test.css'

// const Test = () => {

//     return (
//         <DndProvider backend={HTML5Backend}>
//             <div className='App'>
//                 <DragDrop />
//             </div>
//         </DndProvider>
//     )
// }

// export default Test;


import React from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Container from '../components/Container'
import './Test.css'

const Test = () => {

    return (
        <DndProvider backend={HTML5Backend}>
            <div className='App'>
                <Container />
            </div>
        </DndProvider>
    )
}

export default Test;
