class TodoPage {
    // Selectores
    elements = {
      inputNewTodo: () => cy.get('input.new-todo'),
      todoItemLabel: (itemText) => cy.contains('label', itemText),
      todoItems: () => cy.get('.todo-list li'),
      todoItem: (itemText) => cy.contains('.todo-list li', itemText),
      deleteButton: (itemText) =>
        this.elements.todoItemLabel(itemText).parent().find('button.destroy'),
      todoItemCheckbox: (itemText) =>
        this.elements.todoItemLabel(itemText).parent().find('input.toggle'),
    };
  
    // Métodos
    addTodo(taskName) {
      this.elements.inputNewTodo().type(`${taskName}{enter}`);	
    }

    deleteTodo(taskName) {
        //this.elements.todoItemLabel(taskName).dblclick(); // Doble click es para editar no borrar
        this.elements.deleteButton(taskName).click({ force: true });
    }
  
    validateTodoExists(taskName) {
      this.elements.todoItemLabel(taskName).should('be.visible');
    }

    toggleTodo(taskName) {
        this.elements.todoItemCheckbox(taskName).click();
    }

  }
  
  export default TodoPage;