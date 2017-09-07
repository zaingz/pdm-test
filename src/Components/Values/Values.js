import React, { Component } from 'react'
import './Values.css'

class Values extends Component {

    constructor (props) {
        super (props)
       
        this.state = {
            selectedValIDs : []
        }
       
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedAttribute.values) {
            const selectedValIDs = nextProps.selectedAttribute.values.map(val => val.id)
            this.setState({ selectedValIDs: selectedValIDs })
        }
    }

    getRankColor(rank) {
        switch (rank) {
            case 1:
                return 'green'
            case 2:
                return 'orange'
            case 3:
                return 'red'
            default:
            return ''
        }
    }

    selectValue = (val) => {
        let selectedIDs = this.state.selectedValIDs
        let updatedIDs = [...new Set(selectedIDs.concat([val.id]))]
        if (updatedIDs.length !== selectedIDs.length && this.props.selectedAttribute.values){
            this.props.valueSelect(this.props.selectedAttribute, val)
            this.setState({ selectedValIDs: updatedIDs })
        } else
            alert('Already selected or Missing Attribute')

    }

    render() {

        const {values} = this.props
        let li = values
            .sort((a, b) => {return a.rank - b.rank})
        
        .map( val => {
           
            const className = '' + this.getRankColor(val.rank) + ' ' + (this.state.selectedValIDs.includes(val.id) ? 'selected' : '')
            return <li key={val.id} onClick={()=> this.selectValue(val)} className={className}>{val.name}</li>
        })
        if (!li.length) {
            li = 'Loading . . .'
        }
        return (
            <div className='Values'>
                <ul>
                    {li}
                </ul>
            </div>
        )
    }


}



export default Values