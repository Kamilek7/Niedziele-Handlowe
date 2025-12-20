function sonntagChecken(date) 
{

}

function niedzielaDzisiaj()
{

}
function niedzielaWTymTygodniu()
{

}
function niedzielaDaleko()
{
    
}
let nahesteSonntag;
let sonntagen = ["2025.4.13", "2025.4.27", "2025.6.29", "2025.8.31", "2025.12.7", "2025.12.14", "2025.12.21", "2026.1.26", "2026.4.13"]
for (let i = 0; i < sonntagen.length; i++) 
{
    sonntagen[i] = new Date(sonntagen[i]);
}
function zumStart()
{
    let niedzielaNajblizsza=-1;
    let niedzielaNajblizszaDate
    sonntagen.forEach((tag) => {
        let dni = sonntagChecken(tag);
        if (dni<=niedzielaNajblizsza || niedzielaNajblizsza==-1)
        {
            niedzielaNajblizsza=dni;
            niedzielaNajblizszaDate = tag;
        }
    })
    
    if (niedzielaNajblizsza==0)
    {
        // Dzisiaj jest niedziela
    }
    else if (niedzielaNajblizsza<7)
    {
        // W tym tygodniu jest niedziela
    }
    else
    {
        // W tym tygodniu nie ma niedzieli
    }
}
