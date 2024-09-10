function LogAccessor(target: any, context: ClassAccessorDecoratorContext) {
  let value: any;
  return {
    get() {
      console.log(`Accessing value: ${String(context.name)}`);
      return value;
    },
    set(newValue: any) {
      console.log(`Setting value for ${String(context.name)} to ${newValue}`);
      value = newValue;
    },
    init(initialValue: any) {
      console.log(`Initializing ${String(context.name)} with ${initialValue}`);
      return initialValue;
    }
  };
}

class Person {
  @LogAccessor
  accessor name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person('John');
console.log(person.name); // Log: Accessing value: name
person.name = 'Jane'; // Log: Setting value for name to Jane
console.log(person.name); // Log: Accessing value: name
