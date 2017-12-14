(function() {

	function TodoApp() {
		this.model = new app.Model();		
		this.view = new app.View();
		this.controller = new app.Controller(this.model, this.view);
	}

	var todoApp = new TodoApp();

})();