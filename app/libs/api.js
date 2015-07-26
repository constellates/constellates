import data  from '../../data';

export default {

	getProjects (callback) {
		callback(data.projects);
	},

	getProject (url, callback) {
		for (let project of data.projects) {
			if (project.url === url) {
				callback(project);
			}
		}
	}

}