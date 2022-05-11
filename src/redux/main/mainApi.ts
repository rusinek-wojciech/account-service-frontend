import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import {
  User,
  UpdateRole,
  Status,
  UpdateLockUser,
  Payment,
  NewUser,
  UpdatePassword,
  Period,
  GetUser,
  DeleteUser,
  Event,
} from 'redux/main/types'
import { convertUser } from 'redux/main/utils'
import { RootState } from 'redux/store'

const USER_TAG: 'User' = 'User'

const mainApi = createApi({
  reducerPath: 'mainApi',
  tagTypes: [USER_TAG],

  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('Authorization', `Basic ${token}`)
      }
      return headers
    },
  }),

  endpoints: (build) => ({
    updateUserRole: build.mutation<User, UpdateRole>({
      query: (updateRole) => ({
        url: `/api/admin/user/role`,
        method: 'PUT',
        body: updateRole,
      }),
      transformResponse: convertUser,
      invalidatesTags: (_result, _error, { id }) => [{ type: USER_TAG, id }],
    }),

    updateUserLock: build.mutation<Status, UpdateLockUser>({
      query: (lockUser) => ({
        url: `/api/admin/user/access`,
        method: 'PUT',
        body: lockUser,
      }),
      async onQueryStarted({ id, operation }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          mainApi.util.updateQueryData('getUsers', undefined, (draft) => {
            const user = draft.find((user) => user.id === id)
            if (!!user) {
              user.accountNonLocked = operation === 'UNLOCK'
            }
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      invalidatesTags: (_result, _error, { id }) => [{ type: USER_TAG, id }],
    }),

    updatePayment: build.mutation<void, Payment>({
      query: (payment) => ({
        url: `/api/acct/payments`,
        method: 'PUT',
        body: payment,
      }),
    }),

    uploadPayment: build.mutation<void, Payment[]>({
      query: (payments) => ({
        url: `/api/acct/payments`,
        method: 'POST',
        body: payments,
      }),
    }),

    register: build.mutation<User, NewUser>({
      query: (newUser) => ({
        url: `/api/auth/signup`,
        method: 'POST',
        body: newUser,
      }),
      transformResponse: convertUser,
    }),

    changePassword: build.mutation<void, UpdatePassword>({
      query: (updatePassword) => ({
        url: `/api/auth/changepass`,
        method: 'POST',
        body: updatePassword,
      }),
    }),

    getEvents: build.query<Event[], void>({
      query: () => ({ url: `/api/security/events` }),
    }),

    getPayment: build.query<void, Period>({
      query: (period) => ({
        url: `/api/empl/payment`,
        params: period,
      }),
    }),

    login: build.query<User, void>({
      query: () => ({
        url: `/api/auth/login`,
      }),
      transformResponse: convertUser,
    }),

    getUsers: build.query<User[], void>({
      query: () => ({ url: `/api/admin/user` }),
      transformResponse: (response: GetUser[]) => response.map(convertUser),
      providesTags: (result) =>
        !!result
          ? [
              ...result.map(({ id }) => ({
                type: USER_TAG,
                id,
              })),
              USER_TAG,
            ]
          : [USER_TAG],
    }),

    getUser: build.query<User, number>({
      query: (id) => ({ url: `/api/admin/user/${id}` }),
      transformResponse: convertUser,
      providesTags: (_result, _error, id) => [{ type: USER_TAG, id }],
    }),

    // TODO: add user to Status
    deleteUser: build.mutation<Status, DeleteUser>({
      query: ({ username }) => ({
        url: `/api/admin/user/${username}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: USER_TAG, id }],
    }),
  }),
})

export const {
  useUpdateUserRoleMutation,
  useUpdateUserLockMutation,
  useUpdatePaymentMutation,
  useUploadPaymentMutation,
  useRegisterMutation,
  useChangePasswordMutation,
  useGetEventsQuery,
  useGetPaymentQuery,
  useLoginQuery,
  useGetUsersQuery,
  useDeleteUserMutation,
} = mainApi

export default mainApi
