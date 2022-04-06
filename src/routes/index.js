"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controller_1 = require("../controller");
const middlewares_1 = require("../middlewares");
const shapes_1 = require("../shapes");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/register", middlewares_1.verifyRequestUserMiddleware, middlewares_1.verifyDuplicateUserMiddleware, controller_1.createUserController);
router.post("/login", middlewares_1.verifyRequestUserMiddleware, controller_1.loginUserController);
router.get("/", middlewares_1.verifyAuthenticatedUserMiddleware, controller_1.retrieveUsersController);
router.put("/playlist", (0, middlewares_1.validateShapeMiddleware)(shapes_1.createPlaylistShape), middlewares_1.verifyAuthenticatedUserMiddleware, controller_1.createPlaylistController);
router.delete("/playlist", middlewares_1.verifyAuthenticatedUserMiddleware, controller_1.deleteSongController);