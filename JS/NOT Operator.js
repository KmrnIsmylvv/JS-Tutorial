// ==================
// EXAMPLE 1
// ==================
let loggedInUser;

// If there isn't a logged in user...
if (!loggedInUser) {
	console.log('GET OUT OF HERE!');
}

// ==================
// EXAMPLE 2
// ==================
// WE ONLY HAVE GRAPE AND CHERRY FLAVORS!
let flavor = 'watermelon';

//ONE WAY OF WRITING THIS:
if (flavor !== 'grape' && flavor !== 'cherry') {
	console.log('WE DONT HAVE THAT FLAVOR!');
}
// ANOTHER WAY:
if (!(flavor === 'grape' || flavor === 'cherry')) {
	console.log('WE ONLY HAVE GRAPE AND CHERRY!');
}