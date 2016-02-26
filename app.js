var app = angular.module('myApp', []);

app.controller('main', ['$scope', function($scope){
	$scope.displayWords = [];
	$scope.displayPhrase = [];
	$scope.classes = [
		'class1',
		'class2',
		'class3',
		'class4',
		'class5',
		'class6',
		'class7',
		'class8',
		'class9',
		'class10'
	];

	$scope.words = [
		'turn up', 
		'tbt',
		'cool', 
		'gnarly', 
		'grind', 
		'tween', 
		'hipster', 
		'swerve', 
		'swag', 
		'hashtag',
		'sweet', 
		'dude', 
		'stoked', 
		'dumb', 
		'snow',
		'school',
		'love',
		'hate',
		'potty',
		'candy'
	];

	$scope.phrases = [
		'I\'m bored',
		'Why?',
		'Are we nearly there yet?',
		'It\'s not fair!',
		'Do I have to?',
		'It wasn\'t me',
		'Can I have...?',
		'In a minute',
		'I hate you',
		'He / she hit me',
		'I don\'t want to go to bed',
		'He / she started it',
		'I\'m hungry',
		'You never let me do anything',
		'What?',
		'I don\'t like it',
		'I want this',
		'Can you do it',
		'I can\'t do it',
		'But you said...'
	];

	$scope.someClass = function(){
		var aClass;
		var index = Math.floor(Math.random() * $scope.classes.length);
		aClass = $scope.classes[index]
		return aClass;
	}

	$scope.generateWords = function(decorate){
		$scope.someClass();
		var addPara = document.getElementById('word');
		var p = document.createElement('p');
		var item;
		var index = Math.floor(Math.random() * $scope.words.length);
		item = $scope.words[index]
		if (decorate === 'pretty'){
			addPara.appendChild(p);
			p.innerHTML = '<span class="' + $scope.someClass() + '">' + item + '</span>';
		} else {
			addPara.appendChild(p);
			p.innerHTML = item;
		}
	};

	$scope.generatePhrase = function(decorate){
		var addPara = document.getElementById('word');
		var p = document.createElement('p');
		var item;
		var index = Math.floor(Math.random() * $scope.phrases.length);
		item = $scope.phrases[index]
		if (decorate === 'pretty'){
			addPara.appendChild(p);
			p.innerHTML = '<span class="' + $scope.someClass() + '">' + item + '</span>';
		} else {
			addPara.appendChild(p);
			p.innerHTML = item;
		}
	};

}]);






