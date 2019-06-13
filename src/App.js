import React, { Component } from 'react';
import './App.css';
import TaskForm  from './components/TaskForm';
import Controls  from './components/Controls';
import TaskList  from './components/TaskList';


class App extends Component {
   constructor(props){
        super(props);
        this.state = {
          tasks: [],
          isDisplayForm : false
        }
      }

      componentWillMount(){
       if(localStorage && localStorage.getItem('tasks')){
        var tasks   = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                 tasks :tasks
            });
        }
      }
    
            
      
 s4(){
  return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1); 
}
 generoID(){
  return this.s4() +   this.s4() +   '-' + this.s4() +   '-' + this.s4() +   '-' + this.s4() +  '-'  + this.s4() + this.s4() + this.s4();
 }
 onToggleForm =() =>
   {
    this.setState(
    {
      isDisplayForm :!this.state.isDisplayForm
    });
   }
 onCloseForm =() => {
  this.setState(
    {
      isDisplayForm :false
    });
   }

    
  onSubmit =(data) =>{
    var {tasks} =this.state;    
    data.id=this.generoID(); 
    tasks.push(data);
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))
    console.log(data);

  }
  render(){
    var {tasks,isDisplayForm}=this.state;
    var elmTaskForm = isDisplayForm 
    ? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm}/> : '';
      return(
          
              <div className="container">
                       <div className="text-center">
                              <h1> Lịch làm việc</h1>
                                     <hr/>
                              </div>
                      <div className="row">
                              <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>

                                      {elmTaskForm}
                              </div>
                         

                              <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                              <button 
                              type="button" 
                              className="btn btn-primary"
                              onClick={this.onToggleForm}
                              >Thêm công việc</button>  
                            
         
                              <Controls/>
                               <TaskList tasks = {tasks}/>
            
                                                      
                        </div>
                         </div>
                          </div>

            
                  
          );
    }


}



  
export default App;
                                     
                                   
                                       



