pragma solidity ^0.4.20;

contract HelloWorld {
    // Declare global variable
    string public greeting;

    // This is constructor that will only be called once during deployment
    function HelloWorld () public {
        greeting = "Hello, Wolrd! This is my first smart contract!";
    }

    // a setGreeting function to set the variable "greeting" to a new message.
    function setGreeting (string _newGreeting) public {
        greeting = _newGreeting;
    }

    // a redundent getGreeting function which returns the variable state
    // since greeting is a public variable, upon contract deployment, a getter function will be
    // automatically created and used for querying the state of the variable.
    function getGreeting ()
        public
        constant
        returns (string){
        return greeting;
    }
}
