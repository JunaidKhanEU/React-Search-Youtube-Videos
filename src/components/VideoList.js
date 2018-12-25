import React from 'react';
import VideoItem from './VideoItem'

export default function VideoList(props){
    let videos = props.videosData;
    
    
    
    let renderList = videos.map((video, index)=>{

       

       
       

        return(
             <VideoItem key={'videoItem'+index} video={video} onSelectVideoItem={props.onSelectVideo}/>
        )
    })


    return(
        <div className="ui relaxed divided list">
          {renderList}
        </div>
    )
}