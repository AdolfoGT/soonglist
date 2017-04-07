import * as React from "react";
import * as ReactDOM from "react-dom";

//Hack to require non ts modules
declare var require:(moduleId:string) => any;
var YTSearch = require("youtube-api-search");

//Components
import { SearchBar } from './components/search_bar';

const YT_API_KEY = 'AIzaSyABe3QUeqYZFoZmhGOtmPRJjWAN6GyB9uM';

var options = {
    key:YT_API_KEY, 
    term: 'la vela puerca'
};

YTSearch(options, function(data:any){
    console.log(data);
});

const App = () =>{
    return <div>Hello ReactJS! <SearchBar/> </div>
};

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
