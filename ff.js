/*
 * For use with Yahoo Fantasy Football "Players" page
 */
var players = jQuery('.ysf-player-name');
var points = jQuery('tr .Fw-b');

var data = "name,points\n";

for(i = 0; i < players.length; i++) {
    data += players[i].textContent;
    data += ",";
    data += points[i].textContent;
    data += "\n";
}

//download("players.csv", data);
