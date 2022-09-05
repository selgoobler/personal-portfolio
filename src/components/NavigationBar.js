import React, { useState } from 'react';
import { Nav, Navbar, Container, NavLink, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import moon from '../images/moon.png';

export default function NavigationBar() {
  return (
    <>
      <Navbar
        bg='dark'
        variant='dark'
        style={{ maxHeight: '55px' }}
        className='container-fluid'
      >
        <Container>
          <Navbar.Brand>
            <Link
              style={{ textDecoration: 'none', color: '#818080' }}
              to='/'
              id='button'
            >
              <img src={moon} width='20' height='20' alt='hello' />
            </Link>
          </Navbar.Brand>
          <div
            className='container-fluid d-flex justify-content-between'
            style={{ fontWeight: 'bolder' }}
          ></div>
          <div>
            {' '}
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto '>
                <Nav.Link
                  style={{
                    fontWeight: 'bolder',
                    width: '6rem',
                  }}
                  href='https://github.com/selgoobler'
                >
                  GitHub
                </Nav.Link>
                <Nav.Link
                  style={{
                    fontWeight: 'bolder',
                    width: '6rem',
                  }}
                  href='https://www.linkedin.com/in/sselinang/'
                >
                  LinkedIn
                </Nav.Link>
                <div style={{ fontWeight: 'bolder', color: '#E4E4E5' }}>
                  <NavDropdown
                    title='Projects'
                    id='basic-nav-dropdown'
                    style={{ fontWeight: 'bolder', color: '#E4E4E5' }}
                  >
                    <NavDropdown.Item href='https://ready-to-roomba.herokuapp.com/'>
                      Ready To Roomba
                    </NavDropdown.Item>
                    <NavDropdown.Item href='https://yosheats.netlify.app/'>
                      Yosheats
                    </NavDropdown.Item>
                    <NavDropdown.Item href='https://youtube.com/shorts/3I4SPKlMwNA?feature=share'>
                      Nantendo List
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
