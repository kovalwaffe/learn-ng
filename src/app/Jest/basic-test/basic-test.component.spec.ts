import { BasicTestComponent } from './basic-test.component';
import { of } from "rxjs";

describe('BasicTestComponent', () => {
  let component: BasicTestComponent;

  beforeEach(async () => {
    component = new BasicTestComponent();
  });

  it('should create', () => {
    component.name = "Paweł";
    const getStudents = jest.fn().mockReturnValue([
      { id: 1, name: 'John', age: 10 },
      { id: 2, name: 'Paul', age: 45 },
      { id: 3, name: 'Bole', age: 78 }
    ]);

    component.ngOnInit();

    const students = component.getStudent();
    console.log(getStudents.mock.results);
    // expect(students).toEqual([])
    expect(students).toEqual(getStudents());
  });

  it('should test', () => {
    const customersService = {
      getCustomers: jest.fn().mockReturnValue(of([{ name: 'John' }]))
    };

    const serviceChooser = {
      getService: jest.fn().mockReturnValue(customersService)
    };

    console.log(serviceChooser.getService());
  });

  it('should track calls to a mocked service method', () => {
    const mockFn = jest.fn();
    mockFn('arg1');
    mockFn('arg2');

    expect(mockFn.mock.calls.length).toBe(2);
    expect(mockFn.mock.calls[0][0]).toBe('arg1');
    expect(mockFn.mock.calls[1][0]).toBe('arg2');
  });

  it('should track results of a mocked function', () => {
    const mockFn = jest.fn((x: number) => x * 2);
    mockFn(2);
    mockFn(3);

    expect(mockFn.mock.results[0].value).toBe(4);
    expect(mockFn.mock.results[1].value).toBe(6);
  });

  it('should use a custom implementation for the mock', () => {
    const mockFn = jest.fn().mockImplementation((x: number) => x + 1);

    expect(mockFn(1)).toBe(2);
    expect(mockFn(5)).toBe(6);
  });

  it('should override implementation for a specific call', () => {
    const mockFn = jest.fn().mockImplementation((x: number) => x * 2);
    mockFn.mockImplementationOnce((x: number) => x + 10);

    expect(mockFn(2)).toBe(12); // First call
    expect(mockFn(2)).toBe(4);  // Subsequent call
  });

  it('should always return the specified value', () => {
    const mockFn = jest.fn().mockReturnValue('fixed value');

    expect(mockFn()).toBe('fixed value');
    expect(mockFn()).toBe('fixed value');
  });

  it('should mock a resolved promise', async () => {
    const mockFn = jest.fn().mockResolvedValue('resolved value');

    await expect(mockFn()).resolves.toBe('resolved value');
  });

  it('should mock a rejected promise', async () => {
    const mockFn = jest.fn().mockRejectedValue('rejected value');

    await expect(mockFn()).rejects.toBe('rejected value');
  });


});
