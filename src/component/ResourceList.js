import React, { useState, useEffect } from 'react';
import axios from 'axios';

// export class ResourceList extends Component {
//     state ={resource:[]};

//    async componentDidMount() {
//        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//        this.setState({resources:response.data});

//    }
//    async componentDidUpdate(prevProps){
//        if (prevProps.resource != this.props.resource){
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//         this.setState({resources:response.data});

//        }
//    }
//   render() {
//     return (
//       <div>
//         {/* {this.props.resource} */}
//         {this.state.resource.length}
//       </div>
//     )
//   }
// }

// const ResourceList =({resource}) =>{
//     const [resources,setResource] = useState([]);
   
//     const fetchResource = async () => {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
//        setResource(response.data)

//     };
//     useEffect(() => {
//         fetchResource(resource);

//     },[resource]);
//     return <div>{resources.length}</div>
// }
//final
const useResources =(resource) =>{
    const [resources,setResource] = useState([]);
   
    useEffect(
        ()=>{
            (async resource => {
                const response = await axios.get(
                   `https://jsonplaceholder.typicode.com/${resource}` 
                );
                setResource(response.data);
            })(resource)
        },
        [resource]
    )

    return resources;
    
}

const ResourceList = ({resource}) =>{

    const resources = useResources(resource);
    // const [resources,setResource] = useState([]);
   
    // useEffect(
    //     ()=>{
    //         (async resource => {
    //             const response = await axios.get(
    //                `https://jsonplaceholder.typicode.com/${resource}` 
    //             );
    //             setResource(response.data);
    //         })(resource)
    //     },
    //     [resource]
    // )

// return <div>{this.state.resources.length}</div>

return (
    <ul>
        {resources.map(record => (
            <li key ={record.id}>{record.title}</li>
        ))}
    </ul>
)

}

export default ResourceList
