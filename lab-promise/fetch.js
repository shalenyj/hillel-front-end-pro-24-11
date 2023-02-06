const getAlbums = async() => {
  const albums = fetch('https://jsonplaceholder.typicode.com/albums', {
    method: 'GET'
  }) 
    .then(res => res.json())
  console.log(albums)
}


