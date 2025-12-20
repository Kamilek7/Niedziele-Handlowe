function sonntagChecken(date) 
{

}
let heutigeDate = new Date();
let nahesteSonntag;
let sonntagen = ["2025.4.13", "2025.4.27", "2025.6.29", "2025.8.31", "2025.12.7", "2025.12.14", "2025.12.21", "2026.1.26", "2026.4.13"]
for (let i = 0; i < sonntagen.length; i++) 
{
    sonntagen[i] = new Date(sonntagen[i]);
}
sonntagen.forEach((tag) => {
    let sonntagElement = document.getElementById("niedziela-big");
    if (sonntagChecken(tag)) 
    {
        sonntagElement.innerHTML="Tak";
    }
    else
    {
        sonntagElement.innerHTML="Nie";
    }
})