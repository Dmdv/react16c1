import '../css/main.css';
import {Component} from "react";

class ShopItemClass extends Component {
    render() {
        const {item} = this.props;

        const {brand, title, description, descriptionFull, currency, price} = item;

        return (
            <div className="main-content">
                <h2>{brand}</h2>
                <h1>{title}</h1>
                <h3>{description}</h3>
                <div className="description">{descriptionFull}</div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"/>
                </div>
                <div className="divider"/>
                <div className="purchase-info">
                    <div className="price">{currency}{price}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        )
    }
}

export default ShopItemClass;