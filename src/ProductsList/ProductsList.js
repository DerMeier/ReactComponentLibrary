import React, { Component } from 'react';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url = "https://api.predic8.de:443/shop/products/";

        fetch(url)
            .then(fruitShopProducts => fruitShopProducts.json())
            .then(fruitShopProductsJson => {
                this.setState({
                    products: fruitShopProductsJson.products
                })
            });
    }

    render() {
        const { products } = this.state;

        const productListItems = products.map((product, index) => {
            return <li key={index}>{product.name}</li>;
        });

        return <ul>{productListItems}</ul>;
    }
}

export default ProductsList;