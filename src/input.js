// import React, { Component } from 'react'
// import axios from 'axios';

// export class input extends Component {
//     state ={
//         file:null
//     }

//     componentDidMount(){
//         this.postData();
//     }


//      postData=()=>{
//                 const formData=new FormData();
//                 formData.append('image',file);
//                 axios.post('/api/posts',formData);
//             }

//     submitHandler=(e)=>{

//     }
  
//     changeHandler=(e)=>{
//   this.setState({
//       file:e.target.files[0]
//   })
//     }

//     render() {
//         return (
//             <div>
//                 <div>
//                         <form onSubmit={this.submitHandler} >
//                             <input type="file" accept=".jpg,.png,.jpeg" onChange={this.changeHandler}/>
//                             <button type="submit">Submit</button>
//                         </form>
//                         </div>
//             </div>
//         )
//     }
// }

// export default input




