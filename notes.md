# prediction
Converted all JavaScript source files in both projects to TypeScript. The API now has TypeScript configuration and build, typecheck, test, and lint scripts; the notes CLI has a TypeScript build and updated commands and docs. Compiled JavaScript is generated under ignored dist/ folders.

Validation passed: API build, typecheck, lint, and all 4 tests; CLI build, check, and add/list/delete smoke test. The smoke-test data file was cleaned up.

Key files: API source folder, API tsconfig, CLI source folder.

Note: root npm install reported 6 dependency vulnerabilities (1 moderate, 4 high, 1 critical); I did not apply unrelated audit fixes.
