/* Lesson 2: Absichtlich eingebaute Bugs für Debug-Übungen */

// BUG 1: Falscher Selektor für den Button (HTML hat id="calcButton")
const button = document.getElementById("calc-btn");

// BUG 2: Event Listener – wir klicken den falschen Button (wegen Bug 1 optional undefined)
button?.addEventListener("click", (ev) => {
  ev.preventDefault();
  // debugger; // Breakpoint hier setzen

  // BUG 3: Falsche Eigenschaft -> sollte .value sein
  const netto = parseFloat(document.getElementById("price").textContent);

  // BUG 4: parseInt statt parseFloat (führt bei Dezimalen zu Rundung)
  const qty = parseInt(document.getElementById("qty").value, 10);

  const discountInput = document.getElementById("discount");
  const discountPct = Number(discountInput.value) || 0;

  // BUG 5: Falscher Query-Selector - Punkt statt # (id vs. class)
  const bruttoEl = document.querySelector(".brutto"); // existiert nicht
  const totalEl = document.getElementById("total");

  // Rechenlogik (korrekt)
  const brutto = netto * 1.2;
  const gesamtVorRabatt = brutto * qty;
  const rabattBetrag = gesamtVorRabatt * (discountPct / 100);
  const gesamt = gesamtVorRabatt - rabattBetrag;

  // BUG 6: result-Sektion ist per CSS .hidden versteckt -> Klasse entfernen
  const result = document.getElementById("result");
  // result.classList.remove("hidden"); // <— fehlt absichtlich

  // BUG 7: Zugriff auf nicht existentes Element (bruttoEl) löst Fehler aus
  bruttoEl.textContent = brutto.toFixed(2) + " €";
  totalEl.textContent = gesamt.toFixed(2) + " €";
});
