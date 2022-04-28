import React from 'react'
import ProfileCard from '../components/ProfileCard.js';
function data_row(key, data){
    return (<p style={{textAlign:'center', fontWeight:'bold'}}>{key}:<i style={{marginLeft:'10px', fontWeight:'lighter'}}>{data}</i></p>)
}

class ViewQuestion extends React.Component{
    constructor(props){
        super(props)
        this.state = {}


    }

    componentDidMount(){
        console.log(window.location.href.split('/')[4])
        window.API.question_get(window.location.href.split('/')[4]).then(res => {
            console.log(res)
            this.setState({title:res.title, question: res.question})
            this.render()
        })
    }

    render(){
        return (
            <div style={{width:'400px', position:'absolute', marginRight:'50%', right:'-200px'}}>
                <h1 style={{width:'100%', textAlign:'center', textTransform:'capitalize', color:'#f74a4a'}}>{this.state.title}</h1>
                <p style={{margin:'10px', padding:'auto', fontSize:"20px", width:'100%'}}>{this.state.question}</p>
            </div>
        )
    }


    


}

export default ViewQuestion