0.4
```mermaid
sequenceDiagram
    browser->>server: POST: https://studies.cs.helsinki.fi/exampleapp/new_note
    server-->>browser: Status 302 Found
    Note left of server: Location: /exampleapp/notes
    browser->>server: GET: https://studies.cs.helsinki.fi/exampleapp/notes
    server-->>browser: Status 200 OK
    Note left of server:  gives text/html (the content of the new note)
    browser->>server: GET: https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: Status 200 OK
    Note left of server: gives text/css (the desing of the text)
    browser->>server: GET: https://studies.cs.helsinki.fi/exampleapp/main.js
    server--)browser: Status 200 OK
    Note left of server: application/javascript (loads the page again)
```
0.5
```mermaid
sequenceDiagram
    browser->>server: GET: https://studies.cs.helsinki.fi/exampleapp/spa
    server-->>browser: Status 200 OK
    Note left of server: text/html
    browser->>server: https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: Status 200 OK
    Note left of server: text/css
    browser->>server: GET: https://studies.cs.helsinki.fi/exampleapp/spa.js 
    server-->>browser: Status 200 OK
    Note left of server: application/javascript
    browser->>server: GET: https://studies.cs.helsinki.fi/exampleapp/data.json
    server--)browser: Status 200 OK
    Note left of server: application/json
    
```
0.6
```mermaid
sequenceDiagram
    browser->>server: POST:  https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server--)browser: Status 201 Created 
    Note left of server: application/json
```
