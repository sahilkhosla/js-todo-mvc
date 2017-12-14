((window) => {
	console.log('executing controller...');

	function Controller(model, view) {
		//initial render
		var self = this;
		self.model = model;
		self.view = view;

		//bind view to observe enter key and notify the controller
		self.view.bindAdd(function(todoText) {
			//notification received from the view via this callback
			console.log('[c]received alert from view, ask model to add');
			self.handleAddEvent(todoText);
		});

		//bind view to observe clicks and notify the controller 
		self.view.bindDelete(function(todoId) {
			//notification received from the view via this callback
			self.handleDeleteEvent(todoId)
		});

		self.view.render();
	}

	Controller.prototype.handleAddEvent = function(todoText) {
		var self = this;
		self.model.add(todoText, function(data) {
			console.log('[c]recieved alert from model (added), call view');
			self.view.render(data);
		});
	}

	Controller.prototype.handleDeleteEvent = function(todoId) {
		var self = this;
		//ask model to delete todo with given id and let the controller know when done
		self.model.remove(todoId, function(data) {
			//notification recieved, let view know to re-render with latest data
			console.log('[c]removed todo, call view');
			self.view.render(data);			
		});
	}

	window.app = window.app || {};
	window.app.Controller = Controller;
})(window);