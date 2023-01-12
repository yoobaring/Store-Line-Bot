let ss = SpreadsheetApp.openByUrl("ลิงค์ ที่อยู่ google sheets");
let sheet = ss.getSheetByName("ชื่อตาราง");
let sheet1 = ss.getSheetByName("ชื่อตาราง");
let sheet2 = ss.getSheetByName("ชื่อตาราง");

function doPost(e) {

let data = JSON.parse(e.postData.contents)
let userMsg = data.originalDetectIntentRequest.payload.data.message.text;

  let detail = userMsg.split(':')
  let MsgPr = userMsg[0] == 'P'? userMsg : ''
  let MsgSize = userMsg.split(" ")
     console.log(MsgSize, 'MsgSize')

     // ดึงข้อมูลของข้อมูลปุ่ม จาก database โดยเริ่มดึงจาก จาก A2 - A7 
  let bnt_quick = sheet.getRange(2,1, sheet.getLastRow()-1).getValues(); 

     // ดึงข้อมูลของข้อมูล Size จาก database โดยเริ่มดึงจาก จาก B2 - B6
  let size = sheet.getRange(2,2, sheet.getLastRow()-2, sheet.getLastColumn()-4).getValues();

     // ดึงข้อมูลของข้อมูล products จาก products โดยดึงทั้งหมด เริ่มแถว A3 - O17 
  let products = sheet1.getRange(3, 1, sheet1.getLastRow()-2,sheet1.getLastColumn()).getValues();

  let size_pro = []
  let response = {}
  let text = {}

  if(userMsg == 'ดูสินค้า'){
    // รายการสินค้า โดยแสดงด้วยปุ๋ม 
    response = quickReply(bnt_quick)
  }
  else if(userMsg == 'สินค้าทั้งหมด'){
    // รายการสินค้า แสดงได้แค่ไม่เกิน 10 รายการ
    let product = products.filter( (e, i) => i < 10 )
        response = card_Pro(product)
        console.log(product.length)
  }
  else if(userMsg == 'เพิ่มเติม'){
    // รายการสินค้าเพิ่มเติม แสดงได้แค่ไม่เกิน 10 รายการ
    let product = products.filter( (e, i) => i > 9 )
        response = card_Pro(product)
  }
  else if(userMsg == 'เด็กผู้ชาย' || userMsg == 'เด็กผู้หญิง' || userMsg == 'ผู้ใหญ่(หญิง)' || userMsg == 'ผู้ใหญ่(ชาย)' || userMsg == 'อื่น ๆ'){
    // รายการสินค้าตามหมวดหมู่ แสดงได้แค่ไม่เกิน 10 รายการ
          let type_ = bnt_quick.findIndex(e => e == userMsg)
          let product = products.filter( (e) => e[type_+1] == userMsg)
          response = card_Pro(product)
  }
  else if(MsgPr != ''){
    // กรณีที่มีการเลือกสินค้า จะส่งรหัสสินค้าที่ขึ้นต้นว่า Pตามด้วยรหัสตัวเลข โดยนำรหัสไปคนหาข้อมูลสินค้า
      MsgPr = products.filter((e) => e[0] == MsgPr)
      for(let i = 0; i< size.length; i++){
          size[i].push(MsgPr[0][i+8])
          size[i].push(MsgPr[0][0])
      }
    
     size_pro = size.filter(e => e[e.length-2] != 0)
     response = cardSize(size_pro)
  }
  else if(MsgSize[0] == 's' || MsgSize[0] == 'm' || MsgSize[0] == 'l' || MsgSize[0] == 'xl' || MsgSize[0] == 'xxl'){
    // กรณีที่มีการเลือกไซต์สินค้า จะส่ง ไซต์สินค้า รหัสสินค้า  
         let btn_size = []
           for(let j = 0;j < parseInt(MsgSize[MsgSize.length-2]); j++){
              let btn = []
                btn.push(MsgSize[0], j+1, MsgSize[MsgSize.length-1])
                btn_size.push(btn)
           }
        response = quickReply(btn_size)
  }
  else if(detail[0] == 'รหัสสินค้า'){
      
      let arr = ['I', 'J', 'K', 'L', 'M']
      let id_or = detail[1].split(",")[0].trim().split("P")[1].split("0").filter(e => e != '')
      let order = products.filter(e => e[0] == detail[1].split(",")[0].trim())
        let update_num_size = ''
        let index = ''
        let s_z = ''
          for(let i = 0; i< size.length; i++){
            let num = parseInt(MsgSize[MsgSize.length-1])
                s_z = MsgSize[3].split(",")[0].trim()
            if(size[i][0] == s_z){
              update_num_size = parseInt(order[0][i+8])-num
              index = `${arr[i]}${parseInt(id_or[0])+2}`
            }
          }
          // สำหรับ อัปเดต จำนวนสินค้าคงเหลือ ใน DATABASE products 
         sheet1.getRange(index).setValue(parseInt(update_num_size) >= 0? update_num_size : '0');

      let id_order = order[0][0]
      let name_order = `${order[0][6]} ${order[0][7]}`
      let sum = parseInt(order[0][13])*parseInt(detail[detail.length-1].trim())
      let order_ = [id_order, name_order, parseInt(detail[detail.length-1].trim()).toString(), parseInt(order[0][13]).toString(), sum.toString(), generateRandomNumber()]
      let payment = parseInt(detail[detail.length-1].trim())*parseInt(order[0][13])
      // ดึง id database ที่ว่าง เพื่อที่จะนำข้อมูลไปเก็บ
      let id_ = sheet2.getRange(2, 1, sheet2.getLastRow()-1).getValues();
          id_ = parseInt(id_[id_.length-1][0])+1

      let date = new Date().toISOString()
      let random = generateRandomNumber() // random number คำสั่งซื้อ
    //  console.log(id_, `#${random}`, date, id_order, `${name_order} ${s_z} ${detail[detail.length-1].trim()}`, payment, date)
      
      // สำหรับ อัปเดต ข้อมูลสินค้าเข้าใน DATABASE orders
      sheet2.getRange(`A${id_+1}:G${id_+1}`).setValues([[id_, `#${random}`, date, id_order, `${name_order} ${s_z} ${detail[detail.length-1].trim()}`, payment, date]]);
      text =  {
            "text": {
              "text": [
                "กรุณาส่งที่อยู่จัดส่งสินค้าคะ\n##### รบกวนลูกค้า คัดลอกข้อความนี้ไปกรอกข้อมูลด้วยคะ #####\n\n  + ชื่อ นามสกุล :\n  + เบอร์ :\n  + ที่อยู่ :"
              ]
            },
            "platform": "LINE"
          }
     // console.log(order_)
     response = cardOrder(order_)
  }
  else if(userMsg == 'คำสั่งซื้อ'){
          let cus_or = sheet2.getRange(sheet2.getLastRow(),1,1, sheet2.getLastColumn()).getValues();
          console.log(cus_or)
          let name = cus_or[0][4].split(" ")
          let detail_or = cus_or[0][7].split(":")
          console.log(detail_or[3])
          let address = detail_or[3].trim()
          let name_add = detail_or[1].split('\n')[0].trim()
          let phone = detail_or[2].split('\n')[0].trim()
          let price = parseInt(cus_or[0][5])/parseInt(name[4]).toString()

          let e = [ 
              cus_or[0][3],
              cus_or[0][4],
              name[name.length-1],
              price.toString(),
              cus_or[0][5].toString(),
              name_add,
              phone, 
              address,
              cus_or[0][1],cus_or[0][8]]
          console.log(e)
            response = orderList(e)
  }
  else {
      let cus_ = sheet2.getRange(sheet2.getLastRow(),1,1).getValues()[0][0];
      // สำหรับ อัปเดต ข้อมูลที่อยู่เข้าใน DATABASE orders
      sheet2.getRange(`H${cus_+1}`).setValues([[userMsg]]);
      console.log(cus_)
      response = {
                "line":{
                      "type": "sticker",
                      "packageId": "11538",
                      "stickerId": "51626495"
                    }
              }
      
        text =  {
            "text": {
              "text": [
                "ขอบคุณค่ะ"
              ]
            },
            "platform": "LINE"
          }
  }
              

    
let result = {
      fulfillmentMessages: [
        {
          payload: response,
          platform: "LINE"
        },
        text? text: undefined
      ]
}
  
   let replyJSON = ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    console.log(JSON.stringify(result), 'result')
   return replyJSON
}

function generateRandomNumber() {
  // Generate a random number between 0 and 9999999999
  let randomNumber = Math.floor(Math.random() * 10000000000);

  // Add leading zeros if the number is less than 10 digits
  let formattedNumber = randomNumber.toString().padStart(10, "0");

  return formattedNumber;
}


  
 




