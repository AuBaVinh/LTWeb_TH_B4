function check()
{
    var tdn=f1.TDN.value;
    var mk=f1.MK.value;
    if(tdn=='')
    {
        alert('Tên đăng nhập không được bỏ trống!');
        return false;
    }
    if(mk=='')
    {
        alert('Mật khẩu không được để trống!');
        return false;
    }
    return true;
}