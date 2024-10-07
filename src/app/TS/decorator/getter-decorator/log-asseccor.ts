function LogAccessor(
  target: undefined,
  context: ClassAccessorDecoratorContext
) {
  const propertyName = String(context.name); // Ensure property name is a string

  return {
    get(this: Record<string, string>): string {
      console.log(`Accessing value: ${propertyName}`);
      return this[`#${propertyName}`];
    },
    set(this: Record<string, string>, newValue: string): void {
      console.log(`Setting value for ${propertyName} to ${newValue}`);
      this[`#${propertyName}`] = newValue;
    },
    init(initialValue: string): string {
      console.log(`Initializing ${propertyName} with ${initialValue}`);
      return initialValue;
    }
  };
}

class Person {
  // @ts-ignore
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
