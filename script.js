function calculateResistance() {
    const voltage = parseFloat(document.getElementById("voltage").value);
    const current = parseFloat(document.getElementById("current").value);
    const resistance = voltage / current;
    document.getElementById("resistance").value = resistance.toFixed(2);
  }
  