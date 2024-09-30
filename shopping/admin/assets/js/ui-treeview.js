var UITreeview = function () {
    //function to initiate jquery.dynatree
    var runTreeView = function () {
        //Default Tree
        $("#tree").dynatree({
            // using default options
        });
        //Init from JS object 
        $("#tree2").dynatree({
            onActivate: function (node) {
                // A DynaTreeNode object is passed to the activation handler
                // Note: we also get this event, if persistence is on, and the page is reloaded.
                alert("You activated " + node.data.title);
            },
            children: [{
                title: "Item 1"
            }, {
                title: "Folder 2",
                isFolder: true,
                key: "folder2",
                children: [{
                    title: "Sub-item 2.1"
                }, {
                    title: "Sub-item 2.2"
                }]
            }, {
                title: "Item 3"
            }]
        });
  // dữ liệu ngoài
        $("#tree3").dynatree({
            // In real life we would call a URL on the server like this:
            //          initAjax: {
            //              url: "/getTopLevelNodesAsJson",
            //              data: { mode: "funnyMode" }
            //              },
            // .. but here we use a local file instead:
            initAjax: {
                url: "assets/plugins/dynatree/tests/sample-data1.json"
            },
            onActivate: function (node) {
                $("#echoActive").text(node.data.title);
            },
            onDeactivate: function (node) {
                $("#echoActive").text("-");
            }
        });
        var treeData = [{
            title: "item1 with key and tooltip",
            tooltip: "Look, a tool tip!"
        }, {
            title: "item2: selected on init",
        }, {
            title: "Folder",
            isFolder: true,
            key: "id3",
            children: [{
                title: "Sub-item 3.1",
                children: [{
                    title: "Sub-item 3.1.1",
                    key: "id3.1.1"
                }, {
                    title: "Sub-item 3.1.2",
                    key: "id3.1.2"
                }]
            }, {
                title: "Sub-item 3.2",
                children: [{
                    title: "Sub-item 3.2.1",
                    key: "id3.2.1"
                }, {
                    title: "Sub-item 3.2.2",
                    key: "id3.2.2"
                }]
            }]
        }, {
            title: "Document with some children (expanded on init)",
            key: "id4",
            children: [{
                title: "Sub-item 4.1 (active on init)",
                activate: true,
                children: [{
                    title: "Sub-item 4.1.1",
                    key: "id4.1.1"
                }, {
                    title: "Sub-item 4.1.2",
                    key: "id4.1.2"
                }]
            }, {
                title: "Sub-item 4.2 (selected on init)",
                select: true,
                children: [{
                    title: "Sub-item 4.2.1",
                    key: "id4.2.1"
                }, {
                    title: "Sub-item 4.2.2",
                    key: "id4.2.2"
                }]
            }, {
                title: "Sub-item 4.3 (hideCheckbox)",
                hideCheckbox: true
            }, {
                title: "Sub-item 4.4 (unselectable)",
                unselectable: true
            }]
        }];
        //Checkbox
        $("#tree4").dynatree({
            checkbox: true,
          // Ghi đè tên lớp cho biểu tượng hộp kiểm:
            classNames: {
                checkbox: "dynatree-radio"
            },
            selectMode: 1,
            children: treeData,
            onActivate: function (node) {
                $("#echoActive1").text(node.data.title);
            },
            onSelect: function (select, node) {
                // Hiển thị danh sách các nút đã chọn
                var s = node.tree.getSelectedNodes().join(", ");
                $("#echoSelection1").text(s);
            },
            onDblClick: function (node, event) {
                node.toggleSelect();
            },
            onKeydown: function (node, event) {
                if (event.which == 32) {
                    node.toggleSelect();
                    return false;
                }
            },
            // Các tùy chọn sau chỉ được yêu cầu nếu chúng ta có nhiều hơn một cây trên một trang: 
            // initId: "treeData",
            cookieId: "dynatree-Cb1",
            idPrefix: "dynatree-Cb1-"
        });
        //Đa lựa chọn
        $("#tree5").dynatree({
            checkbox: true,
            selectMode: 2,
            children: treeData,
            onSelect: function (select, node) {
                // Display list of selected nodes
                var selNodes = node.tree.getSelectedNodes();
                // convert to title/key array
                var selKeys = $.map(selNodes, function (node) {
                    return "[" + node.data.key + "]: '" + node.data.title + "'";
                });
                $("#echoSelection3").text(selKeys.join(", "));
            },
            onClick: function (node, event) {
                // Chúng ta không nên chuyển đổi nếu mục tiêu là "hộp kiểm", bởi vì điều này
                // sẽ dẫn đến chuyển đổi kép (tức là không chuyển đổi)
                if (node.getEventTargetType(event) == "title")
                    node.toggleSelect();
            },
            onKeydown: function (node, event) {
                if (event.which == 32) {
                    node.toggleSelect();
                    return false;
                }
            },
            // Các tùy chọn sau chỉ được yêu cầu nếu chúng ta có nhiều hơn một cây trên một trang:
            cookieId: "dynatree-Cb2",
            idPrefix: "dynatree-Cb2-"
        });
        // Kéo và thả
        $("#tree6").dynatree({
            initAjax: {
                url: "assets/plugins/dynatree/tests/sample-data1.json"
            },
            onLazyRead: function (node) {
                // Mockup a slow reqeuest ...
                node.appendAjax({
                    url: "sample-data2.json",
                    debugLazyDelay: 750 // don't do this in production code
                });
            },
            dnd: {
                preventVoidMoves: true, // Prevent dropping nodes 'before self', etc.
                onDragStart: function (node) {
                    /** Hàm này PHẢI được xác định để có thể kéo cây.
                      * Trả về false để hủy việc kéo nút.
                      */
                    return true;
                },
                onDragEnter: function (node, sourceNode) {
                    /** sourceNode có thể rỗng đối với các phần tử có thể phân tách không phải dynatree.
                      * Trả về false để không cho phép thả trên nút. Trong trường hợp này
                      * onDragOver và onDragLeave không được gọi.
                      * Trả về 'trên', 'trước hoặc 'sau' để buộc hitMode.
                      * Trả về ['trước', 'sau'] để hạn chế các HitMode có sẵn.
                      * Bất kỳ giá trị trả về nào khác sẽ tính toán hitMode từ vị trí con trỏ.
                      */
                     // Ngăn chặn việc bỏ cha mẹ xuống dưới cha mẹ khác (chỉ sắp xếp
                     // các nút dưới cùng một nút cha)
                    if (node.parent !== sourceNode.parent) {
                        return false;
                    }
                    // Không cho phép thả *qua* một nút (sẽ tạo ra một nút con)
                    return ["before", "after"];
                },
                onDrop: function (node, sourceNode, hitMode, ui, draggable) {
                    /** Hàm này PHẢI được xác định để cho phép thả các mục vào
                      *  cái cây.
                      */
                    sourceNode.move(node, hitMode);
                }
            }
        });
    };
    return {
     //chức năng chính để khởi tạo các trang mẫu
        init: function () {
            runTreeView();
        }
    };
}();