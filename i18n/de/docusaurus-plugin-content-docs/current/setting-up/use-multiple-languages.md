---
sidebar_position: 2
---

# Mehrsprachigkeit

Wings hat große Unterstützung bei der Internationalisierung. Seine Hauptmerkmale:

- Erstellen Sie mehrere Sprachversionen von Seiten, sodass Benutzer zu einer anderen Sprachversion einer Seite wechseln können
- Integrierte _Microcopy_ (Formularetiketten, Bestätigungsnachrichten usw.) für mehr als 20 Sprachen
- Optionen zur Konfiguration sprachspezifischer Navigationsmenüs
- Optionen zum Erstellen einer eigenen Übersetzungsdatei durch Überschreiben (von Teilen) einer vorhandenen Übersetzung für die Microcopy

Sie können hier auch eine primäre Sprache einstellen.

![](https://screens.wings.dev/CleanShot-2020-10-31-at-10.44.29-2x-1604137489.png)

:::caution Hinweis: in Arbeit

Die Wings-Dokumentation ist noch nicht vollständig ins Deutsche übersetzt und wird Ihnen daher vorerst auf Englisch präsentiert.
:::

## Projektweite Übersetzungen für Strings

Auf den Spendenaktionsseiten sind einige Textzeichenfolgen standardmäßig festgelegt, z. B. "... wurde für diese Spendenaktion gespendet". Sie können jedoch Ihre eigenen standardmäßigen projektweiten Kopienzeichenfolgen konfigurieren und diese sogar überschreiben, wenn Sie eine bestimmte Kopie für einzelne Kampagnen verwenden möchten.

Gehen Sie zu Sprachen -> Übersetzungen, um eine 'Übersetzung' für eine Sprache zu erstellen:

![](https://screens.wings.dev/CleanShot-2020-10-31-at-10.58.32-2x-1604138327.png)

Gehen Sie dann zu den `Translation settings` Ihrer App und wählen Sie die gerade erstellte Übersetzung aus:

![](https://screens.wings.dev/CleanShot-2020-10-31-at-10.59.26-2x-1604138403.png)

## Überschreibungen für bestimmte Kampagnen kopieren

Rufen Sie den Tab `Copy` für eine Kampagne auf, um die Standardzeichenfolgen zu überschreiben.

![](https://screens.wings.dev/CleanShot-2020-10-31-at-11.01.13-2x-1604138508.png)

## So verwenden Sie mehrere Sprachen

Wenn Sie mehrere Sprachen verwenden möchten, fügen Sie diese zuerst auf dieser Einstellungsseite hinzu.

Möchten Sie die Seiten in der Sekundär- (oder Tertiär-)Sprache getrennt von den Seiten in der Primärsprache veröffentlichen? Veröffentlichen Sie sie in diesem Fall einfach und verlinken Sie sie getrennt von anderen Seiten oder verlinken Sie sie im Hauptmenü. **Hinweis**: Seiten in anderen Sprachen als der als Primärsprache festgelegten, erhalten Sie den Sprachcode als URL-Parameter hinzugefügt. Zum Beispiel erhält der Artikel, den Sie unten sehen, den Pfad `/articles/demo-article?lang=nl`.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-17.43.42-1582476248.png)

Möchten Sie dieselbe Seite in mehreren Sprachen veröffentlichen? Dann veröffentlichen Sie einfach die gleiche Seite/den gleichen Artikel/die gleiche Kampagne in einer anderen Sprache, aber **verwenden Sie denselben Slug wie den in der Primärsprache veröffentlichten** Im obigen Beispiel gibt es auch einen englischen Artikel mit dem Slug `/demo -Artikel`, die Sie unter einsehen können: [demo.wings.dev/articles/demo-article](https://demo.wings.dev/articles/demo-article).

Die niederländische Version finden Sie erwartungsgemäß hier: [demo.wings.dev/articles/articles/demo-article?lang=nl](https://demo.wings.dev/articles/demo-article?lang=nl).
