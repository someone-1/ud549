describe('Address Book' , function(){

	var addressBook,
		thisContact;
	beforeEach(function(){
		addressBook = new AddressBook();
		thisContact = new Contact();
	})

	it('should be able to add a contact' , function(){
		//this piece of code was getting repeated everytime so beforeEAch function 
		//takes care it 
		// var addressBook = new AddressBook(),
		// 	thisContact = new Contact();
		addressBook.addContact(thisContact);
		expect(addressBook.getContact(0)).toBe(thisContact)
	});

	it('should be able to delete a contact' , function(){
		
		// var addressBook = new AddressBook(),
		// 	thisContact = new Contact();

		addressBook.addContact(thisContact);
		addressBook.deleteContact(0);

		expect(addressBook.getContact(0)).not.toBeDefined();
	})
});

describe('async address book' , function(){
	//to test a async function we cant treat it like a normal function 
	// the tests will complete without waiting for the async function

	// it('should grab initial contacts' , function(){
	// 	var addressBook = new AddressBook();
	// 	addressBook.getInitialContacts();
	// 	expect(addressBook.initialComplete).toBe(true);
	// })

	var addressBook = new AddressBook();

	beforeEach(function(done) {
		addressBook.getInitialContacts(function() {
			done();
		});
	});

	it('should grab initial contacts' , function(done){
		expect(addressBook.initialComplete).toBe(true);
		done();
	});

});
