import React, { Component } from 'react';

class TaskItem extends Component {

  render(){
    var {task,index}= this.props;
      return(
          
                                                <tr> 
                                                        <td>{index +1 }</td>
                                                            <td>{task.name}</td>
                                                            <td className="text-center">
                                                            <span className={task.status === true ? "label label-danger" :   "label label-success "}>{task.status === true ? 'Làm rồi':'Chưa làm'} </span>
                                                            </td>
                                                             <td className="text-center">
                                                              <button type="button" className="btn btn-warning">Sửa </button> &nbsp;
                                                              <button type="button" className="btn btn-danger"> Xóa</button>
                                                                
                                              
                                                               
                                                                </td>
                                                                 <td>{task.ghichu}</td>
                                                </tr>



                
                
          );


}
}


  
export default TaskItem;
                                     
                                   
                                            



