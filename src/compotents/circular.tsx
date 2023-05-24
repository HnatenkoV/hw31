import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

function CircularColor() {
    return (
        <Stack sx={{ display: "flex",
            justifyContent: "center",
            mt: 50,
            color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="success" />
        </Stack>
    );
}

export default CircularColor;