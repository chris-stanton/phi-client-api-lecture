myApp.controller('DogController', ['$http', function($http) {
  console.log('home controller running');

  var self = this;
  self.pet = {};
  self.message = "Welcome to the Home View";

  var api_key = "dde1e010ef8fa6bb51db6661ada51714";
  var baseURL = "http://api.petfinder.com/";

  self.getRandomPet = function() {
    // create a URL
    var query = baseURL + "pet.getRandom";
    query += "?key=" + api_key;
    query += "&animal=dog";
    query += "&output=basic";
    query += "&format=json";

    // console.log('query to API: ', query);

    // encode that URL
    var request = query + "&callback=JSON_CALLBACK";
    console.log(request);

    // make ajax request
    $http.jsonp(request).then(function(response) {
      console.log('response: ', response.data);
      self.pet = response.data.petfinder.pet;
    });

    // when request is completed, put info on the DOM
  }

}]);
