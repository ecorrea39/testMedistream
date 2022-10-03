import './assets/styles.css';
import React, { useState } from 'react';

export const Exercise = () => {
  const movies = [
    {
      id: 1,
      name: 'Star Wars',
      price: 20,
    },
    {
      id: 2,
      name: 'Minions',
      price: 25,
    },
    {
      id: 3,
      name: 'Fast and Furious',
      price: 10,
    },
    {
      id: 4,
      name: 'The Lord of the Rings',
      price: 5,
    },
  ];

  const discountRules = [
    {
      m: [3, 2],
      discount: 0.25,
    },
    {
      m: [2, 4, 1],
      discount: 0.5,
    },
    {
      m: [4, 2],
      discount: 0.1,
    },
  ];

  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Star Wars',
      price: 20,
      quantity: 2,
    },
  ]);

  const addItemToCart = (movie) => {
    if (cart.find((x) => x.id === movie.id)) {
      return incrementQuantity(movie);
    }
    const newItem = { ...movie, quantity: 1 };
    return setCart([...cart, newItem]);
  };

  const deleteItem = (movie) => {
    if (cart.find((x) => x.id === movie.id)) {
      const newCart = cart.filter(function (car) {
        return car.id !== movie.id;
      });
      return setCart(newCart);
    }
  };

  const incrementQuantity = (movie) => {
    const newCart = cart.map((x) =>
      x.id === movie.id
        ? {
            ...x,
            quantity: x.quantity + 1,
          }
        : x
    );
    return setCart(newCart);
  };

  const decrementQuantity = (movie) => {
    if (movie.quantity - 1 === 0) return deleteItem(movie);

    const newCart = cart.map((x) =>
      x.id === movie.id
        ? {
            ...x,
            quantity: x.quantity - 1,
          }
        : x
    );
    return setCart(newCart);
  };

  const applyDiscount = (total) => {
    discountRules.forEach((rule) => {
      const apply = rule.m.map((id) => {
        return cart.findIndex((el) => el.id === id);
      });
      if (apply.includes(-1)) return apply;
      total -= total * rule.discount;
    });
    return total;
  };

  const getTotal = () => {
    const total = cart.reduce((acc, el) => acc + el.quantity * el.price, 0); // TODO: Implement this
    return applyDiscount(total);
  };

  return (
    <section className='exercise01'>
      <div className='movies__list'>
        <ul>
          {movies.map((o) => (
            <li className='movies__list-card'>
              <ul>
                <li>ID: {o.id}</li>
                <li>Name: {o.name}</li>
                <li>Price: ${o.price}</li>
              </ul>
              <button onClick={() => addItemToCart(o)}>Add to cart</button>
            </li>
          ))}
        </ul>
      </div>

      <div className='movies__cart'>
        <ul>
          {cart.map((x) => (
            <li className='movies__cart-card'>
              <ul>
                <li>ID: {x.id}</li>
                <li>Name: {x.name}</li>
                <li>Price: ${x.price}</li>
              </ul>
              <div className='movies__cart-card-quantity'>
                <button onClick={() => decrementQuantity(x)}>-</button>
                <span>{x.quantity}</span>
                <button onClick={() => incrementQuantity(x)}>+</button>
              </div>
            </li>
          ))}
        </ul>
        <div className='movies__cart-total'>
          <p>Total: ${getTotal()}</p>
        </div>
      </div>
    </section>
  );
};
