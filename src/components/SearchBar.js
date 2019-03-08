import React from 'react';

class SearchBar extends React.Component {
    //naming convention, "on or handle" "name of the el" "action"
    // onInputChange(event){
    //     console.log(event.target.value);
    // }

    state = { term: ""};

    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit = {this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/* by leaving off the () the function only called in the future 
                         with exception of using => function, it will only invoke in the future*/}
                        <input 
                            type="text" 
                            value = {this.state.term} 
                            onChange={(e)=> this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;