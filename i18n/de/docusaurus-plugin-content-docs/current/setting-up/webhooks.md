---
sidebar_position: 3
---

# Use webhooks

Webhooks bieten eine einfache und dennoch leistungsstarke Möglichkeit, Formulareinsendungen sowie Informationen über erstellte, aktualisierte und gelöschte _nodes_ (Artikel, Seiten und Kampagnen) an Dienste von Drittanbietern zu senden.

## Was sind Webhooks?

:::tip Empfohlener Artikel
Eine Einführung in Webhooks finden Sie unter [What are Webhooks?](https://zapier.com/blog/what-are-webhooks/) (English), ein aufschlussreicher Artikel von Zapier, einem Dienst, mit dem jeder Benutzer Arbeitsabläufe automatisieren kann, einschließlich der Verwendung von Webhooks.
:::

Kurz gesagt, Webhooks ermöglichen es Ihnen, Webservices zu verbinden, indem Sie Webservice A (Wings) mitteilen, dass er jedes Mal, wenn ein bestimmtes Ereignis eintritt, automatisch eine Reihe von Daten an einen anderen Webservice senden soll.

Die Verwendung von Webhooks hat Vorteile:

- Sie werden effektiver – Sie werden einfach mehr erledigen.
- Prozesse werden effizienter: Viele Workflows ersparen Ihnen viel manuelle Arbeit.
- Zukünftige Innovationen werden einfacher, da Sie mit Webhooks unabhängige Best-of-Breed-Dienste verbinden können.
- Sie sparen Geld, weil Sie sich nicht auf teure, aber veraltete All-in-One-Plattformen verlassen müssen.
- :::caution Hinweis: in Arbeit

Die Wings-Dokumentation ist noch nicht vollständig ins Deutsche übersetzt und wird Ihnen daher vorerst auf Englisch präsentiert.
:::

## Beispiele für Webhooks

Hier sind ein paar Dinge, die Sie vielleicht erledigen möchten:

- "Sobald ein Benutzer auf den Bestätigungslink in der Wings-E-Mail geklickt hat, die er nach dem Ausfüllen eines Anmeldekampagnenformulars erhält, senden Sie die Daten des Benutzers (einschließlich Vorname, Nachname und E-Mail-Adresse) und abonnieren Sie diesen Benutzer bei einer Mailchimp-Zielgruppe."
- "Sobald ein Benutzer seine Petitionsunterschrift bestätigt hat und das Kästchen für die Newsletter-Anmeldung angekreuzt hat, füge ihn meiner Nationbuilder-Liste hinzu"
- "Wenn sich ein Benutzer anmeldet und ein Kästchen ankreuzt, das besagt, dass er sich freiwillig melden möchte, erstellen Sie eine Karte auf dem Trello-Board unserer gemeinnützigen Organisation mit einem Fälligkeitsdatum in 2 Tagen und weisen Sie die Karte unserem Freiwilligenkoordinator Florian zu."

Wenn Sie über solche Workflows nachdenken, werden Sie vielleicht anfangen zu verstehen, wie sie Ihre digitalen Kampagnenabläufe verbessern können.

:::info Hinweis:
Wenn Sie Zapier verwenden möchten, um Newsletter-Abonnements für Spendenaktionen, Petitionen und Veranstaltungen abzuwickeln (bei denen der Benutzer ein Kästchen ankreuzen muss, um E-Mail-Updates zu erhalten), benötigen Sie **mehrstufige Zaps** - da Zapier ein **Filter** Schritt: Alle (bestätigten) Formulareinsendungen werden an Zapier gesendet, wo Zapier prüfen muss, ob das Kästchen für die Newsletter-Anmeldung angekreuzt ist. Für mehrstufige Zaps ist ein kostenpflichtiges Zapier-Konto erforderlich. Weitere Informationen finden Sie auf der [Zapier-Preisseite](https://zapier.com/pricing).

:::

## Was ist, wenn ich Webhooks zu kompliziert finde?

Mit Webhooks haben Sie die Kontrolle über Ihre Daten – und Ihr Kampagnensoftware-Toolkit, da Sie Wings mit jedem beliebigen System verbinden und Ihre Abläufe automatisieren können. Aber es kann ein bisschen entmutigend sein, und Sie können es möglicherweise nicht selbst einrichten, insbesondere wenn Sie wenig Zeit haben. Ein paar Anmerkungen:

- Vielleicht möchten Sie es versuchen. Webhooks sind ein offener Standard, und die Möglichkeit, mit ihnen zu arbeiten, wird für jeden digitalen Aktivisten von großem Vorteil sein. Sie benötigen keine besonderen Kenntnisse oder Fähigkeiten. Nehmen Sie sich eine Stunde Zeit und sehen Sie, ob Sie es zum Laufen bringen können.
- Bitten Sie uns um Hilfe unter support@wings.dev.

## Webhooks testen

Sie können einen Dienst wie [webhook.site](https://webhook.site) verwenden, um Webhooks zu testen. Sie erhalten eine Webhook-URL, die Sie kopieren können:
![](https://screens.wings.dev/CleanShot-2020-12-04-at-13.08.22-1607083724.png)

Sie können diese URL in das Webhooks-Feld auf Ihrer Wings-Settingsseite einfügen.

![](https://screens.wings.dev/CleanShot-2020-12-04-at-13.09.43-1607083810.png)

Wenn Sie dann eines Ihrer Kampagnenformulare einreichen, wird die Einreichung mit allen zugehörigen Feldern auf webhook.site angezeigt.

## Verwenden Sie Zapier, um Formulareinsendungen zu verarbeiten

Wir nehmen am Beispiel Zapier und zeigen Ihnen, wie Sie Petitionen an [The Action Network](https://actionnetwork.org/) senden.

### 1. Richten Sie einen 'Catch Webhook'-Trigger in Zapier ein

Rufen Sie zunächst Zapier.com auf, um einen Zap mit diesen Einstellungen zu erstellen:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-14.53.25-1606571612.png)

Zuerst konfigurieren wir den Zapier-**Trigger**, das Ereignis, das Daten an Zapier sendet, damit es etwas damit anfangen kann.

Zapier generiert eine Webhook-URL, die Sie kopieren und in Ihre Wings-Webhooks-Einstellungen einfügen können:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-14.54.07-1606571668.png)

### 2. Richten Sie den Webhook in Wings ein

Nachdem Zapier uns nun einen Webhook zur Verfügung gestellt hat – die sichere URL, unter der es Formulareinsendungen empfangen möchte – müssen wir Wings mitteilen, dass bestimmte Formulareinreichungen an diesen Ort gesendet werden sollen. **Hinweis**: Sie werden unseren Zapier-Zap in Kürze weiter konfigurieren. Lassen Sie daher am besten Ihren Zapier-Browser-Tab geöffnet und besuchen Sie Ihr Wings-Projekt in einem anderen Tab oder Fenster.

Gehen Sie also in Ihrem Wings-Projekt auf die Seite Einstellungen und konfigurieren Sie einen Webhook:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-14.55.24-1606571756.png)

1. Gehen Sie in den Einstellungen zu 'Webhooks'
2. Wählen Sie 'Add Webhook' ('Webhook hinzufügen')
3. Geben Sie Ihrem Webhook einen Namen
4. Fügen Sie die Webhook-URL ein, die Sie von Zapier erhalten haben
5. Wählen Sie aus, welches Ereignis einen Webhook auslösen soll. Es wird empfohlen, `confirmed.signatures` auszuwählen - dies wird den Webhook erst auslösen, nachdem ein Benutzer auf den Bestätigungslink in der von Wings gesendeten E-Mail geklickt hat.
6. Hier können Sie optional weitere Werte hinzufügen
7. Speichern Sie den Webhook.

### 3. Senden Sie ein Formular

Als nächstes müssen wir ein Kampagnenformular ausfüllen, um den soeben konfigurierten Webhook zu starten, damit Zapier eine Testeinsendung erhält, die erforderlich ist, um die Zapier-Konfiguration abzuschließen.

![](https://screens.wings.dev/CleanShot-2021-01-17-at-21.02.19-2x-ANnYCapD3sFwUd6meXHb1ErRX0ruCpBIkLt15xGRxmv6mu0VcFKk1YIvfltXEiKNsFglFZ6OW2q9gmF03fILKogoOVtU88hcK67R.png)

### 4. Fahren Sie mit der Konfiguration Ihres Zap fort

Wenn Sie den Anweisungen in Zapier folgen, können Sie Ihren Trigger testen. Wenn Sie einen Petitionsformulareintrag eingereicht und bestätigt haben, sollte Zapier Ihre Informationen erhalten:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-14.59.58-1606572021.png)

Klicken Sie auf 'Continue' ('Weiter'), um die Aktion einzurichten.

### 5. Optionaler Zwischenschritt: Benutzerdefinierte Felder extrahieren

Wenn Sie Ihrer Wings-Kampagne benutzerdefinierte Felder hinzugefügt haben und die durch das Ausfüllen dieser Felder bereitgestellten Benutzerinformationen verarbeiten möchten, müssen Sie einen zusätzlichen Schritt hinzufügen, da alle Informationen zu benutzerdefinierten Feldern in einem einzigen Objekt zusammengefasst sind. Stellen Sie sich benutzerdefinierte Felder als eine Reihe von Kartons vor, die zuerst in einem einzigen großen Karton zusammengestellt werden, der zuerst ausgepackt werden muss.

Fügen Sie dazu eine `Formatter`-Aktion hinzu:

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.06.05-2x-4397XCM64WbgogVmD2gJfnk6gWboCLy83RW5hpwr4sPWoHdftGyGa0aZFAFfUylxnHKIavLmXL7CQt17aK70EtPNYmAjiXU1vTEW.png)

Wählen Sie dann `Utilities` (und klicken Sie auf `Continue`):

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.07.19-2x-CHh5hU8RiXqIxIxwLReC2AYpuDUVrEN77cjfAXXO4ne8b48JttdepGCmfhbHEwpblOeBRfHUj79VE3sE7fCtxfdGm0NTMIERwvrc.png)

Wählen Sie dann `Line-item to text`:

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.08.35-2x-tou89PqOeFDFKGpzKQcqkGGLdEfptWcuwNRS10twNn8H3LtF9C0kTEi2xvibHl97BVZeW9XB6YUcdRYAFHU3HVqNeK7M4tQiNOMZ.png)

Dann müssen wir den 'Input' auswählen. Klicken Sie auf "Enter text or enter data" ("Text eingeben oder Daten einfügen“), um ein Dropdown-Menü zu öffnen, in dem Sie alle Elemente der Formularübermittlung sehen – möglicherweise müssen Sie auf '**show all options**' klicken.

Sie sehen ein Element mit **alle benutzerdefinierten Feldbeschriftungen** (in diesem Fall: ein 'Telefonnummer'-Feld und ein Markierungsfeld, das fragt, ob der Benutzer einer WhatsApp-Gruppe hinzugefügt werden möchte). Im nächsten Element werden beide Werte, die zu den entsprechenden Labels gehören, addiert (die Telefonnummer und die 'Antwort' auf die Frage. Dies war ein Checkbox-Feld, daher wird der Wert entweder 'true' oder 'false' sein). **Wählen Sie das Element aus, das die benutzerdefinierten Feldwerte enthält**.

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.09.40-2x-vdkKHMy5FoIlG5L0azD32dc4Ex8Jzgp8X2lNeU4ecuf8ndj4u4185xFv6Jh4kaPTOGBwDAXjcEb4PVw238CIGG9YHIfZ18o0WR0A.png)

Das Feld 'Trennzeichen' kann leer gelassen werden - die Standardeinstellung funktioniert. Dann können wir "Test & Review" ("Testen und überprüfen"):

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.16.26-2x-K9IU05sONllLRj6S7N0fgDDFUBD1HmuhDXjUatSfFsPB0t0pfzjH7NAHq9AehI9KSN53t4ZAUhfP3rn5CkvHt44Hh4nmCiVJkSCq.png)

Dann werden Sie sehen, dass dieser Schritt die benutzerdefinierten Feldwerte in separate Werte aufteilt, die Sie in nachfolgenden Schritten verwenden können.

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.17.24-2x-nJjL6AZ0dMLg6vcx2dqbFDeRZUeF9ZTFFDVL423c3poTSfF7Lc2Ed0ZNH5oJOD8cJ3OjcsgYzoJUCnkS4HbFSg1trYHtmmj8Tjir.png).

### 6. Optionaler Zwischenschritt: Filter

Oft möchten Sie möglicherweise nicht **alle** Formulareinsendungen an einen Drittanbieterdienst senden. Wings Petition / Event / Spendenformulare haben beispielsweise ein Kontrollkästchen, in dem Benutzer gefragt werden, ob sie auf dem Laufenden bleiben möchten. In diesem Fall möchten Sie nur die Benutzer senden, die sich für einen Dienst wie The Action Network oder einen E-Mail-Marketingdienst entscheiden.

Schauen wir uns also an, wie Sie einen Filterschritt hinzufügen, indem Sie auf das blaue + Zeichen klicken, da wir nur Personen abonnieren möchten, die das Kästchen angekreuzt haben, das besagt, dass sie den Newsletter abonnieren möchten:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-15.03.33-1606572223.png)

Alternativ können Sie auch nach einem Kontrollkästchen filtern, das als benutzerdefiniertes Feld hinzugefügt wurde. Im vorherigen Schritt haben wir gesehen, dass wir auch ein Kontrollkästchen haben, das den Benutzer fragt, ob er einer WhatsApp-Gruppe hinzugefügt werden möchte. Wenn Sie nur danach filtern möchten, ob dieses Kästchen angekreuzt wurde, finden Sie diesen Wert im hinzugefügten Schritt `Utilities`. Siehe das Bild:

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.20.19-2x-2b8lQlopvE5Du92bZxrSsFLzKdp5UyFbm26MmMG7gEKKrXtvcypcypnAdR6ZBuXwuz1jyagBzBGfr5CWIcNAWBDnoLrFgoLq33cE.png)

1. Klicken Sie auf `Only continue if...`, um eine Dropdown-Liste mit Schritten anzuzeigen, die Sie auswählen können
2. Wählen Sie den Schritt Dienstprogramme, in dem wir die benutzerdefinierten Felder aufteilen
3. Wählen Sie das richtige Element aus, das 'true' oder 'false' zurückgibt.

Wenn Sie auf `Continue` klicken, können Sie den letzten Schritt konfigurieren.

### 7. Senden Sie die Daten an einen Drittanbieter-Dienst

Der letzte Schritt einer Zapier-Sequenz besteht darin, die Daten an einen Drittanbieterdienst zu senden. In diesem Beispiel senden wir die Benutzereingabe an The Action Network.

![](https://screens.wings.dev/CleanShot-2020-11-28-at-15.04.49-1606572306.png)

Natürlich können Sie auch einen der unzähligen von Zapier unterstützten Dienste verbinden. Wenn Sie den Zwischenfilterschritt verwenden, können Sie einige intelligente Integrationen erstellen. Hier sind ein paar Ideen:

- Erstellen Sie für jede Spende eine Discord-Benachrichtigung, um Aktivisten darüber zu informieren, dass jemand gespendet hat (achten Sie darauf, keine identifizierbaren Informationen anzugeben!)
- Erstellen Sie eine Trello-To-Do-Karte mit einem Fälligkeitsdatum in 2 Tagen und fügen Sie einen Kollegen als Kartenmitglied hinzu, indem Sie ihn anweisen, eine persönliche Dankeskarte an jemanden zu senden, der mehr als 250 US-Dollar gespendet hat
- Verwenden Sie die Gmail-Integration, um eine personalisierte Dankes-E-Mail an Personen zu senden, die eine Petition unterschrieben haben, oder verwenden Sie den Zwischenschritt „Verzögerung“ von Zapier, um eine Folge-E-Mail an Personen zu senden, die Ihre Petition 24 Stunden nach der Unterzeichnung unterzeichnet haben

Webhooks sind ein sehr mächtiges Werkzeug - experimentieren Sie!

## Erstellen Sie ein Kontaktformular mit Benachrichtigungen über Zapier

Mithilfe von Webhooks ist es auch möglich, eine Anmeldekampagne in ein Kontaktformular umzuwandeln, das Ihnen eine E-Mail-Benachrichtigung zusendet.

Erstellen Sie dazu einen Zapier-Zap, der einen Webhook als Auslöser zum Senden einer E-Mail verwendet:

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.25.40-2x-1607171150.png)

Kopieren Sie als Nächstes die Webhook-URL (und klicken Sie auf `Continue`):

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.27.19-2x-1607171262.png)

Gehen Sie dann zu den App-Einstellungen Ihres Wings-Projekts und erstellen Sie einen Webhook:

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.28.59-2x-1607171477.png)

1. Wählen Sie `Add Webhook`
2. Geben Sie Ihrem Webhook einen Namen
3. Fügen Sie die Webhook-URL, die Zapier Ihnen gegeben hat, in dieses Feld ein
4. Wählen Sie als Trigger `submission.created`. Alternativ können Sie Formulareinsendungen nur bearbeiten, nachdem der Benutzer sie durch Klicken auf den Bestätigungslink in der E-Mail, die Wings ihnen zusendet, bestätigt hat.
5. Speichern Sie den Webhook.

Erstellen Sie dann eine Anmeldekampagne, die Sie als Kontaktformular verwenden, und füllen Sie das Kampagnenformular testweise aus.

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.33.38-2x-1607171634.png)

Gehen Sie dann zurück zu Zapier und klicken Sie auf `Test Trigger`:

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.34.14-2x-1607171664.png)

Zapier zeigt Ihnen an, dass das Formular eingegangen ist. Als Nächstes richten wir einen Filter ein, um **nur** Zaps für dieses spezielle Formular zu verarbeiten. Möglicherweise haben Sie andere Anmeldekampagnen eingerichtet und wir möchten eine Benachrichtigung erstellen, die nur gesendet wird, wenn dieses Kontaktformular verwendet wird. Wir könnten uns den Kampagnentitel „Kontaktformular“ ansehen, aber wir könnten etwas spezifischer sein und seine eindeutige ID verwenden. Möglicherweise haben Sie in Ihrem Projekt andere Formulare eingerichtet, die Sie auch 'Kontaktformular' nennen könnten, damit wir genauer sein und die 'submission_projectId' verwenden können, die wir in einem späteren Schritt verwenden werden.

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.54.05-2x-1607172900.png)

Klicken Sie auf `continue`, bis Sie die `outbound email` ("ausgehende E-Mail“) konfigurieren können. Anschließend können Sie die E-Mail-Benachrichtigung konfigurieren. Sie können alle Informationen verwenden, die Wings sammelt.

![](https://screens.wings.dev/CleanShot-2020-12-05-at-14.17.37-2x-1607174267.png)

Nachdem Sie die E-Mail konfiguriert haben, sollten Sie diesen Zap aktivieren und ausprobieren können.

### Verwenden Sie Webhooks, um Inhaltsaktualisierungen zu verarbeiten

Sie können Webhooks auch verwenden, um Updates über das Erstellen, Ändern und Löschen von Knoten (Seiten, Artikel und Kampagnen) an Dienste von Drittanbietern zu senden. Die richtigen Ereignisauslöser finden Sie ganz einfach in Ihren Webhooks-Einstellungen.

![](https://screens.wings.dev/CleanShot-2020-12-04-at-13.12.36-1607083971.png)
