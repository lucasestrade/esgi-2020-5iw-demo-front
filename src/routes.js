/*global app, Router */
import { todoStorage } from './store';
import { app } from './app';
import director from 'director';
import todomvc from 'todomvc-common';

(function (app, director) {

	'use strict';

	var router = new director.cli.Router();

	['all', 'active', 'completed'].forEach(function (visibility) {
		router.on(visibility, function () {
			app.visibility = visibility;
		});
	});

	router.configure({
		notfound: function () {
			window.location.hash = '';
			app.visibility = 'all';
		}
	});

})(app, director);
