import React, { Component } from 'react';


class  TaskForm extends Component {
  render(){
      return(
               
                               <div className="panel panel-warning">
                                     <div className="panel-heading">
                                       <h3 className="panel-title">
                                       Them cong viec</h3>
                                     </div>
                                 <div className="panel-body">
                                       <form>
                                      
                                         <div className="form-group">
                                           <label >Ten</label>
                                           <input type="text" 
                                           className="form-control" 
                                           id="" placeholder="Input field"/>
                                         </div>
                                         <label>Trang thai</label>
                                         <select
                                         
                                           className="form-control" 
                                           name="status" 
                                           >
                                           <option value={true}>Kich hoat</option>
                                            <option value={false}>An</option>
                                         </select><br/>
                                         <div className="text-center">
                                         <button type="submit" className= "btn btn-warning">Luu lai</button> &nbsp;
                                         <button type="button" class="btn btn-danger">Huy bo</button>

                                       </div>
                                  
                                       </form>
                                         
                                  


                                 </div>
                               </div>
                             
                             );
    }
  }



  
export default TaskForm;
                                     
                                   
                                            



