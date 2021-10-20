---
sidebar_position: 5
---

:::caution Hinweis: in Arbeit

Die Wings-Dokumentation ist noch nicht vollständig ins Deutsche übersetzt und wird Ihnen daher vorerst auf Englisch präsentiert.
:::

# Legen Sie eine benutzerdefinierte Domäne fest

Um eine Website zu starten, sollten Sie Ihre Website auf einer benutzerdefinierten Domain bereitstellen. Wings unterstützt jede gewünschte benutzerdefinierte Domain und stellt automatisch ein SSL-Zertifikat bereit, sodass der gesamte Webverkehr https:// verwendet.

:::Tip Oder lassen Sie es uns einfach machen

Wir halten es für wichtig, dass Sie Ihre Domain selbst konfigurieren _können_ – aber nicht _müssen_. Gerne konfigurieren wir Ihre Domain kostenlos für Sie. Senden Sie eine E-Mail an `support@wings.dev` und wir werden es erledigen.
:::

## Über Domains

Bevor Sie Ihre benutzerdefinierte Domäne in Wings einrichten können, müssen Sie einen Domänennamen bei einer Domänenregistrierungsstelle registrieren und konfigurieren und einen DNS-Verwaltungsdienst verwenden. In vielen Fällen ist dies derselbe Dienst, es ist jedoch möglich, verschiedene Dienste für A) Domänenregistrierung und B) Verwaltung von DNS-Einträgen zu verwenden. Sie müssen sich bei Ihrem DNS-Management anmelden und Ihre (Sub-)Domain auf Wings verweisen.

Die `...app.wings.dev` ist eine temporäre URL in einer `app.wings.dev`-Subdomain, die Sie verwenden können, um eine Vorschau einer öffentlichen Version Ihrer Website anzuzeigen, bis es Zeit ist, Ihre Website zu starten. Diese temporäre URL ist so eingerichtet, dass Suchmaschinen davon abgeraten werden, sie zu indizieren (sie wird in Suchmaschinen wie Google nicht angezeigt, aber wir können dies nicht garantieren).

Noch wichtiger ist, dass diese temporäre Domain zufällig ausgewählt wird und nur den Personen bekannt sein kann, mit denen Sie sie teilen möchten. Sie können sie also gerne mit Partnern und Mitarbeitern teilen, betonen Sie nur, dass dies eine temporäre Vorschau-URL ist, und teilen Sie sie nicht öffentlich.

:::info Notiz:
Auch nachdem Sie eine benutzerdefinierte Domäne hinzugefügt haben, funktioniert diese temporäre Domäne weiterhin. Dies hat keinerlei Einfluss auf die Leistung Ihrer Website.
:::

Entscheiden Sie zunächst, ob Sie eine Subdomain einer bestehenden Domain ( `aktion.meinewebsite.de`) oder eine 'root'- oder 'apex'-Domain verwenden möchten, **sowohl mit als auch ohne** `www`.).

## 1. Verwendung einer Subdomain

Wenn Sie für Ihr Wings-Projekt nur eine Subdomain einer bestehenden Domain verwenden möchten - zum Beispiel: `aktion.meinewebsite.de`, erstellen Sie einen CNAME-Record für Ihre Subdomain und verweisen Sie ihn auf `app.wings.dev`.

:::info Notiz:
Wenn Sie eine Subdomain verwenden, überspringen Sie Schritt 2 unten und gehen Sie direkt zu [dem Schritt danach](#konfigurieren-sie-ihre-domain-in-wings).
:::

## 2. Verwenden einer Apex-Domain

Wenn Sie eine Apex-Domain verwenden möchten (eine 'Root'-Domain ohne Subdomain oder mit der `www`-Subdomain, zum Beispiel: `mycoolwingswebsite.com` / `www.mycoolwingswebsite.com` ), müssen Sie einen DNS-Eintrag erstellen sowohl für die Apex-Domain als auch für die `www`-Subdomain, damit Ihre Website _mit und ohne_ dem `www`-Teil erreichbar ist. Befolgen Sie dazu die folgenden Schritte.

### 2A) TTL einstellen

Bevor Sie dies tun, ist es ratsam – aber nicht unbedingt notwendig – die TTL für Ihre Domain auf einen niedrigen Wert zu setzen, mindestens 24 Stunden bevor Sie planen, Ihre DNS-Server zu ändern und Ihre Domain auf Wings zu verweisen. (Das bedeutet, dass DNS-Server häufiger nach aktualisierten Einstellungen für diese Domain suchen – zum Beispiel jede Minute statt einmal pro Tag –, damit eine DNS-Änderung schneller und einfacher durchgeführt wird.) Als nächstes müssen Sie zwei erstellen DNS-Einträge.

### 2B) Erstellen Sie die DNS-Records

Wenn Ihr Domain-Registrar ALIAS-Record unterstützt (zum Beispiel: DNSimple), gehen Sie wie folgt vor:

- Erstellen Sie einen ALIAS-Record für `yourdomain.com` (ohne www) und verweisen Sie ihn auf `app.wings.dev`
- Erstellen Sie einen CNAME-Record für `www.yourdomain.com` und verweisen Sie ihn auf `yourdomain.com`

Wenn Ihr Registrar ALIAS-Einträge nicht unterstützt (dies umfasst DNSimple und Namecheap; wenn Sie sich nicht sicher sind, können Sie davon ausgehen, dass Ihr Register dies nicht unterstützt), gehen Sie wie folgt vor:

- Erstellen Sie einen A-Eintrag für Ihre Domain (ohne www) und verweisen Sie ihn auf `34.76.238.51`
- Erstellen Sie einen CNAME-Eintrag für `www.yourdomain.com` und verweisen Sie ihn auf `yourdomain.com`.

## Konfigurieren Sie Ihre Domain in Wings

Nachdem Sie sichergestellt haben, dass Ihre Domäne auf Wings verweist, müssen Sie Ihre Domäne noch in Ihrem Wings-Projekt konfigurieren. **Hinweis**: Warten Sie am besten, bis sich die DNS-Änderungen verbreitet haben und Ihre Domain tatsächlich auf Wings verweist.

Gehen Sie zu Einstellungen -> Apps -> Domains und klicken Sie auf "Domains bearbeiten":

![](https://screens.wings.dev/CleanShot-2021-01-17-at-17.00.12-2x-XL84VSnTuhE9xqUZjTpyYFLRdCcmRaX5U5dRFQ8I1ZBdHaUyMWeDHVmTbcM0eLScdBAU1yAFpb7wAkB4c5B5wv79YjVSxaG6RTTg.png)

Anschließend können Sie Ihre primäre Domain festlegen. Wenn Sie statt einer Subdomain eine Root-Domain verwenden, zum Beispiel `mycoolwingswebsite.com`, müssen Sie wählen, ob die www-Version oder die Nicht-www-Version die primäre Domain sein soll. Die andere wird auf diese primäre Domain umgeleitet, wie im nächsten Schritt konfiguriert.

![](https://screens.wings.dev/CleanShot-2021-01-17-at-17.02.20-2x-BPGwnXBJen2fXdlLTgtFLeet0A55bPYPUpzbCJ57gCPgFZ8pSFEcsULgwHCPLjE45A4iAw5YqUFjbUb1iouy3pSq2I0VryaK84Xf.png)

Nachdem Sie auf 'Weiter' geklickt haben, können Sie die sekundäre Domäne konfigurieren. Dies ist optional und wahrscheinlich nur notwendig, wenn Sie eine neue Domain für Ihre Website verwenden. Wenn Sie im vorherigen Schritt die 'www'-Version Ihrer Domain gewählt haben, z. B. `www.mycoolwingswebsite.com`, sollten Sie hier die nicht-www-Version ausfüllen – **oder umgekehrt**.

Aktivieren Sie das Kontrollkästchen, das besagt, dass die sekundäre Domain auf die primäre Domain umleiten soll, und klicken Sie auf "Fertig stellen".

![](https://screens.wings.dev/CleanShot-2021-01-17-at-17.05.42-2x-H0VRyjrEBBBSekBZNHuRk8EiW6aiKUTIMt3979d2luwUwaAs3rZ1fW4X1632zhEoD1HBOT7QkemsqBp522fF3UXtMZdCTQeRaunE.png)

Dann können Sie überprüfen, ob die Einstellungen in Ordnung sind

:::danger Wichtig:

Vergessen Sie nach der Konfiguration der Domain nicht zu speichern (siehe Screenshot unten):

:::

![](https://screens.wings.dev/CleanShot-2021-01-17-at-17.06.39-2x-iGO4apZeTh5bzxOfnl4qwIv7hAviHdsKZ3in1WKYZfbMSvFDqWdMSDaETu55gq2fsDoeF9YpyDishXA5voqBS4ixtuDQ3N7exD48.png)

Als nächstes können Sie Ihre Domain in einem Browser besuchen und warten, bis die Wings-Website angezeigt wird.

## Einige Hinweise zu Domains

Ein paar Anmerkungen:

- Die neue Domain funktioniert nur, wenn Ihre Domain auf Wings verweist und sich DNS-Änderungen übertragen haben (d.h. Server im Internet werden auf den Wings-Server umgeleitet, wenn sie Ihren Domainnamen besuchen);
- Nach dem Speichern Ihrer Einstellungen stellt Wings automatisch ein kostenloses Let's Encrypt-Zertifikat ein, damit alle Seiten über https bereitgestellt werden. Dies dauert einige Minuten. Warten Sie einfach ein wenig und aktualisieren Sie Ihren Browser.
- Wenn Ihre Domain nach etwa einer Stunde nicht funktioniert, wurde Ihre Domain wahrscheinlich noch nicht propagiert und das Let's Encrypt-Zertifikat wurde nicht erfolgreich installiert. Rufen Sie einfach Ihre Domains-Einstellungen erneut auf, geben Sie Ihre benutzerdefinierte Domain erneut ein und klicken Sie erneut auf `Save`. Wings wird es erneut versuchen und es sollte funktionieren.
