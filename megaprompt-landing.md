# MEGAPROMPT · LANDING PAGE COMERCIAL CASA IZAN

> Copia este prompt completo y pégalo en Claude, ChatGPT, Cursor, v0, Lovable, Bolt o cualquier otro generador de código con IA. Está diseñado para producir una landing page comercial lista para lanzamiento, fiel al manual de marca de Casa Izan.

---

## ROL Y CONTEXTO DE EJECUCIÓN

Actúa como un equipo élite de producto digital compuesto por tres perfiles fusionados en una sola mente:

1. Un **Diseñador UX/UI Senior** con 10+ años creando landing pages de alta conversión para marcas premium de lifestyle y bienestar.
2. Un **Desarrollador Front-End Expert** especializado en HTML5 semántico, CSS moderno (Grid, Flexbox, custom properties, container queries) y JavaScript vanilla performante.
3. Un **Director de Arte** con sensibilidad editorial, capaz de traducir identidades de marca audaces en experiencias digitales coherentes.

Tu misión es **construir una landing page comercial completa para "Casa Izan"** — una marca boliviana de bienestar — que sea simultáneamente:
- **Fiel al 100% al manual de marca** (colores, tipografía, voz, tono, arquetipo).
- **Orientada a conversión** (captura de leads, no solo presentación).
- **Técnicamente impecable** (performance, accesibilidad, responsive, semántica).
- **Visualmente memorable** (digna de aparecer en Awwwards, no otra landing genérica de wellness).

Antes de generar código, razona internamente sobre:
- ¿Cuál es el único objetivo de conversión de esta landing? (Ej: suscripción al newsletter, reserva de experiencia, descarga de guía gratuita.)
- ¿Qué jerarquía de información lleva al visitante del "¿qué es esto?" al "lo quiero" en menos de 90 segundos?
- ¿Cómo balancear la audacia visual de la paleta con la serenidad conceptual de la marca sin caer en lo chillón ni en lo aburrido?
- ¿Qué secciones son imprescindibles y cuáles son ruido?

---

## CONTEXTO DE MARCA (INPUT BASE INAMOVIBLE)

### Identidad Core

- **Nombre:** Casa Izan
- **Origen:** La Paz, Bolivia · con proyección latinoamericana
- **Industria:** Bienestar, serenidad mental y soluciones de vida moderna
- **Tagline oficial:** *Vivir con carácter. Vivir en casa.*
- **Propuesta de valor:** Casa Izan es una filosofía de vida que fusiona la calidez humana con la eficiencia moderna. No es una pausa del mundo — es una manera de habitarlo.
- **Arquetipo de marca:** El Amante (con matices del Sabio). Celebra el placer de estar vivo con profundidad y criterio.
- **Territorio emocional:** **Cálido. Audaz. Lúcido.** Las tres palabras deben estar presentes simultáneamente en cada decisión creativa.
- **Público Primario:** Personas de 25–45 años con sensibilidad estética, que buscan equilibrio entre productividad y bienestar sin renunciar a la intensidad.
- **Público Secundario:** Empresas y profesionales que buscan cultura organizacional centrada en el bienestar humano.

### Paleta de Colores (USAR EXACTAMENTE ESTOS HEX)

```css
--sol: #FFF145;    /* Sol de Mediodía — Alegría lúcida — Acentos, CTAs, highlights */
--rosa: #FF355E;   /* Rosa Atrevido — Pasión consciente — Botones primarios, titulares, momentos emocionales */
--noche: #1A1B3A;  /* Noche de Altiplano — Profundidad serena — Tipografía, fondos oscuros */
--lino: #F4EFE6;   /* Lino Paceño — Calma cálida — Fondos, papelería, espacios en blanco */
```

**Proporción obligatoria de uso:** 60% Lino Paceño · 20% Noche de Altiplano · 15% Rosa Atrevido · 5% Sol de Mediodía. Romper esta proporción solo con justificación visual clara.

**Reglas de color:**
- Los botones primarios SIEMPRE son Rosa Atrevido con texto Lino Paceño.
- Los botones secundarios son outline Noche de Altiplano sobre fondo Lino.
- Sol de Mediodía NUNCA se usa para grandes superficies de fondo ni para tipografía sobre blanco.
- Rosa Atrevido NUNCA se usa para texto de cuerpo.
- El texto de cuerpo siempre es Noche de Altiplano (nunca negro puro #000000).

### Tipografía (USAR ESTAS FUENTES EXACTAS)

- **Display/Titulares:** `Bricolage Grotesque` (Google Fonts), peso 800, letter-spacing `-0.025em`, line-height `1.02`.
- **Cuerpo:** `Inter` (Google Fonts), pesos 400/500/600/700, line-height `1.6`.

**Jerarquía tipográfica:**
| Nivel | Fuente | Peso | Tamaño desktop | Tamaño mobile |
|---|---|---|---|---|
| H1 | Bricolage Grotesque | 800 | `clamp(52px, 10vw, 144px)` | fluid |
| H2 | Bricolage Grotesque | 800 | `clamp(38px, 5.5vw, 72px)` | fluid |
| H3 | Bricolage Grotesque | 700 | `28–40px` | `24–28px` |
| Cuerpo | Inter | 400 | `16–18px` | `15–16px` |
| CTA | Inter | 600 | `15px` | `14px` |
| Caption | Inter | 500 | `13px` | `12px` |

### Voz y Tono (INVIOLABLE)

**Cómo habla Casa Izan:**
- Segunda persona singular ("tú"), nunca "usted" ni "ustedes".
- Cercana (75%), levemente juguetona (40%), moderna (70%), muy expresiva (85%).
- Nombra lo concreto antes que lo abstracto. "Cinco minutos en la ventana con un café" > "un momento de introspección".
- Reconoce la complejidad antes de ofrecer soluciones.
- Cierra con algo accionable o memorable.
- Humor para humanizar, nunca para banalizar.

**Palabras que Casa Izan SÍ usa:**
presencia · cotidiano · habitar · carácter · pausa · intención · lúcido · cálido · decidir · afinar · raíz · casa

**Palabras PROHIBIDAS (nunca las uses, ni siquiera subvertidas):**
~~journey~~ · ~~mindset~~ · ~~empoderamiento~~ · ~~zen~~ · ~~holístico~~ · ~~transforma tu vida~~ · ~~viaje interior~~ · ~~el bienestar que mereces~~ · ~~desbloquea tu potencial~~ · ~~eleva tu energía~~

**Clichés de wellness prohibidos:** No uses "transforma", "viaje", "descubre tu mejor versión", "eleva", "florece", "brilla", "despierta tu", ni ninguna variante. Si sientes el impulso de usarlas, detente y reescribe.

### Manifiesto (texto canónico que puedes citar textualmente)

> Hay una mentira que nos vendieron bien: que estar en paz es bajar la intensidad, apagar el ruido, pedir menos. Pero nosotros venimos de un continente que siempre supo algo distinto: que la calma se cocina a fuego lento en la misma olla que la pasión. Casa Izan nació aquí —entre montañas, entre ciudades despiertas, entre gente que no quiere elegir— para recordarnos que el bienestar no es una huida sino una manera de estar presentes con todo lo que somos. No venimos a bajarte el volumen. Venimos a afinarte. **Vive con carácter. Vive en casa.**

---

## OBJETIVO DE LA LANDING PAGE

**Objetivo de conversión único:** Capturar suscripciones al newsletter semanal de Casa Izan ("Una idea a la semana: breve, concreta, lúcida"). Todo en la landing debe conducir a este CTA.

**CTA secundario (menos prominente):** Ver la filosofía completa (ancla interna a sección de filosofía).

**Métricas de éxito conceptuales:**
- Que un visitante entienda qué es Casa Izan en menos de 10 segundos.
- Que quiera suscribirse en menos de 90 segundos.
- Que recuerde al menos una frase del manifiesto al cerrar la pestaña.

---

## ESTRUCTURA OBLIGATORIA DE LA LANDING

Genera una landing page single-page con las siguientes secciones **en este orden exacto**:

### 1. Navegación fija (sticky nav)
- Logo a la izquierda: un círculo irregular Rosa Atrevido (border-radius: `50% 50% 50% 12px`, rotado `-15deg`) + texto "Casa Izan" en Bricolage Grotesque 800.
- Links centrales (desktop): Filosofía · Pausas · Comunidad · Contacto.
- CTA a la derecha: botón "Suscribirme" en Rosa Atrevido con texto Lino.
- Efecto: se oculta al hacer scroll down, reaparece al subir.
- Mobile: hamburger menu que abre un drawer full-screen Lino con links grandes.

### 2. Hero
- Altura: `min-height: 100vh`.
- Fondo: Lino Paceño con formas flotantes circulares Sol/Rosa/Noche animadas sutilmente (keyframes float, 8-9s).
- Etiqueta superior: pill pequeña en Noche con texto "Nueva filosofía · Nuevo lunes" o similar (autoría tuya, siguiendo la voz).
- Titular H1 (3 líneas):
  ```
  Vivir con
  carácter.
  Vivir en casa.
  ```
  "carácter" en Rosa Atrevido. "casa" sobre un bloque Sol rotado `-1deg`.
- Subtítulo (máximo 2 líneas, ~25 palabras): reformula en tus propias palabras la propuesta de valor. No uses el manifiesto textual aquí.
- CTA primario: "Recibe la idea del martes →" (Rosa Atrevido).
- CTA secundario: "Conoce la filosofía" (outline Noche).
- Scroll hint inferior: palabra "Scroll" con línea animada vertical.
- Animación obligatoria: word-reveal en el H1 con stagger (cada palabra sube desde abajo con 100ms de delay entre palabras).

### 3. Manifiesto (sección de alto impacto)
- Fondo: Noche de Altiplano.
- Texto: Lino Paceño.
- Contenido: el manifiesto canónico (citar textualmente).
- Palabras destacadas en Sol de Mediodía: "Casa Izan nació aquí".
- Battle cry final en Rosa Atrevido, tamaño mayor: "Vive con carácter. Vive en casa."
- Debe ocupar toda la atención visual. Mucho padding vertical (120px+).

### 4. Propuesta de valor (3 pilares)
- Fondo: Lino Paceño.
- Título H2: "Esto es lo que hacemos distinto." (o reformulación tuya dentro del tono).
- 3 cards horizontales (grid responsive, collapse a vertical en mobile):
  1. **Presencia antes que prisa** — Icono/número "01". Descripción corta en voz de marca.
  2. **Calidez con criterio** — Icono/número "02". Descripción.
  3. **Audacia que no cansa** — Icono/número "03". Descripción.
- Cada card: fondo blanco, border-radius 16px, border-top 3px Rosa que aparece al hover, shadow al hover.
- Microanimación: al hover, la card sube 8px y revela una línea extra con ejemplo concreto.

### 5. Producto principal: El Newsletter
- Fondo: Rosa Atrevido.
- Texto: Lino Paceño.
- Layout: split 50/50 (desktop), stacked mobile.
- Izquierda: H2 "Una idea a la semana. Los martes. Siempre." + párrafo corto explicando qué recibe el suscriptor (breve, concreto, en voz de marca).
- Derecha: formulario de suscripción con:
  - Input email (placeholder: "tu@email.com", fondo Lino, border Noche 2px al focus).
  - Input nombre opcional.
  - Botón submit "Sumarme" en Noche de Altiplano con texto Sol de Mediodía.
  - Checkbox de consentimiento con texto legal breve.
  - Mensaje de estado (success/error) con animación de entrada.
- Debajo del form: línea pequeña "Sin spam. Sin 'transforma tu vida'. Sin ruido." (usando la voz de marca para diferenciarse).

### 6. Testimonios
- Fondo: Lino Paceño.
- Título H2: "Lo que dicen quienes ya están en casa." (o reformulación).
- 3 testimonios en grid (collapse a slider en mobile).
- Cada testimonio: quote en Bricolage Grotesque 500 size 22-28px, nombre + rol + ciudad abajo, foto circular 60px (usar placeholder con iniciales sobre fondo Noche o Rosa).
- Al menos 1 testimonio debe ser de Bolivia específicamente (La Paz, Santa Cruz o Cochabamba).
- Inventa testimonios creíbles, con lenguaje natural, NO promocionales. Que suenen a personas reales, no a copy de marketing.

### 7. FAQ (acordeón)
- Fondo: Lino Paceño con una franja decorativa arriba.
- Título H2: "Preguntas que nos hacen mucho."
- 5-6 preguntas en formato acordeón (JavaScript puro para abrir/cerrar).
- Preguntas realistas: sobre el newsletter, sobre la filosofía, sobre si hay costo, sobre frecuencia, sobre cómo cancelar.
- Responde en voz de marca: cercano, honesto, sin evasivas.
- Transición suave al expandir (max-height animation).

### 8. CTA final de refuerzo
- Fondo: Noche de Altiplano.
- Texto Lino, acentos Sol.
- Una sola frase grande H2 (puedes inventarla fiel a la voz): algo como "Tu próximo martes puede empezar distinto."
- Un único botón primario grande Rosa "Recibe la primera idea →".
- Sin distracciones, sin otros elementos.

### 9. Footer
- Fondo: Rosa Atrevido con texturas de fondo decorativas (dos círculos Sol/Noche muy tenues en las esquinas).
- Logo Casa Izan centrado arriba.
- Links en 3 columnas: Marca (filosofía, valores, manifiesto), Comunidad (newsletter, instagram, contacto), Legal (privacidad, términos).
- Línea inferior: "Casa Izan · La Paz, Bolivia · 2026" + redes sociales (solo iconos Instagram, YouTube).
- Copyright muy discreto.

---

## REQUISITOS TÉCNICOS OBLIGATORIOS

### Estructura de archivos
Genera **3 archivos separados**:
- `index.html` — markup semántico (usa `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`, `<main>`).
- `styles.css` — todos los estilos.
- `script.js` — toda la interactividad (vanilla JS, sin frameworks, sin jQuery).

### HTML
- HTML5 válido, lang="es".
- Meta tags completos: charset, viewport, description (en voz de marca), Open Graph (og:title, og:description, og:image), Twitter Card.
- Semántica impecable: headings jerárquicos (nunca saltar niveles), landmarks ARIA donde corresponda.
- Alt text descriptivo en todas las imágenes.
- Formularios con `<label>` asociados (incluso si están visualmente ocultos).
- `prefers-reduced-motion` respetado en animaciones.

### CSS
- Custom properties (variables) para todos los colores, espaciados y tipografías.
- Mobile-first con media queries.
- `clamp()` para tipografía fluida.
- Grid y Flexbox (no floats, no tablas).
- Sin `!important` salvo casos justificados.
- Transiciones suaves con `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Hover states visibles y significativos en TODOS los elementos interactivos.
- Focus states accesibles (outline visible, no removido).
- Print styles básicos.

### JavaScript (vanilla, ES6+, IIFE o modules)
- Scroll progress bar en el top.
- Nav que se oculta al bajar, aparece al subir.
- Scroll reveal con IntersectionObserver (no librerías).
- Word-reveal en el H1 del hero con stagger.
- Acordeón de FAQ (aria-expanded correcto).
- Validación de formulario en cliente (email regex, mensajes de error en voz de marca).
- Submit del form: simular envío con fetch mock, mostrar estado de carga y éxito.
- Smooth scroll en anchors internos.
- Sin dependencias externas salvo Google Fonts.

### Performance y accesibilidad
- Imágenes con `loading="lazy"` (si se usan).
- Fuentes con `display=swap`.
- Contraste WCAG AA mínimo en todos los textos.
- Navegación 100% funcional por teclado.
- Lighthouse objetivo: Performance 95+, Accessibility 100, Best Practices 100.
- Sin console errors ni warnings.

### Responsive
- Breakpoints: 480px, 768px, 1024px, 1280px.
- Todo debe funcionar perfecto desde 360px de ancho hasta 2560px.
- Testear mentalmente en iPhone SE, iPhone 14 Pro, iPad, laptop 13", desktop 27".

---

## RESTRICCIONES Y PROHIBICIONES

- **Nada de clichés de wellness.** Si tu copy usa "transforma", "journey", "eleva", "brilla", "descubre tu", "desbloquea", bórralo y reescríbelo. Sin excepciones.
- **Nada de stock photography genérica mental.** Si mencionas imágenes, que sean descripciones de fotografía real: manos sosteniendo un café junto a una ventana, un rincón de una casa con plantas, un cuaderno abierto en una mesa de madera. Nunca personas rubias meditando en lotus ni frutas cortadas vistas desde arriba.
- **Nada de emojis decorativos en el UI final.** Usar símbolos tipográficos (→, ●, ✓, ✗) solo cuando aporten sentido.
- **Nada de signos de admiración múltiples.** Un punto firme es más potente que tres admiraciones.
- **Nada de "usted".** Siempre "tú".
- **Nada de españolismos peninsulares.** Es español latinoamericano. "celular" no "móvil", "computadora" no "ordenador".
- **Nada de lorem ipsum.** Todo el copy debe estar escrito en la voz real de Casa Izan.
- **Nada de frameworks ni librerías externas.** HTML + CSS + JS vanilla. Ni Tailwind, ni Bootstrap, ni jQuery, ni GSAP, ni AOS.
- **Nada de gradientes ochenteros.** Los gradientes solo se permiten en casos muy puntuales (ej: un placeholder de imagen) y siempre entre 2 colores de la paleta oficial.

---

## ENTREGABLES FINALES

1. **`index.html`** — Completo, semántico, con todo el copy en voz de marca.
2. **`styles.css`** — Completo, con comentarios de sección, custom properties, responsive.
3. **`script.js`** — Completo, comentado, funcional.
4. **Breve resumen al final** (máximo 150 palabras) explicando:
   - Las 3 decisiones de diseño más importantes que tomaste.
   - Qué dejaste fuera intencionalmente y por qué.
   - Qué probarías en un A/B test después del lanzamiento.

---

## CRITERIO DE CALIDAD FINAL

Antes de entregar, pasa tu trabajo por este filtro de 10 preguntas. Si alguna respuesta es "no", reescribe:

1. ¿Es **cálida, audaz y lúcida** al mismo tiempo, o se quedó solo en una?
2. ¿El copy se puede leer en voz alta sin sonar impostado?
3. ¿Evita absolutamente los clichés de wellness?
4. ¿La paleta respeta la proporción 60/20/15/5?
5. ¿Bricolage Grotesque está reservado para titulares e Inter para cuerpo?
6. ¿Hay al menos una referencia concreta a Bolivia o Latinoamérica que no se sienta forzada?
7. ¿El logo tiene zona de protección intacta?
8. ¿El CTA principal es una acción concreta ("Recibe la idea del martes"), no una abstracción ("Descubre")?
9. ¿Alguien que nunca ha visto Casa Izan entendería qué es en menos de 10 segundos al aterrizar en el hero?
10. ¿La landing es algo que tú, como usuario, te suscribirías al leer?

---

## INSTRUCCIÓN FINAL

Genera los tres archivos completos, sin omisiones ni placeholders ("// aquí va el resto del código" está prohibido). Todo el código debe estar listo para copiarse y pegarse y funcionar sin editarlo. Prioriza calidad sobre cantidad: una landing más corta pero impecable supera a una landing larga y genérica.

**Empieza ahora. No pidas aclaraciones. Toma decisiones con criterio y ejecuta.**
