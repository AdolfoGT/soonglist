import * as React from "react";
import * as ReactDOM from "react-dom";

// Method 1
// class App extends React.Component<any, any> {
//     render() {
//         return (
//             <div className="container">
//                 <h1>Hello ReactJS!</h1>
//             </div>
//         );
//     }
// }

// Method 2
const App = () =>{
    return <div>Hello ReactJS!</div>
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
