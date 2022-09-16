import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchProductData } from '../redux'

function ProductDataContainer({ productData, fetchProductData }) {
    const [weekValue, setWeekValue] = React.useState('week1');
    const [dayValue, setDayValue] = React.useState('Monday');

    const weeks = ['week1', 'week2', 'week3', 'week4']
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const handleWeekChange = (event) => {
        setWeekValue(event.target.value);
    };

    const handleDayChange = (event) => {
        setDayValue(event.target.value);
    };

    useEffect(() => {
        fetchProductData()
    })

    const userOption = () => {
        return <div>
            <div style={{ color: 'red' }}>Select The Week</div>
            <select value={weekValue} onChange={handleWeekChange}>
                {weeks.map((week) => {
                    return <option value={week}>{week}</option>
                })}
            </select>
            <br /><br />

            <div style={{ color: 'red' }}>Select The Day</div>
            <select value={dayValue} onChange={handleDayChange}>
                {days.map((day, index) => {
                    return <option value={day}>{day}</option>
                })
                }
            </select>
        </div>
    }

    return (
        productData && productData.loading ?
            (<div style={{ textAlign: 'center' }}>
                <h1>Loading The Data ...</h1>
                <h2 className={"loader"} style={{ textAlign: 'center' }}>
                </h2>
            </div>) : productData.error ?
                (<h2>{productData.error}</h2>) : (
                    <div style={{ textAlign: 'center' }}>
                        <br />
                        {userOption()}
                        <h1 style={{ marginLeft: '10%' }}>Available Products Are  :</h1>
                        <table style={{ textAlign: 'center', marginLeft: '30%' }}>

                            {productData.productData && productData.productData ? productData.productData.map((data, index) => {
                                return data.week === weekValue ?
                                    data.meals.map((mealsData) => {
                                        return mealsData.name === dayValue ?
                                            mealsData.meals.map((innerMealsData) => {
                                                return <tr><td> {innerMealsData.mealName}</td></tr>
                                            }) : ''
                                    }) : ''
                            }) : ''}

                        </table>
                    </div>
                )
    )
}

const mapStateToProps = state => {
    return {
        productData: state.productData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProductData: () => dispatch(fetchProductData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDataContainer)
