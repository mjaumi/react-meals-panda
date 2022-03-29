import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetails = () => {
    const [meal, setMeal] = useState({});
    const { mealdb } = useParams();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealdb}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]));
    }, [mealdb])

    return (
        <section className='pt-28'>
            <div className='w-4/5 mx-auto'>
                <div className='bg-meals-panda-light p-5 w-fit mx-auto rounded-2xl shadow-lg'>
                    <img className='mx-auto rounded-xl' src={meal.strMealThumb} alt="" />
                </div>
                <div className='my-10 text-left'>
                    <h6 className='text-meals-panda-base font-bold text-lg my-4'>Name: <span className='font-normal'>{meal.strMeal}</span></h6>
                    <h6 className='text-meals-panda-base font-bold text-lg my-4'>Category: <span className='font-normal'>{meal.strCategory}</span></h6>
                    <h6 className='text-meals-panda-base font-bold text-lg my-4'>Region: <span className='font-normal'>{meal.strArea}</span></h6>
                    <h6 className='text-meals-panda-base font-bold text-lg my-4'>Instructions: <span className='font-normal'>{meal.strInstructions}</span></h6>
                    <h6 className='text-meals-panda-base font-bold text-lg my-4'>Recipe Video:</h6>
                    <iframe className='w-full' height='600px' src={`https://www.youtube.com/embed/${meal?.strYoutube?.split('=')[1]}`} title={meal.strMeal}></iframe>
                </div>
            </div>
        </section>
    );
};

export default MealDetails;