import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ReactRoundedImage from "react-rounded-image";
import MyPfp from "../../images/pfp.jpg";
import { Typography } from "@mui/material";
import "./menu.css"
const Menu = () => {
    return (
        <div className="menu display-flex flex-column">
            <ReactRoundedImage roundedSize="0"
            image={MyPfp}/>
            <Typography className="margin-top-10" style={{marginTop:"10%"}} fontFamily={"futura"} fontWeight={900} variant="h5">
                Haleema Shahid
            </Typography>
            <Typography className="margin-top-10" fontFamily={"montserrat"} >
                software engineer
            </Typography>
            <ButtonGroup
                orientation="vertical"
                aria-label="Vertical button group"
                variant="text"
                className="margin-top-10">
                <Button className="menu-button">Home</Button>
                <Button className="menu-button">About</Button>
                <Button className="menu-button">Experience</Button>
                <Button className="menu-button">Education</Button>
            </ButtonGroup>
            <Typography className="margin-top-10" color="black" textAlign={"center"} fontFamily={"montserrat"} style={{
                marginTop:"10%"
            }}>
                copyright bla bla copyright bla bla copyright bla bla copyright bla bla copyright bla bla
            </Typography>
        </div>
    );
};

export default Menu;
