# Lesson 2 (Bugs): Debugging-Übungen

## Ziel
- Typische Fehler mit Browser- oder VS-Code-Debugger finden und beheben.

## Bekannte Bugs (nicht verraten – nur für Lehrende)
1) Button-ID falsch (`calcButton` vs. `calc-btn` in JS). Lösung: ID anpassen oder Selektor korrigieren.
2) `.textContent` statt `.value` beim Preis führt zu `NaN`. Lösung: `value` nutzen.
3) (Optional nach Fix 2) `parseInt` auf Preis/qty führt zu unerwarteter Rundung. Lösung: `parseFloat` für Dezimalzahlen; `parseInt` bleibt für Menge ok.
4) Falscher Selector `.brutto` statt `#brutto`. Lösung: richtige ID selektieren.
5) Ergebnis-Sektion bleibt durch `.hidden` unsichtbar. Lösung: `result.classList.remove("hidden")`.
6) Optional: Demonstriere Conditional Breakpoints auf Eingaben.
