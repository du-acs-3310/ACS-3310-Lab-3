# ACS 3310 — Lab 3: Writing Unit Tests

## Overview

In this lab you will practice writing **unit tests** for existing code.

You will NOT be writing new functions from scratch. Instead, your goal is to:

- understand what each function is supposed to do
- write tests that describe correct behavior
- use tests to detect bugs
- fix any bugs you discover

This lab builds directly on Lesson 3:

> Tests are used to **prove behavior**, not just check it.

---

## What You Are Solving

You are given a set of functions in:

```
src/functions.ts
```

Some of these functions are **incorrect**.

Your job is to:

1. Write tests that describe what each function *should* do
2. Use those tests to reveal incorrect behavior
3. Fix the implementation so all tests pass

---

## Learning Goals

By the end of this lab you should be able to:

- write unit tests using Vitest
- describe expected behavior using `expect`
- identify edge cases
- use tests to reveal and fix bugs

---

## Setup

Clone your repository:

```bash
git clone <your-repo-url>
cd ACS-3310-Lab-3
```

Install dependencies:

```bash
npm install
```

Run the tests:

```bash
npm test
```

---

## Your Task

For each function in `src/functions.ts`:

- write **at least 2 meaningful tests**
- include **at least 1 edge case**
- make sure your tests clearly describe expected behavior

Your tests should:

- FAIL when the function behaves incorrectly
- PASS after the function is fixed

---

## Important: Tests Should Fail First

When you begin this lab, all tests will pass because no real tests have been written.

As you write tests, you should expect:

- some tests to FAIL at first
- failures mean your tests are working
- failures reveal bugs in the code

If your tests never fail, they are not useful.

---

## What You Will Edit

You should primarily edit:

```
tests/functions.test.ts
```

You may also edit:

```
src/functions.ts
```

…but only after your tests reveal incorrect behavior.

---

## What Is an Edge Case?

An edge case is a boundary or unusual input where bugs often occur.

Examples:

- empty arrays
- single-item arrays
- very small or large values

---

## Definition of Done

You are finished when:

- you have written meaningful tests for each function
- your tests FAIL for incorrect behavior (at least initially)
- you fix the implementation
- all tests PASS (`npm test`)
- your code is pushed to GitHub

---

## Tips

- Start by writing tests before changing any code
- Read each function carefully
- Ask: *What should this do?*
- Use failing tests to guide your fixes
- Avoid weak or duplicate tests

---

## Submission

Your work is submitted automatically when you push to GitHub.

```bash
git add .
git commit -m "complete lab 3"
git push
```

---

## Reminder

You are not just fixing bugs.

You are writing tests that **prove the bugs exist**, then verifying that your fixes work.