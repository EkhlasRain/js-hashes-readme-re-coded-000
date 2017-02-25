var playlist= {morteza: "kojaei",shakira: "gepsy",baran: "100 bar",beyonce: "broken heart girl"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName){
	delete playlist[artistName]

	return playlist
}
