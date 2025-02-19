function calcularDespesa() {
    let cda = parseFloat(document.getElementById("cda").value) || 0;
    let cdl = parseFloat(document.getElementById("cdl").value) || 0;
    let aluguel = parseFloat(document.getElementById("aluguel").value) || 0;
    let compra = parseFloat(document.getElementById("compra").value) || 0;

    let total = cda + cdl + aluguel + compra;

    document.getElementById("resultado").textContent = `Total de despesas: R$ ${total.toFixed(2)}`;
}
