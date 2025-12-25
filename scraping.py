import requests
from bs4 import BeautifulSoup
import datetime
import os

# wyłączenie warningów SSL
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# sprawdzenie starego pliku
if os.path.exists('dates.js'):
    file_old = open('dates.js', "rb")
    old_data = file_old.read()
    file_old.close()
else:
    old_data = False

file = open("dates.js", 'w')
file.write("// Dane pobrane ze strony: https://www.kalendarzswiat.pl/\n")
file.write("// Plik stworzony przez plik scraping.js\n")
file.write("dates = [\n")

# pobieranie danych z aktualnego roku i 3 następnych
y = datetime.date.today().year
for year in range(y, y + 4):
    print("----------")
    response = requests.get(f"https://www.kalendarzswiat.pl/kalendarz/{y}", verify=False)
    soup = BeautifulSoup(response.content, "lxml")

    just_months = soup.find("div", class_="just-months")
    months = just_months.find_all("div", class_="big_month")
    month_num = 0

    for month in months:
        month_num += 1
        days = month.find('tbody').find_all('span', attrs={"data-weekday": "6"})
        for day in days:
            if "shopping" in str(day):
                date = f"{year}-{month_num}-{day.get_text().strip()}"
                file.write(f"'{date}',\n")
                print(date)

file.write("]")
file.close()

# porównanie ze starym plikiem, jak są zmiany to commit
file_new = open('dates.js', "rb")
new_data = file_new.read()
file_new.close()

if old_data == new_data:
    print("dane bez zmian")
else:
    print("nowe dane, robienie commita")
    os.system("git pull --rebase")
    os.system("git add dates.js")
    os.system(f"git commit -m \"automatyczna aktualizacja danych [{y}]\"")
    os.system("git push origin main")
