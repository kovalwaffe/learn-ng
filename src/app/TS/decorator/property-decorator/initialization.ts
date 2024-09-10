function addOne<T>(
  target: any,
  context: ClassFieldDecoratorContext<T, number>
) {
  let value: number;

  console.log('addOne');

  return {
    get() {
      return value + 1;
    },
    set(newValue: number) {
      value = newValue;
    }
  };
}

function addTwo<T>(
  target: any,
  context: ClassFieldDecoratorContext<T, number>
) {
  let value: number;
  console.log('addTwo');

  return {
    get() {
      return value + 2;
    },
    set(newValue: number) {
      value = newValue;
    }
  };
}

class My1Class {
  @addOne // wykona sie jako drugi po decoratory wykonuja sie z dołu do góry
  @addTwo // pierszy sie wykona
  x = 1;
}

console.log(new My1Class().x);
