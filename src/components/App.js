import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';
import VidepDetail from './VideoDetails';

export default class APP extends React.Component{

    state={
        videos:[],
        selectedVideo:null
    }

    componentDidMount(){

        this.onTermSubmit('cute cats')
    }
    onTermSubmit= async (term)=>{

        // console.log(term);
        const response = await youtube.get('/search',{
            params:{
                q:term
            }

        })

        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        })
        

    }

    onSelectedVideo = (selectVideo)=>{

        

        this.setState((prevState,props)=>{
           return{
            selectedVideo:selectVideo
           } 
        })

        // console.log(this.state.selectedVideo);

    }

    render(){

        return(
            <div className="ui container">
               <SearchBar onSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                    <VidepDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                    <VideoList videosData={this.state.videos}
                    onSelectVideo ={this.onSelectedVideo}/>
                    </div>

                

                </div>
               

                </div>
               
              
               
             

            </div>
        )

    }
    

}

