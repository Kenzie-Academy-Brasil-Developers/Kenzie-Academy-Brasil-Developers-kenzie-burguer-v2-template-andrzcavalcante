import { createContext, useEffect, useState } from 'react';
import { IDefaultProviderProps, IProducts } from './UserContext/@types';
import { api } from '../Service/api';

export const CartContext = createContext({} as ICartContext);

interface ICartContext {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  products: [IProducts];
}

export const CartProvider = ({ children }: IDefaultProviderProps) => {
  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState/* <[IProducts] | ''> */([]);
  const [productCart, setProductCart] = useState([]);

  useEffect(() => {
    const DataUser = async () => {
      const token = localStorage.getItem('@TOKEN');

      if (token) {
        try {
          const response = await api.get('products', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setProducts(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };

    DataUser();
  }, []);

  /* const addProductsCart = (productCart) => {
    setProductCart([...productCart, productCart]);
  };

  const removeProductsCart = (productCartId) => {
    const newProductsCart = productCart.filter(
      (product) => product.id !== productCartId
    );
    setProductsCart(newProductsCart);
  };
 */

  return (
    <CartContext.Provider value={{ modal, setModal, products }}>
      {children}
    </CartContext.Provider>
  );
};
