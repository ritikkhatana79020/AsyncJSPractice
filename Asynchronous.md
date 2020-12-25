## Asynchronous JavaScript
_Asynchronous Code allows the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finish the current one. This may not look like a big problem but when you see it in a bigger picture you realize that it may lead to delaying the User Interface._

```
<script>
    document.write('hi');
    document.write('<br>');

    setTimeout( () => {
        document.write("Let's see what will happens");
    });

    document.write('<br>');
    document.write('End');    
</script>

```
__Output__: hi
            Let's see what will happens
            End

_Most of the asyncronous code you work with will be part of an API or library_
-XMLHttpRequest and Fetch
-jQuery Ajax, Axios, other HTTP libraries
-Node.js fs(file system) module            
 
__There are __few ways to work with Async code__
-callback
-promises
-async/await

