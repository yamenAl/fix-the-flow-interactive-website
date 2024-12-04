# Fix the Flow - Interactive Website

## Programming User Interacion

Leer met het JavaScript 3 stappenplan en CSS interactie coderen.

## Aanpak

Als een gebruiker interactie heeft met een website, moet je goede feedback/feedforward ontwerpen en maken. Zo weet een gebruiker wat die kan verwachten, en of de actie gelukt is. 

> Micro-interactions communicate status and provide feedback, enhance the sense of direct manipulation, help people visualize the results of their actions. - Dmytro Svarytsevych, [7 secrets for enhancing UX with micro-interactions](https://www.dreamerux.com/articles/35y5fyrr4pifhbondc7r636nkvyoqg)

Je gaat de interactie coderen met JS en CSS. Tijdens de code/design review krijg je feedback op je code en je gaat jouw interactie leren testen met een User Test.


## Het Document Object Model (DOM)

De afgelopen vier sprints heb je voornamelijk gewerkt met HTML en CSS. Met HTML bouw je zoals je weet _documenten_, en met JavaScript gaan we een micro-interactie toevoegen aan die documenten. Met JavaScript heb je toegang tot het volledige _Document Object Model_ (de _DOM_). Alle HTML die je schrijft, wordt als een boomstructuur (een _tree_) door de browser intern bijgehouden.

<!-- TODO -->

### Bronnen

- [Introduction to the DOM @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)


## Console

<!-- TODO -->

### Bronnen


- [console @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/console)

## Het 3 stappenplan, waarmee je (bijna) alles kan

Stap 1 van ons stappenplan is het _selecteren_ van een geschikt element, waarmee we onze interactie gaan _activeren_. Je wilt bijvoorbeeld dat als iemand op een button klikt (of deze met het toetsenbord activeert), er iets gebeurt op de pagina. Je HTML ziet er bijvoorbeeld zo uit:

```html
<button class="show-more">Toon meer</button>
<p>Dit wordt nog niet getoond.</p>
```

In CSS heb je die button met een _class selector_ als _feedforward_ ronde hoeken, een pointer en een icoontje gegeven, zodat de gebruiker weet dat er iets te doen is:

```css
.show-more {
    border-radius: .4em;
    cursor: pointer;
    &::after {
        content: ' ⬇️' / '';
    }
    + p {
        display: none;
    }
}
```

In JavaScript kun je dit element _selecteren_ met `document.querySelector()`, gecombineerd met de _class selector_ hierboven. Het resultaat kun je in een _variabele_ opslaan, die je net als bij CSS _custom properties_ kunt noemen zoals je wilt. Met het `let` _keyword_ maak je een variabele aan:

```js
let showMoreButton = document.querySelector('.show-more');
````

Aan de `document.querySelector()` _functie_ geef je dus een _CSS selector_ mee als _string_ (tussen 'aanhalingstekens'). Dit kan _elke_ selector zijn die je ook in CSS kunt gebruiken. Vervolgens kun je hier iets mee doen.

Stap 2: Wacht tot de gebruiker ook echt iets doet. In veel gevallen gaat dit om wachten op het _click event_; je wilt dat er iets gebeurt als iemand op jouw button klikt. Hiervoor kun je met `addEventListener()` een _event_ toevoegen aan jouw element. Komende maandag gaan we hier dieper op in, maar voor nu is het belangrijk om dit te begrijpen:

```js
let doSomething = function() {
    alert('Het werkt!');
}

showMoreButton.addEventListener('click', doSomething);
```

We hebben een _functie_ aangemaakt en in een variabele opgeslagen, genaamd `doSomething` (die je ook hier kunt noemen zoals je wilt). Met `addEventListener` hebben we die functie gekoppeld aan het _click event_. Hierdoor wordt de `doSomething` functie _aangeroepen_, zodra iemand op de button klikt. Dit hadden we ook met een _anonieme functie_ kunnen schrijven, wat hetzelfde doet:

```js
showMoreButton.addEventListener('click', function() {
    alert('Het werkt!');
});
```

En waarschijnlijk zijn er nog meer manieren waarop je dit kunt doen. Maar de basis voor stap 2 is `addEventListener`, een _event_ (vaak `'click'`), en een _callback_ functie, die later aangeroepen wordt.

In Stap 3 geef je feedback aan de gebruiker. Vaak doe je dit door iets te veranderen op de pagina, iets toe te voegen, iets te animeren, ergens heen te scrollen, iets te openen, een geluidje af te spelen, etc. In de meeste gevallen wil je de CSS van een bepaald HTML element veranderen, of een _class_ aan- of uitzetten.

Je weet dat je op elk HTML element een _class_ kunt zetten, en misschien inmiddels ook dat je _meerdere_ classes op een HTML kunt zetten, bijvoorbeeld: `<section class="about font-large">...</section>`. Elk element heeft dus een _lijst_ van classes, vaak met één class. Via de `classList` _property_ van een DOM element, heb je in JavaScript toegang tot die lijst. Een aantal voorbeelden:

```js
document.body.classList.add('dark-mode'); // → <body class="dark-mode">

document.querySelector('section').classList.remove('font-large'); // → <section class="about">

document.querySelector('h1').classList.toggle('highlighted'); // → <h1 class="highlighted">, <h1 class="">, <h1 class="highlighted">, <h1 class="">, <h1 class="highlighted">...
```

In dit geval willen we waarschijnlijk zoiets:

```js
let showMoreButton = document.querySelector('.show-more');
showMoreButton.addEventListener('click', function() {
    showMoreButton.classList.add('showing-more');
});
```

In CSS pak je zo'n class dan weer op, met een class selector. In JavaScript heb je dus vaak maar een paar regels code nodig om iets interactiefs te maken. Transities en animaties kun je verder helemaal in CSS doen, en je kunt je volledig richten op goede en duidelijke feedforward en feedback. Uiteindelijk maak je de dingen voor eindgebruikers, en ziet vrijwel niemand de code die je schrijft :-)

```css
.showing-more {
    display: none;
    + p {
        display: block;
    }
}
```


### Bronnen

- [If you only know one thing about JavaScript, this is what I would recommend](https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/)
- [querySelector @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [addEventListener @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [classList @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) 


## Van Comments naar Code

JavaScript is een _imperatieve_ programmeertaal. Dit houdt in dat je alle opdrachten die uitgevoerd worden zelf moet schrijven, in de volgorde die jij wilt. HTML en CSS zijn _declaratief_, waarmee je vooral beschrijft _wat_ er moet gebeuren, maar niet _hoe_. Dit maakt coderen in JavaScript heel anders. In CSS beschrijf je bijvoorbeeld zoiets:

```css
p {
    color: red;
}
```

Hoe de browser alle `<p>` elementen selecteert, daar hoef je je nu niet druk over te maken.

Als je ditzelfde in JavaScript zou willen doen, moet je elke stap uitschrijven:

```js
// 1. Selecteer alle p elementen, en sla die op in een variabele
let pElementen = document.querySelectorAll('p');

// 2. Wandel langs alle p elementen
pElementen.forEach(function(pElement) {
    // 3. En verander de stijl voor elk p element
    pElement.style.color = 'red';
    // (Dit is overigens geen goed idee; je kunt dit beter via een
    // classList.toggle() doen, en je styling in CSS zelf houden)
});
```

Zeker in het begin is dit even wennen. Wat enorm helpt bij deze nieuwe taal, is de verschillende stappen die je wilt nemen eerst uitschrijven als _comments_, zoals in het voorbeeld hierboven. Zelfs als je nog niet welke code je moet schrijven, kun je op deze manier wel al een plan maken, en om hints of feedback vragen over hoe je dit probleem op kunt lossen. (Wees zorgvuldig met ChatGPT om hulp vragen, want die maakt het vaak ingewikkelder dan nodig. Ook ontbreekt er vaak context, die jij wél weet.)

<!--

## JavaScript en Interactie (Donderdag)

_In de workshop S01W1-07-JS-en-Interactie wordt uitgelegd wat je moet doen._

De afgelopen dagen hebben we ons ondergedompeld in HTML en CSS. Maar er is nog een belangrijke taal voor een frontender: JavaScript. Een programmeertaal die we als derde laag op het Web kunnen inzetten. Nadat we ons fundament in gestructureerde HTML hebben opgezet, en met CSS de browser een aantal hints hebben gegeven, kunnen we met JavaScript (JS) in veel gevallen nog extra functionaliteit en interactie toevoegen.

HTML, CSS en JS hebben alledrie andere regels, omdat het totaal verschillende talen zijn. Als je in HTML en CSS per ongeluk een tikfout maakt, negeert een browser die vaak, en gaat die gewoon door met de rest van de pagina. In JS gaat het bij een tikfout iets sneller mis. Zodra de browser een fout in JS tegenkomt, wordt de rest niet meer uitgevoerd.

### Aanpak

We gaan net als dinsdag via de developer tools in je browser kort met JS spelen. Net als dat je de live DOM (Document Object Model) en styling kunt inspecteren en veranderen, kun je ook JS interactief uitvoeren op een webpagina.

### Individuele opdrachten

1. Open de developer tools op bijvoorbeeld je visitekaartje, door een element te inspecteren met je rechtermuisknop.

<img src="https://github.com/user-attachments/assets/bffe3e9e-bb70-4f9b-8b02-f9727b7dbc9c" width="400">

2. Ga naar het tabblad _Console_ in je developer tools, waar je JavaScript kunt typen.

<img width="600" alt="image" src="https://github.com/user-attachments/assets/20759257-fd67-46f8-b02f-377df64abca7">

Dit zijn screenshots uit Firefox. De interface verschilt iets per browser, maar allemaal hebben ze een Console met vergelijkbare functionaliteit.

3. JavaScript is goed in rekenen. Probeer bijvoorbeeld eens twee getallen op te tellen, door `5 + 9` in te typen in je _Console_, gevolgd door een Enter.

<img width="487" alt="image" src="https://github.com/user-attachments/assets/14a8e361-1a27-4c3a-a297-16ac6353a948">

Gaaf, misschien wel je eerste stukje JavaScript ooit!

4. Probeer eens `'5' + '9'` uit te voeren..

<img width="358" alt="image" src="https://github.com/user-attachments/assets/4eed8bce-becb-475b-b5ce-5f98103c6c92">

Blijkbaar doet JavaScript verschillende dingen met getallen (_Numbers_) en tekst (_Strings_). Voor nu niet heel relevant, maar dit is één van de regels binnen JavaScript.

5. Wat gebeurt er als we per ongeluk—of expres—iets verkeerd doen? Wat als we `vijf + negen` uitvoeren? Of gewoon `bladiebloep`?

<img width="389" alt="image" src="https://github.com/user-attachments/assets/dbe15c7b-afeb-438d-8f5f-491192c894f1">

Dan krijgen we een foutmelding van JavaScript, omdat dit onbekende termen zijn. Dit gaat vast nog vaker gebeuren, en er is altijd een (soms frustrerende) verklaring voor. Voor nu gaan we door met leukere dingen.

6. Voer `document.body` uit in de Console.

<img width="387" alt="image" src="https://github.com/user-attachments/assets/7457f8d7-5b92-4efb-9fa6-66a8fdbb0a0e">

Je krijgt nu een _referentie_ naar het `<body>` element uit je pagina. Blijkbaar is dit iets speciaals. Met JavaScript kun je het Document Object Model (DOM) vragen stellen, dingen laten doen, of veranderen.

7. Voer `document.Body` uit in de Console.

<img width="382" alt="image" src="https://github.com/user-attachments/assets/1dac7155-857e-43c8-a07b-41a9bfb35596">

Die is “undefined”, dus blijkbaar is het in JavaScript belangrijk dat je goed let op hoofdletters en kleine letters. Een tikfout is snel gemaakt, en ook voor een _undefined_ is altijd een verklaring.

8. Voer `document.querySelector('body')` uit in de Console.

<img width="356" alt="image" src="https://github.com/user-attachments/assets/de618876-bfa9-4961-a637-01f2b2d15a81">

Dit is dus een andere manier om een referentie naar ons `<body>` element te krijgen, maar eentje die veel flexibeler is. Met `document.querySelector()` kun je elke CSS selector gebruiken om een element op te zoeken.

9. Probeer een andere CSS selector uit, bijvoorbeeld door `document.querySelector('h1')` uit te voeren. Wees niet bang voor tikfouten, maar probeer het opnieuw als het niet lukt. (Tip: met pijltje omhoog op je toetsenbord kun je in de Console door vorige opdrachten springen)

<img width="465" alt="image" src="https://github.com/user-attachments/assets/53079324-a194-4d40-ad8b-c1c28758ea83">

10. Verander de inhoud van je pagina door `document.querySelector('body').textContent = 'JS is tof!'` uit te voeren in de Console.

En refresh daarna de pagina :)

Al deze opdrachten kunnen ook via [een script](https://github.com/fdnd-task/your-tribe-profile-card/blob/main/scripts/script.js) uitgevoerd worden. De browser voert elke regel dan stap voor stap uit, als alles goed gaat. Via JavaScript en het Document Object Model kun je bijvoorbeeld elementen opzoeken, naar _events_ luisteren (zoals een _click_ event of een _keyboard_ event), _functies_ uitvoeren zodra zo'n event plaatsvindt, en eigenschappen van de DOM veranderen. Vaak doen we dat laatste door een `class` op een bepaald element [te veranderen](https://css-tricks.com/videos/150-hey-designers-know-one-thing-javascript-recommend/), zodat er door CSS andere styling toegepast kan worden. HTML, CSS en JS werken op deze manier dus hand in hand.

### Extra opdrachten

1. Bespreek met je buur wat een haalbare, niet vereiste leuke extra interactie in je eigen visitekaartje zou kunnen zijn. Enkele ideeën:
 - Verander de styling als je op een knop klikt, door een class op een element [aan te passen](https://css-tricks.com/videos/150-hey-designers-know-one-thing-javascript-recommend/); maak iets groter, opvallender, of laat je kaartje flippen.
 - [Verander een stukje tekst](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#examples) als je op een knop klikt.
 - [Speel een geluidje af](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play) als je op een knop klikt. Combineer dit bijvoorbeeld met [een `<audio>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio).
2. Maak een issue aan bij je leertaak, bedenk een goede titel voor je interactie, en beschrijf deze kort. Voeg ook een breakdown schets toe.
3. Vraag feedback op je issue en je breakdown schets.

### Bronnen en materiaal

- [What is JavaScript? MDN beginner's JavaScript course](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [Hey designers, if you only know one thing about JavaScript, this is what I would recommend](https://css-tricks.com/videos/150-hey-designers-know-one-thing-javascript-recommend/)
- Doorgaan met interactief leren programmeren? Kijk alvast eens naar https://learnprogramming.online

-->


### Bronnen

- [What is JavaScript? MDN beginner's JavaScript course](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

