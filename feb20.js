function process() {
  var courses = parseInt(document.getElementById("coursesbox").value);
  var fees = parseInt(document.getElementById("feesbox").value);

  var total = courses * fees;

  //   var discount = total * 0.2;
  if (total >= 50000) {
    var discount = total * 0.2;
  } else {
    var discount = total * 0.1;
  }
  var pay = total - discount;

  document.getElementById("discountbox").value = discount;
  document.getElementById("paybox").value = pay;
}
