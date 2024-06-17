# Turniej-Axelroda
Projekt w vue na zaliczenie przedmiotu, Jakub157108

## Opis projektu
Projekt symulujący Turniej Axelroda dla co najmniej 6 różnych strategii w iterowanym dylemacie więźnia. Programy grają ze sobą 1000 razy (każdy z każdym). Wyniki są prezentowane w aplikacji internetowej.

## Technologie
- Vue.js 3
- JavaScript
- CSS

## Architektura i narzędzia

### a. Generatory komponentów
W projekcie zastosowano komponenty Vue.js, które są podstawowymi blokami budującymi aplikację. Każdy komponent odpowiada za konkretną funkcjonalność lub część interfejsu użytkownika. Główne komponenty to:
- `App.vue`: Główny komponent aplikacji, zarządzający strukturą aplikacji.
- `ResultsTable.vue`: Komponent odpowiedzialny za wyświetlanie wyników turnieju.

### b. Routery kierujące ruchem Http
W projekcie nie użyto routera, ponieważ jest to prosta aplikacja jednowarstwowa. W bardziej rozbudowanych aplikacjach Vue Router jest używany do zarządzania nawigacją między różnymi widokami lub stronami aplikacji.

### c. Szablony HTML
Szablony HTML są zintegrowane bezpośrednio w komponentach Vue. Każdy komponent Vue używa składni szablonowej, aby definiować strukturę HTML dla tej części interfejsu użytkownika. Przykładowo, komponent `ResultsTable.vue` zawiera szablon do renderowania tabeli wyników.

## Struktura projektu
turniej-axelroda/
├── src/
│ ├── assets/
│ │ └── heroimg.jpg
│ ├── components/
│ │ └── ResultsTable.vue
│ ├── App.vue
│ ├── main.js
│ └── strategies.js
├── README.md
├── package.json

## Instrukcja uruchomienia

1. Zainstaluj Node.js i npm (jeśli jeszcze nie są zainstalowane).
2. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/Jakub157108/Turniej-Axelroda.git
3. Przejdź do katalogu projektu:
    cd Turniej-Axelroda
4. Zainstaluj zależności:
    npm install
5. Uruchom aplikację:
    npm run serve
6. Otwórz przeglądarkę i przejdź do http://localhost:8080, aby zobaczyć działającą aplikację.

## Opis strategii
Zawsze współpracuje: Zawsze wybiera współpracę.
Zawsze zdradza: Zawsze wybiera zdradę.
Losowa: Losowo wybiera współpracę lub zdradę.
Wet za wet: Powtarza ostatni ruch przeciwnika.
Mściwy: Zdradza, jeśli przeciwnik kiedykolwiek zdradził.
Pawłow: Współpracuje, jeśli ostatni ruch obu graczy był taki sam, inaczej zdradza.
