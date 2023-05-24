import React from "react";
import "../css/css-material-ui/material-ui.css"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {Box} from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import {useNavigate} from "react-router-dom";
import TablePagination from "@mui/material/TablePagination";
import TableHeader from './tableHeader'
import {useSelector} from "react-redux";

interface Heroes {
    id: number;
    name: string;
    status: string;
}

interface IHeroList {
    heroes: Heroes[];
    component: string;
    rowsPerPageOptions: number[];
    count: number;
    rowsPerPage: number;
    page: number;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
    onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const HeroList: React.FC<IHeroList> = ({heroes,
                                               component,
                                               rowsPerPageOptions,
                                               count,
                                               rowsPerPage,
                                               page,
                                               onPageChange,
                                               onRowsPerPageChange,
                                           }) => {

    const navigate = useNavigate()
    const showInfo = (index: number) => {
        navigate(`hero/${index}`)
    }

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


    return <>
        <Box sx={{ width: 1050, margin: 'auto' }}>
            <TableContainer sx={{ }} component={Paper}>
                <Table  aria-label="simple table">
                    <TableHeader/>
                    <TableBody>
                        {heroes.map((hero: Heroes, index: number) =>
                            <StyledTableRow key={`hero-row-${index}`} onClick={() => showInfo(hero.id)}>
                                <StyledTableCell align="center">{hero.id}</StyledTableCell>
                                <StyledTableCell align="center">{hero.name}</StyledTableCell>
                                <StyledTableCell align="center">{hero.status}</StyledTableCell>
                            </StyledTableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination sx={{ }}
                             rowsPerPageOptions={[1]}
                             component={"div"}
                             count={count}
                             rowsPerPage={rowsPerPage}
                             page={page}
                             onPageChange={onPageChange}
                             onRowsPerPageChange={onRowsPerPageChange}
            />

        </Box>

    </>;

    // return (
    //     <>
    //         <Box sx={{ width: 1050, margin: 'auto' }}>
    //
    //             <TablePagination sx={{ }}
    //                              rowsPerPageOptions={[1]}
    //                              component={"div"}
    //                              count={props.count}
    //                              rowsPerPage={props.rowsPerPage}
    //                              page={props.page}
    //                              onPageChange={props.onPageChange}
    //                              onRowsPerPageChange={props.onRowsPerPageChange}
    //             />
    //
    //         </Box>
    //     </>
    // )
}


export default HeroList


// import HeroCard from "./heroCard";
// import EpisodeCard from "./episodeCard";
//
//
//
// const HeroList = (props) => {
//
//     return (
//         <div className= "hero-list">
//             <div>
//             {props.heroList?.results ? props.heroList.results.map((hero, index) => (
//                 <HeroCard hero={hero} index={index} key={`hero-card-${index}`}>{hero.name}</HeroCard>)) :
//                 props.EpisodeList?.results && props.EpisodeList.results.map((location, index) => (
//                 <EpisodeCard location={location} key={`location-card-${index}`}>{location.name}</EpisodeCard>))
//             }
//             </div>
//         </div>
//
//
//     )
// }
//
//
// export default HeroList