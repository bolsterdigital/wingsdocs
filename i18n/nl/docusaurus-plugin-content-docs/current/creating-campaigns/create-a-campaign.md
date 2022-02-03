---
sidebar_position: 1
---

# Een campagne aanmaken

## Over campagnes (campaigns)

'Campaigns' (campagnes) is het onderdeel waar de kracht van Wings zich echt bewijst: ze stellen je in staat om zinvolle en effectieve manieren te creëren waarmee gebruikers kunnen bijdragen aan je doel door evenementen bij te wonen, een petitie te ondertekenen of een donatie te doen. Een snel overzicht:

- **Signups**: inschrijvingen, dit zijn eenvoudige formulieren waarmee mensen zich kunnen 'aanmelden', bijvoorbeeld om nieuwsbriefupdates te ontvangen.
- **Events** (evenementen) zijn erop gericht om mensen een evenement te laten bezoeken.
- **Petitions** (petities) zijn bedoeld om mensen een beleidsvoorstel, steunbrief of een ander soort petitie te laten ondertekenen.
- Met **Fundraisers** (fondsenwervingscampagnes) kunnen gebruikers een donatie doen.

## Campagnes aan de voorkant

Campagnes kunnen op twee manieren op de frontend getoond worden:

1. Elke campagne krijgt zijn eigen 'slug'; de meeste Wings-webapplicaties maken elke campagne openbaar toegankelijk via deze _slug_ aan de voorkant, in de respectievelijke campagne-directory. Bijvoorbeeld een petitie met de slug `mijn-petitie` kun je vinden in `mywebsite.com/petitions/mijn-petitie`. Evenementen (events), aanmeldingen (signups) en donatiecampagnes (fundraisers) worden geplaatst in de directories `/events/`, `/signups/` en `/fundraisers/`, respectievelijk.
2. Je kunt de campagne ook op een normale inhoudspagina of artikelpagina plaatsen door een [campaign card](../publishing-content/publish-articles-and-pages#campaign) in te voegen.

![A demo petition at [demo.wings.dev/petitions/demo-petition](https://demo.wings.dev/petitions/demo-petition)](https://screens.wings.dev/CleanShot-2020-02-23-at-21.44.08-1582490660.png)

## The Campaigns Overview

1. Klik op 'Campaigns' in het hoofdmenu van de Wings-beheeromgeving om naar de pagina met een overzicht van campagnes te gaan.
2. Op de pagina met campagnes vind je een lijst met opgeslagen campagnes; je kunt op de titel van een campagne klikken om naar de bewerkingspagina te gaan.
3. Kies 'nieuw' om een nieuwe campagnepagina aan te maken (een aanmelding, petitie, evenement of inzamelingsactie).

![](https://screens.wings.dev/CleanShot-2020-02-23-at-22.08.27-1582492151.png)

## Een campagne aanmaken

Campagnes hebben nogal wat opties, maar er zijn er maar een paar nodig om aan de slag te gaan. Laten we beginnen met :

1. Een titel
2. Een afbeelding (zelfs dat is optioneel)
3. Een introductie
4. Een paar alinea's tekst

![](https://screens.wings.dev/CleanShot-2020-02-23-at-22.16.56-1582492658.png)

### Aangepaste velden toevoegen

Op het tabblad 'Fields' kun je extra velden toevoegen aan de velden die standaard aanwezig zijn (namelijk: voor- en achternaam en e-mailadres)

![](https://screens.wings.dev/CleanShot-2020-02-23-at-22.23.40-1582493038.png)

## Gebruikersdata downloaden

Op het tabblad 'Signatures' of 'Attendees' of 'Donations' zie je de mogelijkheid om een lijst met bevestigde ondertekenaars van petities, deelnemers aan evenementen of donaties te downloaden door een gegenereerd .CSV-bestand te downloaden.

![](https://bureaubolster.s3-eu-west-1.amazonaws.com/IMG_1100.jpeg)

## Settings

Op het tabblad Settings kun je aanvullende instellingen configureren.

### Legal

Op het tabblad Legal ('juridisch') kun je de paden of urls instellen voor de links naar de pagina's waar een gebruiker de algemene voorwaarden kan vinden, evenals het privacybeleid:

![](https://screens.wings.dev/CleanShot-2020-02-23-at-22.36.37-1582493819.png)

### Koppelingen maken met andere webdiensten

Om gebruikersgegevens in te dienen bij diensten van derden (zoals e-mailnieuwsbrieven en kiezersactiveringssoftware), kun je twee hoofdmethoden gebruiken:

1. Handmatig [gebruikersgegevens downloaden](#downloading-user-data) in CSV-formaat
2. Gebruik [webhooks](/docs/guides/webhooks) om automatisch gebruikersgegevens naar een service als Zapier te sturen voor slimme verwerking, waardoor Wings-campagnes programmatisch kunnen worden gekoppeld aan een onbeperkt aantal services.

### Petitie-mogelijkheden

Petities hebben een aantal bijzondere opties:

1. Bij petities wordt standaard een teller weergegeven die het aantal mensen toont dat heeft getekend. Je kunt deze teller verbergen door dit vakje aan te vinken.
2. Je kunt het weergegeven aantal mensen dat heeft getekend, ophogen met een willekeurig aantal.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-22.37.37-1582493891.png)

## Microcopy wijzigen

Als je de standaardkopij van een campagne wilt wijzigen, bijvoorbeeld de bevestigingsteksten, ga dan naar het tabblad **Copy**, waar je velden kunt vinden om elk tekstje te overschrijven.
![](https://screens.wings.dev/CleanShot-2021-06-29-at-09.01.00-15V2q3EV3eye7VCKU0hTEkyBbuZAC7XCRNwcQ3fUFk66TUsO4xDMEcXgypkTb3z5HHSGb8TCD2JubqzwsRTZ4Xd5uvQhlj3TXE5R.png)

**Opmerking**: als je de standaardkopie voor _elke_ campagne wilt wijzigen, kun je je eigen 'vertaling' maken. [Kijk hier voor instructies](../setting-up/use-multiple-languages#project-wide-translations-for-strings).

## Evenement-instellingen

Evenementen hebben een aantal extra instellingen, met betrekking tot de datum van het evenement en de locatiedetails die ook aan de voorzijde worden weergegeven.
