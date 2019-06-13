import React, { Component } from 'react';
import TaskItem  from './TaskItem';
class TaskList extends Component {
  render(){
    var  {tasks} = this.props ;
    var elmTasks =tasks.map((task,index) => {
      return <TaskItem   key={task.id} index={index} task={task}/>
    })  ;
      return(
          
                                                  <table className="table table table-bordered table-hover mt-15">
                                                      <thead>
                                                        <tr>
                                                                  <th>STT</th>
                                                                  <th>Tên</th>
                                                                  <th>Trạng thái</th>
                                                                  <th> Hoạt động</th>
                                                                  <th> Ghi chú</th>
                                                        </tr>
                                                      </thead>
                                                      <tbody>
                                                        <tr>
                                                                      <td></td> 
                                                                      <td>
                                                                       <input
                                                                        type="text" 
                                                                        className="form-control" 
                                                                        name="filterName"/>
                                                                      </td>
                                                          <td>
                                                                        <select
                                                                          name="filterName" 
                                                                          className="form-control">
                                                                      
                                                                          <option value={-1}>All</option>
                                                                          <option value={0}>Chưa làm</option>
                                                                          <option value={1}>Đã làm</option>
                                                                            
                                                                        </select>


                                                          </td>
                                                        <td></td>
                                                        <td></td>

                                                        </tr>

                                                      {elmTasks}                                                  
                                                       
                                                      </tbody>
                                                    </table>                                              
                                         
             
                
          );
    }
    }
    





  
export default TaskList;
                                     
                                   
                                            



