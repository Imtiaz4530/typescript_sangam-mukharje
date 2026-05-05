// --------- Awaited ---------

// Promise<T>
// Nested Promise<Promise<T>>
// Thenables -> .then

// Awaited<T>

type Promise1 = Awaited<Promise<number>>;
type Promise2 = Awaited<Promise<Promise<string>>>;
type Awaited1 = Awaited<string>; // not a promise

type PromiseUnionExample = Awaited<Promise<string | number>>;

async function fetchCount() {
  return 42 as const;
}

type ResolvedFetchCountValue = Awaited<ReturnType<typeof fetchCount>>;

async function getData() {
  return Promise.all([
    Promise.resolve(1 as const),
    Promise.resolve("x" as const),
  ] as const);
}

type DataTupleWithPromise = Awaited<ReturnType<typeof getData>>;
