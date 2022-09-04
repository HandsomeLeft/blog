const redux = require('redux')
const state1 = {
    count:0
}
function reducer(state=state1,action){
    switch(action.type){
        case 'add':
            return {...state,count:state.count+1}
        case 'sub':
            return {...state,count:state.count-1}
    }
}

const store = redux.legacy_createStore(reducer)
store.subscribe(()=>{
    console.log('gaibian',store.getState().count);
})
const action1={type:'add'}
const action2={type:'sub'}
store.dispatch(action1)
store.dispatch(action2)