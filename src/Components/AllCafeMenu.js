import React from 'react'
import '../assets/styles/Newapp.css';
import CardComponent from './CardComponent';
import { Menu } from '../assets/basic/Menu';


function AllCafeMenu() {
    return (
        <>
            {Menu.map(function (val) {
                return (
                    <CardComponent
                        key={val.id}
                        image={val.image}
                        price={val.price}
                        category={val.category}
                        Description={val.Description}
                    />
                )
            })};
        </>
    )
}

export default AllCafeMenu