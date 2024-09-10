function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling method ${propertyKey} with arguments: ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Method ${propertyKey} returned ${result}`);
    return result;
  }
  return descriptor;
}

class Example {

  @log
  add(a: number, b: number) {
    return a + b;
  }
}

const ex = new Example();
ex.add(2, 3);
ex.add(4, 4);
