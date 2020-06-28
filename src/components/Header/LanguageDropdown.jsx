import React from 'react';
import './LanguageDropdown.css'

const languages = ['pl', 'en', 'ar', 'de', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh'];

class LanguageDropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }

    onValueChange = (e) => {
        const value = e.target.value;
        this.setState({ value });
        this.props.onLanguageChange(value);
    };

       render() {

       
      
        return (


            <div id="language">
            <select onChange={this.onValueChange}>
                {languages.map((lang, index) => (
                    <option key={index} value={lang} >{lang}</option>                ))}
              
            </select>
            </div>
        )
    }
};


export default LanguageDropdown;