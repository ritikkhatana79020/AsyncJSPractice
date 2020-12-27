//Button1
document.getElementById('button1').addEventListener('click',loadButton1);

//Button2
document.getElementById('button2').addEventListener('click',loadButton2);

//loadButton1 Data
function loadButton1(){
    console.log(1);
    //create xhr object
    const xhr = new XMLHttpRequest();

    //Open
    xhr.open('GET','button1Data.json',true);

    xhr.onload = function(){
        if(this.status === 200){
           const customer = JSON.parse(this.responseText);
           
           const output = `
           <ul>
              <li>${customer.name}</li>
              <li>${customer.degree}</li>
              <li>${customer.college}</li>
           </ul>
           `;

           document.getElementById('output1').innerHTML = output;
        }
    }
    xhr.send();
}


//loadButton2 Data
function loadButton2(){
    console.log(1);
    //create xhr object
    const xhr = new XMLHttpRequest();

    //Open
    xhr.open('GET','button2Data.json',true);

    xhr.onload = function(){
        if(this.status === 200){
           const customers = JSON.parse(this.responseText);
           
           let output = ''; 

           customers.forEach(function(customer) {
            output += `
            <ul>
               <li>${customer.name}</li>
               <li>${customer.degree}</li>
               <li>${customer.college}</li>
            </ul>
            `;
 
           });
           
           document.getElementById('output2').innerHTML = output;
        }
    }
    xhr.send();
}
