/// <reference path="../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as YTSearch from "youtube-api-search";

//Components
import { SearchBar } from './components/search_bar';

const YT_API_KEY = 'AIzaSyABe3QUeqYZFoZmhGOtmPRJjWAN6GyB9uM';

// YTSearch({key:YT_API_KEY, term: 'surf'}, function(data:any){
//     console.log(data);
// });

const App = () =>{
    return <div>Hello ReactJS! <SearchBar/> </div>
};

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
