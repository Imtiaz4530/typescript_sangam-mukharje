"use strict";
// ------------ Interfaces ------------
// interface -> named shape for objects
const user333 = { id: "1", name: "munna", createdAt: new Date() };
const admin333 = {
    id: "1",
    name: "munna",
    createdAt: new Date(),
    permission: ["Admin"],
};
const adminWithMeta = {
    id: "1",
    name: "munna",
    createdAt: new Date(),
    permission: ["Admin"],
    meta: {
        active: true,
    },
};
