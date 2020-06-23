
function odliczanie()
        {
            /*
            var dzisiaj = new Date();

            var dzien = dzisiaj.getDate();
            var miesiac = dzisiaj.getMonth()+1;
            var rok = dzisiaj.getFullYear();

            var godzina = dzisiaj.getHours();
            if(godzina<10) godzina = "0" + godzina;

            var minuta = dzisiaj.getMinutes();
            if(minuta<10) godzina = "0" + minuta;

            var sekunda = dzisiaj.getSeconds();
            if(sekunda<10) godzina = "0" + sekunda;

            document.getElementById("zegar").innerHTML = dzien + "/" + miesiac + "/" + rok + "|" + godzina + ":" + minuta + ":" + sekunda;

            setTimeout("odliczanie()", 1000);
            */

            var dzisiaj = new Date();

            /*
            var dzien = dzisiaj.getDate();
            var miesiac = dzisiaj.getMonth();
            var rok = dzisiaj.getUTCFullYear();
            */

            //Mozna dac getUTCHours \/

            var godzina = dzisiaj.getHours();
            var minuta = dzisiaj.getMinutes();
            var sekunda = dzisiaj.getSeconds();

            var suma = Math.round((sekunda + minuta*60 + godzina*3600)/4.505);


            document.getElementById("zegar").innerHTML = suma + " zgonów";
            
            

            setTimeout("odliczanie()", 4500);

        }    