import moment from 'moment';

export const getVisableExpenses= ( expenses ,{startDate, endDate ,sortBy ,text } ) => {
    return expenses.filter (
        (expense) => {
            const createdAtMoment = moment(expense.createdAt);
            const startDateMatch =  startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
            const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true ;
            const textMatch=expense.description.toLocaleLowerCase().includes(text.toLocaleLowerCase());
            return startDateMatch && endDateMatch && textMatch;
        }
    ).sort(
        (a,b) => {
            if (sortBy === 'date')
                return a.createdAt < b.createdAt ? 1: -1;
            else if (sortBy === 'amount' )
                return a.amount < b.amount ? 1 : -1 ;
        } );
};
