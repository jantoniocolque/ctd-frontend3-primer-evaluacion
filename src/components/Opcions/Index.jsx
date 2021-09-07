import { Component } from "react";

export default class Opcions extends Component{
    constructor(props){
        super(props)

        this.state = {
            count:1,
            ...this.props.data[0],
            data: this.props.data,
            listOptions: []
        }
    }
    handdleOption = (event) =>{
        if(this.state.count <5){
            let newCount = this.state.count + 1;
            const cod = newCount.toString().concat(event.target.outerText.toLowerCase());
            const newOption = this.state.data.find(element=>element.id == cod);
            
            const option = newOption.id.substr(1,1);

            this.setState((prevStatus)=>({
                count: newCount,
                id: newOption.id,
                historia: newOption.historia,
                opciones: {
                    a:newOption.opciones.a,
                    b:newOption.opciones.b
                },
                listOptions: [...prevStatus.listOptions,prevStatus.opciones[""+option.toLowerCase()]]
            }))
        }else{
            alert("FIN");
        }
        
    }

    componentDidUpdate(){
        const option = this.state.id.substr(1,1);
        const optionChosen = document.querySelector("#prevOptionChosen");
        optionChosen.innerHTML=`Selecion anterior: ${option.toUpperCase()}`;
    }

    render(){
        const {historia,opciones:{a,b}, listOptions} = this.state;
        return(
            <>
                <h1 className="historia">{historia}</h1>
                <div className="opciones">
                    <div className="opcion">
                        <button onClick={this.handdleOption} className="botones">A</button>
                        <h2>{a}</h2>
                    </div>
                    
                    <div className="opcion">
                        <button onClick={this.handdleOption} className="botones">B</button>
                        <h2>{b}</h2>
                    </div>
                </div>
                <div className="recordatorio">
                    <div>
                    <h3 id="prevOptionChosen">Selecion anterior: </h3>
                    </div>
                    <div>
                        <h4>Historial de opciones elegidas:</h4>
                        <ul></ul>
                        {listOptions.map((op,i) =><li key={i.toString() + op.substr(1,1)}>{op}</li>)}
                    </div>
                </div>
            </>
        )
    }
}