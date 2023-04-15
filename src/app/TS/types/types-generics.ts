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
// bez niego np `implements IStorage` wystąpi błąd
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
// niezaleznie czy to jest f. arrow czy tradycyjna to
// `typ generyczny` może odnośić się do parametrów wejsciowych
// albo typu zwracanego albo do jednego i drugikego

const genericArrow = <T>(a: T, b: T) => ({ a, b });
function combineFn<T>(a: T, b: T): { a: T; b: T } {
  return { a, b };
}
// jeżeli nie wiemy jaki bedzie type wejsciowy i zwracany to uzywamy typu generycznego <T> a nie typu `any`
// generyk może być INNY dla każdego wywołania
const combinedStrings = combineFn('a', 'b');
const combinedNumbers: { a: number; b: number } = combineFn<number>(1, 2);
const genericBooleans: { a: boolean; b: boolean } = genericArrow<boolean>(
  true,
  false
);
console.log(combinedStrings);
console.log(combinedNumbers);
console.log(genericBooleans);

// 4. GENERYCZNE FUNKCJE vs funkcje ze sparametryzowanym typem
// każde wywołanie ma inny generyk vs generyk jest stały dla funkcji
type GenericFn = <T>(a: T, b: T) => { a: T; b: T };
type ParametrizedFn<T> = (a: T, b: T) => { a: T; b: T };

// let _parametrizedFn: ParametrizedFn; // error musi mieć z góry znane T
// to nie jest typ generyczny tylko sparametryzowana funkcja z określonym typem
// to jest jakby generyk z uzupełnionym typem - jaki to ma sens?
// te T wiąże sie z sygnarurą a deklaracją typu
declare let parametrizedFn: ParametrizedFn<string>;
declare let genericFn: GenericFn; // nie musi mieć określonego typu generycznego, każde wywoałnie jest inne

// genericFn('Amiga', 2); // error
// genericFn(1, 'Amiga'); // error
// parametrizedFn('ANF', 'Amiga');
// parametrizedFn(123, 123); // error, musi być string
// genericFn('ANF', 'ANF');
// genericFn(1, 2);

// CZESKI BŁĄD
// zdebinioowane T na poziomie klasy i zdefiniowane T na poziomie metod
// to nie sa te same T !!!
class GenerykWywolan<T> {
  constructor(public data: T) {}
  public metoda<T>(another: T) {
    return this.data == another;
  }
}
const obiektB = new GenerykWywolan('ANF');
console.log(obiektB.metoda('ANF'));
console.log(obiektB.metoda(123));

// PRZYKŁADY

// Przykład okraniczenia typu przy uzyciu klasy generycznej
class Animal<T> {
  constructor(public species: T) {}
}
// troche bez sensu bo parametr generyczny jest ograniczony typem generycznym
// dodatkowo dziedziczymy ten typ wiec mamy kompozycje i dziedziczenie jednoczesnie
// class Human<T extends Animal<string>> extends Animal<string> {
//   constructor(public humanSpecies: T) {
//     super('pepole');
//   }
// }
class Human<T extends Animal<string>> {
  constructor(public humanSpecies: T) {}
}
const homoSapiens: Animal<string> = new Animal('Homo Sapiens');
const pablo: Human<Animal<string>> = new Human(homoSapiens);
console.log(pablo);
/////
type SecondElementFn = <T>(items: T[]) => T;
function secondElement<T>(items: T[]) {
  return items[1];
}
const numbers: number[] = [1, 2, 3];
console.log(secondElement(numbers)); // Output: 2
const strings: string[] = ['a', 'b', 'c'];
console.log(secondElement(strings)); // Output: 'b'
