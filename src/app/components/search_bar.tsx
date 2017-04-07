import * as React from "react";

export class SearchBar extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state = { term: '' };
    }

    render(){
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })}
                    type="text"
                />
            </div>
        );
    }
}