# Product Roadmap

## Faza 1: MVP (Content Foundation)

Cel: Uruchomienie strony glownej z blogiem i pierwszymi stronami uslugowymi.

1. [ ] Strona glowna Visuana — Responsywna strona glowna z hero section, prezentacja uslug, credentials foundera, CTA do kontaktu. Design w kolorystyce royal red/burgund. `M`

2. [ ] System bloga (Strapi + Next.js) — Integracja Strapi jako headless CMS z Next.js. Reuzywalne komponenty blogowe (lista artykulow, pojedynczy artykul, kategorie, tagi). Ten komponent bedzie uzywany w calej sieci stron. `L`

3. [ ] Strona uslugowa: Content Marketing — Landing page dla uslugi content marketingu z opisem oferty, case studies (placeholder), formularz kontaktowy, SEO optimization. `S`

4. [ ] Strona uslugowa: Influencer Marketing — Landing page z doswiadczeniem (L'Oreal, Netflix, HBO), case study Jadzia Kim, formularz zapytania. `S`

5. [ ] Formularz kontaktowy z n8n — Integracja formularzy kontaktowych z n8n workflow: powiadomienia email, zapis do bazy, auto-reply. `S`

6. [ ] SEO podstawy — Meta tagi, Open Graph, sitemap.xml, robots.txt, strukturyzowane dane (JSON-LD) dla organizacji i artykulow. `S`

7. [ ] Analytics setup — Google Analytics 4, Google Search Console, podstawowy tracking konwersji (formularze). `XS`

8. [ ] Pierwsze 5 artykulow blogowych — Content w Strapi: 5 artykulow w niszy content/influencer marketing, zoptymalizowane pod SEO. `M`

---

## Faza 2: Content Machine

Cel: Rozbudowa sieci stron, wiecej uslug, poczatek skalowania contentu.

9. [ ] Strona uslugowa: Market Research Azja — Landing page dla badan rynku azjatyckiego, unique selling points (founder credentials Korea), formularz zapytania o raport. `S`

10. [ ] Strona uslugowa: AI Agents & Automatyzacja — Landing page prezentujaca mozliwosci AI agents, case studies automatyzacji, kalkulator oszczednosci. `M`

11. [ ] Strona uslugowa: Custom Apps — Landing page dla dedykowanych aplikacji, portfolio (placeholder), proces wspolpracy, wycena. `S`

12. [ ] Newsletter system — Integracja z newsletterem (np. Buttondown, Resend): formularz zapisu, welcome sequence, integracja z n8n. `S`

13. [ ] Seonyu.pl - Market Research Azja — Osobna strona/submarka dla uslug market research Azja. Reuzywalne komponenty z Visuana, wlasny branding. `L`

14. [ ] Content: 20 artykulow — Kolejne 20 artykulow blogowych na rozne tematy (AI, marketing, Azja), budowanie topical authority. `L`

15. [ ] Link building wewnetrzny — Strategia linkowania miedzy stronami w sieci, optymalizacja anchor textow, pillar content. `S`

16. [ ] AIO (AI-Optimized) content — Optymalizacja contentu pod AI search (ChatGPT, Perplexity), structured data, FAQ sections. `M`

---

## Faza 3: Scale & Automation

Cel: Automatyzacja procesow, submarki, custom apps dla klientow.

17. [ ] Chatbot AI na stronie — Dify.ai chatbot zintegrowany ze strona, odpowiada na pytania o uslugi, kwalifikuje leady. `M`

18. [ ] CRM/Lead management — Supabase baza do zarzadzania leadami, integracja z formularzami, n8n automation dla follow-upow. `M`

19. [ ] Dashboard klienta — Prosty dashboard dla klientow: status projektu, faktury, komunikacja. Next.js + Supabase. `L`

20. [ ] Kolejna submarka (TBD) — Na podstawie danych o zapytaniach, uruchomienie kolejnej submarki w najbardziej dochodowej niszy. `L`

21. [ ] Automatyzacja content creation — AI-assisted tworzenie contentu: research, drafty, optymalizacja. Workflow w n8n + Dify.ai. `L`

22. [ ] Content: 50+ artykulow — Osiagniecie masy krytycznej contentu dla SEO authority. `XL`

23. [ ] Case studies & Portfolio — Prawdziwe case studies z pierwszych klientow, mierzalne rezultaty, testimoniale. `M`

24. [ ] Integracje zewnetrzne — Integracje z narzedziami klientow (Slack, Discord, Notion), API dla custom apps. `L`

---

## Legenda effort

- `XS`: 1 dzien
- `S`: 2-3 dni
- `M`: 1 tydzien
- `L`: 2 tygodnie
- `XL`: 3+ tygodnie

---

> Notes
> - Kolejnosc uwzglednia zaleznosci techniczne (blog przed artykulami, n8n przed automatyzacjami)
> - Kazdy item to funkcjonalnosc end-to-end (frontend + backend jesli potrzebny)
> - Faza 1 to MVP - absolutne minimum do startu i zbierania pierwszych leadow
> - Blog/Strapi to core komponent reuzywany w calej sieci stron
> - Submarki (seonyu.pl) budowane na tych samych komponentach co glowna strona
