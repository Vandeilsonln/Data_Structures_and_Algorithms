// piece of data - val
// reference to next node - next

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        var newNode = new Node(val)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if(this.length === 0) return undefined
        var current = this.head
        var newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }
}


var myList = new SinglyLinkedList()
myList.push('First')
myList.push('Second')
myList.push('Third')
myList.push('Fourth')

console.log(myList)

myList.pop()
console.log(myList)
