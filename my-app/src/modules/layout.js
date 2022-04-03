import { Outlet, Link } from "react-router-dom";
import styled from 'styled-components'

const Layout = () => {

    let Nav = styled.nav`

    ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 10px;

        li{
            list-style-type: none;
            background-color: black;
            text-align: center;
            border-radius: 5px;
        }

        a{
            text-decoration: none;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
        }

    }

    `

    return (
        <>
            <Nav>
                <ul>
                    <li>
                        <Link to="/">Shop</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </Nav>

            <Outlet />
        </>
    )
};

export default Layout;