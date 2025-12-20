function zaIleNiedziela() {
    now = new Date();
    now.setHours(0, 0, 0, 0);

    for (i = 0; i < dates.length; i++) {
        date = Date.parse(dates[i])
        if (now > date) { continue }

        return Math.floor((date - now) / (1000 * 60 * 60 * 24))
    };
}

const elements = { "ODP": document.getElementById("niedziela-big"), "INFO": document.getElementById("niedziela-smol"), "CALENDAR": document.getElementById("kalendarz") }

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
    let niedzielaNajblizsza = zaIleNiedziela();

    if (niedzielaNajblizsza == 0) {
        elements["ODP"].innerHTML = "Tak";
        elements["INFO"].innerHTML = "Dzisiaj jest niedziela";
    }
    else if (niedzielaNajblizsza < 7) {
        elements["ODP"].innerHTML = "Tak";
        if (niedzielaNajblizsza==1 ?() => {elements["INFO"].innerHTML = "Następna niedziela jest jutro";}: ()=>{elements["INFO"].innerHTML = `Następna niedziela jest za ${niedzielaNajblizsza} dni`;});

    }
    else {
        elements["ODP"].innerHTML = "Nie";
        elements["INFO"].innerHTML = `Następna niedziela jest dopiero za ${niedzielaNajblizsza} dni`;
    }
}
