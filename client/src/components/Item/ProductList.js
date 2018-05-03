import React from 'react';
// import Table from './Table';

export default class ProductList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      product: "",
      sku: "",
      productName: "",
      quantity: "",
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

 

  // axios({
  //   url: '/products',
  //   method: 'GET'
  // })
  // .then((response) => console.log("Axios Products Response: ", response.data))
  // .catch((error) => console.log("Axios Product List Error: ", error.response.data));
 
}

  render() {
    console.log(this.state);

      const initialProductState = this.state.products.map((product, sku, productName, quantity, index) => {
        return (
          <tr>
            <th scope="row" key={index} > {index} </th>
              <td>  {product.sku} </td>
              <td > {product.productName} </td>
              <td > {product.quantity} </td>
        </tr>
        )          
      });

    return (
      <div className="product-list">
        <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">SKU</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Quantity on hand</th>
                    </tr>
                </thead>
                    <tbody>

                      { initialProductState }
                     
                           
                    </tbody>
          </table>
      </div>
    );
  }

};
