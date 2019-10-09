import { createStore } from 'redux';

const reducer=(state = { count: 0 }, action)=> {
    switch (action.type) {

        case 'INCREMENT':
            const increamentBy=typeof action.increamentBy === 'number' ?  action.increamentBy : 1 ;
            return{
                count: state.count + increamentBy
            };

        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1 ;
            return{
                count: state.count - decrementBy
            };
        case 'RESET':
            return{
                count: 0
            };
        case 'SET':
            return{
                count: action.count
            };
        default:
            return state;
    }};
const store = createStore (
    reducer
);

store.subscribe(
    ()=>
    console.log(store.getState())
);

const incrementCount = ({increamentBy = 1})=>(
    {
      type: 'INCREMENT'  ,
        increamentBy
    }
);
const decrementCount = ({decrementBy = 1})=>(
    {
      type: 'DECREMENT'  ,
        decrementBy
    }
);

const setCount = ({ count })=>(
    {
      type: 'SET'  ,
        count
    }
);
const resetCount = ({count = 0})=>(
    {
      type: 'RESET'  ,
        count
    }
);



store.dispatch(decrementCount({ decrementBy:  5 }));

store.dispatch(incrementCount({increamentBy: 100}));

store.dispatch(incrementCount({}));

store.dispatch(resetCount({}));


store.dispatch(setCount({count:77 }));


