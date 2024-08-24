import { useState } from "react";

export const useFetch = () => {

  const [ fetchData, setFetchData ] = useState( null );

  const baseFetch = async ( url, options, token ) => {
    try {
      const { method = "GET", headers = "application/json", data = null } = options ?? {};
      const isFormData = data instanceof FormData;
      const requestInfo = {
        method,
        headers: {
          ...(isFormData ? {} : {"Content-Type": headers}),
          ...(token && { token: token }),
        },
        ...(data && {
          body: isFormData ? data : JSON.stringify( data ),
        }),
      };
  
      const response = await fetch( `${import.meta.env.VITE_API_URL}/${url}`, { ...requestInfo } );
      if ( response.status === 200 ) {
        const jsonData = await response.json();  
        setFetchData( { status: response.status, data: jsonData.result} );
      } else {
        setFetchData( { status: response.status} ) ;
      }
        

    } catch( error ) {

      setFetchData({ error });

    }

  };

  return [fetchData, baseFetch];
};
