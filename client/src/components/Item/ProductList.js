import React from 'react';
import Table from './Table';

export default class ProductList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      products: [
        { 
          sku: "12345",
          productName: 'iPhone X',
          quantity: 12
        },
        {
          sku: "23456",
          productName: 'iPad',
          quantity: 25
        },
        {
          sku: "45678",
          productName: 'Samsung Galaxy',
          quantity: 31
        },
        {
          sku: "56789",
          productName: 'iPhone 8',
          quantity: 3
        }
      ],
  }
 
}


  render() {
    console.log(this.state);

    const { sku, productName, quantity } = this.state;

    const initialProduct = this.state.products.map((product, i) =>
      <Table key={i}
            sku={this.state.products.sku}
            productName={this.state.products.productName}
            quantity={this.state.products.quantity}
           />
    )

    return (
      <div className="product-list">

        <Table> 
          {initialProduct}
        </Table>        

      </div>
    );
  }

};
