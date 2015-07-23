import request from 'superagent';
import config  from '../../config';

export default {

	get (url, callback) {
		request.get(config.api + url)
			.end(function (err, res) {
				callback(res.body);
			});
	}

}