import React from "react";
import ReactDOM from "react-dom/client";
/*
const heading = React.createElement("h1", {id : "heading", xyz : "abc"}, "Hello world from react!!");

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
*/

const parent = React.createElement(
    "div", 
    {id : "parent"}, 
    [
        React.createElement(
            "div", 
            {id: "child1"}, 
            [
                React.createElement("h1", {}, "react learning"),
                React.createElement("h2", {}, "Iam nested h2")
            ] 
        ),
        React.createElement(
            "div", 
            {id: "child2"}, 
            [
                React.createElement("h1", {}, "Iam nested h1"),
                React.createElement("h2", {}, "Iam nested h2")
            ] 
        )
    ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
    
root.render(parent);