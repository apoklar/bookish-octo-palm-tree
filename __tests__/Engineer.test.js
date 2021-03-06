const Engineer = require('../lib/Engineer');

test("sets GitHub account", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Alice", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});
  
test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Alice", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});
  
test("gets GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Alice", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});