// KLASA KANBAN CARD
function Card(id, name) {
	var self = this;
	
	this.id = id;
	this.name = name || 'No name given';
	this.element = createCard();

	function createCard() {
		var card = $('<li class="card"></li>');
		var cardDeleteBtn = $('<button class="btn-delete">x</button>');
		var cardEditBtn = $('<button class="btn-edit">Edycja</button>');
		var cardDescription = $('<p class="card-description"></p>');
		
		cardDeleteBtn.click(function(){
			self.removeCard();
		});
		
		cardEditBtn.click(function(event){
		var cardName = prompt("Wpisz nową nazwę karty");
		event.preventDefault();	
		cardDescription.text(cardName);
		card.edit(cardDescription)
		});

		card.append(cardEditBtn);
		card.append(cardDeleteBtn);
		cardDescription.text(self.name);
		card.append(cardDescription)
		return card;
	}
}
Card.prototype = {
	removeCard: function() {
    var self = this;
    $.ajax({
      url: baseUrl + '/card/' + self.id,
      method: 'DELETE',
      success: function(){
        self.element.remove();
      }
    });
},
	editCard: function() {
    var self = this;
	$.ajax({
	    url: baseUrl + '/card',
	    method: 'PUT',
	    data: {
	    name: cardName,
	    bootcamp_kanban_column_id: self.id
	    },
	    success: function(response) {
         self.editCard(card);
	    }
    });
}
}
		