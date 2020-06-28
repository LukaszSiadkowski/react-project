import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './Footer.css';


class Footer extends Component {
    state = {activeItem: "home"};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render () {
        const { activeItem } = this.state;


        return (
            <Segment inverted>
                <Menu inverted >
                    <Menu.Item style={{backgroundColor: 'blue', }}
                        as={Link}
                        to="/contact"
                        name="Contact"
                        active={activeItem === "contact"}
                        onClick={this.handleItemClick}
                     />
                                                      

                </Menu>
            </Segment>
        );
    };

   
};


export default Footer;
