import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "/api/articles/",
    prepareHeaders: (headers) => {
        console.log("🔹 Headers:", headers);
        return headers;
    }
});

export const articlesLikesDislikes = createApi({
    reducerPath: "articlesLikesDislikes",
    baseQuery,
    endpoints: (builder) => ({
        getArticleLikes: builder.query({
            query: (articleId) => {
                console.log("🔹 GET likes for article:", articleId);
                return `${articleId}/likes`;
            },
            transformResponse: (response) => {
                console.log("🔹 Response from getArticleLikes:", response);
                return response;
            }
        }),
        likeArticle: builder.mutation({
            query: ({ articleId, isLike }) => {
                console.log("🔹 Like/Dislike request:", { articleId, isLike });
                return {
                    url: `${articleId}/like`,
                    method: "POST",
                    body: { isLike },
                };
            },
            async onQueryStarted({ articleId }, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log("🔹 Like/Dislike response:", data);
                    dispatch(articlesLikesDislikes.util.invalidateTags([{ type: "Likes", id: articleId }]));
                } catch (error) {
                    console.error("🔴 Грешка при харесване/нехаресване", error);
                }
            },
        }),
    }),
});

export const { useGetArticleLikesQuery, useLikeArticleMutation } = articlesLikesDislikes;
