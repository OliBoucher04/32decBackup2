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
