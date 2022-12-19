
import React, { useState, useEffect } from 'react'
import * as C from './styles'
import api from '../../services/api'

import { dinero, toDecimal, toUnits } from 'dinero.js';
import { BRL } from '@dinero.js/currencies';

export const Cart = () => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [productIncremented, setProductIncremented] = useState([])

    useEffect(() => {
        productsCart()
    }, [])


    function getCurrency(value) {
        return Number(value).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    };

    const productsCart = async () => {
        try {
            const response = await api.get(`${process.env.REACT_APP_BACKEND_URL}/cartProducts`)
            setCart(response.data)
        } catch (error) {
        }
    }

    const handleDecrement = (productId) => {
       const cartProductsDecremented = cart.map(productsCart => {

        if(productsCart.id === productId && productsCart.quantity > 1) {
            productsCart.quantity = productsCart.quantity - 1
        }

        return productsCart
       })

       setProductIncremented(cartProductsDecremented)
    }

    const handleIncrement = (productId) => {
        const cartProductsIncremented = cart.map(productCart => {
            
            if(productCart.id === productId) {
                productCart.quantity = productCart.quantity + 1
            }

            return productCart
        })

        setProductIncremented(cartProductsIncremented)
        console.log(productIncremented)
    }

    const handleQuantityChange = async (productId, userId, quantity) => {
        try {
            await api.patch(`${process.env.REACT_APP_BACKEND_URL}/cartProducts/increment/${userId}/${productId}`,{quantity})
            await productsCart()
        } catch (error) {
        }
    }


    return (
        <>
            <C.Header />
            <C.Container>
                <C.HeaderTableCart>
                    <C.HeaderTableText>Imagem</C.HeaderTableText>
                    <C.HeaderTableText>Produto</C.HeaderTableText>
                    <C.HeaderTableText>Preço</C.HeaderTableText>
                    <C.HeaderTableText>Quantidade</C.HeaderTableText>
                    <C.HeaderTableText>Ações</C.HeaderTableText>
                    <C.HeaderTableText>Preço Total</C.HeaderTableText>
                </C.HeaderTableCart>
                <C.Line></C.Line>
                {cart.map((item) =>
                    <C.ContentTableCart>
                        <C.ImageProduct src={item.imageUrl} />
                        <C.ContentTableText>{item.name}</C.ContentTableText>
                        <C.ContentTableText>{getCurrency(item.saleValue)}</C.ContentTableText>
                        <C.ContentTableText>{item.quantity}</C.ContentTableText>
                        <C.ContentTableText>

                            <C.ContainerActions>
                                <C.ButtonLess onClick={() => handleDecrement(item.id)}>-</C.ButtonLess>
                                <C.ButtonAddMore onClick={() => handleIncrement(item.id)}>+</C.ButtonAddMore>
                            </C.ContainerActions>
                        </C.ContentTableText>
                        <C.ContentTableText>{getCurrency(item.saleValue * item.quantity)}</C.ContentTableText>


                    </C.ContentTableCart>
                )}
            </C.Container>
        </>

    )
}
