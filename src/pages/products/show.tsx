import { useOne, useUpdate } from "@refinedev/core"
import { useState } from "react"


const ShowProduct = () => {
    const {mutate, isLoading: isUpdating} = useUpdate()
    const [name, setName] = useState<string>('')
    const [resource, setResource] = useState<string>('products')
    const [id, setId] = useState<string>('1')
    const {data, isLoading: oneLoading} = useOne({resource: resource, id: id})

    const updateName = async () => {
        await mutate({
            resource: resource,
            id: id,
            values: {
                name: name
            }
        })
    }

    if(oneLoading) return <div>Data Loading...</div>

    if(isUpdating) return <div>Updating...</div>

  return (
    <>
        <div>
            Resource Name: {resource} |
            Product Name: {data?.data.name} | 
            ID: {id}
        </div>
        <div>
            <p>Resource: </p>
            <input type="text" onChange={(e) => setResource(e.target.value)}/> 
        </div>
        <div>
            <p>ID Name: </p>
            <input type="text" onChange={(e) => setId(e.target.value)}/> 
        </div>
        <div>
            <p>Update Name: </p>
            <input type="text" onChange={(e) => setName(e.target.value)}/> 
        </div>
        <button onClick={updateName} >Update Price</button>
    </>
  )
}

export default ShowProduct