import React, {useState,useEffect} from 'react'
const Form = ({setTodos,todos,id,setId}) => {
    const [title, setTitle] = useState("")
    const[description,setDescription]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(id){
            updateById(id)
            setId("")
        }
        else{
            const obj={
            id:Math.random(),
            title,
            description
        }
         setTodos([...todos,obj])
        }
        setTitle("");
        setDescription("");
    }
    useEffect(() => {
      if(id){
        const updatedData=todos.filter((d)=>d.id === id)
        setTitle(updatedData[0].title)
        setDescription(updatedData[0].description)
      }
    }, [id])
    const updateById=(id)=>{
        const obj={
            title,
            description
        }
        setTodos((prevData)=>
        prevData.map((todos)=>todos.id === id ? {...todos,...obj}:todos))
    }
    
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="container my-5 text-center"
    style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

        <input
            style={{width:"30%"}}
            value={title}
            placeholder="Enter a task..." 
            className="mx-2" 
            type="text"
            onChange={(e)=>setTitle(e.target.value)}
         />

        <input
            style={{width:"30%"}}
            value={description} 
            placeholder="Enter a description..." 
            className="mx-2"
            type="text"
            onChange={(e)=>setDescription(e.target.value)}
        />
        {
            id && (<button className="btn btn-warning">Edit</button>)
        }
            {
        !id && (<button className="btn btn-warning">Add</button>)
        }
        </div>
 </form>
    </>
  )
}

export default Form