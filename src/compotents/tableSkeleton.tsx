import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Skeleton from "@mui/material/Skeleton";
import React from "react";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableHeader from './tableHeader'
import {Box} from "@mui/material";

interface ITableSkeleton {
    rowsPerPage: number;
}

const TableSkeleton: React.FC<ITableSkeleton> = (props) => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <Box sx={{width: 1050, margin: 'auto'}}>
            <TableContainer sx={{}} component={Paper}>
                <Table aria-label="simple table">
                    <TableHeader/>
                    <TableBody>
                        {[...Array(props.rowsPerPage)].map((_, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell align="center"><Skeleton/></StyledTableCell>
                            <StyledTableCell align="center"><Skeleton/></StyledTableCell>
                            <StyledTableCell align="center"><Skeleton/></StyledTableCell>
                        </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default TableSkeleton;