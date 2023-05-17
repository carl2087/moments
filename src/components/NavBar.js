import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";

const NavBar = () => {

    const currentUser = useCurrentUser();
    const addPostIcon = (
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to='/posts/create'>
            <i className="far fa-plus-square"></i>Add post
        </NavLink>
    )

    const loggedInIcons =
    <>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to='/feed'>
            <i className="fas fa-stream"></i>Feed
        </NavLink>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to='/liked'>
            <i className="fas fa-heart"></i>Liked
        </NavLink>
        <NavLink className={styles.NavLink} to='/' onClick={() => {}}>
            <i className="fas fa-sign-out-alt"></i>Sign out
        </NavLink>
        <NavLink className={styles.NavLink} to={`/profiles/${currentUser?.profile_id}`} >
            <Avatar src={currentUser?.profile_image} text='Profile' height={40} />
        </NavLink>
    </>
    const loggedOutIcons = (
    <>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to='/signin'>
            <i className="fas fa-sign-in-alt"></i>Sign in
        </NavLink>
        <NavLink className={styles.NavLink} activeClassName={styles.Active} to='/signup'>
            <i className="fas fa-user-plus"></i>Sign up
        </NavLink>
    </>
    );

    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
        <Container>
            <NavLink to='/'>
                <Navbar.Brand>
                    <img src={logo} alt="logo" height="45"/>
                </Navbar.Brand>
            </NavLink>
            {currentUser && addPostIcon}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-left">
                <NavLink className={styles.NavLink} activeClassName={styles.Active} exact to='/'>
                    <i className="fas fa-home"></i>Home
                </NavLink>
                {currentUser ? loggedInIcons : loggedOutIcons}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavBar;
