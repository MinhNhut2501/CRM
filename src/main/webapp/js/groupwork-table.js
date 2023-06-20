// Khi nào trang html nội dung đã nạp vào trình duyệt
// Thì sẽ chạy code bên trong function
$(document).ready(function () {
    $(".btn-group-xoa").click(function () {
        var id = $(this).attr("groupid")
        var This = $(this)
        $.ajax({
            method: "POST",
            url: "http://localhost:8080/demoservlet_cybersoft/groupwork/delete?id=" + id,

        })
            .done(function (result) {
                This.closest("tr").remove()
                console.log("Ket qua", result)
            });
    })

})