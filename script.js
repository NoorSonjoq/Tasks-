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


//--------------------------------------------------------------------------------------------
// TAST 3
// const http = require('http');
// const fs = require("fs");

// const server = http.createServer((req, res) => {

//       fs.readFile('file.txt',  (err, data) => { 
//         if (err) {
//             res.writeHead(500, { "content-type": 'text/plain' });
//             res.end("Error reading the file");
//         } else {
//             res.writeHead(200, { "content-type": 'text/plain' });
//             res.end(data);
//         }
//     });
// });

// const port = 3000;
// const HOST = '127.0.0.1'; // 127.0.0.1:3000

// server.listen(port, HOST, () => {
//     console.log(`Server is started on port #${port} and on localhost ${HOST}`);
// });
// --------------------------------------------------------------------------------------------------------- 
// Task 4 in Home project.postman_collection.json & library.postman_collection.json 
// ---------------------------------------------------------------------------------------------------------
//Task 5 
// please do the logic to get a certain book by the id 
// array 
let books = []
// add new book logic 
app.post("/books", (req, res) => {
    const { id, name, title } = req.body
    // some بتستخدم اذا كان موجود الكتاب 
    if (books.some((book) => book.id === id)) { 
    // اذا كان موجود 
    return res.status(400).json({ error: "this book already exist" })}
    const newBook = new Book(id, name, title)
    // التحقق 
    const error = Book.validate(newBook)
    // اذا كا في خطا
    if (error) return res.status(400).json({ error })
    // add book
    books.push(newBook)
    res.status(201).json({ message: "book has been added", book: newBook })
})
// برجع جميع books
app.get("/books", (req, res) => {
    // التحقق اذا كانت null 
    if (books.length === 0) {
     return res.status(404).json({ error: "No books available" });
     }
     // ارجاع الكتب اذا كانت موجوده 
     res.status(200).json({message :"get all books ", book:books})
})


    // please complete the logic to update the lanaguge of translation 
// translation language 
app.patch("/books/:id/translation",(req,res)=>{
    const bookID = parseInt(req.params.id,10)
    const {language}= req.body
    // التحقق من اللغه 
    if(!language ||typeof language !=="string"){
        return res.status(400).json({error: "sorry invalid or missing language"})
    }
    // find book بناء على id 
    const book = books.find((b)=>b.id===bookID)
    // التحقق من الكتاب 
    if(!book) return res.status(404).json({error:"sorry the book number is not found "})
        // تغيير لغه الكتاب الى اللغه الجديده باستخدام ChangeTranslation
        book.ChangeTranslation(language);
        res.status(200).json({ message: "Translation language has been successfully",book: book
        }); 
    })