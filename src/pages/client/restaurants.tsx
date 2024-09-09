import { gql, useQuery } from "@apollo/client";
import React from "react";
import { restaurantsPageQuery } from "../../__generated__/restaurantsPageQuery";

const RESTAURANTS_QUERY = gql`
  query restaurantsPageQuery {
    allCategories {
      ok
      error
      categories {
        id
        name
        coverImg
        slug
        restaurantCount
      }
    }
    restaurants {
      ok
      error
      totalPages
      totalResults
      results {
        id
        name
        coverImg
        category {
          name
        }
        address
      }
    }
  }
`;

export const Restaurants = () => {
  const { data, loading } = useQuery<restaurantsPageQuery>(RESTAURANTS_QUERY);
  console.log(data?.restaurants);

  return (
    <div>
      <form className="bg-gray-800 w-full py-40 items-center flex justify-center">
        <input
          type="Search"
          placeholder="Search restaurants"
          className="input rounded-md border-0 w-3/12"
        />
      </form>
      {/* 
        <div><div>
        )} */}
      {!loading && (
        <div className="max-w-screen-2xl mx-auto mt-8">
          <div className="flex justify-around max-w-sm mx-auto">
            {data?.allCategories.categories?.map((category) => (
              <div className="flex flex-col group items-center cursor-pointer">
                <div
                  className="w-16 h-16 bg-color group-hover:bg-gray-100 rounded-full bg-cover"
                  style={{ backgroundImage: `url(${category.coverImg})` }}
                ></div>
                <span className="mt-1 text-sm text-center font-medium">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-x-5 gap-y-10 mt-10">
            {data?.restaurants.results?.map((restaurant) => (
              <div>
                <div
                  style={{ backgroundImage: `url(${restaurant.coverImg})` }}
                  className="bg-red-500 bg-cover bg-center mb-3 py-28"
                ></div>
                <h3 className="text-xl font-medium">{restaurant.name}</h3>
                <span className="border-t-2 border-gray-200">
                  {restaurant.category?.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
