function Person( name, age, emails ) {
    this.name = name;
    this.age = age;
    this.emails = emails;
}

Person.prototype.celebrateBirthday = function() {
    this.age++;
};

Person.prototype.addEmail = function( email ) {
    this.emails.push( email );
};

const john = new Person( 'John', 32, [] );
const jane = new Person( 'Jane', 28, [ 'jane@gmail.com' ] );

john.celebrateBirthday();
jane.addEmail( 'jane@example.com' );

console.log( john );
console.log( jane );