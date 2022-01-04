---
Seitenleiste_Position: 3
Titel: Erstellen Sie eine Spendenaktion
---

# So erstellen Sie eine Spendenaktion
Sie möchten eine Spendenaktion erstellen? Hier finden Sie alle notwendigen Schritte, die Sie unternehmen müssen.

## 1. Konfigurieren Sie Ihren Zahlungsprozessor
Um Zahlungen zu erhalten, müssen Sie Wings mit einem Zahlungsabwicklungsdienst verbinden.

### Erstellen Sie ein Konto bei Stripe oder Mollie

Wir unterstützen derzeit [Stripe](https://stripe.com) und [Mollie](https://www.mollie.com/). Mollie bietet out of the box etwas mehr europäische Zahlungsmethoden an.

:::tip Hinweis:
Benutzer senden ein Kampagnenformular auf Ihrer Wings-Website, werden jedoch vorübergehend von Stripe oder Mollie an eine sichere Zahlungsumgebung weitergeleitet, um die eigentliche Zahlung vorzunehmen, bevor sie an Wings zurückgesendet werden. Wings speichert eine Aufzeichnung der Formularübermittlung und -transaktion – wodurch Sie Benutzerinformationen wie E-Mail-Anmeldungen für Benutzer, die eine Spende tätigen, verarbeiten können – aber das _Geld selbst_ geht direkt an Ihr eigenes Stripe- oder Mollie-Konto.
:::

### Sehen Sie sich Ihre Stripe- oder Mollie-Anmeldeinformationen an

- [siehe hier](https://help.mollie.com/hc/en-us/articles/115000328205-Where-can-I-find-the-live-API-key-), wie Sie Ihren Mollie-API-Schlüssel finden können.
- Bitte besuchen Sie [diese Stripe-Webseite](https://stripe.com/docs/keys), um weitere Informationen über Stripe zu erhalten.


### Geben Sie Ihre Zugangsdaten in Wings ein
Gehen Sie zu Settings -> Commerce, um Ihre Anmeldeinformationen auszufüllen.

![](https://screens.wings.dev/CleanShot-2020-03-13-at-09.11.43-1584087129.png)

:::note Hinweis:
Wenn Sie Ihren Mollie-Schlüssel speichern und die Wings-Administrationsoberfläche anzeigt, dass er 'beschäftigt' ist, wurde er wahrscheinlich erfolgreich gespeichert. Schließen Sie einfach das Dialogfenster und Sie sollten OK sein.
:::

## 2. Erstellen Sie eine Spendenaktion
Gehen Sie zu Kampagnen und wählen Sie Neu -> Spendenaktion:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.33.33-HQ1p6SgIyblOQMwFLFhHl35eaxdCyIeheH9QBzdIre9jRko65idzfVmnkXp5Qto34NrpjSXJT6r4cY7I3MFoCSeS81J55E8S3nUC.png)


### Füllen Sie die Hauptkopie aus
Schreiben Sie die Kopie, die neben dem Spendenformular angezeigt wird:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.36.09-VCR47jRs9ddPGZZvaqMPk7Wts23QRXJIOOEGf5w3ekTViXxEmEan7LVUzBkNAMO5SRlSgHT2W81T1dcYxtJdOWYXFNyxzp8zGkJC.png)

Die Kopie wird wie folgt angezeigt:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.37.12-1KZW1KDOjlG3n2FUw8q0QaohfdY4bE0fX3OGOd01y24XTvsymdB5HCX3m07SZf57btNRdpGwIyDz9p2YIEnJu652Chj6CO5Gulkg.png)

### Kopfzeilenbild festlegen
Wählen Sie ein schönes Bild aus, das Sie als Header-Bild verwenden möchten:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.47.39-jzta6DLdd2FobEIngJU2lLtIBK2tvC5qHwa5b6QNbyzoBpCYAKbIJXi8D5RWlJqbzLdwrhaRiyJA8RTLNNLi8hfkfujmPseyKmI3.png)

### Anpassen der Microcopy

Sie können die Standard-Kopierzeichenfolgen anpassen, z. B. das Bit "... wurde an diese Spendenaktion gespendet". Gehen Sie dazu zur Registerkarte `Copy` und senden Sie eine beliebige Zeichenfolge, die Sie anpassen möchten:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.44.54-9CpyUSdVC7rkXUPeQuzm8DpkZEo23giH4VEkqruELfd3u4JdBrOMjueggR8sPSzPp0PZ6CCE4J6zcLMu24ccdOlWyoCflZw0PtF1.png)

Das Ergebnis:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.46.24-kesGdEjltL1DlA0xgAssfk4HeBEPAvpoJafI9ilnsDfP3TPNoEgKJYZXs3ZPetZMolY7YW1e9wk2GOSn1wYbEuwhObOL0JBDNCeS.png)

## 3. Feinabstimmung der Einstellungen
Jetzt ist es Zeit für einige zusätzliche Konfigurationen.



### Zähler konfigurieren
Wenn Sie den Zähler anzeigen und ein Ziel festlegen möchten, müssen Sie ihn manuell ausfüllen:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.38.44-iwzEFf2ymnxJ72jtn3SyNMtaH867USsuddq4XXXQfR4o20mg8ShgEXXc9FzaB9cAPgdlCPXYLSsQ759WppE1mhOoynSlAupStPJS.png)

Gehen Sie zur `Settings` - `Fundraiser Options`, um entweder 1) den Zähler für das gesammelte Geld zu deaktivieren und dadurch den Zähler vollständig auszublenden, oder optional 2) den angezeigten Betrag um eine beliebige Zahl zu versetzen.

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.40.27-HN3UeonGd9U6G5eHtlp5ZzRsHhBIVR8qfK0BkvaEMyzcARSWiBgdcSp0GrNy4Vmckf8DohopLArR1OFNzqh4Z4qV3jg22wdImmur.png)

Mit einem Ziel von 10.000 € und einem manuellen Offset von 250 € sieht Ihr Zähler so aus:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.42.14-v14EoNXFqDQoCco8jXf2ucs0y74MeI83iHUnpa48a1hB15rH4xbVk2QbhtdXoIJf3DzOwMIjNhCtRKwpmYakaXNbcaxPYuW1FLfF.png)

### Benutzerdefinierte Felder hinzufügen
Wenn Sie mehr Informationen als nur Name und E-Mail-Adresse sammeln möchten, können Sie optional benutzerdefinierte Felder im Abschnitt `Fields` hinzufügen.

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.43.20-R5ARrZk3pC9OV8ZKJ5sarquTvou15Vg1GHZkDgjl9iw4vmgaReTDd81pebQjt8gaUcWyL0YnT8dfHGeC9mSWTB8ViI9DIs5B701V.png)

### Allgemeine Geschäftsbedingungen und Datenschutzeinstellungen konfigurieren

Auf der Settings -> Legal Tab können Sie:

1. Deaktivieren Sie das Feld Allgemeine Geschäftsbedingungen, wenn Sie es nicht haben
2. Passen Sie die URL oder den Pfad der Datenschutzrichtlinie an, wenn die Standardeinstellung (normalerweise `/privacy`) falsch ist.

![](https://screens.wings.dev/CleanShot-2021-10-12-at-12.02.27-g4mf3ZHZuWp5YgwJzx6iUWRJq9zcAz1QAkMYV4iOPEI2oQ9vAuU8xamcX9ARXrzyE4qLQz3CQAWZkR29ri5Mhfww9O8uJx2fN83Q.png)


## 4. Optimieren Sie es für Suchmaschinen und soziale Medien
Gehen Sie zum Tab `Platforms`, um Text und Bilder für Suchmaschinen und soziale Medien zu konfigurieren:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.49.53-IrnuDWOMjsorMQXOyEAtz8QH4Wl3pzXnJeov9oFn1vzLLMsrz9TZhS2LcNDbGPDpA4UJRyaiiRoYsOrWIwGwuAi1dY8IK6QMs6Jf.png)

## 5. Veröffentlichen Sie es
Beginnen Sie damit, Ihre Spendenaktion tatsächlich zu veröffentlichen:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.51.35-LFi3fvM1gQcipeIp8t2d4w0wuYmEAiIkhPIy5q0b5eAfJPT1RV3AndhGy5h2mpqcCOwxPwEKeATrc5FuxjpqJIrDAjIDyrAHltwd.png)

Dann können Sie eine eigene automatisch generierte Seite verwenden, die Sie finden, wenn Sie hier klicken:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.52.44-ZkYrW76ODxqfTONCdwQtMJ5GIsO3n3wEiTbuJC2bPDmAqCio1q4xrrwlM17OnfvxRknhWvNKzOVCckRIDYaJjE9gE2dJpjKhv0nc.png)

Oder Sie können eine Kampagnenkarte auf einer Seite oder einem Artikel verwenden und dort einfügen:

![](https://screens.wings.dev/CleanShot-2021-10-12-at-11.53.57-72FgfyUz5JrRHftqAUNY78HDM1FE9qFsIxFipBp33jfUZoExVJIsRlmSmaCfzmTC3ibLhU25qNFnDlHecYKQLyky8nc37COjEYrU.gif)

Dann sind Sie fertig. Viel Glück beim Starten Ihrer Spendenaktion!