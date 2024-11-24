import React from "react";

function AppMemo() {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [products, setProducts] = React.useState([]);

    const nameRef = React.useRef();

    const handleAddProduct = () => {
        setProducts([...products, {
            name, price: +price
        }])
        setName('');
        setPrice('');
        nameRef.current.focus();
    }

    const total = React.useMemo(() => {
        return products.reduce((total, product) => total + product.price, 0)
    }, [products])

    return (<div className={"container"}>
        <h1>AppMemo</h1>
        <input
            ref={nameRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"Product name"}
        />
        <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder={"Product price"}
        />
        <button
            className={"btn btn-primary"}
            onClick={handleAddProduct}
        >Add
        </button>
        <h2 className={'text-3xl'}>Total {total}</h2>
        <ul className={'list-item'}>
            {products.map((product, index) => (<li key={index}>{product.name} - {product.price}</li>))}
        </ul>
    </div>)
}

export default AppMemo;