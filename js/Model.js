((window) => {
	console.log('executing model...');

	function Model() {
		this.todoList = [];
	}

	Model.prototype.add = function(text, callback) {
		console.log(`[m]add todo: ${text}`);
		this.todoList.push({text, id: Date.now()});
		console.log('[m]todo added, alerting controller');
		callback(this.todoList);
	}

	Model.prototype.remove = function(id, callback) {
		console.log(`[m]remove todo: ${id}`);
		this.todoList = this.todoList.filter(function(todo) {
			return todo.id != id;
		});		
		callback(this.todoList);
	}

	window.app = window.app || {};
	window.app.Model = Model;
})(window);