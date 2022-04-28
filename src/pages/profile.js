import React from 'react'
import ProfileCard from '../components/ProfileCard.js';
function data_row(key, data){
    return (<p style={{textAlign:'center', fontWeight:'bold'}}>{key}:<i style={{marginLeft:'10px', fontWeight:'lighter'}}>{data}</i></p>)
}

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {}


    }

    componentDidMount(){
        window.API.user_profile(window.API.getCookie('public_token')).then(res => {
            console.log(res)
            this.setState({username: res.username, question_count: res.question_count, questions: res.questions})
            this.render()
        })
    }

    render(){
        return (
            <div>
                <ProfileCard username={this.state.username} question_count={this.state.question_count} questions={this.state.questions}>
                </ProfileCard>
            </div>
        )
    }


    


}

export default Profile