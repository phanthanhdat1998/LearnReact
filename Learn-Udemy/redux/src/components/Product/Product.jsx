import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { currencyChanged } from "../../store/actions/currencyActions";
import Item from "./Item";

const Product = () => {
    const list = [
        { name: "IP 7", price: 10000 },
        { name: "IP 8", price: 20000 },
        { name: "IP X", price: 30000 },
        { name: "IP 11",price: 40000 },
    ];
    const [listProduct, setListProduct] = useState(list);
    return (
        <div className="product">
            {listProduct.map((product, key) => {
                console.log(product);
                return <Item productsProp={product} key={key} />;

            })}
        </div>
    );
};

Product.PropsType = {
    currencys: PropTypes.string,
};

const mapStateToProps = (state) => ({
    currencys: state.currencys,
});

export default connect(mapStateToProps, { currencyChanged })(Product);
