import React, { useState } from 'react'
import ResourceList from './ResourceList';

// export class App extends Component {
//     state= {resource:'posts'};
//   render() {
//     return (
//       <div>
//         <div>
//             <button onClick={()=> this.setState({resource:'posts'})}>Posts</button>
//             <button onClick={()=> this.setState({resource:'todos'})}>todos</button>
//         </div>
//         {this.state.resource}
//       </div>
//     )
//   }
// }

const App =() => {
    const [resource, setResource] = useState('posts');
    return (
               <div>
                <div>
                    <button onClick={()=> setResource('posts')}>Posts</button> 
                    <button onClick={()=> setResource('todos')}>todos</button>
               </div>
                {/* {resource} */}
                <ResourceList  resource={resource}/> 
              </div>
    )
}


export default App
