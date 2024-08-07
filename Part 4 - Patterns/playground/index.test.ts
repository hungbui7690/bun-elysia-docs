/*
  Unit Test

  ~~ bun add @elysia/eden@1.1.2

******************************

  Eden Treaty test
  - We may use Eden Treaty to create an end-to-end type safety test for Elysia server as follows:


*/

import { describe, expect, it } from 'bun:test'
import { Elysia } from 'elysia'
import { treaty } from '@elysiajs/eden'

const app = new Elysia().get('/hello', 'hi')

const api = treaty(app)

describe('Elysia', () => {
  it('return a response', async () => {
    const { data, error } = await api.hello.get()

    expect(data).toBe('hi')
  })
})
