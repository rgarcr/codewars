// Your job is to create a simple password validation function, as seen on many websites.

// The rules for a valid password are as follows:

// There needs to be at least 1 uppercase letter.
// There needs to be at least 1 lowercase letter.
// There needs to be at least 1 number.
// The password needs to be at least 8 characters long.
// You are permitted to use any methods to validate the password.

//My solution
function password(str) {
    return str.length >= 8 && /[a-z]/g.test(str) && /[A-Z]/g.test(str) && /[0-9]/g.test(str)
}