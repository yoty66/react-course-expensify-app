import React from "react";
import { connect } from  'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense} from '../actions/expenses'

export class EditExpensePage extends React.Component{

    editExpense=(expense)=>{
        this.props.editExpense(this.props.expense.id ,expense);
        this.props.history.push('/')
    };

    removeExpense=(expense)=>{
      this.props.removeExpense(expense) ;
      this.props.history.push('/')
    };

    render=()=>{

        return(
            <div>
                    <div className={"page-header"}>
                            <div className={"content-container"}>
                                <h1 className={"page-header__title"}>Save Expense</h1>
                            </div>
                    </div>

                    <div className={"content-container"}>
                        <ExpenseForm
                            expense={this.props.expense}
                            onSubmit={this.editExpense}/>

                        <button
                            onClick={()=>{this.removeExpense(this.props.expense) }}
                            className={"button__secondary"}
                        >
                            Remove Expense
                        </button>
                    </div>
            </div>
        );
    }
};

const mapStateToProps = (state , props) =>{
    return {
        expense: state.expenses.find(({id}) => id === props.match.params.id )
    }
};

const mapDispatchToProps = ( dispatch ) => ({
   editExpense: (id ,expense) => dispatch(startEditExpense( id , expense) ),
   removeExpense: ( expense ) =>{
       const action =startRemoveExpense({ id: expense.id });
       dispatch(action) }
});
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);