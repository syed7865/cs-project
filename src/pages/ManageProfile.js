import React from 'react'
import ProfileCard from '../components/ProfileCard.js';
function data_row(key, data){
    return (<p style={{textAlign:'center', fontWeight:'bold'}}>{key}:<i style={{marginLeft:'10px', fontWeight:'lighter'}}>{data}</i></p>)
}

class ManageProfile extends React.Component{
    constructor(props){
        super(props)
        this.state = {username:'test'}
    }

    componentDidMount(){

    }

    render(){
        return (
            <div>

            </div>
        )
    }


    


}

export default ManageProfile