use M450Todo;



INSERT INTO tasks (task_date, task_description, task_name, task_status) VALUES
('2024-02-26', 'Testaufgabe 1', 'Aufgabe 1', 'In Bearbeitung'),
('2024-02-27', 'Testaufgabe 2', 'Aufgabe 2', 'Abgeschlossen'),
('2024-02-28', 'Testaufgabe 3', 'Aufgabe 3', 'Wartend');

-- Einfügen der Datensätze in die Tabelle 'roles'
INSERT INTO roles (id, name) VALUES
(1, 'ROLE_USER'),
(2, 'ROLE_MODERATOR'),
(3, 'ROLE_ADMIN');