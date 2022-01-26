const express = require("express");
const path = require("path");
const router = require("./routes/myRouter");
const app = express();

//จัดการviews template dinamic
app.set("views", path.join(__dirname, "views")); //อ้างอิงตำแหน่ง folder views
app.set("view engine", "ejs"); //เราใช้template ตัวไหนต้องตั้งค่าก่อน นามสกุลของไฟล์ด้วย

app.use(express.urlencoded({extended:false})) //ต้งค่าสำหรับการรับข้อมูลแบบpost method

app.use(router);

//จัดการstatic file
app.use(express.static(path.join(__dirname, "public")));

app.listen(8080, () => {
  console.log("start port 8080");
});
