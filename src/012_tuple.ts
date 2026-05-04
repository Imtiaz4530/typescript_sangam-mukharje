// ------------ tuples -> fixed length and fixed types ------------

const userEntry: [string, number] = ["munna", 22];

type ResponseRow = [status: number, message?: string];
const r11: ResponseRow = [200];

const corners: readonly [number, number] = [1, 2];
