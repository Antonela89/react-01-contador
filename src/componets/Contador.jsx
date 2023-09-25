import { useState } from "react";
import { Button, ButtonGroup } from 'react-bootstrap';

const Contador = () => {
    const [contador, setContador] = useState(0);

    const click = (e) => {

        if(e.target.textContent === "-") {
            setContador(contador -1);
        }
        if(e.target.textContent === "+") {
            setContador(contador +1);
        }
        if(e.target.textContent === "reiniciar") {
            setContador(0);
        }
    }

    return (
        <div className="boton">
            <h1 className="text-center m-2">{contador}</h1>
            <ButtonGroup className="m-2 text-center" aria-label="botones">
                <Button className="me-2" variant="danger" onClick={click}>-</Button>
                <Button className="me-2" variant="warning" onClick={click}>reiniciar</Button>
                <Button className="me-2" variant="success" onClick={click}>+</Button>
            </ButtonGroup>
        </div>
    )
}

export default Contador
