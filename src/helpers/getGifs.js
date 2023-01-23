export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Tpx6M0X8mTM9uTj6XoGgFn4RofNDSApE&q=${category}&limit=20`;
    const resp = await fetch(url);

    //console.log(resp);

    const {data} = await resp.json();

    //console.log(data);

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    console.log(gifs)

    return gifs;

}