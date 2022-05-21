// console.log(mg.document.children)
console.log('========')
console.log('random color start')
// console.log(__html__)

// mg.showUI(__html__)

// console.log('mg', mg)
// console.log('mg.document', mg.document)
// console.log('mg.currentPage', mg.document.currentPage)


if (mg.document.currentPage) {
    console.log('currentPage')
    const { selection } = mg.document.currentPage
    console.log('selection', selection)
    if (selection.length) {
        selection.forEach((node, idx) => {
            // console.log('node', node)
    
            // console.log('mg.createPaintStyle', mg.createPaintStyle)
            // node.x = 0
    
            // console.log('node.fills', node.fills)
            node.fills = [
                {
                    alpha: 1,
                    blendMode: "NORMAL",
                    color: {
                        r: Math.random(),
                        g: Math.random(),
                        b: Math.random(),
                        a: 1,
                    },
                    isVisible: true,
                    type: "SOLID",
                }
            ]
            // 创建一个 Paint 样式
            // const myStyle = mg.createPaintStyle();
            // console.log('myStyle', myStyle)
            // // 设置样式的名称
            // myStyle.name = "styles/fill/foo";
            // console.log('name')
            // // 创建一个纯色填充
            // const paints = [
            //     {
            //         type: "SOLID",
            //         color: {
            //             r: 1,
            //             g: 0,
            //             b: 0,
            //             a: 1,
            //         },
            //         isVisible: true,
            //         alpha: 1,
            //         blendMode: "NORMAL",
            //     },
            // ];
            // console.log('name1')
            // // 将该填充设置到刚刚创建的 Paint 样式上
            // myStyle.paints = paints;
            // console.log('name2')
        
            // // 最后，将刚刚创建的样式的 id 设置图层节点即可
            // console.log('myStyle2', myStyle.id, myStyle)
            // node.fillStyleId = myStyle.id;
            // console.log('name3')
        })
    }
    else {
        mg.notify("请选择图层", {
            type: "highlight",
            position: "bottom",
        });
    }
    // for (let node of selection) {



    // }
    // console.log('mg.selection', mg.document.currentPage.selection)

}
else {
    console.log('no currentPage')
    mg.notify("请选择图层", {
        type: "highlight",
        position: "bottom",
    });
}
// mg.ui.onmessage = (msg) => {
//     // console.log('onmessage', msg)
// }

mg.closePlugin()

console.log('random color end')