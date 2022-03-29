import React from 'react';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const { idMeal, strMealThumb, strMeal, strCategory, strArea } = props.meal;

    //const navigate = useNavigate();

    /* const showMealDetails = () => {
        navigate(`/meal/${idMeal}`);
    } */

    return (
        <div className='bg-meals-panda-extra-light p-5 rounded-3xl'>
            <div className='rounded-2xl overflow-hidden'>
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className='mt-4'>
                <h4 className='font-bold text-3xl text-meals-panda-base'>{strMeal}</h4>
                <div className='mt-6 w-4/5 mx-auto'>
                    <p className='border-2 border-meals-panda-base px-3 py-1 rounded-full text-meals-panda-base font-medium'>{strCategory}</p>
                    <p className='mt-4 border-2 border-meals-panda-base px-3 py-1 rounded-full text-meals-panda-base font-medium'>{strArea}</p>
                </div>
            </div>
            <div className='mt-7'>
                <Link to={`/meal/${idMeal}`}>
                    <button className='bg-meals-panda-base text-white text-lg font-medium w-full py-4 rounded-xl hover:bg-meals-panda-light hover:text-meals-panda-base duration-300'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Meal;