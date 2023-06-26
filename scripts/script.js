/* 1. define variables */
var me = "l.j.a.creed";
var place = "gmail.com";

/* 2. find email link to replace */
var elink = document.getElementById("email");

/* 3. replace link href with variables  */
var body = ""
elink.href = `mailto:${me}@${place}?body=${body}`;