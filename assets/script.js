let songs = [
    // {
    //     title: "Misaora",
    //     artist: "Dadah",
    //     style: "slow",
    //     length : 3,
    //     picture: "https://picsum.photos/200/400",
    // },
    // {
        
    //     title: "Mbola ho avy",
    //     artist: "Fety",
    //     style: "rock",
    //     length : 5,
    //     picture: "https://picsum.photos/200/400",
    // },
    // {
        
    //     title: "Tena izy",
    //     artist: "Bina",
    //     style: "dance",
    //     length : 6,
    //     picture: "https://picsum.photos/200/400",
    // },
];

const addSong = document.querySelector('.songs');
const listOfSong = document.querySelector('table');

//show the list of songs
const showSongs = () => {
    const html = songs
    .map(song => {
        return`
        <tr>
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
          <button value="${song.id}" class="delete">
            <img src="./assets/trash.svg">
          </button>
        </tr>
        </ul>
        `;
    })
    .join('');
    listOfSong.innerHTML = html;
};
// showSongs();

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
    // addNewSongs();
};

//listeners
addSong.addEventListener('submit',addNewSongs);
listOfSong.addEventListener('listUpdated', showSongs);