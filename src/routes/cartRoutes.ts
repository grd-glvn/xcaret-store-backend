import { FastifyInstance } from "fastify";
import { addItemToCart, getCartItems, removeCartItem, removeAllCartItems, updateCartItem } from "../controller/cartController";


async function cartRoute(app:FastifyInstance) {
    app
        .get("/api/cart/", getCartItems )
        .post("/api/cart/", addItemToCart)
        .put("/api/cart/:id", updateCartItem )
        .delete("/api/cart/:id", removeCartItem )
        .delete("/api/cart/", removeAllCartItems )
}

export default cartRoute;