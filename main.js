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

const elements = { "ODP": document.getElementById("niedziela-big"), "INFO": document.getElementById("niedziela-smol"), "CALENDAR": document.getElementById("kalendarz") }

function launch() {
    let [dni, NastepneNiedziele] = zaIleNiedziela();

    if (dni == 0) {
        elements["ODP"].innerHTML = "Tak!";
        elements["INFO"].innerHTML = "Dzisiaj jest niedziela handlowa!";
    }
    else if (dni < 7) {
        elements["ODP"].innerHTML = "Tak";
        elements["INFO"].innerHTML = `Niedziela handlowa ${(dni == 1) ? 'już jutro!' : 'jest za ' + dni + ' dni'}`;
    }
    else {
        elements["ODP"].innerHTML = "Nie";
        elements["INFO"].innerHTML = `Następna niedziela handlowa jest dopiero za ${dni} dni`;
    }
}

launch()