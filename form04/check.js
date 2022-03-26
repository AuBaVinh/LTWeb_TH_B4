function check()
{
    var ht=f4.HoTen.value;
    var ngay=f4.Ngay.value;
    var thang=f4.Thang.value;
    var nam=f4.Nam.value;
    var nn=f4.NgheNghiep.value;
    var ghichu=f4.GhiChu.value;

    if(ht=='')
    {
        alert('Vui lòng nhập đầy đủ thông tin họ tên!');
        return false;
    }
    if(ngay==''||thang==''||nam=='')
    {
        alert('Vui lòng nhập đầy đủ thông tin ngày sinh!');
        return false;
    }
    if(nn=='')
    {
        alert("Vui lòng chọn thông tin nghề nghiệp!");
        return false;
    }
    if(ghichu=='')
    {
        alert('Vui lòng nhập ghi chú!');
        return false;
    }
    return true;
}