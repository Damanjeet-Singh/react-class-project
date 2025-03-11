export function ProductList() {
    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ];


    // ['Cabbage', 'Garlic', 'Apple']
    // const listItems = products.map(product =>
    //       { return product.title}

    // );
    // console.log(listItems);


    // const listItems = [
    //     <li key={products[0].id}>{products[0].title}</li>,
    //     <li key={products[1].id}>{products[1].title}</li>,
    //     <li key={products[2].id}>{products[2].title}</li>
    // ]

    const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    );


    // const listItems = [];

    // products.forEach((product) => {
    //     listItems.push(<li key={product.id}>{product.title}</li>)
    // })

    // return <>
    // <h1>Product list:</h1>
    // <ul>{listItems}</ul>
    // </>

    return <>
        <h1>Product list:</h1>
        <ul>{products.map(product => {
            return <li key={product.id}>
                {product.title}
            </li>
        })}</ul>
    </>
}