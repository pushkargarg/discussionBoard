export class MainController {
  constructor ($http) {
    'ngInject';
    this.$http = $http;
    this.getMessages();
  }
  //get returns a promise, its like a callback, therefore we have used .then
  getMessages(){
    var vm = this;
    this.$http.get('http://localhost:5000/api/message').then(function(result){
      vm.messages = result.data;
    })
  }


  postMessage(){
    this.$http.post('http://localhost:5000/api/message',{"msg":this.message});
  }

  
}
