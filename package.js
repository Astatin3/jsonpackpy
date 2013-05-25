/*
 Copyright (c) 2013, Rodrigo González, Sapienlab All Rights Reserved.
 Available via MIT LICENSE, see LICENSE.
 */
var miniExcludes = {
		"jsonpack/README.md": 1,
		"jsonpack/package": 1
	},
	isTestRe = /\/test\//;

var profile = {
	resourceTags: {
		test: function(filename, mid) {
			return isTestRe.test(filename);
		},

		miniExclude: function(filename, mid){
			return isTestRe.test(filename) || mid in miniExcludes;
		},

		amd: function(filename, mid){
			return /\.js$/.test(filename);
		}
	}
};