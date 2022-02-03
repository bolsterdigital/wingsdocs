---
sidebar_position: 3
---

# Gebruik webhooks

Webhooks bieden een lichtgewicht maar krachtige manier om formulierinzendingen en informatie over gemaakte, bijgewerkte en verwijderde nodes (artikelen, pagina's en campagnes) naar diensten van derden te verzenden.

## Wat zijn webhooks?

:::tip Aanbevolen artikel
Lees voor een inleiding tot webhooks [Wat zijn webhooks?](https://zapier.com/blog/what-are-webhooks/), een inzichtelijk artikel van Zapier, een service waarmee elke gebruiker workflows kan automatiseren, inclusief het gebruik van webhooks.
:::

Kort gezegd, met webhooks kun je webservices verbinden door webservice A (Wings) te vertellen dat wanneer een bepaalde gebeurtenis plaatsvindt, ze automatisch een heleboel gegevens naar een andere webservice moeten sturen (bijvoorbeeld een service zoals Zapier) waarmee je kunt beslissen wat je moet doen met die gegevens.

Het gebruik van webhooks heeft voordelen:

- Je zult effectiever zijn - je krijgt gewoon meer gedaan.
- Processen worden efficiënter: veel workflows besparen ke veel handwerk.
- Toekomstige innovatie zal gemakkelijker zijn, omdat je met behulp van webhooks de diensten aan elkaar kunt koppelen die het beste zijn in wat ze doen.
- Je bespaart geld, omdat je niet afhankelijk bent van dure maar verouderde alles-in-één platforms.

## Webhooks voorbeelden

Hier zijn een paar dingen die je misschien wilt doen:

- "Zodra een gebruiker op de bevestigingslink in de Wings-e-mail heeft geklikt die ze ontvangen na het invullen van een aanmeldingscampagneformulier, de gegevens van de gebruiker verzenden (inclusief hun voornaam, achternaam en e-mailadres), en die gebruiker inschrijven voor een Mailchimp-doelgroep"
- "Zodra een gebruiker zijn handtekening onder de petitie heeft bevestigd en hij/zij het vakje voor nieuwsbriefabonnement heeft aangevinkt, voeg je deze toe aan mijn Nationbuilder-lijst"
- "Als een gebruiker zich aanmeldt en een vakje aanvinkt dat hij of zij vrijwilligerswerk wil doen, maak dan een kaart op het Trello-bord van onze non-profitorganisatie met een vervaldatum van 2 dagen in de toekomst en wijs de kaart toe aan onze vrijwilligerscoördinator Mike"

Als je nadenkt over dit soort workflows, begin je misschien te begrijpen hoe het gebruik ervan je digitale campagneactiviteiten een boost kan geven.

:::info Opmerking:
Als je Zapier wilt gebruiken om nieuwsbriefabonnementen voor inzamelingsacties, petities en evenementen te verwerken (waarbij de gebruiker een vakje moet aanvinken waarin staat dat hij e-mailupdates wil ontvangen), heb je **meerstaps Zaps** nodig - omdat Zapier een \* \*filter\*\* stap: alle (bevestigde) formulierinzendingen worden naar Zapier gestuurd, waar Zapier moet controleren of het nieuwsbriefabonnement is aangevinkt. Multi-step Zaps vereisen een betaald Zapier-account. Zie de [Zapier Pricing-pagina](https://zapier.com/pricing) voor meer informatie.

:::

## Wat als ik webhooks te ingewikkeld vind?

Met webhooks heb je de controle over jouw gegevens - en je bredere verzameling campagnesystemen, omdat je Wings kunt verbinden met elk gewenst systeem en je activiteiten kunt automatiseren. Maar het kan een beetje overweldigend zijn. Een paar opmerkingen

- Duik er toch eens in. Webhooks zijn een open standaard en de mogelijkheid om er mee te werken is een groot voordeel voor elke digitale campagnevoerder. Je hebt geen specifieke kennis van vaardigheid nodig. Trek een uur uit en kijk of je het kunt laten werken.
- Vraag ons om hulp via support@wings.dev.

## Webhooks testen

U kunt een service zoals [webhook.site](https://webhook.site) gebruiken om webhooks te testen. Je krijgt een webhook-url die je kunt kopiëren:
![](https://screens.wings.dev/CleanShot-2020-12-04-at-13.08.22-1607083724.png)

Dan kun je deze url in het webhooks-veld op je Wings-instellingenpagina plakken.

![](https://screens.wings.dev/CleanShot-2020-12-04-at-13.09.43-1607083810.png)

Als je vervolgens een van je campagneformulieren indient, zie je de inzending met alle gerelateerde velden verschijnen op webhook.site.

## Gebruik Zapier om formulierinzendingen te verwerken

We zullen Zapier als voorbeeld gebruiken en we zullen je laten zien hoe je petitie-inzendingen naar [The Action Network](https://actionnetwork.org/) stuurt.

### 1. Stel een 'catch webhook'-trigger in Zapier in

Ga eerst naar Zapier.com om een Zap te maken, met deze instellingen:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-14.53.25-1606571612.png)

Eerst zullen we de Zapier **trigger** configureren, de gebeurtenis die gegevens naar Zapier stuurt, zodat deze er iets mee kan doen.

Zapier genereert een webhook-url die je kunt kopiëren en in je Wings-webhooksinstellingen kunt plakken:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-14.54.07-1606571668.png)

### 2. Stel de webhook in Wings in

Nu Zapier ons een webhook heeft gegeven - de beveiligde URL waar het formulierinzendingen wil ontvangen - moeten we Wings vertellen dat bepaalde formulierinzendingen naar die locatie moeten worden verzonden. **Opmerking**: je gaat zo verder met het configureren van onze Zapier 'zap', dus het is het beste om je Zapier-browsertabblad open te laten en je Wings-project in een ander tabblad of venster te bezoeken.

Ga dus naar de pagina Instellingen in je Wings-project en configureer een webhook:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-14.55.24-1606571756.png)

1. Ga naar 'Webhooks' in instellingen
2. Kies 'Add Webhook'
3. Geef je webhook een naam
4. Plak de webhook-URL die je van Zapier hebt gekregen
5. kies welke gebeurtenis een webhook moet activeren. Het wordt aanbevolen om "confirmed.signatures" te kiezen - hierdoor wordt de webhook pas geactiveerd nadat een gebruiker op de bevestigingslink heeft geklikt in de e-mail die Wings naar hen heeft gestuurd.
6. Je kunt hier optioneel extra waarden toevoegen
7. Sla de webhook op.

### 3. Verzend een formulier

Voordat we doorgaan met het configureren van de webhook-configuratie in Zapier, moeten we een campagneformulier invullen om de webhook die we zojuist hebben geconfigureerd te activeren, zodat Zapier een testinzending ontvangt die nodig is om de Zapier-configuratie te voltooien.

![](https://screens.wings.dev/CleanShot-2021-01-17-at-21.02.19-2x-ANnYCapD3sFwUd6meXHb1ErRX0ruCpBIkLt15xGRxmv6mu0VcFKk1YIvfltXEiKNsFglFZ6OW2q9gmF03fILKogoOVtU88hcK67R.png)

### 4. Ga verder met het configureren van je Zap

Als je de instructies in Zapier volgt, kun je je trigger testen. Als je een petitieformulier hebt verzonden en de op de link in de gestuurde bevestigings-e-mail hebt geklikt, zou Zapier je informatie moeten ontvangen:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-14.59.58-1606572021.png)

Klik op 'Doorgaan' om de Action in te stellen.

### 5. Optionele tussenstap: aangepaste velden extraheren

Als je aangepaste velden heeft toegevoegd aan je Wings-campagne en je wilt de gebruikersinformatie verwerken die is verstrekt door deze velden in te vullen, moet je een extra stap toevoegen, omdat alle informatie over aangepaste velden in één object is verpakt. Beschouw aangepaste velden als een aantal dozen die eerst worden samengevoegd tot één grote kartonnen doos die eerst moet worden uitgepakt.

Voeg hiervoor een actie 'Formatter' toe:
![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.06.05-2x-4397XCM64WbgogVmD2gJfnk6gWboCLy83RW5hpwr4sPWoHdftGyGa0aZFAFfUylxnHKIavLmXL7CQt17aK70EtPNYmAjiXU1vTEW.png)

Kies vervolgens 'Utilities' (en klik op 'Continue'):

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.07.19-2x-CHh5hU8RiXqIxIxwLReC2AYpuDUVrEN77cjfAXXO4ne8b48JttdepGCmfhbHEwpblOeBRfHUj79VE3sE7fCtxfdGm0NTMIERwvrc.png)

Kies vervolgens 'Line-item to text':

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.08.35-2x-tou89PqOeFDFKGpzKQcqkGGLdEfptWcuwNRS10twNn8H3LtF9C0kTEi2xvibHl97BVZeW9XB6YUcdRYAFHU3HVqNeK7M4tQiNOMZ.png)

Vervolgens moeten we de 'Input' kiezen. Klik op 'Enter text or insert data' om een vervolgkeuzelijst te openen waarin je alle elementen van het indienen van het formulier ziet - mogelijk moet je op '**show all options**' klikken.

Je ziet één element dat **alle aangepaste veldenlabels** heeft (in dit geval: een 'telefoonnummer'-veld en een checkboxlabel dat vraagt of de gebruiker wil worden toegevoegd aan een WhatsApp-groep). In het volgende element worden beide waarden die bij de corresponderende labels horen bij elkaar opgeteld (het telefoonnummer en het 'antwoord' op de vraag. Dit was een checkboxveld, dus de waarde zal ofwel 'true' of 'false' zijn). **Selecteer het element dat de aangepaste veldwaarden bevat**.

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.09.40-2x-vdkKHMy5FoIlG5L0azD32dc4Ex8Jzgp8X2lNeU4ecuf8ndj4u4185xFv6Jh4kaPTOGBwDAXjcEb4PVw238CIGG9YHIfZ18o0WR0A.png)

Het veld 'separator' kan leeg worden gelaten - de standaardinstelling werkt. Vervolgens kunnen we naar 'Test & Review':

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.16.26-2x-K9IU05sONllLRj6S7N0fgDDFUBD1HmuhDXjUatSfFsPB0t0pfzjH7NAHq9AehI9KSN53t4ZAUhfP3rn5CkvHt44Hh4nmCiVJkSCq.png)

Vervolgens zul je zien dat deze stap de aangepaste veldwaarden opsplitst in afzonderlijke waarden die je in volgende stappen kunt gebruiken.

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.17.24-2x-nJjL6AZ0dMLg6vcx2dqbFDeRZUeF9ZTFFDVL423c3poTSfF7Lc2Ed0ZNH5oJOD8cJ3OjcsgYzoJUCnkS4HbFSg1trYHtmmj8Tjir.png).

### 6. Optionele tussenstap: Filter

Vaak wil je misschien niet **alle** formulierinzendingen naar een externe service sturen. Wings Petitie / Evenement / Donatieformulieren hebben bijvoorbeeld een vinkje dat gebruikers vraagt of ze op de hoogte willen blijven. In dit geval wil je alleen die gebruikers sturen die zich aanmelden voor een service zoals The Action Network of een e-mailmarketingservice.

Laten we dus eens kijken hoe we een filterstap kunnen toevoegen door op het blauwe + teken te klikken, omdat we alleen personen willen inschrijven die het vakje hebben aangevinkt dat zegt dat ze zich willen abonneren op de nieuwsbrief:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-15.03.33-1606572223.png)

Als alternatief kun je ook filteren op basis van een selectievakje dat als aangepast veld is toegevoegd. In de vorige stap zagen we dat we ook een checkbox hadden die de gebruiker vraagt of ze toegevoegd willen worden aan een WhatsApp-groep. Als je alleen wilt filteren op basis van het feit of ze dat vakje hebben aangevinkt, kun je deze waarde vinden in de stap 'Hulpprogramma's' die we hebben toegevoegd. Zie de afbeelding:

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.20.19-2x-2b8lQlopvE5Du92bZxrSsFLzKdp5UyFbm26MmMG7gEKKrXtvcypcypnAdR6ZBuXwuz1jyagBzBGfr5CWIcNAWBDnoLrFgoLq33cE.png)

1. Klik op 'Alleen doorgaan als...' om een vervolgkeuzelijst met stappen te zien die je kunt selecteren
2. Selecteer de stap Hulpprogramma's waar we de aangepaste velden opsplitsen
3. Selecteer het juiste element dat 'true' of 'false' retourneert.

Als je op 'Doorgaan' klikt, kun je de laatste stap configureren.

### 7. Stuur de gegevens naar een service van derden

De laatste stap van een Zapier-reeks is het verzenden van de gegevens naar een dienst van derden. In dit voorbeeld sturen we de gebruikersinzending naar The Action Network.

![](https://screens.wings.dev/CleanShot-2020-11-28-at-15.04.49-1606572306.png)

Je kunt er natuurlijk ook voor kiezen om verbinding te maken met een van de talloze services die door Zapier worden ondersteund. Als je de tussenstap filter gebruikt, kun je enkele slimme integraties maken. Hier zijn een paar ideeën:

- Maak een Discord-melding voor elke donatie om activisten op de hoogte te stellen dat iemand heeft gedoneerd (zorg ervoor dat je geen identificeerbare informatie opneemt!)
- Maak een Trello-to-do-kaart met een vervaldatum van 2 dagen in de toekomst en voeg een collega toe als lid van de kaart en vraag hen om een persoonlijk bedankbriefje te sturen naar iemand die meer dan $ 250 heeft gedoneerd
- Gebruik de Gmail-integratie om een gepersonaliseerde 'bedankt'-e-mail te sturen naar mensen die een petitie hebben ondertekend, of gebruik de tussenstap 'Vertraging' van Zapier om een follow-up e-mail te sturen naar mensen die je petitie hebben ondertekend 24 uur nadat ze hebben ondertekend.

Webhooks zijn een zeer krachtig hulpmiddel - experimenteer maar!

## Maak een contactformulier met notificaties via Zapier

Met behulp van webhooks is het ook mogelijk om een aanmeldingscampagne om te zetten in een contactformulier dat je een e-mailmelding stuurt.

Om dit te doen, maak je een Zapier-zap die een webhook gebruikt als trigger om een e-mail te verzenden:

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.25.40-2x-1607171150.png)

Kopieer vervolgens de webhook-url (en klik op 'Continue'):

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.27.19-2x-1607171262.png)

Ga dan naar je Wings project App instellingen en maak een webhook aan:

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.28.59-2x-1607171477.png)

1. Kies 'Add webhook'
2. Geef je webhook een naam
3. Plak de webhook-url die Zapier je heeft gegeven in dit veld
4. Kies `submission.created` als trigger. Je kunt er ook voor kiezen om formulierinzendingen alleen te verwerken nadat de gebruiker deze heeft bevestigd door op de bevestigingslink te klikken in de e-mail die Wings ze zal sturen.
5. Sla de webhook op.

Maak vervolgens een Signup-campagne die je als contactformulier gaat gebruiken en vul het campagneformulier als test in.

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.33.38-2x-1607171634.png)

Ga dan terug naar Zapier en klik op 'Test trigger':

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.34.14-2x-1607171664.png)

Zapier zal je laten zien dat het de formulierinzending heeft ontvangen. Vervolgens zullen we een filter instellen om **alleen** zaps voor dit specifieke formulier te verwerken. Mogelijk heb je andere aanmeldingscampagnes ingesteld en we willen een melding maken die alleen wordt verzonden als dit contactformulier wordt gebruikt. We zouden naar de campagnetitel 'Contactformulier' kunnen kijken, maar we kunnen iets specifieker zijn en de ID gebruiken, die uniek is. Mogelijk heb je andere formulieren in je project die je ook 'Contactformulier' kunt noemen, dus dit laten we nauwkeuriger zijn en de `submission_projectId` gebruiken die we in een latere stap zullen gebruiken.

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.54.05-2x-1607172900.png)

Klik op 'continue' totdat je de 'uitgaande e-mail' kunt configureren. Vervolgens kun je de e-mailmelding configureren.

![](https://screens.wings.dev/CleanShot-2020-12-05-at-14.17.37-2x-1607174267.png)

Na het configureren van de e-mail, zou je deze zap moeten kunnen activeren en uitproberen.

### Gebruik webhooks om inhoudsupdates te verwerken

U kunt ook webhooks gebruiken om updates over het maken, wijzigen en verwijderen van nodes (pagina's, artikelen en campagnes) naar diensten van derden te sturen. Je kunt eenvoudig de juiste gebeurtenistriggers vinden in je webhooks-instellingen.

![](https://screens.wings.dev/CleanShot-2020-12-04-at-13.12.36-1607083971.png)
