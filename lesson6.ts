//Array
let arr1: String[] = ["Hello","World"];
let arr2: Number[] = [3,1,7,5];
let arrAny: any[] = [10,"Hello",true];
let arr3: Array<string> = ["Hoang","Khoi"];

//Tuple: Kiểu mảng đặc biệt, chỉ định được ra các kiểu dữ liệu bên trong
let student: [string,number,boolean];
student = ["Do Hoang Khoi",20,true];
student[1] = 30;
student[2] = true;