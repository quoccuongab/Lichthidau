import React, { Component } from 'react';


class Sort extends Component {
  render(){
      return(
                   
                                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                           <div className="dropdown">
                                               
                                               <button
                                                         type="button" 
                                                         className="btn btn-primary dropdown-toggle" 
                                                         id="dropdownMenu1"
                                                         data-toggle="dropdown" 
                                                         aria-haspopup="true"
                                                          aria-expanded="true">
                                                      Sắp xếp
                                               </button>
                                                 <ul className="dropdown-menu" aia-labelledby="dropdownMenu1" >
                                                   <li>
                                                     <a role="button" className="<sort_></sort_>selected">A - R </a>
                                                     </li>
                                                  <li>
                                                     <a role= "button" >  R - A </a>
                                                     </li>
                                                  <li role="separator" className="divider"></li>
                                                      <li><a role="button">
                                                       Trang thai kich hoat </a>
                                                       </li>
                                                       <li><a role="button">
                                                       Trang thai an
                                                        </a>
                                                       </li>
                                                       </ul>
                                               </div>
                                             
                                                 
                                           </div>
           
          );


}
}


  
export default Sort;
                                     
                                   
                                            



