import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import axios from "axios";
import "./table.css";
const { SearchBar } = Search;
const columns = [
    {
        dataField: "Serial No.",
        text: "Product ID",
    },
    {
        dataField: "first_name",
        text: "First Name",
    },
    {
        dataField: "last_name",
        text: "Last Name",
    },
];

function Table() {
    const [datainput, setdatainput] = useState([]);

    useEffect(async () => {
        await axios.get("https://reqres.in/api/users").then((res) => {
            console.log(res);
            setdatainput(res.data.data);
        });
    }, []);

    return (
        <div>
            <ToolkitProvider
                keyField="id"
                data={datainput}
                columns={columns}
                search
            >
                {(props) => (
                    <div>
                        <h3>Search for a team member:</h3>
                        <SearchBar {...props.searchProps} />
                        <hr />
                        <BootstrapTable {...props.baseProps} />
                    </div>
                )}
            </ToolkitProvider>
            ;
        </div>
    );
}

export default Table;
