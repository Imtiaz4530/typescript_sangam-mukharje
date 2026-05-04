// ------------ value must be of both types ------------
type Inter1 = { id: string };
type Inter2 = { createdAt: Date };

type Entity = Inter1 & Inter2; // must have both id and createdAt

const e: Entity = { id: "1", createdAt: new Date() };

// ------------ Homework ------------
type Username = { username: string };
type Email = { email: string };

type User = Username & Email;

const user: User = { username: "munna", email: "munna@gmail.com" };

type Product = { id: string; title: string };
type Priced = { price: number };
type PricedProduct = Product & Priced;
