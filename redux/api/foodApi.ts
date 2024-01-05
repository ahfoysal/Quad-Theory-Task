import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopular: build.query({
      query: () => ({
        url: "/api/items",
        method: "GET",
      }),

      providesTags: ["Food"],
    }),
  }),
});

export const { useGetPopularQuery } = authApi;
