// eslint-disable-next-line @typescript-eslint/no-unused-vars
function capitalize(
  value: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  context: ClassAccessorDecoratorContext
) {
  return {
    get() {
      return value;
    },
    set(v: string) {
      value = v.charAt(0)
               .toUpperCase() + v.slice(1);
    },
    init(v: string) {
      return v.charAt(0)
              .toUpperCase() + v.slice(1);
    }
  };
}

class Book {
  // @capitalize
  accessor title: string = '';
}

const book = new Book();
book.title = 'władca pierścieni';
console.log(book.title);  // Wypisze: "Władca pierścieni"
