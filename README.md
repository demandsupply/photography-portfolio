# Descrizione progetto:

Sito web progettato su misura che mostra il portfolio fotografico di un amico.

# Obiettivi:

- Design personalizzato
- Velocità
- Responsiveness

# Tech stack:

- Design: Figma (prototipazione)
- Frontend/backend: Next.js (ottimizzazione SEO)
- Storage: Google Drive per archiviazione delle foto
- Styling: Css customizzato (no librerie esterne)

# Fasi di sviluppo:

### 1 Progettazione del sito su Figma

- 1.1 discussione preliminare con il 'cliente' riguardo il prodotto richiesto
- 1.2 creazione del prototipo su Figma
- 1.3 incontro con il cliente per visione del prototipo e modifiche/aggiunte eventuali

### 2 Sviluppo codice:

- 2.1 creazione progetto su Next.js e configurazione struttura
- 2.2 (FE) sviluppo componenti (Header, Footer, ImageCard etc.)
- 2.3 (FE) sviluppo pagine/sezioni
- 2.4 (FE) creazione versioni responsive del sito
- 2.5 (BE) creazione server backend
- 2.6 (BE) sviluppo logica per fetch immagini da Google Drive
- 2.7 (BE) creazione e implementazione file JSON per dati foto

### 3 Testing:

- 3.1 performance-test con Lighthouse per calcolo tempi caricamento
  - 3.1.1 ottimizzazione performance se necessario
- 3.2 cross-browser-test su altri browser (Firefox, Safari)

### 4 Deployment:

- 4.1 deployment su Vercel/Netlify
- 4.2 acquisto e configurazione dominio (?)

# Note:

- usare cashing per caricare in tempi migliori le immagini da google drive
- valutare utilizzo di cloud storage (no perchè l'opzione al momento migliore free - Cloudinary - ha un limite per file di max 10mb)
