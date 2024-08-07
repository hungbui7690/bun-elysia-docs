/*
  Unit Test

  ~~ bun add @elysia/eden@1.1.2

******************************

  Eden Treaty test
  - We may use Eden Treaty to create an end-to-end type safety test for Elysia server as follows:


*/

import { Elysia, t } from 'elysia'

const app = new Elysia().get('/', () => 'hi').listen(5000)
