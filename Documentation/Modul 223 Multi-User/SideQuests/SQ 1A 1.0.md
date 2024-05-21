# Beispiele für Single- und Multi-User-Anwendungen in der Softwarelandschaft

| Single-User-Anwendungen        | Multi-User-Anwendungen          |
| ------------------------------ | ------------------------------- |
| **Textverarbeitungssoftware:** | **Kollaborative Texteditoren:** |
| - Microsoft Word               | - Google Docs                   |
| - Google Docs                  | - Dropbox Paper                 |
| - Apple Pages                  | - Notion                        |
|                                |                                 |
| **Bildbearbeitungssoftware:**  | **Projektmanagement-Tools:**    |
| - Adobe Photoshop              | - Trello                        |
| - GIMP                         | - Asana                         |
| - Affinity Photo               | - Jira                          |
|                                |                                 |
| **Musik-Player-Anwendungen:**  | **E-Mail-Clients:**             |
| - iTunes                       | - Outlook                       |
| - Winamp                       | - Gmail                         |
| - VLC Media Player             | - Thunderbird                   |



# 2 Findet gemeinsame und Unterschiedliche Anforderungen für Single-User und Multiuser- Andwendungen.

#### Gemeinsame Anforderungen:

1. **Benutzerfreundlichkeit**: Eine intuitive Benutzeroberfläche, die einfach zu bedienen ist.
2. **Zuverlässigkeit und Stabilität**: Stabile Leistung, um eine unterbrechungsfreie Nutzung zu gewährleisten.
3. **Sicherheit**: Schutz der Privatsphäre und der Vertraulichkeit von Benutzerdaten.
4. **Leistung**: Eine schnelle und effiziente Nutzung unabhängig von der Benutzeranzahl.

#### Unterschiedliche Anforderungen:

1. **Kollaborationsfähigkeit**: Multi-User-Anwendungen müssen Funktionen für die Zusammenarbeit und Kommunikation bieten.
2. **Benutzerverwaltung**: Multi-User-Anwendungen erfordern oft eine Benutzerverwaltungsfunktion.
3. **Datensynchronisation**: Multi-User-Anwendungen müssen Daten zwischen Benutzern synchronisieren und Konflikte lösen.
4. **Kommunikation und Benachrichtigungen**: Multi-User-Anwendungen benötigen Funktionen für die interne Kommunikation und Benachrichtigung.
5. **Zugriffskontrolle und Berechtigungen**: Feinere Zugriffskontrolle und Berechtigungen sind oft bei Multi-User-Anwendungen erforderlich.

# 3 Multi-User Applikationen sind häufig als verteilte Systeme implementiert. Allgemeine Beispiele dafür sind Webapps wie whatsapp, youtube oder Webshops wie digitec.ch, wo der Client via App oder Browser mit einem Server-App kommuniziert Skizziert den allgemeinen Kommunikationsablauf einer solcher Webapp.

### Kommunikationsmodell einer Multi-User-Webanwendung

#### Client-Seite

- Benutzerinteraktion (App oder Browser)
- Übertragung der Anfrage über HTTP(S)
- Empfang der Antwort

#### Server-Seite

- Empfang der Anfrage
- Verarbeitung der Anfrage
- Zugriff auf Datenbank (falls erforderlich)
- Erstellung der Antwort
- Übertragung der Antwort über HTTP(S)

#### Datenbank (optional)

- Speicherung und Abruf von Daten
