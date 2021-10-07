/* Tohle je poznámka v JS */
// Tohle je jednořádková poznámka.
/* PRAVIDLA ZÁPISU JS:
- nemusí mít ; na konci řádku(enter to bere jako středník)
- rozlišuje malá a VELKÁ písmena
- neurčuje typy proměnných
var jméno;
- nemusíme přetypovávat proměnné
- v názvech nemůžeme psát mezery, speciální znaky(kromě _ - !)
- uvozovky ve stringu píšeme jako ''
- výraz "this" je relativní -> uvnitř funkce znamená něco jiného než mimo funkci
*/

var cisloCarouselu = 1;
var car1;
var car2;
var car3;

function init() {
document.getElementById("sipkaP").addEventListener("click", posunCarouselVpred);
document.getElementById("sipkaL").addEventListener("click", posunCarouselZpet);

car1 = document.getElementById("car1");
car2 = document.getElementById("car2");
car3 = document.getElementById("car3");
}

function posunCarouselVpred(){
    cisloCarouselu++;
    posunCarousel()
}
function posunCarouselZpet(){
    cisloCarouselu--;
    posunCarousel()
}

function posunCarousel() {
    console.log(cisloCarouselu)

    switch (cisloCarouselu) {
        case 0:
            car1.style.display = "none";
            car2.style.display = "none";
            car3.style.display = "block";
            cisloCarouselu = 3;
            break;
        case 1:
            car1.style.display = "block";
            car2.style.display = "none";
            car3.style.display = "none";
            break;
        case 2:
            car1.style.display = "none";
            car2.style.display = "block";
            car3.style.display = "none";
            break;
        case 3:
            car1.style.display = "none";
            car2.style.display = "none";
            car3.style.display = "block";
            break;
        case 4:
            car1.style.display = "block";
            car2.style.display = "none";
            car3.style.display = "none";
            cisloCarouselu = 1;
            break;
    }
}