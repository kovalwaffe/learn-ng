// LogClass jest funkcją, która przyjmuje jeden argument: target, czyli konstruktor klasy.
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function LogClass(target: Function) {
  console.log(`Zadekorowana klasa: ${target.name}`);
}

@LogClass // @LogClass to dekorator klasy. Umieszcza się go przed deklaracją klasy.
export class My {
  constructor() {
    console.log('Instancja MyClass została utworzona');
  }
}

const instance = new My();
