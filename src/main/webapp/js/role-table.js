// Khi nào trang html nội dung đã nạp vào trình duyệt
// Thì sẽ chạy code bên trong function
$(document).ready(function () {
    $(".btn-delete-role").click(function () {
        var id = $(this).attr("roleid")
        var This = $(this)
        $.ajax({
            method: "POST",
            url: "http://localhost:8080/demoservlet_cybersoft/role/delete?id=" + id,

        })
            .done(function (result) {
                This.closest("tr").remove()
                console.log("Ket qua", result)
            });
    })

})