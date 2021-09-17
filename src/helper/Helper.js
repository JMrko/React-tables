let controller = new AbortController()
let signal = controller.signal

export const FetchData = async(url='',data={})=>{
    console.log(controller)
    
    if (controller.signal.aborted) {
        
        controller = new AbortController()
        signal = controller.signal

    }
    console.log('Now fetching');
    const response = await fetch(url,{
        method: 'POST',
        signal: signal,
        headers:{
            'Content-Type': 'application/json',
            'api-token':'HJ0t4xbw7zmQdZnpAyhffbMORIn8RpD9cUyRihQmXejkIOgmym6fuDOyWag0',
            'api_token':'HJ0t4xbw7zmQdZnpAyhffbMORIn8RpD9cUyRihQmXejkIOgmym6fuDOyWag0',
        },
        body: JSON.stringify(data)
    })
   return response.json();
}

export function abortFetching() {
    console.log('Now aborting');
    controller.abort();
  }
 