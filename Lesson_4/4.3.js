let birthYear = prompt("введіть рік народження");
if (birthYear === null || birthYear === "") {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else {
    let city = prompt("введіть ваше місто");
    if (city === null || city === "") {
        alert("Шкода, що Ви не захотіли ввести своє місто.")
    } else {
        let sport = prompt("введіть улюблений вид спорту");
        if (sport === null || sport === "") {
            alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.")
        }else {
            let currentYear = 2025;
            let userAge = currentYear - parseInt(birthYear);

            let cityMessage;
            switch (city.toLowerCase()) {
                case "київ":
                    cityMessage = "Ти живеш у столиці України!";
                    break;
                case "вашингтон":
                    cityMessage = "Ти живеш у столиці США!";
                    break;
                case "лондон":
                    cityMessage = "Ти живеш у столиці Великої Британії!";
                    break;
                default:
                    cityMessage = `Ти живеш у місті ${city}.`;
                    break;
            }
            let sportMessage;
            switch (sport.toLowerCase()) {
                case "футбол":
                    sportMessage = "Круто! Хочеш стати як Роналду?";
                    break;
                case "бокс":
                    sportMessage = "Круто! Хочеш стати як Майк Тайсон?";
                    break;
                case "баскетбол":
                    sportMessage = "Круто! Хочеш стати як Джеймс Леброн?";
                    break;
                default:
                    sportMessage = `Цікавий вибір спорту – ${sport}!`;
                    break;
            }
            alert(`Ваш вік ${userAge}\n${sportMessage}\n${cityMessage}`);
        }
    }
}


