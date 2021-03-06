const Intern = require('../lib/Intern');

test("gets school", () => {
    const testValue = "School";
    const e = new Intern("Alice", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});
  
test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Alice", 1, "test@test.com", "School");
    expect(e.getRole()).toBe(testValue);
});
  
test("gets school via getSchool()", () => {
    const testValue = "School";
    const e = new Intern("Alice", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});