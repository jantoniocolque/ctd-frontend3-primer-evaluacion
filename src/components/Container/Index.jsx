import { Component } from "react";
import data from '../../data/data.json';

import Opcions from '../Opcions/Index';
import Footer from '../Footer/Footer'
export default class Container extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <>
                <main className="layout">
                    <Opcions data={data}/>
                </main>
                <Footer />
            </>
        )
    }
}