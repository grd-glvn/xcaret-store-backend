"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cartController_1 = require("../controller/cartController");
async function cartRoute(app) {
    app
        .get("/api/cart/", cartController_1.getCartItems)
        .post("/api/cart/", cartController_1.addItemToCart)
        .put("/api/cart/:id", cartController_1.updateCartItem)
        .delete("/api/cart/:id", cartController_1.removeCartItem)
        .delete("/api/cart/", cartController_1.removeAllCartItems);
}
exports.default = cartRoute;
