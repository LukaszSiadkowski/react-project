import React from 'react';
// import Select from 'react-select'
import './CategoryDropdown.css'




// const CategoryDropdown = () => (
//     <Select options={options} />
//   )


class CategoryDropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }

    onValueChange = (e) => {
        const value = e.target.value;
        this.setState({ value });
        this.props.onCategoryChange(value);
    }

    // options = [
    //     {
    //         value: 'business',
    //         label: 'business'
    //     },
    //     {
    //         value: 'entertainment',
    //         label: 'entertainment'
    //     },
    //     {
    //         value: 'general',
    //         label: 'general'
    //     }
    // ]

    render() {

        // const {value} = this.state;
      
        return (



            <select onChange={this.onValueChange}>
                <option value="business">Biznes</option>
                <option value="entertainment">entertainment</option>
                <option value="general">General</option>
                <option value="health">health</option>
                <option value="science">science </option>
                <option value="sports">sports</option>
                <option value="technology">technology</option>
            </select>

            // <
            // Select onChange = "changeState"
            // options = {
            //    this.options
            // }
            // />
        )
    }
};


export default CategoryDropdown;