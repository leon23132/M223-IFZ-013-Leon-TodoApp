# 02 Aufgabe/Quest

### ***Ausgangslage:***
Bei der Entwicklung von Applikationen ist es entscheidend, im Voraus zu überlegen, welche Daten anfallen und wie sie gehalten werden sollen.

##### **Aufgabe:**
1. Bilde mit jemandem eine 2er Gruppe.
2. Erstellt im OneNote im Abschnitt "Platz zum Zusammenarbeiten" eine Seite, auf der ihr eure Ergebnisse festhaltet.
3. Überlegt euch Alltagsbeispiele und haltet diese grafisch fest, z.B. in einem Diagramm:
   a. Wo begegnen euch persistenten Daten?
   b. Wo begegnen euch transienten Daten?
   c. Wie werden die Daten abgelegt?
4. Bildet Cluster mit persistenten und transienten Daten.
5. Überlegt euch auch, welche Herausforderungen entstehen, wenn diese Daten von einer Multi-User-Applikation verwendet werden.

**Erwartete Lernergebnisse:**
- Du hast dich mit der Thematik von transienten und persistenten Daten auseinandergesetzt.
- Du kannst basierend auf den Anforderungen einer Applikation bestimmen, welcher Typ Daten diese verwendet.

## Was sind Persistente Daten

**Persistente Daten** sind Daten, die über einen längeren Zeitraum hinweg erhalten bleiben und über mehrere Sitzungen hinweg verfügbar sind. Im Allgemeinen werden sie in einem **permanenten Speichermedium** gespeichert und bleiben auch nach dem Herunterfahren des Computers oder dem Beenden einer Anwendung erhalten. **Persistente Daten** sind oft **strukturiert** und können in verschiedenen Formen vorliegen, wie zum Beispiel in **relationalen Datenbanken**, **Dokumentenbanken** oder **Dateisystemen**.

## Was sind transienten Daten

**Transiente Daten** sind im Gegensatz zu **persistenten Daten** **temporär** und haben eine **begrenzte Lebensdauer**. Sie sind nur für kurze Zeit gültig und werden in der Regel während einer einzelnen Sitzung oder Interaktion generiert und anschließend verworfen. **Transiente Daten** werden normalerweise nicht **dauerhaft gespeichert** und sind nicht über mehrere Sitzungen hinweg verfügbar.
## 3 Überlegt euch Alltagsbeispiele und haltet diese grafisch fest, z.B. in einem Diagramm:

### 3.1 Wo begegnen euch persistenten Daten?

- **Soziale Netzwerke:** - Benutzerprofile - Beiträge und Kommentare - Freundeslisten - 
- **E-Mail-Dienste:** - E-Mail-Nachrichten - Kontakte - Kalendereinträge - 
- **E-Commerce-Plattformen:** - Benutzerkonten - Produktkataloge - Bestellverlauf
#### 3.2 Wo begegnen euch transienten Daten?

- **Echtzeit-Chats:** - Nachrichtenverlauf - Online-Status - Aktuelle Chat-Sitzungen - 
- **Wetter-Apps:** - Aktuelle Wetterdaten - Wettervorhersagen - Wetterkarten - 
- **Suchmaschinen:** - Suchanfragenverlauf - Temporäre Suchergebnisse - Aktuelle Suchsitzungen
#### 3.3 Wie werden die Daten abgelegt?

- **Relationale Datenbanken:** - SQL-Datenbanken wie MySQL, PostgreSQL - Tabellenstruktur mit Primärschlüsseln - 
- **Dokumentenbasierte Datenbanken:** - NoSQL-Datenbanken wie MongoDB, CouchDB - JSON-Dokumente mit flexiblen Schemas
- **Dateisysteme:** - Benutzerdaten in Dateien oder Ordnern - Verzeichnisstruktur für Organisation


## 4 Bildet Cluster mit persistenten und transienten Daten:

##### **Persistente Daten:**
- Benutzerprofile
- Produktkataloge
- E-Mail-Nachrichten
- Bestellverlauf
- Konfigurationsdateien

##### **Transienten Daten:**
- Nachrichtenverlauf in Echtzeit-Chats
- Suchanfragenverlauf
- Aktuelle Wetterdaten
- Online-Status in Instant-Messaging-Anwendungen
- Temporäre Suchergebnisse in Suchmaschinen

## 5 Überlegt euch auch, welche Herausforderungen entstehen, wenn diese Daten von einer Multi-User-Applikation verwendet werden.

1. **Datenkonsistenz:** Gleichzeitiger Zugriff mehrerer Benutzer kann zu Inkonsistenzen führen. Mechanismen zur Datenkonsistenz sind entscheidend.
2. **Datenschutz und Sicherheit:** Sensible Daten müssen geschützt werden, und Zugriffsrechte müssen verwaltet werden.
3. **Skalierbarkeit:** Die Systeme müssen skalierbar sein, um steigende Lasten zu bewältigen, insbesondere bei einem wachsenden Benutzerstamm.
4. **Konflikte bei gleichzeitigen Zugriffen:** Gleichzeitiger Zugriff auf und Bearbeitung von Daten können Konflikte verursachen. Mechanismen zur Konfliktbehandlung sind erforderlich.
5. **Synchronisation von Daten:** Transiente Daten müssen zwischen Benutzern synchronisiert werden, um sicherzustellen, dass alle Benutzer die aktuellsten Informationen erhalten. Dies erfordert komplexe Synchronisationsmechanismen.