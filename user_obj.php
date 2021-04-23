<?php
    class User{
        var $username;
        var $password;
        var $firstname;
        var $lastname;

        function __construct($user, $pass, $firstn, $lastn){
            $this->username = $user;
            $this->password = $pass;
            $this->firstname = $firstn;
            $this->lastname = $lastn;
        }

        function getFirstname(){
            return $this->firstname;
        }

        function getLastname(){
            return $this->lastname;
        }
    }
?>