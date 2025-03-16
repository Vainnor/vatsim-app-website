import React from 'react';
import {AppBar, Box, Container, Stack, Toolbar, Tooltip, Typography} from "@mui/material";


export default function Footer() {


    return (
        <AppBar position="static" sx={{marginTop: 20}}>
            <Toolbar>
                <Container maxWidth="md" sx={{padding: 5,}}>
                    <Typography textAlign="center">&copy; 2025 Carson Berget, All
                        Rights Reserved.</Typography>
                    <Typography textAlign="center" fontWeight={700} sx={{marginTop: 2,}}>NOT FOR REAL WORLD
                    USE
                    </Typography>
                </Container>
            </Toolbar>
        </AppBar>
    );
}