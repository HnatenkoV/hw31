import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from 'react-router-dom';
import "../css/css-material-ui/material-ui.css"
// import {useDispatch} from "react-redux";
// import {getCharacterAsync} from "../store/slices/rickAndMorty"
// import {AppDispatch} from "../store/store";

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    // const fetchHeroesList = () => dispatch(getCharacterAsync);
    // const dispatch = useDispatch<AppDispatch>();

    return (
        <Box mb={2} sx={{ width: "100%"}}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" component={Link} to="/"/>
                <BottomNavigationAction label="Heroes" component={Link} to="/heroes" />
                <BottomNavigationAction label="Episode" component={Link} to="/episodes" />
            </BottomNavigation>
        </Box>
    );
}


// import React from 'react';
// import {Link} from "react-router-dom";
// import "../css/style.css"
//
// const Header = () => {
//     return (
//         <header className="header">
//             <img className="rm-img" src="https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png" alt=""/>
//             <nav className="nav-sec">
//                 <Link className="nav-link" to="/">Home</Link>
//                 <Link className="nav-link" to="/heroes">Heroes</Link>
//                 <Link className="nav-link" to="/episodes">Episode</Link>
//             </nav>
//         </header>
//     )
// };
//
// export default Header;