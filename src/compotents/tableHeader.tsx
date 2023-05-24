import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import React from "react";

const TableHeader = () => (
    <TableHead>
        <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Status</TableCell>
        </TableRow>
    </TableHead>
);

export default TableHeader;