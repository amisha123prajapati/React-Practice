const redux =require('redux')
const createStore =redux.createStore

//Reducer
const rootReducer = (state,action)=>{
    if(action.type==='ADD_MOVIE')
    return state;
}
//Crreate store
const store =createStore(rootReducer)
console.log(store.getState())
//Dispatch Action
store.dispatch({
    type:'ADD_MOVIE',
    list:{
        name:"DDLJ",
    year:"1990"
    }
})
//Subscription