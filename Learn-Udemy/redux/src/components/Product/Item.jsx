import React from "react";
import { PropTypes } from "prop-types";

const Item = ({ productsProp }) => {
    return (
        <div className="item">
            <div className="name-product">
                Name product: {productsProp.name}
            </div>
            <div className="price-product">Price: {productsProp.price}</div>
        </div>
    );
};

Item.propsType = {
    productsProp: PropTypes.object.isRequired,
};
// Item.propsDefault = {
//     productsProp: null
// }

export default Item;
