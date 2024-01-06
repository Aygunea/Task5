// Task1
// var number = "1234";
// var sum = 0;
// if (number / 1000 >= 1 && number / 1000 < 10) {
// //   number = toString(number);
//   for (let i = 0; i < number.length; i++) {
//     sum += +number[i];
//   }
//   console.log(sum);
// } else {
//   console.log(" 4 reqemli eded daxil edin");
// }

//Task2
// var number;
// if (number == 1) {
//   console.log("eded ne tek ne cutdur");
// } else if (number % 2 == 0) {
//   console.log("eded cutdur");
// } else console.log("eded tekdir");

//Task3
// var num = "10";
// switch (num) {
//   case "1":
//     console.log("Yanvar");
//     break;
//   case "2":
//     console.log("Fevral");
//     break;
//   case "3":
//     console.log("Mart");
//     break;
//   case "4":
//     console.log("Aprel");
//     break;
//   case "5":
//     console.log("May");
//     break;
//   case "6":
//     console.log("Iyun");
//     break;
//   case "7":
//     console.log("Iyul");
//     break;
//   case "8":
//     console.log("Avqust");
//     break;
//   case "9":
//     console.log("Sentyabr");
//     break;
//   case "10":
//     console.log("Oktyabr");
//     break;
//   case "11":
//     console.log("Noyabr");
//     break;
//   case "12":
//     console.log("Dekabr");
//     break;
//   default:
//     console.log("Duzgun deyer daxil edin");
//     break;
// }

//Task4
// var number; //number tipinde eded ucun
// var sum = 0;
// if (number / 100 >= 1 && number / 100 < 10) {
//   var teklik = number % 10;
//   var onluq = ((number - teklik) / 10) % 10;
//   var yuzluk = (number - (onluq * 10 + teklik)) / 100;
//   if (teklik + yuzluk == onluq) console.log("beli");
//   else console.log("xeyr");
// } else {
//   console.log("3 reqemli eded daxil edin");
// }

//Task5
// var number;
// var multiply = 1;
// var sum = 0;
// var count = 0;
// var arr = [];
// while (number > 0) {
//   arr.unshift(number % 10);
//   number = Math.floor(number / 10);
// }
// arr.forEach((item) => {
//   multiply = multiply * item;
//   sum = sum + item;
//   if (item == 5) {
//     count++;
//   }
// });
// if (count >= 1) console.log("Cem: "+sum);
// else console.log("Hasil "+multiply);

// Task6
// var sum = 0;
// var multiply = 1;
// for (let i = 20; i < 60; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   } else {
//     multiply *= i;
//   }
// }
// console.log(sum);
// console.log(multiply);

// Task7
// var number;
// for (number = 1; number < 1000; number++) {
//   if (number % 56 == 0) {
//     console.log(number);
//   }
// }

//Task8
// var number; // String tipində daxil edirik
// var newNumber = "";
// for (let i = number.length - 1; i >= 0; i--) {
//   newNumber += number[i];
// }
// if (number == newNumber) console.log("eded polidnomdur");
// else console.log("eded polidnom deyil");

// Task9
// var number1;
// var number2;
// var number3;
// var sum = 0;
// var firstPer, secondPer;
// if (
//   number1 / 100000 >= 1 &&
//   number1 / 100000 < 10 &&
//   number2 / 100000 >= 1 &&
//   number2 / 100000 < 10 &&
//   number3 / 100000 >= 1 &&
//   number3 / 100000 < 10
// ) {
//   sum += number1 + number2 + number3;
//   firstPer = sum * 0.1;
//   secondPer = firstPer * 0.1;
//   console.log(secondPer);
// } else console.log("ededler 6 reqemli deyil");

//Task10
// var number; //number tipinde eded ucun
// if (number / 100 >= 1 && number / 100 < 10) {
//   var teklik = number % 10;
//   var onluq = ((number - teklik) / 10) % 10;
//   var yuzluk = (number - (onluq * 10 + teklik)) / 100;
//   if (teklik + onluq + yuzluk == yuzluk * yuzluk) console.log("beli");
//   else console.log("xeyr");
// } else {
//   console.log("3 reqemli eded daxil edin");
// }

// Selection Sort Algoritması
// function selectionSort(arr) {
//   var minIndex, temp;
//   for (var i = 0; i < arr.length - 1; i++) {
//     minIndex = i;

//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }
//   return arr;
// }

// function heapSort(arr) {
//   // Diziyi max heap'e dönüştür
//   function buildMaxHeap(arr, n) {
//     // Dizinin yarısından başlayarak bottom-up şekilde heapify işlemi uygula
//     for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
//       heapify(arr, i, n);
//     }
//   }
//   buildMaxHeap(arr);
//   function swap(arr, i, j) {
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
//   function heapify(arr, i, n) {
//     var largest = i;
//     var left = 2 * i + 1;
//     var right = 2 * i + 2;
//     // Sol çocuk düğümün değeri, en büyük düğümden büyükse güncelle
//     if (left < n && arr[left] > arr[largest]) {
//       largest = left;
//     }
//     // Sağ çocuk düğümün değeri, en büyük düğümden büyükse güncelle
//     if (right < n && arr[right] > arr[largest]) {
//       largest = right;
//     }
//     // Eğer en büyük düğüm değiştiyse, swap işlemi yap ve alt ağaç üzerinde heapify işlemi uygula
//     if (largest !== i) {
//       swap(arr, i, largest);
//       heapify(arr, largest, n);
//     }
//   }
//   // Diziyi sırala
//   for (var i = arr.length - 1; i > 0; i--) {
//     // Root ile dizinin sonundaki elemanı değiştir
//     swap(arr, 0, i);

//     // Max heap özelliğini korumak için heapify işlemi uygula
//     heapify(arr, 0, i);
//   }

//   return arr;
// }
// var arrayToSort = [64, 25, 12, 22, 11];
// var sortedArray = heapSort(arrayToSort);
// console.log("Siralanmiş Array:", sortedArray);
