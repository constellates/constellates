import request from './request'

let client_id = '3318a6735b1cc07faa2ee831df859b6a';

export default {

	getSongs(callback) {
		request.get('https://api.soundcloud.com/users/constellates/tracks?client_id=' + client_id, (songs) => {
			callback(songs);
		});
	}
};