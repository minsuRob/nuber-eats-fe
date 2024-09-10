import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { restaurantsPageQuery } from "../../__generated__/restaurantsPageQuery";
import { Restaurant } from "../../components/restaurant";

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
  const [page, setPage] = useState(1);
  const { data, loading } = useQuery<restaurantsPageQuery>(RESTAURANTS_QUERY);

  return (
    <div>
      <form className="bg-gray-800 w-full py-40 items-center flex justify-center">
        <input
          type="Search"
          placeholder="Search restaurants"
          className="input rounded-md border-0 w-3/12"
        />
      </form>

      {!loading && (
        <div className="max-w-screen-2xl pb-20 mx-auto mt-8">
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
          <div className="grid grid-cols-3 gap-x-5 gap-y-10 mt-16">
            {data?.restaurants.results?.map((restaurant) => (
              <Restaurant
                id={restaurant.id + ""}
                coverImg={restaurant.coverImg}
                name={restaurant.name}
                categoryName={restaurant.category?.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
