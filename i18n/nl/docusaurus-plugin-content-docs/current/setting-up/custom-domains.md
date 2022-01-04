---
sidebar_position: 5
---

# Stel een aangepast domein in

Om een website te lanceren, wil je je site op een aangepast domein aanbieden. Wings ondersteunt elk domein dat je maar wil, en zorgt automatisch voor een SSL-certificaat, zodat al het webverkeer https:// zal gebruiken.

:::tip Of laat het ons gewoon doen

Wij vinden het belangrijk dat je je domein zelf _kunt_ configureren – maar dat _hoeft_ niet. Wij stellen je domein graag gratis voor je in. E-mail `support@wings.dev` en we regelen het.
:::

## Over domeinen

Voordat je je aangepaste domein in Wings kunt instellen, moet je een domeinnaam registreren en configureren bij een domeinnaam-dienst en een DNS-beheerservice gebruiken. In veel gevallen gaat het om dezelfde dienst, maar het is mogelijk om verschillende diensten te gebruiken voor A) domeinregistratie en B) het beheren van DNS-records. Je dient in te loggen op je DNS beheer punt je (sub)domein naar Wings.

De `...app.wings.dev` is een tijdelijke url op een `app.wings.dev`-subdomein die je kunt gebruiken om een voorbeeld van een openbare versie van je website te bekijken totdat het tijd is om je website te lanceren. Deze tijdelijke url is zo opgezet dat zoekmachines worden ontmoedigd om deze te indexeren (hij zal niet verschijnen in zoekmachines zoals Google, maar we kunnen dit niet garanderen).

Wat nog belangrijker is, dit tijdelijke domein wordt willekeurig gekozen en kan alleen bekend zijn bij de mensen met wie je het wilt delen. Dus voel je vrij om het te delen met partners en collega's, benadruk alleen dat dit een tijdelijke preview-url is en deel het niet openbaar.

:::info Opmerking:
Zelfs nadat je een aangepast domein hebt toegevoegd, blijft dit tijdelijke domein werken. Dit heeft op geen enkele manier invloed op de prestaties van jouw website.
:::

Bepaal eerst of je een subdomein van een bestaand domein (`action.mywebsite.com`) of een 'root'- of 'apex'-domein wilt gebruiken, **zowel met als zonder** `www`.).

## 1. Een subdomein gebruiken

Als je alleen een subdomein van een bestaand domein wilt gebruiken voor je Wings-project - bijvoorbeeld: `action.mywebsite.com`, maak dan een CNAME-record aan voor je subdomein en verwijs het naar `app.wings.dev`.

:::info Opmerking:
Als je een subdomein gebruikt, sla dan stap 2 hieronder over en ga direct naar [de stap daarna](#configure-your-domain-in-wings).
:::

## 2. Een apex-domein gebruiken

Al je een apex-domein wilt gebruiken (een 'root'-domein zonder subdomein of met het `www`-subdomein, bijvoorbeeld: `mycoolwingswebsite.com` / `www.mycoolwingswebsite.com` ), moet je een DNS-record aanmaken zowel voor het apex-domein als voor het `www`-subdomein, zodat je website toegankelijk zal zijn _met en zonder_ het `www`-gedeelte. Volg hiervoor de onderstaande stappen.

### 2A) Stel de TTL in

Voordat je dit doet is het verstandig – maar niet strikt noodzakelijk – om minimaal 24 uur voordat je van plan bent je DNS-servers te wijzigen en je domein naar Wings te laten verwijzen de TTL voor je domein op een lage waarde in te stellen. (Dit betekent dat DNS-servers vaker zullen controleren op bijgewerkte instellingen voor dit domein, bijvoorbeeld elke minuut in plaats van één keer per dag, zodat een DNS-wijziging sneller en gemakkelijker wordt uitgevoerd.) Vervolgens zul je twee DNS-records moeten aanmaken.

### 2B) De DNS-records maken

- maak een A-record voor jouw domein (zonder www) en wijs het naar `34.76.238.51`
- maak een CNAME-record aan voor `www.uwdomein.com` (waarschijnlijk hoef je alleen het `www`-deel in te vullen) en verwijs het naar uwdomein.com`.

## Configureer je domein in Wings

Nadat je ervoor heeft gezorgd dat je domein naar Wings verwijst, moet je je domein nog configureren in je Wings-project. **Opmerking**: je kunt het beste wachten tot de DNS-wijzigingen zijn doorgevoerd en je domein daadwerkelijk naar Wings verwijst.

Ga naar Instellingen -> Apps -> Domeinen en klik op 'domeinen bewerken':

![](https://screens.wings.dev/CleanShot-2021-01-17-at-17.00.12-2x-XL84VSnTuhE9xqUZjTpyYFLRdCcmRaX5U5dRFQ8I1ZBdHaUyMWeDHVmTbcM0eLScdBAU1yAFpb7wAkB4c5B5wv79YjVSxaG6RTTg.png)

Vervolgens kunt je je hoofddomein instellen. Als je een rootdomein gebruikt in plaats van een subdomein, bijvoorbeeld `mycoolwingswebsite.com`, moet je kiezen of de www-versie of de niet-www-versie het primaire domein moet zijn. De andere wordt doorgestuurd naar dit primaire domein, zoals geconfigureerd in de volgende stap.

![](https://screens.wings.dev/CleanShot-2021-01-17-at-17.02.20-2x-BPGwnXBJen2fXdlLTgtFLeet0A55bPYPUpzbCJ57gCPgFZ8pSFEcsULgwHCPLjE45A4iAw5YqUFjbUb1iouy3pSq2I0VryaK84Xf.png)

Nadat je op 'Volgende' heeft geklikt, kunt je het secundaire domein configureren. Dit is optioneel en waarschijnlijk alleen nodig als je een nieuw domein voor je website gebruikt. Als je in de vorige stap de 'www'-versie van je domein hebt gekozen, zoals 'www.mycoolwingswebsite.com', dan dien je hier de niet-www-versie in te vullen – **of vice versa**.

Zorg ervoor dat je het selectievakje aanvinkt dat zegt dat het secundaire domein moet omleiden naar het primaire domein en klik op 'Voltooien'.

![](https://screens.wings.dev/CleanShot-2021-01-17-at-17.05.42-2x-H0VRyjrEBBBSekBZNHuRk8EiW6aiKUTIMt3979d2luwUwaAs3rZ1fW4X1632zhEoD1HBOT7QkemsqBp522fF3UXtMZdCTQeRaunE.png)

Vervolgens kun je controleren of de instellingen in orde zijn.

:::gevaar Belangrijk:

Vergeet na het configureren van het domein niet op te slaan (zie screenshot hieronder):

:::

![](https://screens.wings.dev/CleanShot-2021-01-17-at-17.06.39-2x-iGO4apZeTh5bzxOfnl4qwIv7hAviHdsKZ3in1WKYZfbMSvFDqWdMSDaETu55gq2fsDoeF9YpyDishXA5voqBS4ixtuDQ3N7exD48.png)

Vervolgens kun je je domein in een browser bezoeken en wachten tot de Wings-website verschijnt.

## Enkele opmerkingen over domeinen

Een paar opmerkingen:

- Het nieuwe domein werkt alleen als je domein naar Wings verwijst en DNS-wijzigingen zijn doorgevoerd (wat betekent: servers op internet worden doorgestuurd naar de Wings-server als ze je domeinnaam bezoeken);
- Nadat je je instellingen hebt opgeslagen, stelt Wings automatisch een gratis Let's Encrypt-certificaat in, zodat alle pagina's via https worden bediend. Dit duurt een paar minuten. Wacht even en ververs je browser.
- Als je domein na een uur of zo nog niet werkt, is je domein waarschijnlijk nog niet gepropageerd en is het Let's Encrypt-certificaat niet succesvol geïnstalleerd. Ga gewoon opnieuw naar je domeininstellingen, voer je aangepaste domein opnieuw in en druk opnieuw op 'opslaan'. Wings zal het opnieuw proberen en het zou moeten werken.
