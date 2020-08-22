let songs = [];
const addSong = document.querySelector('.songs');
const listOfSong = document.querySelector('table');

//show the list of songs
const showSongs = () => {
    const html = songs
    .map(song => {
        return`
          <td>
            <li>${song.picture}</li>
            <li>${song.title}</li>
            <li>${song.style}</li>
          </td>
         <td>
            <li>${song.artist}</li>
            <li>${song.length}min</li>
         </td>
        </tr>
        <tr>
          <td>
            <button value="${song.id}" class="delete" aria-label = "remove ${song.title}" alt="delete ${song.title}">
            &times;
            </button>
          <td>
          <td>
            <button class="score">+1</button>
          </td>
        </tr>
        `;
    })
    .join('');
    listOfSong.innerHTML = html;
};


//add the songs by filling the the input
const addNewSongs = e => {
    e.preventDefault();
    const addForm = e.currentTarget;
    //create new object
    const newSong = {
        picture: addForm.picture.value,
        title: addForm.title.value,
        artist: addForm.artist.value,
        style: addForm.style.value,
        length: addForm.length.value,
        id: Date.now(),
    };
    //push the new songs
    songs.push(newSong);
    listOfSong.dispatchEvent(new CustomEvent('listUpdated'));
    addForm.reset();
};


const handleClick = e => {
    //delete a song
    const deleteBtn = e.target.closest("button.delete");
    // if the delete btn is clicked
    if (deleteBtn) {
        const id = Number(deleteBtn.value);
        console.log('delete that song');
        deleteSong(id);
    }
};


//delete an object from an array
const deleteSong = id => {
    //filter the songs array, by taking all the songs using id
    songs = songs.filter((song) => {
        return song.id !== id
    });
    listOfSong.dispatchEvent(new CustomEvent('listUpdated'));
};


//listeners
addSong.addEventListener('submit',addNewSongs);
listOfSong.addEventListener('listUpdated', showSongs);
listOfSong.addEventListener('click', handleClick);