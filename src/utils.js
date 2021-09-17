export const getProducts =  async () => {
    try {
    const responseData = await fetch("https://fakestoreapi.com/products");
    const data = await responseData.json();
    return data;

} catch(error) {
    console.log(error);
}
return [];

}