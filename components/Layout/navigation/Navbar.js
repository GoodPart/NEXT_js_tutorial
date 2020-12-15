import React, {Component} from 'react';
import Link from 'next/link';
import { MenuItems } from './MenuItems';
import './index.less'

import { faTimes, faAd, faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Button} from './Button'

class Navbar extends Component {

    state = {
         clicked: false
         }
         
    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        
        const SignUpUrl = MenuItems[3].as;
        return (
            <nav className="NavbarItems">
                {/* <FontAwesomeIcon className="icons" icon={faTimes} /> */}
                <Link href="/">
                    <a className="navbar-logo">
                        <h1 className="">React<FontAwesomeIcon className="icons logo" icon={faAd} /></h1>
                    </a>
                </Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <FontAwesomeIcon className="icons" icon={this.state.clicked ? faTimes :  faBars} />

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : "nav-menu"}>
                    {
                        MenuItems.map((item, index)=> {
                            return (
                                <li key={index}>
                                    <Link href="[pagename]"  as={item.as}>
                                    <a className={item.cName}>{item.title}</a>
                                    </Link>

                                    {/* reactVersion-- <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a> */}
                                </li>
                            )
                        })
                    }

                    
                </ul>
                {/* <Button>
                    <Link href="[pagename]" as={SignUpUrl}>
                    <a>sign up</a>
                    </Link>
                </Button> */}
            </nav>
        )
    }
}

export default Navbar
