import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo1.svg'
import basketSvg from '../assets/basket.svg'
import emptyBasketSvg from '../assets/emptybasket.svg'

export default function Header(props) {
    const { cartCount, cartActive = false } = props;

    return (
        <header className="between block center wrap">
            <div className="align-center">
                <img src={logo} width ={150} height ={150} alt="logo"></img>
            </div>
            {cartActive ? (
                <div className="p-sides-10">

                    {cartCount ? (

                        <Link to={"/checkout"} >
                            <div className="center-flex">
                                <span className="a">Your cart</span>
                                <span className="cart-count">{cartCount}</span>
                                <img src={basketSvg} width="30" height="30" alt="basket" className="p-10"></img>

                            </div>
                        </Link>

                    ) : (
                        <div className="center-flex">
                            <span className="a">Your cart</span>
                            <span className="cart-count blue">0</span>
                            <img src={emptyBasketSvg} width="30" height="30" alt="basket" className="p-10"></img>
                        </div>

                    )}
                </div>
            ) : null
            }
        </header>

    )
}
