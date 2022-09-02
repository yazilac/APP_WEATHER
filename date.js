const dates = ()=>{
    const pnameDay = document.querySelector("#week");
    const pday = document.querySelector("#day");
    const pmonth = document.querySelector("#month");
    const pyear = document.querySelector("#year");
    const date =  new Date();// uso de new Date();

    let nameDay = date.getDay(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();

    //Arreglo para almacenar dias de la semana y meses    
    const week = ['Domingo','Lunes','Marter','Miercoles','Jueves','Viernes','Sabado'];
    const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Novimbre','Diciembre'];

    //Enviar al campo de texto 
    pnameDay.textContent = week[nameDay];
    pday .textContent = day + " de ";
    pmonth.textContent = months[month]+" del ";
    pyear.textContent = year;
}
dates();//Ejecutar la funcion de forma automatica