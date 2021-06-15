const songSearch = () => {
    const searchSong = document.getElementById('song-title').value;
    
    fetch(`https://www.songsterr.com/a/ra/songs.json?pattern=${searchSong}`)
        .then(res => res.json())
        .then(data => titleSong(data))
}

const titleSong =(songs) => {
    
    const displaySong = document.getElementById('display-song');
    const my10Items = songs.slice(0, 10);
    my10Items.forEach(song => {

        const div = document.createElement('div');
        div.className ="single-result row align-items-center my-3 p-3";

        div.innerHTML = `
        <div class="col-md-9">
        <h3 class="lyrics-name">${song.title}</h3>
        <p class="author lead">Album by <span>${song.artist.name}</span></p>
    </div>
    <div class="col-md-3 text-md-right text-center">
        <button class="btn btn-success">Get Lyrics</button>
    </div> `;
        displaySong.appendChild(div);
    }

   
);

}