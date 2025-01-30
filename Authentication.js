// Import necessary modules
const fs = require('fs');
const readline = require('readline');
const bcrypt = require('bcrypt');

const CREDENTIALS_FILE = 'user_credentials.json';

// Load existing credentials or initialize a new store
function loadCredentials() {
  if (!fs.existsSync(CREDENTIALS_FILE)) {
    return {};
  }
  const data = fs.readFileSync(CREDENTIALS_FILE);
  return JSON.parse(data);
}

// Save updated credentials to the file
function saveCredentials(credentials) {
  fs.writeFileSync(CREDENTIALS_FILE, JSON.stringify(credentials, null, 2));
}

// Register a new user
async function register() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a username: ', async (username) => {
    const credentials = loadCredentials();
    if (credentials[username]) {
      console.log('Username already exists. Please choose another.');
      rl.close();
      return;
    }

    rl.question('Enter a password: ', async (password) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      credentials[username] = hashedPassword;
      saveCredentials(credentials);
      console.log('User registered successfully!');
      rl.close();
    });
  });
}

// Log in an existing user
async function login() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter your username: ', (username) => {
    const credentials = loadCredentials();

    if (!credentials[username]) {
      console.log('Username not found.');
      rl.close();
      return;
    }

    rl.question('Enter your password: ', async (password) => {
      const hashedPassword = credentials[username];
      const match = await bcrypt.compare(password, hashedPassword);

      if (match) {
        console.log('Login successful!');
        rl.close();
        menu(username);
      } else {
        console.log('Incorrect password.');
        rl.close();
      }
    });
  });
}

// Display a menu after successful login
function menu(username) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function showMenu() {
    console.log('\n--- Menu ---');
    console.log('1. View Profile');
    console.log('2. Logout');
    console.log('3. Exit');

    rl.question('Select an option: ', (choice) => {
      switch (choice) {
        case '1':
          console.log(`\nProfile Info:\nUsername: ${username}\n`);
          showMenu();
          break;
        case '2':
          console.log('Logged out successfully.');
          rl.close();
          break;
        case '3':
          console.log('Exiting application.');
          rl.close();
          process.exit();
        default:
          console.log('Invalid option. Please try again.');
          showMenu();
      }
    });
  }

  showMenu();
}

// Main program loop
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function showMainMenu() {
    console.log('\n--- Welcome ---');
    console.log('1. Register');
    console.log('2. Login');
    console.log('3. Exit');

    rl.question('Select an option: ', (choice) => {
      switch (choice) {
        case '1':
          rl.close();
          register();
          break;
        case '2':
          rl.close();
          login();
          break;
        case '3':
          console.log('Goodbye!');
          rl.close();
          break;
        default:
          console.log('Invalid option. Please try again.');
          showMainMenu();
      }
    });
  }

  showMainMenu();
}

main();
