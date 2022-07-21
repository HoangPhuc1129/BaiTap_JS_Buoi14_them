//Bài 5
/**Mô Hình 3 Khối */
// Ngày mai
function ngayMai() {
  var ngay = +document.getElementById(`ngay`).value;
  var thang = +document.getElementById(`thang`).value;
  var nam = +document.getElementById(`nam`).value;
  var tagNgay = ngay;
  var tagThang = thang;
  var tagNam = nam;

  switch (tagThang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10: {
      if (tagNgay > 0 && tagNgay < 31) {
        ngay++;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else if (tagNgay === 31) {
        ngay = 1;
        thang++;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else {
        alert("Vui Lòng Nhập Đúng Ngày Tháng Năm");
      }
      break;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      if (tagNgay > 0 && tagNgay < 30) {
        ngay++;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else if (tagNgay === 30) {
        ngay = 1;
        thang++;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else {
        alert("Vui Lòng Nhập Đúng Ngày Tháng Năm");
      }
      break;
    }
    case 2: {
      if (tagNgay > 0 && tagNgay < 28) {
        ngay++;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else if (tagNgay === 28) {
        ngay = 1;
        thang++;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else {
        alert("Vui Lòng Nhập Đúng Ngày Tháng Năm");
      }
      break;
    }
    case 12: {
      if (tagNgay > 0 && tagNgay < 31) {
        ngay++;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else if (tagNgay === 31) {
        ngay = 1;
        thang = 1;
        nam++;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else {
        alert("Vui Lòng Nhập Đúng Ngày Tháng Năm");
      }
      break;
    }
    default:
      {
        alert("Vui Lòng Nhập Đúng Tháng");
      }
      break;
  }
  // document.getElementById(`ketQua`).value =
  //   "ngày " + ngay + " tháng " + thang + " năm " + nam;
}

// Ngày hôm qua
function ngayHomQua() {
  var ngay = +document.getElementById(`ngay`).value;
  var thang = +document.getElementById(`thang`).value;
  var nam = +document.getElementById(`nam`).value;
  var tagNgay = ngay;
  var tagThang = thang;
  var tagNam = nam;

  switch (tagThang) {
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      if (tagNgay > 1 && tagNgay <= 31) {
        ngay--;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else if (tagNgay === 1) {
        ngay = 30;
        thang--;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else {
        alert("Vui Lòng Nhập Đúng Ngày Tháng Năm");
      }
      break;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      if (tagNgay > 1 && tagNgay <= 30) {
        ngay--;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else if (tagNgay === 1) {
        ngay = 31;
        thang--;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else {
        alert("Vui Lòng Nhập Đúng Ngày Tháng Năm");
      }
      break;
    }
    case 2: {
      if (tagNgay > 1 && tagNgay <= 28) {
        ngay--;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else if (tagNgay === 1) {
        ngay = 31;
        thang--;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else {
        alert("Vui Lòng Nhập Đúng Ngày Tháng Năm");
      }
      break;
    }
    case 1: {
      if (tagNgay > 1 && tagNgay <= 31) {
        ngay--;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else if (tagNgay === 1) {
        ngay = 31;
        thang = 12;
        nam--;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else {
        alert("Vui Lòng Nhập Đúng Ngày Tháng Năm");
      }
      break;
    }
    case 3: {
      if (tagNgay > 1 && tagNgay <= 31) {
        ngay--;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else if (tagNgay === 1) {
        ngay = 28;
        thang--;
        document.getElementById(`ketQua`).value =
          "ngày " + ngay + " tháng " + thang + " năm " + nam;
      } else {
        alert("Vui Lòng Nhập Đúng Ngày Tháng Năm");
      }
      break;
    }
    default:
      {
        alert("Vui Lòng Nhập Đúng Tháng");
      }
      break;
  }

  // document.getElementById(`ketQua`).value =
  //   "ngày " + ngay + " tháng " + thang + " năm " + nam;
}

//Bài 6
/**Mô Hình 3 khối */

document.getElementById(`hienThi`).onclick = function () {
  var tagYear = Number(document.getElementById(`year`).value);
  var tagMonth = Number(document.getElementById(`month`).value);

  // chia hết cho 4 nhưng không chia hết cho 100 không phải năm nhuận

  if (
    (tagYear % 4 === 0 && tagYear % 100 !== 0) ||
    (tagYear % 400 === 0 && tagYear % 100 === 0)
  ) {
    if (tagMonth === 2) {
      document.getElementById(`footer`).innerHTML =
        "Tháng 2 " + " năm " + tagYear + " có 29 ngày";
    } else if (
      tagMonth === 1 ||
      tagMonth === 3 ||
      tagMonth === 5 ||
      tagMonth === 7 ||
      tagMonth === 8 ||
      tagMonth === 10 ||
      tagMonth === 12
    ) {
      document.getElementById(`footer`).innerHTML =
        " Tháng " + tagMonth + " năm " + tagYear + " có 31 ngày ";
    } else if (
      tagMonth === 4 ||
      tagMonth === 6 ||
      tagMonth === 9 ||
      tagMonth === 11
    ) {
      document.getElementById(`footer`).innerHTML =
        "Tháng " + tagMonth + " năm " + tagYear + " có 30 ngày";
    } else {
      document.getElementById(`footer`).innerHTML = "Tháng Không Hợp Lệ";
    }
  } else {
    if (tagMonth === 2) {
      document.getElementById(`footer`).innerHTML =
        "Tháng 2 " + " năm " + tagYear + " có 28 ngày";
    } else if (
      tagMonth === 1 ||
      tagMonth === 3 ||
      tagMonth === 5 ||
      tagMonth === 7 ||
      tagMonth === 8 ||
      tagMonth === 10 ||
      tagMonth === 12
    ) {
      document.getElementById(`footer`).innerHTML =
        " Tháng " + tagMonth + " năm " + tagYear + " có 31 ngày ";
    } else if (
      tagMonth === 4 ||
      tagMonth === 6 ||
      tagMonth === 9 ||
      tagMonth === 11
    ) {
      document.getElementById(`footer`).innerHTML =
        "Tháng " + tagMonth + " năm " + tagYear + " có 30 ngày";
    } else {
      document.getElementById(`footer`).innerHTML = "Tháng Không Hợp Lệ";
    }
  }
  document.getElementById(`footer`).className =
    "card-footer text-center bg-danger";
};

// Bài 7
/**Mô hình 3 khối */
document.getElementById("nut").onclick = function () {
  var tagSoNguyen = document.getElementById(`soNguyen`).value * 1;
  var tagHangTram = Math.floor(tagSoNguyen / 100);
  var tagHangChuc = Math.floor((tagSoNguyen % 100) / 10);
  var tagHangDonVi = tagSoNguyen % 10;
  var hangTram = "";
  var hangChuc = "";
  var hangDonVi = "";
  switch (tagHangTram) {
    case 0:
      hangTram = " Không trăm";
      break;
    case 1:
      hangTram = " Một trăm";
      break;
    case 2:
      hangTram = " Hai trăm";
      break;
    case 3:
      hangTram = " Ba trăm";
      break;
    case 4:
      hangTram = " Bốn trăm";
      break;
    case 5:
      hangTram = " Năm trăm";
      break;
    case 6:
      hangTram = " Sáu trăm";
      break;
    case 7:
      hangTram = " Bảy trăm";
      break;
    case 8:
      hangTram = " Tám trăm";
      break;
    case 9:
      hangTram = " Chín trăm";
      break;
    default:
      alert("Số không hợp lệ");
      break;
  }
  switch (tagHangChuc) {
    case 0:
      {
        if (
          tagSoNguyen === 100 ||
          tagSoNguyen === 200 ||
          tagSoNguyen === 300 ||
          tagSoNguyen === 400 ||
          tagSoNguyen === 500 ||
          tagSoNguyen === 600 ||
          tagSoNguyen === 700 ||
          tagSoNguyen === 800 ||
          tagSoNguyen === 900
        ) {
          hangChuc = "";
        } else {
          hangChuc = " linh";
        }
      }
      // hangChuc = " lẻ";
      break;
    case 1:
      hangChuc = " mười";
      break;
    case 2:
      hangChuc = " hai mươi";
      break;
    case 3:
      hangChuc = " ba mươi";
      break;
    case 4:
      hangChuc = " bốn mươi";
      break;
    case 5:
      hangChuc = " năm mươi";
      break;
    case 6:
      hangChuc = " sáu mươi";
      break;
    case 7:
      hangChuc = " bảy mươi";
      break;
    case 8:
      hangChuc = " tám mươi";
      break;
    case 9:
      hangChuc = " chín mươi";
      break;
  }
  switch (tagHangDonVi) {
    case 1:
      {
        if (tagHangChuc === 1) {
          hangDonVi = " một";
        } else {
          hangDonVi = " mốt";
        }
      }
      // hangDonVi = " mốt ";
      break;
    case 2:
      hangDonVi = " hai ";
      break;
    case 3:
      hangDonVi = " ba ";
      break;
    case 4:
      hangDonVi = " bốn ";
      break;
    case 5:
      hangDonVi = " năm ";
      break;
    case 6:
      hangDonVi = " sáu ";
      break;
    case 7:
      hangDonVi = " bảy ";
      break;
    case 8:
      hangDonVi = " tám ";
      break;
    case 9:
      hangDonVi = " chín ";
      break;
  }
  document.getElementById(`process`).value =
    "Kết quả là :" + hangTram + hangChuc + hangDonVi;
};

// bài 8
/**Mô hình 3 khối */

document.getElementById("tinhToan").onclick = function () {
  //tên học sinh 1,2,3
  var tagTenHs1 = document.getElementById(`tenHs1`).value;
  var tagTenHs2 = document.getElementById(`tenHs2`).value;
  var tagTenHs3 = document.getElementById(`tenHs3`).value;
  //tọa độ học sinh 1
  var tagToaDoX1 = document.getElementById(`toaDoX1`).value * 1;
  var tagToaDoY1 = document.getElementById(`toaDoY1`).value * 1;
  //tọa độ học sinh 2
  var tagToaDoX2 = document.getElementById(`toaDoX2`).value * 1;
  var tagToaDoY2 = document.getElementById(`toaDoY2`).value * 1;
  //tọa độ học sinh 3
  var tagToaDoX3 = document.getElementById(`toaDoX3`).value * 1;
  var tagToaDoY3 = document.getElementById(`toaDoY3`).value * 1;
  //tọa độ trường học
  var tagToaDoXTrH = document.getElementById(`toaDoXTrh`).value * 1;
  var tagToaDoYTrH = document.getElementById(`toaDoYTrh`).value * 1;

  //tính độ dài của học sinh 1 so với trường
  var calcStudent1 = 0;
  calcStudent1 = Math.sqrt(
    Math.pow(tagToaDoX1 - tagToaDoXTrH, 2) +
      Math.pow(tagToaDoY1 - tagToaDoYTrH, 2)
  );
  //tính độ dài của học sinh 2 so với trường
  var calcStudent2 = 0;
  calcStudent2 = Math.sqrt(
    Math.pow(tagToaDoX2 - tagToaDoXTrH, 2) +
      Math.pow(tagToaDoY2 - tagToaDoYTrH, 2)
  );
  //tính độ dài của học sinh 1 so với trường
  var calcStudent3 = 0;
  calcStudent3 = Math.sqrt(
    Math.pow(tagToaDoX3 - tagToaDoXTrH, 2) +
      Math.pow(tagToaDoY3 - tagToaDoYTrH, 2)
  );
  if (calcStudent1 > calcStudent2 && calcStudent1 > calcStudent3) {
    document.getElementById(`final`).value =
      "Học sinh xa trường nhất là " + tagTenHs1;
  } else if (calcStudent2 > calcStudent1 && calcStudent2 > calcStudent3) {
    document.getElementById(`final`).value =
      "Học sinh xa trường nhất là " + tagTenHs2;
  } else if (calcStudent3 > calcStudent1 && calcStudent3 > calcStudent2) {
    "Học sinh xa trường nhất là " + tagTenHs3;
  }
};
