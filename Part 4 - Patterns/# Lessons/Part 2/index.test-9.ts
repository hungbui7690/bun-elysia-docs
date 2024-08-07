/*
  Unit Test
  - Being WinterCG compliant, we can use Request / Response classes to test an Elysia server.
  - Elysia provides the Elysia.handle method, which accepts a Web Standard Request and returns Response, simulating an HTTP Request.
  - Bun includes a built-in test runner that offers a Jest-like API through the bun:test module, facilitating the creation of unit tests.


******************************

  1. Create test/index.test.ts in the root of project directory
  2. bun test


*/

import { describe, expect, it } from 'bun:test'
import { Elysia } from 'elysia'

describe('Elysia', () => {
  it('return a response', async () => {
    const app = new Elysia().get('/', () => 'hi')

    const response = await app
      .handle(new Request('http://localhost/'))
      .then((res) => res.text())

    expect(response).toBe('hi')
  })
})
