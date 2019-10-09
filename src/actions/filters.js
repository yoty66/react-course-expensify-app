
//setTextFilter

export const setTextFilter = (text='')=>
    ({
        type:'SET_FILTER_TEXT',
        text
    });

//sortByAmount

export const sortByAmount = ()=>
    ({
        type:'SORT_BY_AMOUNT',
    });

//sortByDate

export const sortByDate = ()=>
    ({
        type:'SORT_BY_DATE',
    });
//setStartDate

export const setStartDate = (date)=>
    ({
        type:'SET_START_DATE',
        date
    });
//setEndDate

export const setEndDate = (date)=>
    ({
        type:'SET_END_DATE',
        date
    });



