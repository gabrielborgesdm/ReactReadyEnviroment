import React from "react"
import Counter from "./components/Counter"
import Customers from "./components/Customers"



function App(){
    return (
        <div>
            <h1>Customers List</h1>
            <Counter />
            <Customers />
        </div>
    )
}

export default App