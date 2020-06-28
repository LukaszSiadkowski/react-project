import React { Component } from 'react';
import { Menu, input, segment, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import LanguageDropdown from './LanguageDropdown';
import './Header.css';
import { Component } from 'react';

class Header extends Component {
    state = {activeItem: "home"};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render () {
        const { activeItem } = this.state;


        return (
            <Segment inverted>
                <Menu inverted secondary>
                    <Menu.Item
                        as={Link}
                        to="/"
                        name="home"
                        active={activeItem === "home"}
                        onClick={this.handleItemClick}
                     />
                </Menu>
            </Segment>
        );
    };

   
};




import React from 'react';
import { Link } from 'react-router-dom';
import LanguageDropdown from './LanguageDropdown';
import './Header.css';

const Header = ({onLanguageChange}) => (

    <header>
       <nav>
          <ul style={{margin: 0}}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/psy">Doggy news</Link>
            </li>
            <li>
              <Link to="/help">Need some help?</Link>
            </li>
                 
           </ul>
          <LanguageDropdown onLanguageChange={onLanguageChange}/>
        </nav>
     </header>
 

);







