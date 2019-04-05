<template>
    <div class="messageBox">
        <h2>{{title}}</h2>
        <p>{{content}}</p>
        <div>
            <div @touchstart="handleCancel">{{cancel}}</div>
            <div @touchstart="handleEnter">{{enter}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MessageBox"
    }
</script>

<style scoped>
.messageBox{width: 240px;height: 130px;border: 1px #ccc solid;border-radius: 4px;background: white;box-shadow: 3px 3px 3px 3px #ccc;position: absolute;left: 50%;top: 50%;margin: -65px 0 0 -120px;}
.messageBox h2{text-align: center;line-height: 40px;font-size: 18px;}
.messageBox p{text-align: center;line-height: 40px;}
.messageBox > div{display: flex;position: absolute;bottom: 0;width: 100%;}
.messageBox > div div{flex: 1;text-align: center;line-height: 40px; border-right: 1px #ccc solid;border-top: 1px #ccc solid;}
.messageBox > div div:last-child{border-right: none;}
</style>