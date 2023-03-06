// We used the export {} line in our file to mark it as an ES module
export {};
// 1. GENERYCZNE TYPY, interfejsy, klasy

// typ genryczny, T jest WYMAGANY
type Storage<T> = {
  data: T[];
  add(t: T): void;
};
interface IStorage<T> {
  data: T[];
  add(t: T): void;
}
// do implementacji potrzebny jest przekazywany typ <T>
// bez niego np `implements IStorage`
// error: Generic type 'IStorage<T>' requires 1 type argument(s).
// class StorageClass<T> implements Storage<T> {
class StorageClass<T> implements IStorage<T> {
  constructor(public data: T[]) {}
  public add(t: T): void {
    this.data.push(t);
  }
}

const storage: StorageClass<string> = new StorageClass(['ANF', 'Amiga']);
console.log(storage);

// 2. GENERIC CONSTRAINTS (obostrzenia)
// polega to na tym że stosując słowo `extends` informujemy ze T powinno rozszeżać sie o `id`
class AnotherStorage<T extends { id: string }> {
  constructor(public data: T[]) {}
  public add(t: T): void {
    this.data.push(t);
  }
  public findById(id: string): T | undefined {
    return this.data.find((item) => item.id == id);
  }
}
const anotherStorage = new AnotherStorage([{ id: '123' }]);
console.log(anotherStorage);

// 3. GENERYCZNE FUNKCJE
const genericArrow = <T>(a: T, b: T) => ({ a, b });
function combineFn<T>(a: T, b: T): { a: T; b: T } {
  return { a, b };
}
// generyk może być INNY dla każdego wywołania
const combinedStrings = combineFn('a', 'b');
const combinedNumbers = combineFn<number>(1, 2);
console.log(combinedStrings);
console.log(combinedNumbers);

// 4. GENERYCZNE FUNKCJE vs funkcje ze sparametryzowanym typem
// każde wywołanie ma inny generyk vs generyk jest stały dla funkcji
type GenericFn = <T>(a: T, b: T) => { a: T; n: T };
type ParametrizedFn<T> = (a: T, b: T) => { a: T; n: T };

// let _parametrizedFn: ParametrizedFn; // error musi mieć z góry znane T
declare let _parametrizedFn: ParametrizedFn<number>;
declare let genericFn: GenericFn; // nie musi mieć określonego typu generycznego, każde wywoałnie jest inne

// genericFn('Amiga', 2); // error
// genericFn(1, 'Amiga'); // error
