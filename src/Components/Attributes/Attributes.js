import React, { Component } from 'react'
import './Attributes.css'

class Attributes extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: this.props.selectedAttribute || {}
        }
    }

    itemClick = (attribute) => {
        this.props.attributeSelect(attribute)
        this.setState({selected: attribute})
    }

    render() {
        const {attributes} = this.props
        let li = attributes.map(attr => {
            let values = attr.values.map(val => {return val.name})
            return ( 
                <li key={attr.id}
                className={this.state.selected.id === attr.id ? 'selected': ''}
                onClick={() => this.itemClick(attr)}>
                {attr.name}: {values.join(', ')}
                </li>
            )

        })
        if (!li.length) {
            li = 'Loading . . .'
        }
        return (
           <div className='Attributes'>
               <ul>
                    {li}
               </ul>
           </div>
        )
    }


}



export default Attributes