// Task1
// let names = ["ahmad","anas","omar","ali",["wedad","layan","esraa"]]
// names = names.flat(); 
// for (let i=0; i< names.length;i++)
//     console.log(names[i].toUpperCase())
// ------\\
// solution 2
// let a=["ahmad","anas","omar","ali"]
// let b=["wedad","layan","esraa"] 
// let c = a.concat(b);
// for (let i = 0; i < c.length; i++) {
//     console.log(c[i].toUpperCase());
// }
// --------------------------------------------------------------------------------------------------------------
// Task2 Array 
// 1  Array flat() 
// تم انشاء مصفوفة  بداخلها عدة مصفوفات فرعية ثم يتم انشاء المصفوفة جديده تحتوي على العناصر  من ال مصفوفة الاخرى 
// (بمعنى بتم انشاء مصفوفة جديده بداخلها جميع عناصر ال مصفوفة الاخرى )
// let Arr = [["salma","sama"],["Sara","Noor"]];
// let newArr  = Arr .flat();
// console.log(newArr)

// 2 flatMap()
//  كل عنصر داخل ال مصفوفه بعتبرها مصفوفة لوحدها 
// (بمعنى كنا مصفوفه ال ماب تقوم بتقسيمها لكل عنصر مصفوفة لوحده لكن بنفس شكل المصفوفه العادية  ب فلات )
// let Arr = [1,2,3,4,5];
// let newArr = Arr.flatMap(x =>[x]);
// console.log(newArr)

// 3  Array splice()
//  تم انشاء مصفوفه داخلها مجموعه من العناصر تقوم ال سبلس ب تحديد رقم العنصر الذي سوف يقوم باضافه عناصر فيه و يتم تحديد اذا كان يوجد عناصر يجب حذفها ام لا 
// (تقوم بحذف و اضافه عناصر الى المصفوفة  )
// const names = ["Noor", "Sonjoq", "Mohammad", "Mohammad"];
// names.splice(3, 1, "Sonjoq");
// console.log(names)

//لحذف عنصر دون اضافه عنصر جديد تم تحديد ان لا يتم اضافه من خلال 0 وانه سوف يتم حذف عنصر واحد 1 من البدايه 
// const names= [1, 2, 3];
// names.splice(0, 1);
// console.log(names)

// toSpliced() 
// تقوم بنفس عمل السبلس لكن يكون الاختلاف بانه هنا يتم انشاء مصفوفه جديده اما السبلس تقوم بالتعديل على المصفوفه 
// const num = [1,2,3,4];
// const spliced = num.toSpliced(0, 1);
// console.log(spliced)

// 4 Array slice()
//  تقوم بتجزئه العناصر بمصفوفه جديده 
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// console.log(citrus)

// 5 Array toString()
// تقوم على انشاء فاصله بين العناصر 
// const num = [1, 2, 3 , 4];
// const nun = num.toString();
// console.log(nun)

// 6 Array copyWithin()
//  تقوم على نسخ العناصر بتم تحديد العناصر المراد نسخه و تحديد من اين يتم النسخ في نفس المصفوفة
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(2, 1);
// console.log(fruits)

// 7 Array concat()
// تقوم على دمج المصفوفات بمصفوفه واحده 
// let a=["ahmad","anas","omar","ali"]
// let b=["wedad","layan","esraa"] 
// let c = a.concat(b);
// console.log(c)

// 8 Array at()
// تقوم على تحديد العنصر 
// const a = ["A", "B", "C", "D"];
// let a = a.at(2);
// console.log(a)

// 9 Array join()
// بتم اضافه الى * المصفوفه 
// const a = ["A", "B", "C", "D"];
// let b = a.join(" * ");
// console.log(b)

// 10 Array pop()
//  بتم استبعاد اخر قيمه في المصفوفه او بجيبها فقط  اذا تم انشاء متغير جديد تحفظ به
// const a = ["A", "B", "C", "D"];
// a.pop();
// console.log(a)

// const a = ["A", "B", "C", "D"];
// let b = a.pop();
// console.log(b)

// 11  Array push()
// اضافه عنصر جديد الى المصفوفه باخرها  او معرفه طولها عند اضافتها الى متغير جديد 
// const a = ["A", "B", "C", "D"];
// a.push("E");
// let b=a.push("E");
// console.log(a)

// 12 Array shift()
//تقوم على ازاله اول عنصر و تقديم باقي العناصر مكانها  او ذكر العنصر الذي تم ازالته 
// const a = ["A", "B", "C", "D"];
// a.shift();
// // let b=a.shift();
// console.log(a)

// 13  Array unshift()
// ازاحه الى اليمين واضافه عنصر جديد او اضافه عنصر
// const a = ["A", "B", "C", "D"];
// a.unshift("E");
// console.log(a)

// 14 Array  index  
// بتم اضافه عنصر الى المصفوفه بناء على لاندكس 
// const a = ["A", "B", "C", "D"];
// a[2]="E";
// console.log(a)
