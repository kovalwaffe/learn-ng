function lazy<This, Return>(
  target: (this: This) => Return,
  context: ClassGetterDecoratorContext<This, Return>
) {
  return function (this: This): Return {
    const value = target.call(this);
    Object.defineProperty(this, context.name, {value, enumerable: true});
    return value;
  };
}

class MyClass {
  private _expensiveValue: number | null = null;

  @lazy
  get expensiveValue(): number {
    this._expensiveValue ??= computeExpensiveValue();
    return this._expensiveValue;
  }
}

function computeExpensiveValue(): number {
  // Expensive computation here…
  console.log('computing...'); // Only call once
  return 42;
}

const obj = new MyClass();
console.log(obj.expensiveValue);
console.log(obj.expensiveValue);
console.log(obj.expensiveValue);
