import React, { Component } from "react";
import "./App.css";
// import FileUpload from "./fileUpload";
import Table from "./Component/Table/Table";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <FileUpload/> */}
                <Table />
            </div>
        );
    }
}
