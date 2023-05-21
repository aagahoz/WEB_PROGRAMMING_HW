
document.addEventListener("DOMContentLoaded", async function () {
  const url = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=%3CREQUIRED%3E&per_page=10&page=1';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b1af1996bamshe4b8cc1099014b0p13359bjsn720bc392c49d',
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);

    // Verileri işle ve görüntüle
    var songsContainer = document.getElementById('songs');
    var songs = response.hits;

    songs.forEach(function (song) {
      var result = song.result;

      var songDiv = document.createElement('div');
      songDiv.className = 'song';

      var image = document.createElement('img');
      image.src = result.header_image_thumbnail_url;

      var title = document.createElement('h2');
      title.textContent = result.full_title;

      var artist = document.createElement('p');
      artist.textContent = 'Artist: ' + result.artist_names;

      var language = document.createElement('p');
      language.textContent = 'Language: ' + result.language;

      var releaseDate = document.createElement('p');
      releaseDate.textContent = 'Release Date: ' + result.release_date_components.month + '/' + result.release_date_components.day + '/' + result.release_date_components.year;

      songDiv.appendChild(image);
      songDiv.appendChild(title);
      songDiv.appendChild(artist);
      songDiv.appendChild(language);
      songDiv.appendChild(releaseDate);

      songsContainer.appendChild(songDiv);
    });
  } catch (error)
  {
    console.error(error);
  }
});
