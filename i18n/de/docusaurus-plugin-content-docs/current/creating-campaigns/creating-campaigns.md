---
sidebar_position: 1
---

# Kampagnen erstellen

## Über Kampagnen

Bei Kampagnen glänzt Wings wirklich: Sie ermöglichen es Ihnen, sinnvolle und effektive Möglichkeiten zu schaffen, mit denen Benutzer zu Ihrem Anliegen beitragen können, indem sie an Veranstaltungen teilnehmen, eine Petition unterschreiben oder eine Spende tätigen. Ein schneller Überblick:

:::caution Hinweis: in Arbeit

Die Wings-Dokumentation ist noch nicht vollständig ins Deutsche übersetzt und wird Ihnen daher vorerst auf Englisch präsentiert.
:::

- **Signups** are simple forms that let people 'sign up', for example to receive newsletter updates.
- **Events** are geared towards getting people to visit an event.
- **Petitions** are aimed towards letting people sign a policy proposal, letter of support or some other kind of petition.
- **Fundraisers** will allow users to make a donation.

## Campaigns on the frontend

Campaigns can be shown on the frontend in two ways:

1. Every campaign gets its own 'slug'; most Wings web applications will make each campaign publicly accessible at this slug on the frontend, inside its respective campaign directory. For example, a petition with the slug `my-petition` will typically be found at `mywebsite.com/petitions/my-petition`. Events, signups and fundraisers will be found in `/events/`, `/signups/` and `/fundraisers/`, respectively.
2. You can also place campaign on a regular content page or article page, by using a [campaign card](../pages-articles/publish-articles-and-pages#campaign)

![A demo petition at [demo.wings.dev/petitions/demo-petition](https://demo.wings.dev/petitions/demo-petition)](https://screens.wings.dev/CleanShot-2020-02-23-at-21.44.08-1582490660.png)

## Die Kampagnenübersicht

1. Klicken Sie im Wings-Admin-Hauptmenü auf `Campaigns`, um die Seite mit einer Übersicht der Kampagnen aufzurufen.
2. Auf der Kampagnenübersichtsseite finden Sie eine Liste der gespeicherten Kampagnen; Sie können auf den Titel einer Kampagne klicken, um die Bearbeitungsseite aufzurufen.
3. Wählen Sie `New`, um eine neue Kampagnenseite zu erstellen (eine Anmeldung, Petition, Veranstaltung oder Spendenaktion).

![](https://screens.wings.dev/CleanShot-2020-02-23-at-22.08.27-1582492151.png)

## Eine Kampagne erstellen

Kampagnen haben einige Optionen, aber nur wenige sind erforderlich, um loszulegen. Lass uns beginnen mit :

1. Ein Titel
2. Ein Bild (auch das ist optional)
3. Eine Einführung
4. Ein paar Absätze Text

![](https://screens.wings.dev/CleanShot-2020-02-23-at-22.16.56-1582492658.png)

### Benutzerdefinierte Felder hinzufügen

Auf der Registerkarte `Fields` können Sie zu den standardmäßig vorhandenen Feldern (Vor- und Nachname und E-Mail-Adresse) zusätzliche Felder hinzufügen.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-22.23.40-1582493038.png)

## Benutzerdaten herunterladen

Auf den Registerkarten `Signatures` oder `Attendees` oder `Donations` können Sie eine Liste der bestätigten Unterzeichner von Petitionen, Veranstaltungsteilnehmern oder Spenden für Spendenaktionen und/oder eine Schaltfläche `Download` sehen, die zum Herunterladen einer generierten CSV-Datei auffordert.

![](https://bureaubolster.s3-eu-west-1.amazonaws.com/IMG_1100.jpeg)

## Einstellungen

Auf der Seite `Settings` können Sie zusätzliche Einstellungen konfigurieren.

### Rechtliches ('Legal')

Auf der Registerkarte Legal können Sie die Pfade oder URLs für die Links zu den Seiten festlegen, auf denen ein Benutzer die Allgemeinen Geschäftsbedingungen sowie die Datenschutzrichtlinie finden kann:
![](https://screens.wings.dev/CleanShot-2020-02-23-at-22.36.37-1582493819.png)

### Verbinden von Drittanbieterdiensten

Um Benutzerdaten an Drittanbieterdienste (wie E-Mail-Newsletter und Wähleraktivierungssoftware) zu übermitteln, können Sie zwei Hauptmethoden verwenden:

1. Manuell Benutzerdaten herunterladen im CSV-Format
2. Verwenden Sie [webhooks](/docs/setting-up/webhooks), um Benutzerdaten zur intelligenten Verarbeitung automatisch an einen Dienst wie Zapier zu senden, sodass Wings-Kampagnen programmatisch mit einer unbegrenzten Anzahl von Diensten verbunden werden können.

### Petitionsoptionen

Petitionskampagnen haben einige spezielle Optionen:

1. Petitionen zeigen standardmäßig einen Zähler an, der die Anzahl der Personen anzeigt, die unterschrieben haben. Sie können diesen Zähler ausblenden, indem Sie dieses Kästchen ankreuzen.
2. Sie können die angezeigte Anzahl der unterschriebenen Personen mit einer beliebigen Zahl verrechnen.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-22.37.37-1582493891.png)

## Mikrokopie ändern

Wenn Sie die Standardkopie einer Kampagne ändern möchten, zum Beispiel den Bestätigungstext der Kampagnenfirma, der lautet: "Wir haben Ihnen eine E-Mail mit einem Bestätigungslink gesendet. Bitte klicken Sie zur Bestätigung auf diesen Link.` Wechseln Sie standardmäßig zum Tab **Kopieren**, wo Sie Felder zum Überschreiben jeder Zeichenfolge finden.

![](https://screens.wings.dev/CleanShot-2021-06-29-at-09.01.00-15V2q3EV3eye7VCKU0hTEkyBbuZAC7XCRNwcQ3fUFk66TUsO4xDMEcXgypkTb3z5HHSGb8TCD2JubqzwsRTZ4Xd5uvQhlj3TXE5R.png)

## Event-Einstellungen

Events haben ein paar zusätzliche Einstellungen, die sich auf das Eventdatum und die Ortsdetails beziehen, die auch im Frontend angezeigt werden.
