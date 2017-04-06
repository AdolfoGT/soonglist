import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component<any, any> {
    render() {
        return (
            <div className="container">
                <h1>Hello ReactJS!</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
