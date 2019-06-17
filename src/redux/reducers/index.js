var initialState ={
	status : false ,	
	sort :{
		 by : 'name',
		 value : 1
	}
}

var myReducer=(state = initialState,action)=>{
	if(action.type ==='toggleStatus'){
		state.status = !state.statetatus;
		return state;
	}

	if
		(action.type ==='toggleSort'){
			var {by ,value} = action.sort;
			var  { status}  =state.sort;

			
		return {
			 status : status,
			 by :  by,
			 value :value
		}
	}
	return state;	
}
export default myReducer;