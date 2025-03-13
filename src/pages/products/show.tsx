import { useOne } from "@refinedev/core"


const ShowProduct = () => {
    const {data, isLoading} = useOne({resource: 'users', id: 1})

    if(isLoading) return <div>Data Loading...</div>

  return (
    <div>
        User Name: {data?.data.firstName + ' ' + data?.data.lastName}
    </div>
  )
}

export default ShowProduct