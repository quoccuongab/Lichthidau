import * as types from './../constants/ActionTypes'

export const status = () =>{
	return { 
		type: types.ToggleStatus
	}
}

export const sort = (sort) => {

 return  {	
 	type :  types.SORT,
	sort
} 
}
