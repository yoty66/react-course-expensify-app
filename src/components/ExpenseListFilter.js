import React from 'react';
import { connect } from 'react-redux';
import {sortByDate , sortByAmount, setEndDate, setStartDate } from '../actions/filters';
import {DateRangePicker, SingleDatePicker} from 'react-dates';

export class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({startDate,endDate})=> {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocus)=> {
        this.setState(()=> ({calendarFocused: calendarFocus}));
    };

    onTextChange = (e) => {
        this.props.setFilterText(e.target.value)
    };

    onSortChange = (e)=> {e.target.value === 'amount' ?
        this.props.sortByAmount() :
        this.props.sortByDate() };

    render(){
        return(
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input type={"text"} value={this.props.filters.text}
                              className={"text-input"}
                               placeholder={"Search expenses"}
                               onChange={this.onTextChange}/>
                    </div>

                    <div className="input-group__item">
                        <select value={this.props.filters.sortBy}
                                onChange={this.onSortChange}
                        className={"select"}>
                            <option value='date'>Date</option>
                            <option value='amount'>Amount</option>
                        </select>
                    </div>

                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                </div>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };

};
const mapDispatchToProps = (dispatch) =>({
        sortByAmount: () => dispatch(sortByAmount()),
        sortByDate: () => dispatch(sortByDate()),
        setFilterText: (text) => dispatch({type: 'SET_FILTER_TEXT', text}),
        setStartDate :(startDate) => dispatch(setStartDate(startDate)),
        setEndDate :(endDate) => dispatch(setStartDate(endDate))
});

export default  connect(mapStateToProps , mapDispatchToProps)(ExpenseListFilter);