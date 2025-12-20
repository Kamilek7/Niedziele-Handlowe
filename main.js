function sonntagChecken() 
{

}

function niedzielaDzisiaj(elements)
{
    elements["ODP"].innerHTML = "Tak";
    elements["INFO"].innerHTML = "Dzisiaj jest niedziela";      
}
function niedzielaWTymTygodniu(elements, dni)
{
    elements["ODP"].innerHTML = "Tak";
    elements["INFO"].innerHTML = `Następna niedziela jest za ${dni} dni`;  
}
function niedzielaDaleko(elements, dni)
{
    elements["ODP"].innerHTML = "Nie";
    elements["INFO"].innerHTML = `Następna niedziela jest dopiero za ${dni} dni`;  
}

const elements = {"ODP" : document.getElementById("niedziela-big"), "INFO" : document.getElementById("niedziela-smol"), "CALENDAR" : document.getElementById("kalendarz")}

function launch()
{
    let niedzielaNajblizsza=sonntagChecken();
    
    if (niedzielaNajblizsza==0)
    {
        niedzielaDzisiaj(elements);
    }
    else if (niedzielaNajblizsza<7)
    {
        niedzielaWTymTygodniu(elements);
    }
    else
    {
        niedzielaDaleko(elements);
    }
}
