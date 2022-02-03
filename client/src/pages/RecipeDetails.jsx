import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { QUERY_MEAL } from "../utils/queries";
import { SAVE_MEAL } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/react-hooks";

// Components
import ReactPlayer from 'react-player'
import {Container, Form, Button} from 'react-bootstrap';
import styled from 'styled-components';

export default function RecipeDetails() {
    let params = useParams();
    const [meal, setMeal] = useState({});
    const [numOfSelectedIng, setNumofSelectedIng] = useState(0);
    const { loading: queryMealLoading, data: queryMealData} = useQuery(QUERY_MEAL, {variables: {idMeal: params.idMeal}});
    
    useEffect(() => {

        if(queryMealData){
            setMeal(queryMealData.meal);
        }

    }, [queryMealLoading, queryMealData, numOfSelectedIng])

    function handleSelect(e){
        if(e.target.checked){
            setNumofSelectedIng(numOfSelectedIng + 1);
        } else {
            if(numOfSelectedIng !== 0){
                setNumofSelectedIng(numOfSelectedIng - 1);
            }
        }
    }

    function getIngredientsFormButtonMessage(){
        return (numOfSelectedIng === 0)? "Add All Ingredients To Cart" : `Add ${numOfSelectedIng} Ingredients To Cart`;
    }

    return (
        <StyledContainer>

            <StyledSecction>
                <StyledTitle>{meal.strMeal}</StyledTitle>
                <ReactPlayer
                    url={meal.strYoutube}
                />
            </StyledSecction>

            <StyledSecction>
                <StyledLabel>Ingredients</StyledLabel>
                <StyledIngredientsForm>
                {
                     meal.mealData && meal.mealData.map((item, index) => {
                        return (
                            <Form.Group key={index}>
                                <Form.Check type="checkbox" label={`${item.measure} ${item.ingredient}`} onClick={handleSelect}/>
                            </Form.Group>
                        );
                     })
                }
                <Button disabled>{getIngredientsFormButtonMessage()}</Button>
                </StyledIngredientsForm>

            </StyledSecction>

            <StyledSecction>
                <StyledLabel>Directions</StyledLabel>

                {
                    meal.instructions && meal.instructions.map((item, index) => {
                        return (
                            <StyledDirectionItem key={index}>
                                <span>{`Step ${index + 1}`}</span>
                                <p>{item}</p>
                            </StyledDirectionItem>
                        );
                    })
                }
            </StyledSecction>

        </StyledContainer>
    );
}

const StyledContainer = styled(Container)`
    padding: 0 10rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
    padding: 0;
  }
`;

const StyledSecction = styled.div`
    text-align: left;  
    padding: 2rem 2rem;
    border-top: 2px solid #c8c8c8;
`;

const StyledTitle = styled.span`
    text-align: left;
    font-size: 2.5rem;
    font-weight: 600;
`;

const StyledLabel = styled.span`
    text-align: left;   
    font-size: 1.5rem;
    font-weight: 600;
`;

const StyledPlayer = styled.div`

`;

const StyledIngredientsForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 20%;
    justify-content: left;

    button{
        margin-top: 1rem;
    }
`;

const StyledDirectionItem = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 1rem 0;

    span{
        font-size: 1.2rem;
        margin-bottom: .5rem;
        font-weight: 600;
    }
    .p{
       
    }
`;
