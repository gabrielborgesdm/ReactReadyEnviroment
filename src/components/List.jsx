import React, { useState } from "react"
import Button from "./Button"

const customersJson = require("../customers.json")

export default function List(){

    const listCustomers = () => {
        let list = customers.map((customer, index)=>(
            <li key={customer.id}>{customer.name}
                <Button onClick={() => deleteCustomer(index)}>X</Button>
            </li>
        ))
        return list
    }

    const [customers, setCustomers] = useState(customersJson)
    const [customersList, setCustomersList] = useState(listCustomers())

    const deleteCustomer = (index) => {
        let newCustomers = customers
        let beforeIndex = index == 0 ? 0 : index 
        index = index == 0 ? 1 : index
        newCustomers.splice(beforeIndex, index)
        setCustomers(newCustomers)
        setCustomersList(listCustomers())
    }

    return (
        <ul>
            {(customersList != false) ? customersList : <li>There aren&apos;t any Customers</li>}
        </ul>
    )
}