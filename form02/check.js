function check()
{
    var ht=f2.Hoten.value;
    var dc=f2.Diachi.value;
    var dt=f2.Dienthoai.value;
    var mail=f2.Mail.value;
    var emRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
	var dtRegExp = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/
    if(ht=='')
    {
        alert('Tên không được bỏ trống!');
        return false;
    }
    if(dc=='')
    {
        alert('Địa chỉ không được để trống!');
        return false;
    }
    if(dt=='')
    {
        alert('Điện thoại không được để trống!');
        return false;
    }
    if(mail=='')
    {
        alert('Mail không được để trống!');
        return false;
    }
    if(!emRegExp.test(mail))
    {
        alert('Mail không được hợp lệ!');
        return false;
    }
    if(!dtRegExp.test(dt    ))
    {
        alert('Điện thoại không được hợp lệ!');
        return false;
    }
    return true;
}