import gql from 'graphql-tag';

export const QUERY_AREA = gql`
  {
    area {
      name
    }
  }
`;

export const QUERY_MEAL = gql`
  query getMeal($idMeal: String!) {
    meal(idMeal: $idMeal) {
      idMeal
      strMeal
      strArea
      strCategory
      strInstructions
      strDrinkAlternate
      strYoutube
      strSource
      strTags
	  strMealThumb
      mealData {
        ingredient
        measure
      }
    }
  }
`;

export const QUERY_CATEGORY = gql`
{
  category {
      name
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      meals {
        idMeal
        strMeal
        strArea
        strCategory
        strInstructions
        strTags
        strDrinkAlternate
        strYoutube
        strSource
        strMealThumb
        mealData {
          ingredient
          measure
        }
      }
    }
  }
`;

export const QUERY_MEAL_SHORT = gql`
  query getMealShort($a: String, $c: String, $i: String) {
    mealShort(a: $a, c: $c, i: $i) {
      name
      image
      idMeal
    }
  }
`