import React from 'react';
import './video-item.css';

export default function VideoItem(props){
    
    // let key = props.video.id.videoId;
    let title = props.video.snippet.title;
    let img = props.video.snippet.thumbnails.medium.url;

    const onItemClick= (event)=>{
       
        props.onSelectVideoItem(props.video)

    }

    return(
        <div onClick={onItemClick} className="video-item item">
            <img className="ui image" src={img} alt={title}/>
            <div className="content">
            <div className="header">{title}</div>
            </div>
           
        </div>
    )
}