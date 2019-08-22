import React, { Component } from 'react';

class Header extends Component {

    hello = () => {
        console.log("Logo was cliked");
    }

    inputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <header>
                <div className='logo' onClick={this.hello}>Logo</div>
                <input onChange={this.inputChange} />
            </header>
        )
    }
}

export default Header;