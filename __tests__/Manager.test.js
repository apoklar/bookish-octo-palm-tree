const Manager = require('../lib/Manager');

test("gets office number", () => {
    const testValue = "officeNumber";
    const e = new Manager("Alice", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});
  
test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Alice", 1, "test@test.com", "officeNumber");
    expect(e.getRole()).toBe(testValue);
});
  
test("gets officeNumber via getofficeNumber()", () => {
    const testValue = "officeNumber";
    const e = new Manager("Alice", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});