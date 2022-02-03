---
sidebar_position: 1
---

# Artikel und Seiten erstellen

Unter _Articles_ können Sie Artikel hinzufügen und bearbeiten; Unter Seiten können Sie Seiten hinzufügen und bearbeiten. Die Benutzeroberfläche ist für beide sehr ähnlich, aber Artikel werden in der Regel für Nachrichtenartikel und "Geschichten" verwendet, normalerweise mit einem größeren Begrüßungsbildschirm, während "Seiten" für allgemeine Informationsseiten verwendet werden.

![](https://screens.wings.dev/Screen-Shot-2020-02-23-11-46-44-1582454834.png)

:::caution Hinweis: in Arbeit

Die Wings-Dokumentation ist noch nicht vollständig ins Deutsche übersetzt und wird Ihnen daher vorerst auf Englisch präsentiert.
:::

1. Klicken Sie im Hauptmenü auf `Content`.
2. Wählen Sie zwischen Articles (Artikeln) und Pages (Seiten). Je nach Auswahl finden Sie untenstehend eine Liste der vorhandenen Artikel und Seiten.
3. Klicken Sie hier, um einen neuen Artikel oder eine neue Seite zu erstellen.

## Bearbeiten eines Artikels oder einer Seite

![](https://screens.wings.dev/CleanShot-2020-02-23-at-12.04.52-1582456048.png)

1. `General`: Diese Tab ist standardmäßig geöffnet. Hier schreiben Sie den Inhalt.
2. `Platforms`: Hier finden Sie SEO- und Social-Media-Optimierungseinstellungen.
3. `Meta`: Diese Tab kann gelegentlich verwendet werden, um bestimmte Einstellungen zu konfigurieren. Gegebenenfalls sollten Sie spezifische Anweisungen von einem Website-Entwickler erhalten
4. `Apps`: Wenn Sie spezifische Einstellungen in Bezug auf die Frontend-Anwendung bearbeiten müssen, müssen Sie hier sein. Sie können beispielsweise ein Hauptnavigationsmenü festlegen, das diese Seite im Frontend anzeigen soll, wenn es sich von dem als Standard-Hauptmenü eingestellten unterscheiden muss.
5. Hier kann der Titel eingestellt werden.
6. Hier kann der _slug_ eingestellt werden Seiten haben standardmäßig Ihre Hauptwebsite-Domain + ihren Slug als öffentliche URL, zum Beispiel "https://www.yourwebsite.com/hello-world". Artikel werden in einem Verzeichnis namens `articles` abgelegt, zum Beispiel `https://www.yourwebsite.com/articles/hello-world`.
7. Hier können Sie die Sprache für diese Seite einstellen.
8. Hier sehen Sie einen blinkenden Cursor. Fangen Sie an zu tippen!
9. Dies ist die Layout-Symbolleiste, die ähnlich wie andere CMS und Textbearbeitungsanwendungen funktioniert. Sie können es verwenden, um Überschriften, ungeordnete Listen (normalerweise mit Aufzählungszeichen), geordnete (nummerierte) Listen, **strong**, `Code` und [Links](https://example.com) hinzuzufügen.
10. Eine 'Card' ist ein spezieller Inhaltsblock, der im nächsten Abschnitt erklärt wird.
11. Speichern, löschen, veröffentlichen oder _depublizieren_ Sie einen Knoten.
12. Legen Sie das Veröffentlichungsdatum dieses _node_ fest.

![](https://screens.wings.dev/Screen-Recording-2020-02-23-12-20-01-1582456809.gif)

## Inhaltskarten hinzufügen

Es gibt mehrere vorgefertigte Inhaltskarten, die Sie verwenden können, von Bildern bis hin zu Zitaten und von Kampagnenkarten bis hin zu Personensammlungen.

### Einfügen einer Inhaltskarte

![](https://screens.wings.dev/Screen-Recording-2020-02-23-12-21-05-1582456877.gif)

1. Setzen Sie den Cursor an die Stelle, an der Sie eine Karte einlegen möchten.
2. Klicken Sie in der Symbolleiste auf „Karte“.
3. Wählen Sie die Art der Inhaltskarte aus, die Sie verwenden möchten.
4. Klicken Sie auf die soeben in Ihre Seite eingefügte Inhaltskarte, um sie zu bearbeiten und zu konfigurieren. Je nach Karte finden Sie verschiedene Inhaltsfelder, die Sie bearbeiten können.

Nachfolgend finden Sie eine kurze Übersicht über die Inhaltskarten. Sie können den [Demo-Artikel mit allen Elementen](https://demo.wings.dev/articles/all-elements) besuchen, um zu sehen, wie sie standardmäßig aussehen.

### Text

Eine 'Text'-Karte zeigt einen Block mit hervorgehobenem Text an, der normalerweise eine andere Hintergrundfarbe hat als normaler Seitentext.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-23.02.27-1582495359.png)

### Image

Mit der Karte 'Bild' können Sie ein einzelnes Bild anzeigen. Es kann verschiedene Größen sowie eine optionale Beschriftung haben. **Hinweis**: Das Bild muss vorher auf der Seite 'Dateien' hochgeladen werden.
![](https://screens.wings.dev/CleanShot-2020-02-23-at-12.32.44-1582457575.png)

### Quote

Eine Quote (Zitatkarte) kann entweder ein Blockquote (zum Zitieren längerer Texte) oder eine Pullquote (ein größeres Zitat) sein. Nachdem Sie diese Karte ausgewählt haben, können Sie die Art des Angebots über eine Dropdown-Schaltfläche auswählen.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-14.45.16-1582465527.png)

Das **Pullquote** hat die zusätzliche Option zu wählen, ob es neben dem Text "schweben" soll:

![](https://screens.wings.dev/CleanShot-2020-02-23-at-14.48.17-1582465714.png)

Und hier ist ein **blockquote**:

![](https://screens.wings.dev/CleanShot-2020-02-23-at-14.37.29-1582465101.png)

### Campaign

Die Campaign Card ist sehr mächtig: Sie ermöglicht es Ihnen, eine Signup-, Petitions-, Spendenaktions- oder Event-Kampagne überall auf einer Seite oder einem Artikel anzuzeigen. Platzieren Sie einfach die Karte und wählen Sie die Kampagne aus, die Sie anzeigen möchten:

![](https://screens.wings.dev/CleanShot-2020-02-23-at-14.55.30-1582466140.png)

Anschließend wird die Kampagne am angegebenen Ort angezeigt:

![](https://screens.wings.dev/CleanShot-2020-02-23-at-14.58.20-1582466318.png)

### Nodes

Mit einer Nodes-Karte können Sie ein Raster von Seiten, Artikeln oder Kampagnen anzeigen. Sie können entweder eine manuelle Auswahl von Nodes oder eine automatisch aktualisierte Liste der neuesten Nodes eines bestimmten Typs mit Paginierung anzeigen (also: eine Liste von Artikeln / Seiten / Ereignissen usw.).

![](https://screens.wings.dev/CleanShot-2020-02-23-at-15.06.58-1582466831.png)

Versuchen wir es zunächst mit einer manuellen Auswahl von Knoten:

![](https://screens.wings.dev/Screen-Recording-2020-02-23-15-11-58-1582467134.gif)

Dann sieht es ungefähr so aus:

![](https://screens.wings.dev/Screen-Recording-2020-02-23-15-15-09-1582467315.gif)

Die 'Archive'-Version zeigt die 12 neuesten Nodes des ausgewählten Knotentyps an und ermöglicht es Ihnen, andere Nodes anzuzeigen, indem Sie die Paginierungsschaltflächen unten verwenden.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-15.17.35-1582467483.png)

### Eine Embed

Mit einer Embed können Sie ein YouTube-Video anzeigen, indem Sie seine URL eingeben.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-15.21.47-1582467746.png)

### Ein Insight

Ein Insight zeigt ein großes, hervorgehobenes Zitat an.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-15.23.09-1582467798.png)

### Ein Testimonial

Mit dem Testimonial können Sie eine hervorgehobene Geschichte und ein Bild anzeigen. Ist die Bildschirmgröße ausreichend breit, werden Bild und Story nebeneinander angezeigt.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-15.24.07-1582467859.png)

### Q&A

Das Q&A wird häufig für FAQs verwendet: Es zeigt eine Liste von Fragen an und erweitert und reduziert den Antwortbereich jeder Frage.

![](https://screens.wings.dev/Screen-Recording-2020-02-23-15-27-06-1582468032.gif)

### CTA

Mit dem CTA-Element (Call To Action / Aufruf zum Handeln) können Sie einen Titel, Text und einen prominent platzierten Link-Button anzeigen.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-15.28.32-1582468118.png)

### Collection

Mit dem Element 'Collection' können Sie ein Personenraster oder eine Liste von Organisationen anzeigen:

![](https://screens.wings.dev/Screen-Recording-2020-02-23-15-30-48-1582468259.gif)

Eine 'Personen'-Sammlung zeigt ein Raster von Personenkarten an:

![](https://screens.wings.dev/CleanShot-2020-02-23-at-15.31.42-1582468308.png)

Eine 'Organisationen'-Sammlung zeigt eine Liste von Organisationsprofilen:

![](https://screens.wings.dev/CleanShot-2020-02-23-at-15.32.33-1582468374.png)