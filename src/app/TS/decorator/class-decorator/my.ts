// LogClass jest funkcją, która przyjmuje jeden argument: target, czyli konstruktor klasy.
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function LogClass(target: Function) {
  console.log(`Zadekorowana klasa: ${target.name}`);
}

@LogClass // @LogClass to dekorator klasy. Umieszcza się go przed deklaracją klasy.
class My {
  constructor() {
    console.log('Instancja MyClass została utworzona');
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const instance = new My();

// Decorator Factory
function ColouredHouse(colour = 'Blue') {
  return function ClassDecorator<C extends new (...args: unknown[]) => unknown>(
    target: C,
    ctx: ClassDecoratorContext
  ) {
    const className = ctx.name?.toString();
    console.info('ClassName is', className);

    return class extends target {
      colour = colour;
    };
  };
}

@ColouredHouse('Green')
class House {
  constructor(
    private address: string,
    private floors = 3,
    private colour?: string
  ) {}

  toString(): string {
    return `This is a Largehouse with ${this.floors} Floors @ ${this.address} being ${this.colour}`;
  }
}

const myHouse = new House('8642 Yule Street, Arvada CO 80007');
console.log(myHouse.toString())
