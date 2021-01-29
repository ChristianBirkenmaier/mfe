# Microfrontends with React

## Was?

Mehrere seperata Komponenten, die unabhängig voneinander in Isolation laufen und entwickelt werden können, und eine zentrale Container-
Komponente, die alle anderen Komponenten über webpack ModuleFederationPlugin einbindet und rendert.

-   Auth (Anmelden/Registrieren, Port: 8081)
-   Container (Zentraler Punkt, Port: 8080)
-   Dashboard (Übersicht für angemeldete User, Port 8083)
-   Marketing (Infos über die App, sichtbar vor der Anmeldung, Port 8082)

Gehostet auf https://dumqs1ivoq2q9.cloudfront.net/
