/**
 Bai 1
    input: Số ngày làm việc
        ngày công = 25
        
    process: Lấy số ngày làm việc * lương 1 ngày (100.000)
        ngày công * 100.000
        
    out put
        tiền lương
 */

    var workDay = 25;
    const payPerDay = 100000;

    var payCheck = null;

    payCheck = workDay * payPerDay;

    console.log("payCheck =", payCheck)

/**
 Bai 2
    input: nhập vào 5 số thực
        5 số thực = 5, 10, 15, 20, 25
        
    process: Lấy tổng 5 số vừa nhập chia cho 5
        
    out put: giá trị trung binh của 5 số 
 */

        var numb1 = 5;
        var numb2 = 10;
        var numb3 = 15;
        var numb4 = 20;
        var numb5 = 25;
        
        var average = null;
    
        average = (numb1 + numb2 + numb3 + numb4 + numb5) / 5;
    
        console.log("average =", average)

/**
 Bai 3
    input: nhập vào số tiền USD 
        số tiền USD = 10
        
    process: Lấy số tiền vừa nhập * 23.500
        
    out put: số tiền đã quy đổi
 */

    var usd = 10;

    const current = 23500;
    
    var result = null;

    result = usd * current;

    console.log("result =", result, "vnd")

/**
 Bai 4
    input: nhập vào chiều dài và chiều rộng
        chiều dài = 5
        chiều rộng = 10    
    process: 
        Chu vi = tổng chiều dài và chiều rộng nhân với 2
        Diện tích = chiều dài nhân với chiều rộng
        
    out put: diện tích và chu vi 
 */

    var edge1 = 5;
    var edge2 = 10;
    
    var perimeter = null;
    var area = null;

    perimeter = (edge1 + edge2) * 2;
    area = edge1 * edge2;

    console.log("perimeter =", perimeter)
    console.log("area", area)

    /**
 Bai 5
    input: nhập vào 1 số có 2 chữ số 
        numb = 78    
    process: 
       tính số hàng đơn vị bằng cách chia numb cho 10 và lấy số dư,
       tính số hàng chục bằng cách chia numb cho 10 và lấy số nguyên
       lấy tổng của số hàng đơn vị cộng với hàng chục 
        
    out put: tổng của 2 ký số vừa nhập 
 */

    var numb = 78;

    var total = null;

    total = (numb % 10) + Math.floor(numb / 10)

    console.log("total =", total)