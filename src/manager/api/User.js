import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const userApi = createApi({
  reducerPath: 'users ',

  baseQuery: fetchBaseQuery({
    baseUrl: ' http://localhost',
  }),
  endpoints(builder) {
    return {
      fetchUsers:builder.query({
        query: () => {
          return {
            url: '/kompyuterler',
            method: 'GET',
          }
        },
      }),
      addUsers: builder.mutation({
        query: () => {
          return {
            url: '/kompyuterler',
            method: 'POST',
            body: {
              name: 'can',
            },
          }
        },
      }),
      removeUsers: builder.mutation({
        query: (user) => {
          return {
            url: `/kompyuterler ${user.id}`,
            method: 'DELETE',
          }
        },
      }),
    }
  },
})
export const {
  useFetchUsersQuery,
  useAddUsersMutation,
  useRemoveUsersMutation,
} = userApi

export { userApi }
