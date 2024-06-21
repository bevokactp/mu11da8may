import React from "react";

export default function UserCart({ cartCourses, deleteCourseFromCart, calculationTotalAmount, setCartCourses }) {
    return (
    <div>
        <h2>My Cart</h2>
        {cartCourses.length === 0 
        ? (
        <p>your cart is empty.</p>
        ) : (
        <div>
            <ul>
                {cartCourses.map((item) => (
                    <li key={item.product.id}>
                        <img src={item.product.image} alt={item.product.name} />
                        <h3>{item.product.name}</h3>
                        <p>Price: ₹{item.product.price}</p>
                        <button onClick={() => deleteCourseFromCart(item.product)}>X</button>
                        <button onClick={(e) => {
                            setCartCourses((prevCartCourses) => {
                                const updatedCart = prevCartCourses.map(
                                (prevItem) =>
                                prevItem.product.id === item.product.id
                                        ? { ...prevItem, quantity: 
                                        item.quantity + 1 }
                                        : prevItem
                                );
                                return updatedCart;
                            })
                        }}>++</button>{item.quantity}
                        <button 
                            onClick={(e) => {
                            setCartCourses((prevCartCourses) => {
                                const updatedCart = prevCartCourses.map(
                                (prevItem) =>
                                prevItem.product.id === item.product.id
                                        ? { ...prevItem, quantity:
                                        Math.max(item.quantity - 1, 0) }
                                        : prevItem
                                );
                                return updatedCart;
                            })
                        }}>--</button>
                    </li>
                ))}
            </ul>
            <div>
                <p>Total Amount: ₹{calculationTotalAmount()} </p>
                <button disabled={cartCourses.length === 0 || calculationTotalAmount() === 0} >
                    Proceed to Payment
                </button>
            </div>
        </div>
        )}
        </div>
    );
}