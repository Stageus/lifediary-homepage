export const convertImageUrl = async( imageUrl ) => {

    try{
        const response = await fetch( imageUrl );
        const blob = await response.blob();
        const fileType = blob.type.slice( 6 );
        const file = new File([blob], `googleImg.${fileType ?? "jpg"}`, { type: blob.type ?? "image/jpg" })
        return file;

    }catch( error ) {
        console.error("error:",error);
        return error;
    }
}