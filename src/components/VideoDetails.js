import React from 'react';

export default function VideoDetails(props){
       
    
                
        if(!props.video){
            return 'Loading ....'
        }

        // console.log(props.video.id.videoId)
        const url=`http://www.youtube.com/embed/${props.video.id.videoId}`;
        // console.log(url);
    return(
        <div>
        <iframe width="100%" height="440px" src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="videoPlayer"></iframe>
        <div className="ui segment">
            <h4 className="header">{props.video.snippet.title}</h4>
            <p>{props.video.snippet.description}</p>
        </div>
          
        </div>
    )

}
