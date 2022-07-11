/** @type {jest.Expect} */
// This file prevents the collision of Mocha/Chai types (dependencies of
// Cypress) and Jest. Without this, VSCode will produce incorrect intellisense
// in Jest test files.
// See: https://stackoverflow.com/questions/55765616/vs-code-jest-and-cypress-intellisense-doesnt-work-properly-with-chai.

// @ts-ignore
export const expect = global.expect;
