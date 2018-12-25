import React from 'react';

export default class SearchBar extends React.Component{

    constructor(props){
        super(props);

        this.inputRef = React.createRef();
        this.state={
            inputText:''
        }

    }

    onInputChange = (event)=>{

        this.setState({
            inputText:event.target.value
        })

        
    }

    onFormSubmit = (event)=>{
        event.preventDefault();
       let  formInputValue = this.state.inputText;

       this.props.onSubmit(formInputValue);
      
   
    }


    render(){

        return(
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field" >
                        <div style={{textAlign:'center',color:'#60DAFB'}}>
                        <span > Built-with-React</span>
                        </div>
                        
                        <label>Video Search </label>
                        <input ref={this.inputRef} type="text" value={this.state.inputText}
                        onChange={this.onInputChange}
                        />

                    </div>

                </form>

            </div>
            
        )
    }
}