const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"实验室","menuJump":"列表","tableName":"shiyanshi"}],"menu":"实验室管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["查看","删除","审核"],"menu":"实验室申请","menuJump":"列表","tableName":"shiyanshishenqing"}],"menu":"实验室申请管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"设备","menuJump":"列表","tableName":"shebei"}],"menu":"设备管理"},{"child":[{"buttons":["查看","修改","审核"],"menu":"设备报备","menuJump":"列表","tableName":"shebeibaobei"}],"menu":"设备报备管理"},{"child":[{"buttons":["查看","修改","审核"],"menu":"设备申请","menuJump":"列表","tableName":"shebeishenqing"}],"menu":"设备申请管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"消耗品","menuJump":"列表","tableName":"xiaohaopin"}],"menu":"消耗品管理"},{"child":[{"buttons":["查看","删除","审核"],"menu":"消耗品领取","menuJump":"列表","tableName":"xiaohaopinlingqu"}],"menu":"消耗品领取管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"论坛管理","tableName":"forum"}],"menu":"论坛管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"新闻资讯","tableName":"news"},{"buttons":["新增","查看","修改","删除"],"menu":"客服管理","tableName":"kefuguanli"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","申请"],"menu":"实验室列表","menuJump":"列表","tableName":"shiyanshi"}],"menu":"实验室模块"},{"child":[{"buttons":["查看","报备","申请"],"menu":"设备列表","menuJump":"列表","tableName":"shebei"}],"menu":"设备模块"},{"child":[{"buttons":["查看","领取"],"menu":"消耗品列表","menuJump":"列表","tableName":"xiaohaopin"}],"menu":"消耗品模块"}],"roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","修改","删除"],"menu":"实验室申请","menuJump":"列表","tableName":"shiyanshishenqing"}],"menu":"实验室申请管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"设备报备","menuJump":"列表","tableName":"shebeibaobei"}],"menu":"设备报备管理"},{"child":[{"buttons":["查看","删除","修改"],"menu":"设备申请","menuJump":"列表","tableName":"shebeishenqing"}],"menu":"设备申请管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"消耗品领取","menuJump":"列表","tableName":"xiaohaopinlingqu"}],"menu":"消耗品领取管理"}],"frontMenu":[{"child":[{"buttons":["查看","申请"],"menu":"实验室列表","menuJump":"列表","tableName":"shiyanshi"}],"menu":"实验室模块"},{"child":[{"buttons":["查看","报备","申请"],"menu":"设备列表","menuJump":"列表","tableName":"shebei"}],"menu":"设备模块"},{"child":[{"buttons":["查看","领取"],"menu":"消耗品列表","menuJump":"列表","tableName":"xiaohaopin"}],"menu":"消耗品模块"}],"roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;
