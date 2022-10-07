var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var nama = ["Boy", "Aldi", "Ade", "Ica", "Len", "Ivan"," Dani", "Dono", "Ipto", "Randy"]
var nim = [123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133]
var grade = [60, 70, 80, 90, 50, 40, 30 ,20, 21, 100]

for(var i = 0; i <= 9; i++){
    document.write("<td>"+ number[i] + "</td>");
    document.write("<td>"+ nama[i] + "</td>");
    document.write("<td>"+ nim[i] + "</td>");
    document.write("<td>"+ grade[i] + "</td>");
    
    if(grade[i] >= 80 ){
        document.write("<td>A</td>");
    }
    else if(grade[i] >= 70 && grade[i] < 80  ){
        document.write("<td>AB</td>");
    }
    else if(grade[i] >= 60 && grade[i] < 70  ){
        document.write("<td>B</td>");
    }
    else if(grade[i] >= 50 && grade[i] < 60  ){
        document.write("<td>BC</td>");
    }
    else if(grade[i] >= 40 && grade[i] < 50  ){
        document.write("<td>C</td>");
    }
    else if(grade[i] >= 10 && grade[i] < 40  ){
        document.write("<td>D</td>");
    }
    else{
        document.write("<td>E</td>");
    }
    document.write("<tr></tr>")
}
