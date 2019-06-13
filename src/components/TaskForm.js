import React, { Component } from 'react';


class  TaskForm extends Component {
   constructor(props){
        super(props);
        this.state = {
           name : '',
           status : false,
           ghichu: ''
        }
      }

    onCloseForm = () =>   {
      this.props.onCloseForm();
    }
    onChange = (event)=>{
      var target =event.target;
      var name = target.name;
      var value = target.value;
      var ghichu= target.ghichu;
      if(name==='status'){
        value= target.value ==='true' ? true  : false;
      } 
      this.setState({
        [name]: value
      });
    }


      onSubmit =(event)=>{  
      event.preventDefault();
      this.props.onSubmit(this.state);
      this.onClear();
      this.onCloseForm();
    }
    onClear = ()=>{
      this.setState({
        name : '' ,
        status : false,
        ghichu : ''
      });
    }

  
  render(){
      return(
               
                               <div className="panel panel-warning">
                                                 <div className="panel-heading">
                                                   <h3 className="panel-title">
                                                   Thêm công việc &emsp;  <button type="button" class="btn btn-default "
                                                   onClick ={this.onCloseForm}

                                                   >X</button>
                                                   </h3>
                                                 </div> 

                                 <div className="panel-body">
                                       <form onSubmit  ={this.onSubmit}>
                                      
                                         <div className="form-group">
                                           <label >Tên</label>
                                           <input

                                            type="text" 
                                            className="form-control" 
                                            name= "name" 
                                            placeholder="Tên công việc"
                                            value ={this.state.name}    
                                            onChange={this.onChange}

                                            />
                                         </div>
                                         <div className="form-group">
                                           <label >Ghi chú</label>
                                           <input

                                            type="text" 
                                            className="form-control" 
                                            name= "ghichu" 
                                            placeholder="Ghi chú"
                                            value ={this.state.ghichu}    
                                            onChange={this.onChange}

                                            />
                                         </div>

                                         <label>Trạng thái</label>
                                         <select
                                         
                                           className="form-control" 
                                           name="status" 
                                             value ={this.state.status}
                                            onChange={this.onChange}

                                           >
                                           <option value={true}>Đã làm </option>
                                            <option value={false}>Chưa làm</option>
                                         </select><br/>
                                         <div className="text-center">
                                         <button type="submit" className= "btn btn-warning">Lưu</button> &nbsp;
                                         <button type="button" class="btn btn-danger"
                                         onClick={this.onClear}
                                         >Hủy</button>

                                       </div>
                                  
                                       </form>
                                         
                                  


                                 </div>
                               </div>
                             
                             );
    }
  }



  
export default TaskForm;
                                     
                                   
                                            



