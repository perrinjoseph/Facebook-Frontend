import React, { useEffect, useState } from 'react'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from './Post'
import { useStateValue } from './StateProvider'
import axios from '../axios'
import Pusher from 'pusher-js';


function Feed() {
    
    const [post,setPost]=useState([])
    useEffect(()=>{
        axios.get("/posts").then(res=>{
            setPost(res.data)
        })
    },[])
    
    useEffect(()=>{
    // Pusher.logToConsole = true;

        const pusher = new Pusher('58a0828f61ce82332ee9', {
        cluster: 'us2'
        });

        const channel = pusher.subscribe('posts');
        channel.bind('insert', function(data) {
            setPost([...post,data])
        });
        return()=>{
            channel.unbind_all();
            channel.unsubscribe();
        }

    },[post])


    return (
        <div className="feed">
             <StoryReel />
             <MessageSender />
             {[...post].reverse().map(data=>
             (
                <>
                <Post 
                profilePic={data.user.photoURL}
                message= {data.post}
                timeStamp={data.timeStamp}
                imgName=""
                userName={data.user.displayName}
                />
                </>
             )
             )}
                
             
        </div>
    )
}

export default Feed
