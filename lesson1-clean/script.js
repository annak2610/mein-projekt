/* Lesson 1: Sauberes Beispiel zum Kennenlernen von DOM + Debugging */
const form = document.getElementById("calc-form");
const priceInput = document.getElementById("price");
const qtyInput = document.getElementById("qty");
const discountInput = document.getElementById("discount");
const bruttoEl = document.getElementById("brutto");
const totalEl = document.getElementById("total");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  // Tipp: Setze hier im Unterricht einen Breakpoint oder nutze 'debugger;'
  // debugger;

  const netto = parseFloat(priceInput.value); // korrekt: value, nicht textContent
  const qty = parseInt(qtyInput.value, 10);
  const discountPct = parseFloat(discountInput.value) || 0;

  console.log({ netto, qty, discountPct });

  // USt 20%
  const brutto = netto * 1.2;
  const gesamtVorRabatt = brutto * qty;
  const rabattBetrag = gesamtVorRabatt * (discountPct / 100);
  const gesamt = gesamtVorRabatt - rabattBetrag;

  bruttoEl.textContent = brutto.toFixed(2) + " €";
  totalEl.textContent = gesamt.toFixed(2) + " €";
});
