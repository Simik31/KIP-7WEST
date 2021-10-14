url=document.location.href;
if(url.split("?").length !== 2 || url.split("?")[1].split("&").length !== 2) {
    alert("Buy error");
    history.back();
}
url = url.split("?")[1];
if(url.split("&")[0].includes("e=")) {
    experienceIndex = parseInt(url.split("&")[0].replace("e=", "")) - 1;
    optionIndex = parseInt(url.split("&")[1].replace("opt=", "")) - 1;
    experiences = ["Let balónem", "Seskok padákem", "Exkurze do Černobylu", "Řidič sportovního auta", "Kurz programování", "Virtuální realita"];
    options = [
        [[1, "Trvání: 60 min", 2499], [2, "Trvání: 60 min", 4999], [3, "Trvání: 60 min", 7499]],
        [[1, "Trvání: 60-120 min", 3499], [2, "Trvání: 60-120 min", 6999], [3, "Trvání: 60-120 min", 10499]],
        [[1, "Trvání: 4 dny", 11499], [1, "Trvání: 4 dny", 23999], [3, "Trvání: 4 dny", 35999]],
        [[1, "Vzdlenost: 20 km", 4499], [1, "Vzdlenost: 40 km", 8999], [1, "Vzdlenost: 60 km", 13499]],
        [[1, "Jazyk: HTML + CSS + SQL\nTrvání: 15 x 2 hodiny", 5499], [1, "Jazyk: Java\nTrvání: 12 x 2 hodiny", 4999], [1, "Jazyk: JAVASCRIPT\nTrvání: 10 x 2 hodiny", 2499], [1, "Jazyk: C\nTrvání: 12 x 2 hodiny", 3499]],
        [[1, "Trvání: 45 min", 1099], [1, "Trvání: 90 min", 1999], [2, "Trvání: 45 min", 1999], [2, "Trvání: 90 min", 2499]]
    ]
    experience = experiences[experienceIndex];
    persons = options[experienceIndex][optionIndex][0];
    duration = options[experienceIndex][optionIndex][1];
    price = options[experienceIndex][optionIndex][2];
    document.getElementById("e").innerText = "Zážitek: " + experience;
    document.getElementById("persons").innerText = "Počet osob: " + persons;
    document.getElementById("duration").innerText = duration;
    document.getElementById("price").innerText = "Cena s DPH: " + price + "Kč";
    document.getElementById("js_insert_experience").value = experience;
    document.getElementById("js_insert_count").value = persons;
    document.getElementById("js_insert_duration").value = duration;
    document.getElementById("js_insert_price").value = price;
} else if(url.split("&")[0].includes("order=")) {
    if(url.split("&")[1] === "confirm=ok") document.getElementById("basket").innerHTML = "Vaše objednávka byla odeslána ke zpracování.<br>Očekávejte potvrzení do <time>24h</time>";
    else document.getElementById("basket").innerText = "Při zpracovávání požadavku došlo k chybě.\nProsím kontaktujte nás pomocí karty \"Kontakt\"";
}