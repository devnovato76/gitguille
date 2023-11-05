const today = new Date(); /* Fecha Actual*/
console.log(today);

const birthday = new Date("1976-01-22T08:30:00"); /* Ponemos una fecha con ese formato de Texto  */
console.log(birthday);

console.log(today.getFullYear()); /* Año 2023 */
console.log(today.getMonth());    /* Mes -1 Porque los meses van de 0 Enero a 11 Diciembre */
console.log(today.getDate());     /* Número de día Actual */
console.log(today.getDay());      /* Número de día de la semana 0 Domingo 6 Sábado*/
console.log(today.getHours());    /* Hora */
console.log(today.getMinutes());  /* Minutos */
console.log(today.getSeconds());  /* Segundos */
console.log(today.getTime());     /* TimeStamp    MiliSegundos desde desde 1970 */


setMonth()        /* Establecer un mes Mes -1 Porque los meses van de 0 Enero a 11 Diciembre */
setDate()         /* Establecer un Número de día */
setHours()        /* Establecer un Número de hora */
setMinutes()      /* Establecer un Número de minutos */
setSeconds()      /* Establecer un Número de segundos */

/* UNIX TimestampSe trata de un valor entero que representa elnúmero de segundos transcurridos desde el 1de enero de 1970 a las 00:00:00 UTC */

const today1 = new Date();  /* Fecha Actual */
const TWO_DAYS_IN_MS = 2 * 24 * 60 * 60 * 1000;  /*[Sumar 2 días] 2 * 24 horas * 60 minutos * 60 segundos * 1000 milisegundos*/
const twoDaysLater = newDate(today1.getTime() + TWO_DAYS_IN_MS); /* Fecha Actual en Milisegundos + 2 Días */
console.log(twoDaysLater);

const yesterday = new Date("2023-03-23T12:00:00"); /* Fecha de Ayer */
const today2 = new Date("2023-03-24T12:00:00");    /* Fecha de Hoy */
const diffInMilliseconds = today2.getTime() - yesterday.getTime(); /* Fecha de Hoy - Fecha de Ayer */
const ONE_DAYS_IN_MS = 1 * 24 * 60 * 60 * 1000; /* Un día 1 * 24 horas * 60 minutos * 60 segundos * 1000 milisegundos */
const diffInDays = Math.floor(diffInMilliseconds / ONE_DAYS_IN_MS); /*  Redondear la diferencia y multiplicar por 24 horas * 60 minutos * 60 segundos * 1000 milisegundos*/
console.log(diffInDays);
