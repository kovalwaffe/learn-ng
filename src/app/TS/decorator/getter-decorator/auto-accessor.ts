// eslint-disable-next-line @typescript-eslint/no-unused-vars
function capitalizePropertyDecorator(target: unknown, context: ClassAccessorDecoratorContext) {
  let value: string;
  return {
    get(): string {
      return value;
    },
    set(v: string): void {
      value = v ? v.charAt(0)
                   .toUpperCase() + v.slice(1) : '';
    },
    init(v: string): string {
      return v ? v.charAt(0)
                  .toUpperCase() + v.slice(1) : '';
    }
  };
}

// Decorator Factory
function Deprecation() {
  return function FieldDecorator<C, V>(
    target: undefined,
    ctx: ClassFieldDecoratorContext<C, V>
  ) {
    const fieldName = ctx.name.toString();
    console.info('FieldName is', fieldName);
    return function (this: C, value: V): V {
      console.warn(
        `${fieldName} is officially deprecated and will be removed in a future version`
      );
      return value;
    };
  };
}

class Book {
  @capitalizePropertyDecorator
  accessor title!: string;

  @Deprecation()
  name!: string;

  constructor() {
    this.title = '';
  }
}

const book: Book = new Book();
book.title = 'władca pierścieni';
console.log(book.title);  // Wypisze: "Władca pierścieni"
console.info(`Value of name=${book.name}`);
