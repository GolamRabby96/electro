import React from 'react'
import './Manubar.css'

const Menubar = () =>{
    return(
        <header className="container-fluid dextopNavbarTop">
            <a className="logo" href="">Electro</a>
            <ul>
                <li>
                    <a href="">Laptop</a>
                </li>
                <li>
                    <a href="">Phone</a>
                </li>
                <li>
                    <a href="">Camera</a>
                </li>
                <li>
                    <a href="">Accessories</a>
                </li>
                <li>
                    <a href="">Laptop</a>
                </li>
                <li>
                    <a href="">Phone</a>
                </li>
                <li>
                    <a href="">Camera</a>
                </li>
                <li>
                    <a href="">Accessories</a>
                </li>
                <li>
                    <form action="">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </form>
                </li>
            </ul>
        </header>
    )
}

export default Menubar;