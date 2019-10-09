import moment from  'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from "../../actions/filters";

test('should generate startDate action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('should generate endDate action object', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)

    })
});

test('should generate sortByAmount action object',()=>{
    const action = sortByAmount()
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});

test('should generate sortByDate action object',()=>{
    const action = sortByDate()
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    });
});

test('should generate empty text filter when no data is provided ',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_FILTER_TEXT',
        text:''
    });
});

test('should generate empty text filter when no data is provided ',()=>{
    const action = setTextFilter('filter');
    expect(action).toEqual({
        type:'SET_FILTER_TEXT',
        text:'filter'
    });
});