function zaIleNiedziela() {
    now = new Date();
    now.setHours(0, 0, 0, 0);

    days_left = -1
    closest = []

    for (i = 0; i < dates.length; i++) {
        date = Date.parse(dates[i])
        if (now > date) { continue }

        if (days_left == -1) {
            days_left = Math.floor((date - now) / (1000 * 60 * 60 * 24))
            continue
        }

        closest.push(new Intl.DateTimeFormat('pl-PL', { day: 'numeric', month: 'long' }).format(date))
        if (closest.length >= 3) break
    };

    return [days_left, closest]
}

const elements = { "ODP": document.getElementById("niedziela-big"), "INFO": document.getElementById("niedziela-smol"), "CALENDAR": document.getElementById("datyIn") }

let hidden = true;

function hoverUnhover()
{
    if (hidden)
    {
        document.getElementById("daty").style.top = "50vh";
        hidden = !hidden;
    }
    else
    {
        document.getElementById("daty").style.top = "100vh";
        hidden = !hidden;
    }
}

function launch() {
    let [dni, NastepneNiedziele] = zaIleNiedziela();

    if (dni == 0) {
        elements["ODP"].innerHTML = "Tak!";
        elements["INFO"].innerHTML = "Dzisiaj jest niedziela handlowa!";
    }
    else if (dni < 7) {
        elements["ODP"].innerHTML = "Tak";
        if (dni==1 ?() => {elements["INFO"].innerHTML = "Następna niedziela jest jutro";}: ()=>{elements["INFO"].innerHTML = `Następna niedziela jest za ${dni} dni`;});

    }
    else {
        elements["ODP"].innerHTML = "Nie";
        elements["INFO"].innerHTML = `Następna niedziela jest dopiero za ${dni} dni`;
    }

    let inner= ""
    NastepneNiedziele.forEach((dzien)=>{
        inner+= `<div class='date'>${dzien}</div>`;
    })
    elements["CALENDAR"].innerHTML = inner;
    
}
