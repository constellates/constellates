import request from 'superagent';

export default {

	get (url, callback) {
		request.get(url)
			.end(function (err, res) {
				callback(res.body);
			});
	}

}