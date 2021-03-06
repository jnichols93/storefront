import React from "react";
import "../Styles/Subtotal.scss";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getCartTotal } from "../reducer";
import { Link, useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      {/* price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items):<strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input className="gift__box" type="checkbox" /> This order
              contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        className="subtotal__button"
        onClick={(e) => {
          history.push("/payment");
        }}
      >
        proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
