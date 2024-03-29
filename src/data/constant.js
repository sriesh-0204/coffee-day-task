import { Images } from "../assets/images";
import { cartItems } from "../data/appConstant"

export const products = [
    {
        id: 1101,
        name: `${cartItems.BLACK_COFFEE}`,
        price: 10,
        image: `${Images.coffeeImage1}`
    },
    {
        id: 1102,
        name: `${cartItems.BLACK_TEA}`,
        price: 12,
        image: `${Images.coffeeImage2}`
    },
    {
        id: 1103,
        name: `${cartItems.GINGER_TEA}`,
        price: 20,
        image: `${Images.coffeeImage3}`
    },
    {
        id: 1103,
        name: `${cartItems.BOOST}`,
        price: 25,
        image: `${Images.coffeeImage1}`
    },
    {
        id: 1103,
        name: `${cartItems.HORLICKS}`,
        price: 25,
        image: `${Images.coffeeImage2}`
    }
];