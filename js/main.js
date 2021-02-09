const searchSongs = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`;
//Load data
    fetch(url)
    .then(res => res.json())
    .then(data => displaySongs(data.data))
}


//Display songs from api
const displaySongs = songs =>{
    songs.forEach(song => {
        console.log(song.title)
    });
}