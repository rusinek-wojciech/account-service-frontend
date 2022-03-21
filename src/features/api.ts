import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { User, Payment } from '../types'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('Authorization', `Basic ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => `admin/user`,
    }),
    getEvents: builder.query<Event[], void>({
      query: () => `security/events`,
    }),
    getPayments: builder.query<Payment[], void>({
      query: () => `empl/payment`,
    }),
    getPaymentByPeriod: builder.query<Payment, { month: number; year: number }>(
      {
        query: ({ month, year }) => `empl/payment?${month}-${year}`,
      }
    ),
  }),
})

export const { useGetUsersQuery, useGetEventsQuery } = api
