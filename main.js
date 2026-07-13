// list that's already set up
console.log(list.toString());
//=> "( 1 ) -> ( 2 ) -> ( 3 ) -> null"

list.insertAt(1, 10, 11)
console.log(list.toString());
//=> "( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> null"
