import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {   
    const [contador, setContador] = useState(initial);

    return (
        <>
            <div class="contador">
                <button type="button" class="btn btn-primary down" onClick={() => setContador((c) => (c>0)? c-1:c)}>-</button>
                <input class="form-control" type="number" value={contador}></input>
                <button type="button" class="btn btn-primary up" onClick={() => setContador((c) => (c<stock)? c+1:c)}>+</button>
            </div>
            <button type="button" class="btn btn-danger" onClick={(e) => onAdd(e,contador)}>Agregar al Carrito</button>
        </>
    )
};

export default ItemCount;