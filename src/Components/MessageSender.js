import React, {useState} from 'react'
import { Avatar, Input } from '@material-ui/core'
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import axios from '../axios.js'


function MessageSender() {
    const [input, setInput] = useState('');
    const [{user,posts},dispatch] = useStateValue();
    //For the file upload

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(input)
        {
            axios.post("/post/create",
            {
                user:user,
                post:input,
                timeStamp:String(new Date().toUTCString())
            })       

            setInput('');
        }
    }

    return (
        <div className="messageSender">
            <div className = "messageSender__top">
                    <Avatar src={user.photoURL} />
                    <form type="submit">
                        <input type="text" className="messageSender__input" placeholder="Whats on your mind?" onChange={(e)=>setInput(e.target.value)}
                        value = {input}
                        ></input>
                        <input className="" placeholder="Img upload working progress"></input>
                        <button onClick={handleSubmit}  type="submit">Send</button>
                    </form>
            </div>

            <div className="messageSender__bottom">
                <div className = "messageSender__option">
                    <VideocamIcon style={{color: 'red'}}/>
                    <h4>Live Video</h4>
                </div>
                
                <div className = "messageSender__option">
                    <PhotoLibraryIcon style={{color: 'green'}}/>
                    <h4>Photo/Video</h4>
                </div>
                
                <div className = "messageSender__option">
                    <InsertEmoticonIcon style={{color: 'orange'}}/>
                    <h4>Feeling Activity</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
