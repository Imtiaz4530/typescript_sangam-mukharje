"use strict";
// --------- Partial ---------
// partial <T> -> make all the top level fields optional
const patch10 = { name: "Imtiaz" };
const patch11 = {
    name: "Imtiaz",
    email: "imtiaz@gmail",
    address: { line1: "Dhaka", city: "Dhaka" },
};
const userAllPatch12 = {
    id: "1",
    name: "Imtiaz",
    email: "imtiaz@gmail",
    address: { line1: "Dhaka", city: "Dhaka" },
};
const readOnlyUserN10 = {
    id: "1",
    name: "Imtiaz",
    email: "imtiaz@gmail",
    address: { line1: "Dhaka", city: "Dhaka" },
};
const userPickN10 = {
    id: "1",
    name: "Imtiaz",
};
const userWithoutEmailN10 = {
    id: "1",
    name: "Imtiaz",
    address: { line1: "Dhaka", city: "Dhaka" },
};
const dirN10 = {
    admin: {
        id: "u10",
        name: "Imtiaz",
        email: "imtiaz@gmail",
        address: { line1: "Dhaka", city: "Dhaka" },
    },
    user: {
        id: "u10",
        name: "Imtiaz",
        email: "imtiaz@gmail",
        address: { line1: "Dhaka", city: "Dhaka" },
    },
    editor: {
        id: "u10",
        name: "Imtiaz",
        email: "imtiaz@gmail",
        address: { line1: "Dhaka", city: "Dhaka" },
    },
};
