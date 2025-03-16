import React from 'react';
import {AppBar, Box, Stack, Toolbar} from "@mui/material";
import ColorModeSwitcher from "@/components/Navbar/ColorModeSwitcher";
import Logo from "@/components/Logo/Logo";
import NavButtons from "@/components/Navbar/NavButtons";

export default async function Navbar() {

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Logo/>
                    <Box sx={{display: {xs: 'none', xl: 'flex',},}}>
                        <NavButtons/>
                    </Box>
                </Stack>
                <span style={{flexGrow: 1,}}></span>
                <Box>
                    <ColorModeSwitcher/>
                </Box>
            </Toolbar>
        </AppBar>
    );
}