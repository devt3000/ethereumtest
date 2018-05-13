const TodoList = artifacts.require('./TodoList.sol')
const assert = require('assert')

let contractInstance

contract('TodoList', (accounts) => {
    beforeEach(async () => {
        contractInstance = await TodoList.deployed()
    })

    it('should add a to-do note successfully with a short text of 20 letters', async () => {
        await contractInstance.addTodo(web3.toHex('this is a short text'))

        const newAddedTodo = await
    contractInstance.todos(accounts[0], 0)
        const todoContent = web3.toUtf8(newAddedTodo[1])

        assert.equal(todoContent, 'this is a short text', 'The content of the new added todo is not correct')
    })

    it('should mark one of your to-dos as completed', async () => {
        await contractInstance.addTodo('example')
        await contractInstance.markTodoAsCompleted(0)
        const lastTodoAdded = await
    contractInstance.todos(accounts[0], 0)
        const isTodoCompleted = lastTodoAdded[3] // 3 is the bool isCompleted value of the todo note

        assert(isTodoCompleted, 'The todo should be true as completed')
    })
})
