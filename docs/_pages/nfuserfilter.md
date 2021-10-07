---
permalink: /nfuserfilter/
title: "Nex Forms User Filter"
---

Dies ist die Dokumentation zum Wordpress Plugin `nf-user-filter` version 0.2. Das Plugin erlaubt eine Zugangsbeschränkung zu einem
<a target="_blank" rel="noopener noreferrer" href="https://de.wordpress.org/plugins/nex-forms-express-wp-form-builder/">Nex-Forms Formular</a>.

## Funktionsweise

Nachdem das Plugin installiert und das gewünschte Nex-Forms Formular vorbereitet wurde (siehe Plugin-Einbau unten):

Wenn ein User das Nex-Forms Formular abschickt, wird sowohl ein Cookie gespeichert mit 30 Tagen Laufzeit als auch die IP-Adresse ein einer extra Datenbank-Tabelle abgespeichert.
Surft der gleiche Nutzer mit diesem Cookie oder dieser IP-Adresse erneut auf das Formular, so wird das Formular nicht angezeigt und stattdessen ein Text (z.B. 'Sie haben bereits teilgenommen') dargestellt.

## Download

Die Datei
<a target="_blank" rel="noopener noreferrer" href="../assets/releases/nf-user-filter/nf-user-filter.zip">nf-user-filter.zip</a>
runterladen.

## Installation des Plugins

Im Wordpress Adminbereich unter Plugins > "Add new" > "Upload Plugin" die zuvor geladene Zip Datei laden.

<video muted controls width="100%" >
    <source src="../assets/releases/nf-user-filter/videos/01_Installation.mp4" type="video/mp4">
</video>

## Plugin einbauen

Nachdem das Plugin installiert wurde, kann es auf der entsprechenden Seite als Shortcode eingefügt werden.
Dabei muss man den bestehenden Shortcode des Nex-Forms Formulars

```
[NEXForms id="1"]
```

mit einem neuen Shortcode umhüllen, hier kann auch der Text eingestellt werden, der angezeigt wird wenn man bereits teilgenommen hat:

```
[nf-user-filter alreadySubmitted="Sie haben bereits teilgenommen"]
[NEXForms id="1"]
[/nf-user-filter]
```

Siehe das folgende Video:
<video muted controls width="100%" >
    <source src="../assets/releases/nf-user-filter/videos/02_Setup.mp4" type="video/mp4">
</video>

## Plugin von Nex Forms Formular entfernen
Um das Plugin von einem Formular zu entfernen wird der oben erklärte Schritt umgekehrt:
<video muted controls width="100%" >
    <source src="../assets/releases/nf-user-filter/videos/03_Removal.mp4" type="video/mp4">
</video>

## Plugin deinstallieren
Das Plugin kann einfach über den Wordpress-Plugin-Manager deaktiviert und anschließend deinstalliert werden.
Dabei wird auch die neue Tabelle `wp_wap_nex_forms_entries_ips` wieder entfernt.
<video muted controls width="100%" >
    <source src="../assets/releases/nf-user-filter/videos/04_Uninstallation.mp4" type="video/mp4">
</video>

## Cookie Speicherung nach Absenden

Nachdem ein Formular abgesendet wurde, ist ein Cookie gesetzt, der die Formular-ID enthält z.B. `submitted_form_1` bei Formular ID 1. Dieser hat ein Haltbarkeit von 30 Tagen.

<video muted controls width="100%" >
    <source src="../assets/releases/nf-user-filter/videos/05_Stored_Cookie.mp4" type="video/mp4">
</video>

## IP Speicherung in der Datenbank

Nachdem ein Formular abgesendet wurde, ist die Nutzer IP-Adresse in der Datenbank `wp_wap_nex_forms_entries_ips` gespeichert. Die Datenbank wird automatisch bereinigt. Einträge werden automatisch nach 30 Tagen gelöscht.

<video muted controls width="100%" >
    <source src="../assets/releases/nf-user-filter/videos/06_Stored_IP.mp4" type="video/mp4">
</video>

## Alle gespeicherten IP Adressen speichern

Wenn man alle gespeicherten IPs auf einmal löschen möchte, muss man lediglich das Plugin über den Wordpress-Plugin-Manager einmal deaktivieren und re-aktivieren.
