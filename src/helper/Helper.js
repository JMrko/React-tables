
export const FetchData = async(url='',data={})=>{
    const response = await fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'api-token':'HJ0t4xbw7zmQdZnpAyhffbMORIn8RpD9cUyRihQmXejkIOgmym6fuDOyWag0',
            'api_token':'HJ0t4xbw7zmQdZnpAyhffbMORIn8RpD9cUyRihQmXejkIOgmym6fuDOyWag0',
        },
        body: JSON.stringify(data)
    })
   return response.json();
}