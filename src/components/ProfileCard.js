import React , {useState, useEffect} from 'react'
import validation from './validation';
import { useHistory } from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function QuestionComponent(question_id, title, author){
    return (<a href={"/question/"+question_id} style={{display:'block', color:'#f74a4a', marginTop:'10px', float:'left', width:'100%'}}>{title}</a>)
}

class ProfileCard extends React.Component{
    static getDerivedStateFromProps(props, current_state) {
        var ret = []
        if (current_state.username !== props.username) {
            ret['username'] = props.username

        }

        if(current_state.question_count !== props.question_count){
            ret['question_count'] = props.question_count
        }

        if(current_state.questions != props.questions){
            for(var key in props.questions){
                var d = props.questions[key]
                ret['questions'] = [ret['questions'], QuestionComponent(d.id, d.title, null)]
            }
        }
        console.log(ret)
        return ret
    }
    constructor(props){
        super(props);
        this.state = {username: props.username, question_count: props.question_count, reply_count: 23, questions:null};
        
    }


    render(){
        return(
            <div style={{width:'400px', position:'absolute', marginRight:'50%', right:'-200px'}}>
                <div style={{width:"300px",marginLeft:'50px'}}>
                    <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" style={{width:'100px', height:'100px', borderRadius:'50px', float:'left'}}></img>
                    <div style={{position:'relative', width:'200px', float:'right'}}>
                        <p style={{margin:'10px', width:'200px', textAlign:'center', fontWeight:'bold'}}>{this.state.username}</p>
        
                        <a style={{margin:'10px', color:'#F74A4A', display:'block'}} href="/profile/manage">Edit Profile</a>
                        <a style={{margin:'10px', color:'#F74A4A', display:'block'}} href="/post/question">Post a question</a>
                    </div>
                </div>

                <div style={{height:'50px', width:'100%', background:'grey' ,float:'left', marginTop:'10px'}}>
                    <div style={{width:'33.3%', height:'100%', float:'left'}}>
                        <p style={{width:'100%', textAlign:'center',margin:'0px',padding:'0px', marginTop:'9px', fontSize:'30px'}}>{this.state.question_count}</p>
                    </div>
                    <div style={{width:'33.3%', height:'100%', float:'left'}}>
                        <p style={{width:'100%', textAlign:'center',margin:'0px',padding:'0px', marginTop:'9px', fontSize:'30px'}}>{this.state.reply_count}</p>
                    </div>
                    <div style={{width:'33.3%', height:'100%', float:'left'}}>
                        <p style={{width:'100%', textAlign:'center',margin:'0px',padding:'0px', marginTop:'14px', fontSize:'25px', color:'white'}}>INBOX</p>
                    </div>
                </div>
                <div style={{width:'100%'}}>
                    <h2 style={{margin:'10px', marginBottom:'0px', width:'100%', 'textAlign':'center', float:'left'}}>Your Questions:</h2>
                    {this.state.questions}
                </div>
            </div>
        )
    }

};

export default ProfileCard;