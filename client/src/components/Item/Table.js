import React from 'react';

const Table = ({ props, children }) => (
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">SKU</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity on hand</th>
            </tr>
        </thead>
            <tbody>
                <tr>
                    <th scope="row" >{props.key}</th>
                    <td>{props.sku}</td>
                    <td>{props.productName}</td>
                    <td>{props.quantity}</td>
                </tr>
                    { children }   
            </tbody>
    </table>
);
 

export default Table;