const Employee = require('../lib/Employee');

test("Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});
  
test("sets name", () => {
    const name = "Bella";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});
  
test("sets id", () => {
    const testValue = 100;
    const e = new Employee("Alice", testValue);
    expect(e.id).toBe(testValue);
});
  
test("sets email", () => {
    const testValue = "test@test.com";
    const e = new Employee("Alice", 1, testValue);
    expect(e.email).toBe(testValue);
});
  
test("gets name via getName()", () => {
    const testValue = "Bella";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});
  
test("gets id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Alice", testValue);
    expect(e.getId()).toBe(testValue);
});
  
test("gets email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Alice", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});
  
test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Bella", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});