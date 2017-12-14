((window) => {
	console.log('executing view...');

	function View() {
		this.ENTER_KEY = 13;
	}

	View.prototype.render = function(data) {
		console.log('[v]render...');
		var source = document.getElementById("todo-list-template").innerHTML;
		var template = Handlebars.compile(source);
		var html = template(data);
		document.getElementById('todo-list').innerHTML = html;
	}

	//bind add
	View.prototype.bindAdd = function(callback) {
		var self = this;

		window.onkeypress = function(event) {
			if (event.keyCode === self.ENTER_KEY) {
				console.log('[v]enter key pressed, letting controller know');
				//let the controller know that a change was detected
				callback(event.target.value);

				//clear the value from the input (controller will save in model)
				event.target.value = '';
			}
		};	
	}
	
	//bind add
	View.prototype.bindDelete = function(callback) {
		var self = this;

		document.getElementById("todo-list").addEventListener("click", function(event) {
			if(event.target && event.target.nodeName == "LI") {
				console.log('[v]clicked, letting controller know');	
				callback(event.target.dataset.id);	
			}
			
		});
	}

	window.app = window.app || {};
	window.app.View = View;
})(window);