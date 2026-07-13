// list that's already set up
console.log(list.toString());
//=> "( 1 ) -> ( 2 ) -> ( 3 ) -> null"

list.insertAt(1, 10, 11)
console.log(list.toString());
//=> "( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> null"

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
