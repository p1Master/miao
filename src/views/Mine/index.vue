<template>
    <div id="main">
        <Header title="我的喵喵" />
        <div id="content">
            <Login />
        </div>
        <TabBar />
    </div>
</template>

<script>
    import Header from '@/components/header';
    import TabBar from '@/components/tabbar';
    import Login from '@/components/login';

    export default {
        name: "Mine",
        components:{
            Header,
            TabBar,
            Login
        }
    }
</script>

<style>

</style>