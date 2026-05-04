// ------------ index signatures ------------
// [k: string]: number -> key is a string, value is a number

type NumberDict = { [k: string]: number };
const counters: NumberDict = { "1": 1, "2": 2, "3": 3 };

// ------------ Record ------------
// key must be a likes, views or shares
type Matrices = Record<"likes" | "views" | "shares", number>;
const mm: Matrices = { likes: 1, views: 2, shares: 3 };

const priceMap = new Map<string, number>();
priceMap.set("a", 1);
priceMap.set("b", 2);

type LooseMap = Record<string, number | undefined>;
const lm: LooseMap = {};
lm["x"] = undefined;
lm["y"] = 42;
