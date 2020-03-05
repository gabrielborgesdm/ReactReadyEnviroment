import React from "react"
import { connect } from "react-redux"

class Customers extends React.Component{
    state = {customers : []}


    add = (customer) => {
        this.props.dispatch({type: "ADD_CUSTOMER", customer: customer})
    }

    list = () => {
        return (
            this.props.customers.map((customer, index)=>
                <li key={index}> {customer.name}</li>
            )
        )
    }    

    render() {
        return (
            <div>
                <button onClick={() => this.add({ id: 45, name: "lucas" })}>Add +</button>
                <ul>
                    {this.list()}
                </ul>
            </div>
            
        )
    }
    
}

function mapStateToProps(state){
    return { customers: state.customers.customers }
}

export default connect(mapStateToProps)(Customers)